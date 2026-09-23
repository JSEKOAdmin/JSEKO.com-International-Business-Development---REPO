import React from 'react';
import { ArrowLeft, ArrowRight, Shield, Globe, Compass, Calendar } from 'lucide-react';

interface AboutUsPageProps {
  onBackHome: () => void;
  onExploreTurnkey: () => void;
  onBookConversation: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackHome,
  onExploreTurnkey,
  onBookConversation,
}) => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-12 pb-24 sm:pt-16 sm:pb-32 transition-colors">
      <div className="container-custom max-w-4xl">
        
        {/* Navigation Bar / Return */}
        <div className="mb-6 sm:mb-8 flex items-center justify-start">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="mb-6 sm:mb-8 text-left">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-normal tracking-[-0.01em] text-[var(--color-text)] leading-snug">
            ABOUT
          </h1>
        </div>

        {/* Primary Mission Card */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] rounded-2xl p-6 sm:p-8 mb-10 shadow-xs">
          <p className="text-sm sm:text-base md:text-[1.05rem] font-normal text-[var(--color-text)] leading-relaxed">
            <strong className="font-semibold text-[var(--color-text)]">JSEKO.com</strong>, International Business Development exists to give people in unstable, unfair, or disadvantaged environments or just wanting to use their time developing more secure and portable business, practical pathways to greater security and freedom.
          </p>

          <div className="my-5 border-t border-[var(--color-divider)]" />

          <p className="text-xs sm:text-sm md:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">
            We do this by connecting them to international opportunities and business structure, safer markets, and income‑generating options, so they can build resilient livelihoods and reduce their dependence on any single local system.
          </p>
        </div>

        {/* Founder Story Section */}
        <div className="bg-[var(--color-surface-offset)] border border-[var(--color-border)] dark:border-[#38352b] rounded-3xl p-8 sm:p-12 mb-12">
          
          <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#a06836] dark:text-[#d6985e] mb-3">
            <Compass className="w-4 h-4" />
            <span>Origins & Mission</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--color-text)] mb-8 leading-snug">
            Why I founded JSEKO.com
          </h2>

          <div className="space-y-6 text-base sm:text-[1.05rem] text-[var(--color-text-muted)] leading-[1.75]">
            <p>
              JSEKO.com grew from a deeply personal experience. For five years, I lived through prolonged proceedings in Australia’s family and criminal justice systems. Although I received no criminal conviction, the experience cost me relationships, financial security, peace of mind, and years of my life.
            </p>

            <p>
              I was fortunate to emerge with enough resources to rebuild in a safer and more independent way. Many people facing oppressive, unstable, or unfair circumstances do not have that opportunity.
            </p>

            <p>
              That realization became the foundation of <strong className="font-medium text-[var(--color-text)]">JSEKO.com</strong>. We help people create legitimate international business opportunities, diversify beyond a single local market, and build greater economic resilience and personal agency.
            </p>

            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border-l-4 border-l-[var(--color-primary)] border border-[var(--color-border)] dark:border-[#3a372e] my-8 shadow-xs">
              <p className="text-base sm:text-lg font-serif italic text-[var(--color-text)] leading-relaxed">
                “JSEKO.com is not about escaping responsibility or promising immunity from hardship. It is about ensuring that a person’s future is not entirely dependent on one market, one institution, or one set of circumstances.”
              </p>
            </div>

            <p className="text-lg sm:text-[1.15rem] font-serif text-[var(--color-text)] leading-relaxed">
              My experience taught me that security cannot always be assumed. Sometimes it must be deliberately built—and <strong className="font-semibold text-[var(--color-text)]">JSEKO.com</strong> exists to help more people begin building it.
            </p>
          </div>

        </div>

        {/* Three Pillars Summary Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b]">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Globe className="w-4.5 h-4.5" />
            </div>
            <h3 className="font-display text-base font-medium text-[var(--color-text)] mb-2">
              Cross-Border Resilience
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              Diversify operations and assets across multiple jurisdictions so no local disruption can jeopardize your livelihood.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b]">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Shield className="w-4.5 h-4.5" />
            </div>
            <h3 className="font-display text-base font-medium text-[var(--color-text)] mb-2">
              Portable Business Assets
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              Pre-built, revenue-generating turnkey models designed to operate cleanly wherever you reside or relocate.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b]">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Compass className="w-4.5 h-4.5" />
            </div>
            <h3 className="font-display text-base font-medium text-[var(--color-text)] mb-2">
              Deliberate Independence
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              Direct, private consultations and research-backed business strategy to build sovereign personal and financial agency.
            </p>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-display text-xl sm:text-2xl font-medium text-[var(--color-text)] mb-1">
              Ready to explore portable international assets?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
              Browse available and existing turnkey businesses or book a confidential 20-minute consultation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onExploreTurnkey}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] text-xs sm:text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-text)] transition-colors cursor-pointer"
            >
              <span>View Businesses</span>
            </button>
            <button
              onClick={onBookConversation}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] text-xs sm:text-sm font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer shadow-xs"
            >
              <span>Book a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
