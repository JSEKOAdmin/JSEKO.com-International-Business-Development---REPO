import React, { useState, useEffect } from 'react';
import Cal from '@calcom/embed-react';
import {
  ArrowLeft,
  X,
  BadgeCheck,
  ShieldCheck,
} from 'lucide-react';
import { SiteContent } from '../types';

interface PricingPageProps {
  onOpenConsultation?: () => void;
  onOpenTerms?: () => void;
  onOpenHowWeCommunicate?: () => void;
  onOpenAbout?: () => void;
  onBackHome: () => void;
  content?: SiteContent['pricing'];
}

type TierId = 'intro';

interface Tier {
  id: TierId;
  topLabel: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  accent: boolean;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onBackHome,
  onOpenTerms,
  onOpenHowWeCommunicate,
  onOpenAbout,
  content,
}) => {
  const [selectedTier, setSelectedTier] =
    useState<TierId | null>(null);

  // Ensure user always starts at the top of the pricing page on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  /*
   * Used to force a fresh Cal.com embed whenever the
   * introductory session modal is opened.
   *
   * This prevents React from reusing a previously mounted
   * Cal.com iframe/embed instance.
   */
  const [calInstanceKey, setCalInstanceKey] = useState(0);

  const headerEyebrow = content?.headerEyebrow || 'JSEKO.COM · INTERNATIONAL BUSINESS DEVELOPMENT';
  const headerTitle = content?.headerTitle || 'Confidential Conversation';
  const headerSubtitle = content?.headerSubtitle ||
    `You are booking a confidential, practical conversation about a business you’ve selected - how it fits your goals, which markets it can reach, and what it will take for you to run it well.

If you’re dealing with pressure, scrutiny or changing rules where you live, or just want a more secure business, it makes more sense to put your energy into building a business structure that is difficult to interfere with, easy to move, and doesn’t depend on a single jurisdiction.

Instead of investing your time and energy into a business that is vulnerable and could be taken from you, you can use that energy to develop something more sovereign: a global online business that does not depend on where you live and can continue to provide income when your personal circumstances change.

To see how JSEKO.com International Business Development could play that role, or to explore a custom cross‑border structure, book a 20‑minute conversation.`;

  const tiers: Tier[] = [
    {
      id: 'intro',
      topLabel: content?.tier1TopLabel || '20 MINUTES',
      name: content?.tier1Name || 'Introductory Session',
      price: content?.tier1Price || 'US$75',
      description:
        content?.tier1Description ||
        'Align your vision, explore secure cross-border alternatives, and build a resilient global business to protect your future and achieve true financial Freedom.',
      features: ['This payment is non-refundable. Payments are securely processed by JSEKMarketing.com.'],
      buttonLabel: content?.tier1ButtonLabel || 'Book & Pay',
      accent: true,
    },
  ];

  const activeTier = tiers.find(
    (tier) => tier.id === selectedTier
  );

  /*
   * Open the introductory modal and force Cal.com
   * to create a fresh instance.
   */
  const openIntroModal = () => {
    setCalInstanceKey((current) => current + 1);
    setSelectedTier('intro');
  };

  const closeModal = () => {
    setSelectedTier(null);
  };

  return (
    <>
      {/* =========================================================
          PRICING PAGE
      ========================================================= */}

      <section className="relative pt-32 pb-20 md:pt-20 md:pb-28 overflow-hidden min-h-screen bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              BACK
          ===================================================== */}

          <div className="mb-8 flex justify-start">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </button>
          </div>

          

          {/* =====================================================
              INTRO
          ===================================================== */}

          <div className="max-w-3xl space-y-5">

            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[var(--color-primary)] inline-block shrink-0" />

              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {headerEyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.05]">
              {headerTitle}
            </h1>

            <div className="text-base sm:text-m text-[var(--color-text-muted)] leading-relaxed max-w-none whitespace-pre-line">
              {headerSubtitle}
            </div>



          </div>

          {/* =====================================================
              PRICING
          ===================================================== */}

          <div className="mt-8 max-w-xl mx-auto lg:mt-12">

            {tiers.map((tier, index) => (
              <div
                key={`${tier.name}-${index}`}
                className={`flex h-full flex-col rounded-[32px] border p-8 sm:p-10 ${
                  tier.accent
                    ? 'bg-[var(--color-surface)] border-[var(--color-primary)]/40 shadow-xl'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)]'
                }`}
              >

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col">

                  <div className="space-y-4">

                    {/* TOP LABEL */}

                    <div className="flex min-h-[32px] flex-wrap items-center gap-3">

                      <span className="text-[16px] font-mono font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                        {tier.topLabel}
                      </span>

                      {tier.accent && (
                        <span className="inline-flex items-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
                          Start Here
                        </span>
                      )}

                    </div>

                    {/* NAME */}

                    <div className="min-h-[28px] text-lg font-semibold text-[var(--color-text)]">
                      {tier.name}
                    </div>

                    {/* PRICE */}

                    <div className="min-h-[72px] font-serif text-5xl md:text-6xl text-[var(--color-primary)] tracking-tight">
                      {tier.price}
                    </div>

                    {/* DESCRIPTION */}

                    <div className="min-h-[128px]">
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {tier.description}
                      </p>
                    </div>

                  </div>

                  {/* =================================================
                      VALIDITY / FEATURES
                  ================================================= */}

                  <div className="min-h-[36px] mt-2">

                    {tier.features.length > 0 && (
                      <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">

                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 leading-relaxed"
                          >
                            <BadgeCheck className="w-4 h-4 mt-0.5 text-[var(--color-primary)] flex-shrink-0" />

                            <span>{feature}</span>

                            
                          </li>
                        ))}
<br></br>
                      </ul>
                    )}

                  </div>

                </div>

                {/* =================================================
                    BUTTON — ALWAYS ALIGNED
                ================================================= */}

                <div className="mt-2">

                  {tier.id === 'intro' ? (
                    <button
                      onClick={openIntroModal}
                      className="w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all border border-[var(--color-primary)]/30 bg-[var(--color-primary)] text-white shadow-lg hover:brightness-95 cursor-pointer"
                    >
                      {tier.buttonLabel}
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] border border-[var(--color-primary)]/30 bg-transparent text-[var(--color-primary)] opacity-60 cursor-not-allowed"
                    >
                      {tier.buttonLabel}
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>

          {/* =====================================================
              DISCLAIMER
          ===================================================== */}

          <div className="mt-10 text-center">

            <p className="text-sm text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Our conversations are educational and confidential. They do not
              constitute legal, tax, investment, or financial advice.
            </p>
            {onOpenTerms && (
              <div className="mt-3">
                <button
                  onClick={onOpenTerms}
                  className="text-xs font-mono text-[var(--color-primary)] hover:underline underline-offset-4 cursor-pointer transition-colors"
                >
                  View Terms & Conditions →
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* =========================================================
          CAL.COM BOOK & PAY MODAL — US$75
      ========================================================= */}

      {activeTier?.id === 'intro' && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="introductory-session-modal-title"
        >

          {/* =====================================================
              BACKDROP
          ===================================================== */}

          <button
            aria-label="Close"
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
          />

          {/* =====================================================
              MODAL
          ===================================================== */}

          <div className="relative flex h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">

            {/* ===================================================
                HEADER
            =================================================== */}

            <div className="relative z-20 flex shrink-0 items-start justify-between gap-5 border-b border-[var(--color-divider)] bg-[var(--color-surface)] px-5 py-4 sm:px-7 sm:py-5">

              <div>

                <div className="mb-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
                  BOOK & PAY
                </div>

                <h2
                  id="introductory-session-modal-title"
                  className="font-serif text-2xl sm:text-3xl text-[var(--color-text)] leading-tight"
                >
                  Introductory Session
                </h2>

                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  20 minutes · US$75
                </p>

              </div>

              {/* =================================================
                  CLOSE
              ================================================= */}

              <button
                onClick={closeModal}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-text)] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* ===================================================
                SCROLLABLE CONTENT
            =================================================== */}

            <div className="min-h-0 flex-1 overflow-y-auto">

              <div className="px-3 py-3 sm:px-5 sm:py-5">

                {/* =================================================
                    CAL.COM BOOKING
                ================================================= */}

                <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">

                  <Cal
                    key={calInstanceKey}
                    calLink="jsek-marketing-llc/introductory-session-jseko"
                    style={{
                      width: '100%',
                      height: '700px',
                      overflow: 'auto',
                    }}
                    config={{
                      layout: 'month_view',
                      theme: 'dark',
                    }}
                  />

                </div>

                {/* =================================================
                    IMPORTANT NOTICE — BOTTOM
                ================================================= */}

                <div className="mt-4 rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-4 sm:p-5">

                  <div className="flex items-start gap-3">

                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" />

                    <div className="text-sm leading-relaxed text-[var(--color-text-muted)]">

                      <p>
                        Please provide only the information necessary to
                        arrange your introductory session.
                      </p>

                      <p className="mt-3 font-semibold text-[var(--color-text)]">
                        Your appointment is not confirmed automatically.
                      </p>

                      <p className="mt-1">
                        The requested time remains pending until it has been
                        reviewed and confirmed privately.
                      </p>

                      {onOpenTerms && (
                        <p className="mt-3 text-xs text-[var(--color-text-faint)]">
                          All sessions and advisory engagements are subject to our{' '}
                          <button
                            type="button"
                            onClick={() => {
                              closeModal();
                              onOpenTerms();
                            }}
                            className="underline text-[var(--color-primary)] hover:opacity-80 cursor-pointer"
                          >
                            Terms and Conditions and Privacy Policy
                          </button>
                          .
                        </p>
                      )}

                    </div>

                  </div>

                </div>

                {/* =================================================
                    BOTTOM SPACING
                ================================================= */}

                <div className="h-2" />

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};
