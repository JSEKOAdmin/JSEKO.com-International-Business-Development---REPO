import React, { useState, useEffect } from 'react';
import Cal from '@calcom/embed-react';
import {
  ArrowLeft,
  X,
  BadgeCheck,
  ShieldCheck,
  ExternalLink,
  UserCheck,
  Check,
  Calendar,
} from 'lucide-react';
import {
  SiteContent,
  ConsultantName,
  ConsultantProfile,
  BookingMetadata,
} from '../types';

export const CONSULTANTS: ConsultantProfile[] = [
  {
    id: 'Gary',
    name: 'Gary',
    calLink: 'jsek-marketing-llc/20-minute-conversation-with-gary',
    eventTypeId: 7294165,
  },
  {
    id: 'Richard',
    name: 'Richard',
    calLink: 'jsek-marketing-llc/20-minute-conversation-with-richard',
    eventTypeId: 7294180,
  },
  {
    id: 'Dave',
    name: 'Dave',
    calLink: 'jsek-marketing-llc/20-minute-conversation-with-dave',
    eventTypeId: 7294189,
  },
  {
    id: 'Axcel',
    name: 'Axcel',
    calLink: 'jsek-marketing-llc/20-minute-conversation-with-axcel',
    eventTypeId: 7294473,
  },
];

/**
 * Queries Cal.com's real-time, conflict-tested schedule API (/api/trpc/slots/getSchedule)
 * for the upcoming 7 days for a consultant's eventTypeId.
 */
async function fetchConsultantAvailableSlotCount(
  consultant: ConsultantProfile
): Promise<number | null> {
  try {
    const [username, eventTypeSlug] = consultant.calLink.split('/');
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + 7);

    const inputPayload = {
      json: {
        isTeamEvent: false,
        usernameList: [username],
        eventTypeSlug,
        eventTypeId: consultant.eventTypeId,
        startTime: start.toISOString(),
        endTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      },
    };

    const url = `/api/cal-trpc/slots/getSchedule?input=${encodeURIComponent(
      JSON.stringify(inputPayload)
    )}`;

    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const slotsMap = data?.result?.data?.json?.slots;
      if (slotsMap && typeof slotsMap === 'object') {
        let count = 0;
        for (const daySlots of Object.values(slotsMap)) {
          if (Array.isArray(daySlots)) {
            count += daySlots.length;
          }
        }
        return count;
      }
    }
  } catch {
    // Ignore transient network errors
  }

  return null;
}

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
  content,
}) => {
  const [selectedTier, setSelectedTier] = useState<TierId | null>(null);
  const [selectedConsultant, setSelectedConsultant] =
    useState<ConsultantName>('Gary');
  const [slotCounts, setSlotCounts] = useState<
    Record<ConsultantName, number | null>
  >({
    Gary: null,
    Richard: null,
    Dave: null,
    Axcel: null,
  });
  const [isLoadingCounts, setIsLoadingCounts] = useState<boolean>(true);

  const activeConsultant =
    CONSULTANTS.find((c) => c.id === selectedConsultant) || CONSULTANTS[0];

  const activeAvailableSlots = slotCounts[activeConsultant.id];

  const bookingMetadata: BookingMetadata = {
    consultant: activeConsultant.name,
    assignedConsultant: activeConsultant.name,
    calLink: activeConsultant.calLink,
    sessionType: '20-minute Conversation',
    price: 'US$75',
  };

  // Ensure user always starts at the top of the pricing page on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Load real, conflict-tested available slot counts from Cal.com for each consultant
  useEffect(() => {
    let isMounted = true;
    setIsLoadingCounts(true);
    Promise.all(
      CONSULTANTS.map(async (consultant) => {
        const count = await fetchConsultantAvailableSlotCount(consultant);
        return [consultant.id, count] as const;
      })
    )
      .then((entries) => {
        if (!isMounted) return;
        const updated: Record<ConsultantName, number | null> = {
          Gary: null,
          Richard: null,
          Dave: null,
          Axcel: null,
        };
        for (const [id, count] of entries) {
          updated[id] = count;
        }
        setSlotCounts(updated);
      })
      .finally(() => {
        if (isMounted) setIsLoadingCounts(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  /*
   * Forces a fresh Cal.com embed whenever the modal is opened
   * or the user switches consultants.
   */
  const [calInstanceKey, setCalInstanceKey] = useState(0);

  const headerEyebrow =
    content?.headerEyebrow || 'JSEKO.COM · INTERNATIONAL BUSINESS DEVELOPMENT';
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
      features: [
        'Please double-check your timezone when selecting your time slot.',
        'This payment is non-refundable.',
      ],
      buttonLabel: content?.tier1ButtonLabel || 'Book & Pay',
      accent: true,
    },
  ];

  const activeTier = tiers.find((tier) => tier.id === selectedTier);

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

      <section className="relative pt-24 pb-16 sm:pt-28 md:pt-20 md:pb-28 overflow-hidden min-h-screen bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              BACK
          ===================================================== */}

          <div className="mb-5 sm:mb-8 flex justify-start">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 py-2 pr-3 text-xs font-mono font-medium uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-primary)] active:opacity-80 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Return to Home</span>
            </button>
          </div>

          {/* =====================================================
              INTRO
          ===================================================== */}

          <div className="max-w-3xl space-y-4 sm:space-y-5">

            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-10 h-[1.5px] bg-[var(--color-primary)] inline-block shrink-0" />

              <span className="text-[11px] sm:text-sm font-sans font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[var(--color-primary)] leading-snug">
                {headerEyebrow}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.08]">
              {headerTitle}
            </h1>

            <div className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-none space-y-3.5 sm:space-y-4">
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
              PRICING CARD (MOBILE-FIRST)
          ===================================================== */}

          <div className="mt-7 sm:mt-10 max-w-xl mx-auto lg:mt-12">

            {tiers.map((tier, index) => (
              <div
                key={`${tier.name}-${index}`}
                className={`flex h-full flex-col rounded-2xl sm:rounded-[32px] border p-5 sm:p-8 md:p-10 ${
                  tier.accent
                    ? 'bg-[var(--color-surface)] border-[var(--color-primary)]/40 shadow-xl'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)]'
                }`}
              >

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col">

                  <div className="space-y-3.5 sm:space-y-4">

                    {/* TOP LABEL */}
                    {tier.topLabel ? (
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm sm:text-[16px] font-mono font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[var(--color-primary)]">
                          {tier.topLabel}
                        </span>
                      </div>
                    ) : null}

                    {/* NAME */}
                    <div className="text-lg sm:text-xl font-semibold text-[var(--color-text)]">
                      {tier.name}
                    </div>

                    {/* PRICE */}
                    <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-primary)] tracking-tight leading-none py-1">
                      {tier.price}
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {tier.description}
                      </p>
                    </div>

                    {/* CONSULTANT SELECTION — MOBILE THUMB TARGETS */}
                    <div className="pt-3.5 border-t border-[var(--color-divider)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
                          <UserCheck className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                          <span>Select Consultant</span>
                        </label>
                        <span className="text-xs font-semibold text-[var(--color-primary)]">
                          Selected: {selectedConsultant}
                        </span>
                      </div>

                      <div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5"
                        role="radiogroup"
                        aria-label="Select Consultant"
                      >
                        {CONSULTANTS.map((consultant) => {
                          const isSelected = selectedConsultant === consultant.id;
                          const count = slotCounts[consultant.id];
                          return (
                            <button
                              key={consultant.id}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => setSelectedConsultant(consultant.id)}
                              className={`min-h-[52px] flex flex-col items-center justify-center px-2.5 py-2 rounded-xl border transition-all active:scale-[0.98] cursor-pointer ${
                                isSelected
                                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                                  : 'bg-[var(--color-surface-offset)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-primary)]/60 hover:text-[var(--color-primary)]'
                              }`}
                            >
                              <span className="flex items-center gap-1 text-sm font-semibold leading-tight">
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                                <span className="truncate">{consultant.name}</span>
                              </span>
                              <span
                                className={`mt-0.5 text-[10px] font-mono ${
                                  isSelected
                                    ? 'text-white/85'
                                    : 'text-[var(--color-text-muted)]'
                                }`}
                              >
                                {isLoadingCounts
                                  ? 'Checking...'
                                  : count !== null
                                  ? `${count} slots (7d)`
                                  : 'Live calendar'}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* SELECTED CONSULTANT LIVE CAL.COM AVAILABLE SLOTS DETAIL */}
                      <div className="mt-2.5 flex items-center justify-between gap-2 rounded-xl border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/8 px-3 py-2 text-xs">
                        <span className="inline-flex items-center gap-2 font-medium text-[var(--color-text)]">
                          <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse shrink-0" />
                          {isLoadingCounts ? (
                            <span>
                              Checking <strong>{activeConsultant.name}&apos;s</strong> live Cal.com schedule...
                            </span>
                          ) : activeAvailableSlots !== null ? (
                            <span>
                              <strong>{activeConsultant.name}</strong> has{' '}
                              <strong className="text-[var(--color-primary)]">
                                {activeAvailableSlots} available {activeAvailableSlots === 1 ? 'slot' : 'slots'}
                              </strong>{' '}
                              in the next 7 days (live Cal.com sync)
                            </span>
                          ) : (
                            <span>
                              <strong>{activeConsultant.name}&apos;s</strong> live availability is ready in Cal.com
                            </span>
                          )}
                        </span>
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                      </div>
                    </div>

                  </div>

                  {/* =================================================
                      VALIDITY / FEATURES
                  ================================================= */}

                  <div className="mt-4 mb-5">

                    {tier.features.length > 0 && (
                      <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-text-muted)]">

                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 leading-relaxed"
                          >
                            <BadgeCheck className="w-4 h-4 mt-0.5 text-[var(--color-primary)] flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>

                </div>

                {/* =================================================
                    BUTTON — MOBILE THUMB-FRIENDLY CTA
                ================================================= */}

                <div>

                  {tier.id === 'intro' ? (
                    <button
                      onClick={openIntroModal}
                      className="w-full min-h-[52px] rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] transition-all active:scale-[0.99] border border-[var(--color-primary)]/30 bg-[var(--color-primary)] text-white shadow-lg hover:brightness-95 cursor-pointer"
                    >
                      {tier.buttonLabel}
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full min-h-[52px] rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] border border-[var(--color-primary)]/30 bg-transparent text-[var(--color-primary)] opacity-60 cursor-not-allowed"
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

          <div className="mt-8 sm:mt-10 text-center px-2">

            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
              Our conversations are educational and confidential. They do not
              constitute legal, tax, investment, or financial advice.
            </p>
            {onOpenTerms && (
              <div className="mt-2.5">
                <button
                  onClick={onOpenTerms}
                  className="py-1.5 px-2 text-xs font-mono text-[var(--color-primary)] hover:underline underline-offset-4 cursor-pointer transition-colors"
                >
                  View Terms & Conditions →
                </button>
              </div>
            )}

          </div>

          {/* =====================================================
              SOCIAL LINKS — GET THE FEELING OF FREEDOM
          ===================================================== */}

          <div className="mt-10 sm:mt-12 max-w-md sm:max-w-xl mx-auto text-center">
            <h3 className="font-display text-lg sm:text-xl font-medium tracking-tight text-[var(--color-text)] mb-3.5 sm:mb-4">
              Get the Feeling of Freedom
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61594348593994"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-xs sm:text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </a>

              <a
                href="https://www.tiktok.com/@jsek.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-xs sm:text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span>TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          CAL.COM BOOK & PAY MODAL — MOBILE-FIRST SHEET / DIALOG
      ========================================================= */}

      {activeTier?.id === 'intro' && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
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

          <div className="relative flex h-[96dvh] sm:h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[24px] sm:rounded-[28px] border-t sm:border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">

            {/* ===================================================
                HEADER
            =================================================== */}

            <div className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-[var(--color-divider)] bg-[var(--color-surface)] px-4 py-3.5 sm:px-7 sm:py-5">

              <div className="flex-1 min-w-0">

                <div className="mb-1 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  BOOK & PAY · US$75
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h2
                    id="conversation-modal-title"
                    className="font-serif text-xl sm:text-3xl text-[var(--color-text)] leading-tight"
                  >
                    20-minute Conversation
                  </h2>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-[var(--color-primary)]">
                    <UserCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>Consultant: {activeConsultant.name}</span>
                  </span>
                </div>

              </div>

              {/* =================================================
                   CLOSE
              ================================================= */}

              <button
                onClick={closeModal}
                aria-label="Close"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-text)] active:scale-95 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* ===================================================
                SCROLLABLE CONTENT
            =================================================== */}

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">

              <div className="p-2.5 sm:px-5 sm:py-5">

                {/* =================================================
                    DYNAMIC CAL.COM EMBED FOR SELECTED CONSULTANT
                ================================================= */}

                <div
                  className="overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]"
                  data-consultant={activeConsultant.name}
                  data-cal-link={activeConsultant.calLink}
                  data-booking-metadata={JSON.stringify(bookingMetadata)}
                >
                  <input type="hidden" name="consultant" value={activeConsultant.name} />
                  <input type="hidden" name="cal_link" value={activeConsultant.calLink} />
                  <input
                    type="hidden"
                    name="booking_metadata"
                    value={JSON.stringify(bookingMetadata)}
                  />

                  <Cal
                    key={`${calInstanceKey}-${activeConsultant.id}`}
                    calLink={activeConsultant.calLink}
                    style={{
                      width: '100%',
                      height: '680px',
                      overflow: 'auto',
                    }}
                    config={{
                      layout: 'month_view',
                      theme: 'dark',
                      consultant: activeConsultant.name,
                      notes: `Preferred Consultant: ${activeConsultant.name}`,
                      'metadata[consultant]': activeConsultant.name,
                      'metadata[assignedConsultant]': activeConsultant.name,
                    }}
                  />

                </div>

                {/* =================================================
                    IMPORTANT NOTICE — BOTTOM
                ================================================= */}

                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-3.5 sm:p-5">

                  <div className="flex items-start gap-2.5 sm:gap-3">

                    <ShieldCheck className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[var(--color-primary)]" />

                    <div className="text-xs sm:text-sm leading-relaxed text-[var(--color-text-muted)]">

                      <p>
                        Please provide only the information necessary to
                        arrange your conversation.
                      </p>

                      <p className="mt-2.5 sm:mt-3 font-semibold text-[var(--color-text)]">
                        Your appointment is not confirmed automatically.
                      </p>

                      <p className="mt-1">
                        The requested time remains pending until it has been
                        reviewed and confirmed privately.
                      </p>

                      {onOpenTerms && (
                        <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-[var(--color-text-faint)]">
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

                <div className="h-3 sm:h-2" />

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};
