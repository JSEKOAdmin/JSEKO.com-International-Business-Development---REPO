import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(
  req: IncomingMessage & { body?: { uid?: string } | string },
  res: ServerResponse
) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
    return;
  }

  try {
    let parsed: { uid?: string } = {};
    if (req.body && typeof req.body === 'object') {
      parsed = req.body;
    } else if (typeof req.body === 'string' && req.body) {
      parsed = JSON.parse(req.body);
    } else {
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      const bodyStr = Buffer.concat(chunks).toString('utf8');
      parsed = bodyStr ? JSON.parse(bodyStr) : {};
    }

    const uid = typeof parsed.uid === 'string' ? parsed.uid.trim() : '';

    if (!uid) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: false, error: 'Missing booking uid' }));
      return;
    }

    // 1. Check the booking page on Cal.com first to make sure we NEVER cancel a booking that was paid
    try {
      const bookingPageRes = await fetch(
        `https://cal.com/booking/${encodeURIComponent(uid)}`,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0',
            Accept: 'text/html,application/xhtml+xml',
          },
          redirect: 'follow',
        }
      );

      if (bookingPageRes.ok) {
        const html = await bookingPageRes.text();
        const hasPaidTrue =
          html.includes('"paid":true') && !html.includes('"paid":false');
        if (hasPaidTrue) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              ok: true,
              cancelled: false,
              paid: true,
            })
          );
          return;
        }
      }
    } catch {
      // Proceed to cancel unpaid booking if lookup fails
    }

    // 2. Fetch CSRF token + cookie from Cal.com
    const csrfRes = await fetch('https://cal.com/api/csrf', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'application/json',
      },
    });

    const csrfData = (await csrfRes.json()) as { csrfToken?: string };
    const csrfToken = csrfData?.csrfToken || '';

    const rawCookies: string[] =
      typeof (csrfRes.headers as unknown as { getSetCookie?: () => string[] })
        .getSetCookie === 'function'
        ? (
            csrfRes.headers as unknown as { getSetCookie: () => string[] }
          ).getSetCookie()
        : [csrfRes.headers.get('set-cookie') || ''].filter(Boolean);

    const cookieHeader = rawCookies
      .map((c) => c.split(';')[0])
      .filter(Boolean)
      .join('; ');

    // 3. Call Cal.com's /api/cancel endpoint to cancel the unpaid Pending payment booking
    const cancelRes = await fetch('https://cal.com/api/cancel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        Cookie:
          cookieHeader || `calcom.csrf_token=${encodeURIComponent(csrfToken)}`,
        Origin: 'https://cal.com',
        Referer: `https://cal.com/booking/${encodeURIComponent(uid)}`,
      },
      body: JSON.stringify({
        uid,
        cancellationReason:
          'Cancelled on payment page before completing payment',
        csrfToken,
      }),
    });

    const cancelText = await cancelRes.text();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        ok: cancelRes.ok,
        cancelled: true,
        paid: false,
        status: cancelRes.status,
        details: cancelText.slice(0, 300),
      })
    );
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        ok: false,
        error: err instanceof Error ? err.message : 'Unknown error',
      })
    );
  }
}
