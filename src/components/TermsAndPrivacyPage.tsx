import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Calendar, AlertCircle } from 'lucide-react';

interface TermsAndPrivacyPageProps {
  onBackHome: () => void;
  onBookConversation?: () => void;
}

export const TermsAndPrivacyPage: React.FC<TermsAndPrivacyPageProps> = ({
  onBackHome,
  onBookConversation,
}) => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-12 pb-24 sm:pt-16 sm:pb-32 transition-colors">
      <div className="container-custom max-w-3xl">
        
        {/* Navigation Bar / Return */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Home</span>
          </button>

          {onBookConversation && (
            <button
              onClick={onBookConversation}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Conversation</span>
            </button>
          )}
        </div>

        {/* Header Eyebrow & Title */}
        <div className="mb-8 sm:mb-10 text-left">
          <div className="flex items-center gap-2 text-xs sm:text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] dark:text-[#5fd1c4] mb-3">
            <span>JSEKO.COM</span>
            <span className="opacity-40">/</span>
            <span>LEGAL & PRIVACY PROTOCOL</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-normal tracking-tight text-[var(--color-text)] leading-snug">
            TERMS AND CONDITIONS and Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-text-faint)] mt-2">
            Last Updated: 2026 · JSEKO.com International Business Development
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-8 sm:space-y-10">

          {/* 1. Educational & Knowledge-Based Services */}
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 1</span>
            </div>

            <h2 className="font-display text-lg sm:text-xl font-medium text-[var(--color-text)] mb-3">
              1. Educational & Knowledge-Based Services
            </h2>

            <p className="text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed mb-5">
              <strong className="font-semibold text-[var(--color-text)]">JSEKO.com</strong> ("the Company", "we", "us") provides strictly educational and knowledge-based advisory services. Our offerings are designed to share contemporary information, strategies, and perspectives regarding personal, family, and financial security, including digital asset self-custody and financial portability.
            </p>

            <ul className="space-y-3.5 text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed pl-1">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">No Professional Advice:</strong>{' '}
                  Information shared on JSEKO.com or during any advisory sessions does not constitute financial, investment, tax, legal, or other regulated professional advice.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">Client Responsibility:</strong>{' '}
                  You retain full, independent responsibility for evaluating and making all decisions regarding your personal, legal, and financial matters.
                </div>
              </li>
            </ul>
          </section>

          {/* 2. Confidentiality and Privacy */}
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] mb-3">
              <Lock className="w-4 h-4" />
              <span>Section 2</span>
            </div>

            <h2 className="font-display text-lg sm:text-xl font-medium text-[var(--color-text)] mb-3">
              2. Confidentiality and Privacy
            </h2>

            <p className="text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed mb-5">
              Privacy and confidentiality form the core foundation of our service.
            </p>

            <ul className="space-y-3.5 text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed pl-1">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">Private Communications:</strong>{' '}
                  All sessions, inquiries, and discussions are conducted through secure, end-to-end encrypted communication channels (such as Signal) or in secure, private settings.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">Data Security:</strong>{' '}
                  We maintain strict privacy practices and do not sell, share, or disclose client information to third parties unless explicitly required by operation of law.
                </div>
              </li>
            </ul>
          </section>

          {/* 3. Multiple Session Packages & Expiration Policy */}
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] mb-3">
              <Calendar className="w-4 h-4" />
              <span>Section 3</span>
            </div>

            <h2 className="font-display text-lg sm:text-xl font-medium text-[var(--color-text)] mb-3">
              3. Multiple Session Packages & Expiration Policy
            </h2>

            <ul className="space-y-3.5 text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed pl-1">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">Session Package Terms:</strong>{' '}
                  Multiple Session packages (typically arranged for block meetings or in-person sessions) are designed to provide structured, ongoing educational guidance.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">180-Day Validity Period:</strong>{' '}
                  All Multiple Session packages are valid for exactly 180 days starting from the date of purchase. All sessions must be fully scheduled and utilized within this 180-day timeframe.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base leading-none select-none mt-0.5">•</span>
                <div>
                  <strong className="font-medium text-[var(--color-text)]">Forfeiture:</strong>{' '}
                  Any unused sessions (including all 10 sessions if none are used) remaining after the 180-day period expires will be automatically forfeited without entitlement to a refund, extension, or credit.
                </div>
              </li>
            </ul>
          </section>

          {/* 4. Limitation of Liability */}
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>Section 4</span>
            </div>

            <h2 className="font-display text-lg sm:text-xl font-medium text-[var(--color-text)] mb-3">
              4. Limitation of Liability
            </h2>

            <p className="text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">
              The Company, its founders, and representatives shall not be liable for any financial losses, legal outcomes, or damages arising from decisions made or actions taken based on educational discussions or information provided during any session.
            </p>
          </section>

        </div>

        {/* Footer Return Notice */}
        <div className="mt-12 pt-6 border-t border-[var(--color-divider)] flex items-center justify-between text-xs text-[var(--color-text-faint)]">
          <span>&copy; 2026 JSEKO.com. All rights reserved.</span>
          <button
            onClick={onBackHome}
            className="text-[var(--color-primary)] hover:underline cursor-pointer"
          >
            Return to JSEKO.com Home
          </button>
        </div>

      </div>
    </div>
  );
};
