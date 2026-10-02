import type { IncomingMessage, ServerResponse } from 'http';
import tls from 'tls';

const FASTMAIL_SMTP_HOST = 'smtp.fastmail.com';
const FASTMAIL_SMTP_PORT = 465;
const FASTMAIL_USER = process.env.FASTMAIL_USER || 'mail@wisemind.com';
const FASTMAIL_APP_PASSWORD =
  process.env.FASTMAIL_APP_PASSWORD || '9g8q47573p666g77';
const JOIN_RECIPIENT_EMAIL =
  process.env.JOIN_RECIPIENT_EMAIL || 'JSEKOAdmin@pm.me';

function sendFastmailSmtpEmail(subscriberEmail: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const cleanSubscriber = subscriberEmail.replace(/[\r\n<>]/g, '').trim();
    const boundary = `jseko_boundary_${Date.now().toString(36)}`;
    const messageId = `<${Date.now()}.${Math.random().toString(36).slice(2)}@wisemind.com>`;
    const dateHeader = new Date().toUTCString();
    const subject = `JSEKO.com Website - New Join Request (${cleanSubscriber})`;

    const plainText = [
      'From the JSEKO.com website',
      '',
      `Subscriber Email: ${cleanSubscriber}`,
      '',
      `This request was sent from the JSEKO.com website. Please include ${cleanSubscriber} to receive JSEKO.com updates and notifications when new international businesses become available.`,
    ].join('\r\n');

    const htmlBody = [
      '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #1c1917; max-width: 560px; line-height: 1.6;">',
      '  <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #0f766e; font-weight: 600; margin: 0 0 8px;">From the JSEKO.com website</p>',
      '  <h2 style="font-size: 20px; margin: 0 0 16px; color: #1c1917;">New Join for Updates Request</h2>',
      '  <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; background: #f8f7f4; border: 1px solid #e5e3dc; border-radius: 8px;">',
      '    <tr>',
      '      <td style="padding: 12px 16px; font-size: 13px; color: #57534e; width: 140px; font-weight: 600;">Source</td>',
      '      <td style="padding: 12px 16px; font-size: 14px; color: #1c1917;">From the JSEKO.com website</td>',
      '    </tr>',
      '    <tr>',
      '      <td style="padding: 12px 16px; font-size: 13px; color: #57534e; border-top: 1px solid #e5e3dc; font-weight: 600;">Subscriber Email</td>',
      `      <td style="padding: 12px 16px; font-size: 14px; color: #0f766e; border-top: 1px solid #e5e3dc; font-weight: 600;"><a href="mailto:${cleanSubscriber}" style="color: #0f766e; text-decoration: none;">${cleanSubscriber}</a></td>`,
      '    </tr>',
      '  </table>',
      '  <p style="font-size: 14px; color: #44403c; margin: 0;">',
      `    This request was sent from the <strong>JSEKO.com</strong> website. Please include <strong>${cleanSubscriber}</strong> to receive JSEKO.com updates and notifications when new international businesses become available.`,
      '  </p>',
      '</div>',
    ].join('\r\n');

    const rawMimeMessage = [
      `From: "JSEKO.com Website" <${FASTMAIL_USER}>`,
      `To: <${JOIN_RECIPIENT_EMAIL}>`,
      `Reply-To: <${cleanSubscriber}>`,
      `Subject: ${subject}`,
      `Date: ${dateHeader}`,
      `Message-ID: ${messageId}`,
      'MIME-Version: 1.0',
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      'Content-Type: text/plain; charset="UTF-8"',
      'Content-Transfer-Encoding: 7bit',
      '',
      plainText,
      '',
      `--${boundary}`,
      'Content-Type: text/html; charset="UTF-8"',
      'Content-Transfer-Encoding: 7bit',
      '',
      htmlBody,
      '',
      `--${boundary}--`,
      '.',
      '',
    ].join('\r\n');

    const socket = tls.connect({
      host: FASTMAIL_SMTP_HOST,
      port: FASTMAIL_SMTP_PORT,
      servername: FASTMAIL_SMTP_HOST,
      timeout: 15000,
    });

    socket.setEncoding('utf8');

    let step = 0;
    let buffer = '';
    let settled = false;

    const finish = (err?: Error) => {
      if (settled) return;
      settled = true;
      try {
        socket.destroy();
      } catch {
        // ignore
      }
      if (err) reject(err);
      else resolve();
    };

    socket.on('timeout', () => {
      finish(new Error('Fastmail SMTP connection timed out'));
    });

    socket.on('error', (err) => {
      finish(err);
    });

    socket.on('data', (chunk: string) => {
      buffer += chunk;
      const lines = buffer.split('\r\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line) continue;
        if (line.length >= 4 && line[3] === '-') {
          continue;
        }

        const code = parseInt(line.slice(0, 3), 10);

        if (step === 0) {
          if (code !== 220) {
            return finish(new Error(`SMTP greeting error: ${line}`));
          }
          step = 1;
          socket.write('EHLO jseko.com\r\n');
        } else if (step === 1) {
          if (code !== 250) {
            return finish(new Error(`SMTP EHLO error: ${line}`));
          }
          step = 2;
          const authToken = Buffer.from(
            `\0${FASTMAIL_USER}\0${FASTMAIL_APP_PASSWORD}`,
            'utf8'
          ).toString('base64');
          socket.write(`AUTH PLAIN ${authToken}\r\n`);
        } else if (step === 2) {
          if (code !== 235) {
            return finish(new Error(`SMTP AUTH error: ${line}`));
          }
          step = 3;
          socket.write(`MAIL FROM:<${FASTMAIL_USER}>\r\n`);
        } else if (step === 3) {
          if (code !== 250) {
            return finish(new Error(`SMTP MAIL FROM error: ${line}`));
          }
          step = 4;
          socket.write(`RCPT TO:<${JOIN_RECIPIENT_EMAIL}>\r\n`);
        } else if (step === 4) {
          if (code !== 250 && code !== 251) {
            return finish(new Error(`SMTP RCPT TO error: ${line}`));
          }
          step = 5;
          socket.write('DATA\r\n');
        } else if (step === 5) {
          if (code !== 354) {
            return finish(new Error(`SMTP DATA error: ${line}`));
          }
          step = 6;
          socket.write(rawMimeMessage);
        } else if (step === 6) {
          if (code !== 250) {
            return finish(new Error(`SMTP message rejected: ${line}`));
          }
          step = 7;
          socket.write('QUIT\r\n');
          return finish();
        }
      }
    });
  });
}

export default async function handler(
  req: IncomingMessage & { body?: { email?: string } | string },
  res: ServerResponse
) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
    return;
  }

  try {
    let parsed: { email?: string } = {};
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

    const subscriberEmail =
      typeof parsed.email === 'string' ? parsed.email.trim() : '';

    if (!subscriberEmail) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: false, error: 'Missing email' }));
      return;
    }

    await sendFastmailSmtpEmail(subscriberEmail);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
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
