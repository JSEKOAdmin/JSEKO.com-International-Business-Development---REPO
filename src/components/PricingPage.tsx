import React, { useState, useEffect } from 'react';
import Cal from '@calcom/embed-react';
import {
  ArrowLeft,
  X,
  BadgeCheck,
  ShieldCheck,
  ExternalLink,
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
  const headerTitle = content?.headerTitle || 'Conversation';

  const tiers: Tier[] = [
    {
      id: 'intro',
      topLabel: content?.tier1TopLabel || '',
      name: content?.tier1Name || '20-minute Conversation',
      price: content?.tier1Price || 'US$75',
      description:
        content?.tier1Description ||
        "Own a business that moves with you. Operate beyond local rules and single-jurisdiction risk. Start with a confidential 20-minute conversation about what's possible.",
      features: ['This payment is non-refundable.'],
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

            <div className="text-base sm:text-m text-[var(--color-text-muted)] leading-relaxed max-w-none space-y-4">
              {content?.headerSubtitle ? (
                <div className="whitespace-pre-line">{content.headerSubtitle}</div>
              ) : (
                <>
                  <p>
                    You are booking a confidential, practical conversation about a business you've selected—how it fits your goals, which markets you can reach, and what's required to operate it effectively.
                  </p>
                  <p>
                    Local risks demand global solutions. A jurisdiction-independent business moves with you, operates beyond the reach of any single regulator, and survives personal upheaval. You're not trapped. You're portable.
                  </p>
                  <p className="font-bold text-[var(--color-text)]">
                    Book your 20-minute conversation for US$75.
                  </p>
                </>
              )}
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
                    {tier.topLabel ? (
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[16px] font-mono font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                          {tier.topLabel}
                        </span>
                      </div>
                    ) : null}

                    {/* NAME */}
                    <div className="text-xl font-semibold text-[var(--color-text)]">
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

          {/* =====================================================
              SOCIAL LINKS — GET THE FEELING OF FREEDOM
          ===================================================== */}

          <div className="mt-12 max-w-xl mx-auto text-center">
            <h3 className="font-display text-lg sm:text-xl font-medium tracking-tight text-[var(--color-text)] mb-4">
              Get the Feeling of Freedom
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61594348593994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-xs sm:text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://www.tiktok.com/@jsek.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-xs sm:text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span>TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
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
          aria-labelledby="conversation-modal-title"
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
                  id="conversation-modal-title"
                  className="font-serif text-2xl sm:text-3xl text-[var(--color-text)] leading-tight"
                >
                  20-minute Conversation
                </h2>

                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  US$75
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
                        arrange your conversation.
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
