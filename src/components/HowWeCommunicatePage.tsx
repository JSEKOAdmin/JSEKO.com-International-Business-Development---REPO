import React, { useState } from 'react';
import { ArrowLeft, Shield, Lock, MessageSquare, Copy, Check, ExternalLink, Calendar } from 'lucide-react';

interface HowWeCommunicatePageProps {
  onBackHome: () => void;
  onBookSession?: () => void;
  onOpenAbout?: () => void;
}

export const HowWeCommunicatePage: React.FC<HowWeCommunicatePageProps> = ({
  onBackHome,
  onBookSession,
  onOpenAbout,
}) => {
  const [copiedSignal, setCopiedSignal] = useState(false);

  const handleCopySignal = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText('@cryptoconfidant.01');
    setCopiedSignal(true);
    setTimeout(() => setCopiedSignal(false), 2200);
  };

  const steps = [
    {
      number: '01',
      title: 'Begin with a short enquiry',
      body: 'You can introduce yourself and indicate the type of conversation or engagement you are interested in by sending a message via Signal - our username @confidant.01 or book your Introduction Session. There is no need to send sensitive personal, financial or identifying information in your enquiry. Relevant details can be discussed confidentially during the Initial Introduction Session.',
    },
    {
      number: '02',
      title: 'Set up Signal',
      body: "Signal is JSEKO.com's required communication channel for client conversations. Before your enquiry or Initial Introduction Session, please install the Signal app and create a Signal account. Signal requires a telephone number when registering an account. However, Signal's username and phone-number privacy settings can allow you to contact JSEKO.com without disclosing that number to us.",
      action: {
        label: 'Get Signal App',
        href: 'https://signal.org/install',
        icon: ExternalLink,
      }
    },
    {
      number: '03',
      title: 'Initial Introduction Session',
      body: 'The 20-minute Initial Introduction Session is the first substantive point of communication with JSEKO.com. It provides a private, focused opportunity to describe your circumstances at a high level, explain what you are seeking, and consider whether an ongoing conversation or engagement may be appropriate.',
      action: onBookSession ? {
        label: 'Book 20-Min Session',
        onClick: onBookSession,
        icon: Calendar,
      } : undefined
    },
    {
      number: '04',
      title: 'Continue privately',
      body: 'Further sessions are agreed mutually and, where appropriate, take place through Signal. Signal supports encrypted messaging and voice or video calls and can allow you to communicate via your Signal username without disclosing your name or telephone number to JSEKO.com.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-12 pb-24 sm:pt-16 sm:pb-32 transition-colors">
      <div className="container-custom">
        
        {/* Navigation Bar / Return */}
        <div className="mb-10 sm:mb-14 flex items-center justify-between">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Home</span>
          </button>


        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#a06836] dark:text-[#d6985e] mb-4">
            HOW WE COMMUNICATE
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-normal tracking-[-0.02em] text-[var(--color-text)] leading-[1.08] mb-6">
            A Personal Conversation.
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
            Everything about how we operate — including how we communicate — is built around one principle: privacy. Your information should exist in as few places as possible, for as short a time as possible.
          </p>
        </div>

        {/* 4 Pillars / Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] dark:border-[#38352b] rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#b07844]/50 shadow-xs"
            >
              <div>
                {/* Step Number */}
                <div className="font-display text-3xl sm:text-4xl text-[#b07844] dark:text-[#d6985e] font-normal tracking-tight mb-5">
                  {step.number}
                </div>

                {/* Step Title */}
                <h2 className="font-display text-xl sm:text-[1.35rem] font-medium text-[var(--color-text)] mb-3.5 leading-snug">
                  {step.title}
                </h2>

                {/* Step Description */}
                <p className="text-sm sm:text-[0.93rem] text-[var(--color-text-muted)] leading-[1.65]">
                  {step.body}
                </p>
              </div>

              {/* Action Button if applicable */}
              {step.action && (
                <div className="pt-6 mt-6 border-t border-[var(--color-divider)]">
                  {step.action.href ? (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#a06836] dark:text-[#d6985e] hover:underline"
                    >
                      <step.action.icon className="w-3.5 h-3.5" />
                      <span>{step.action.label}</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={step.action.onClick}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#a06836] dark:text-[#d6985e] hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      <step.action.icon className="w-3.5 h-3.5" />
                      <span>{step.action.label}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Supporting Privacy Safeguards Strip */}
        <div className="bg-[var(--color-surface-offset)] border border-[var(--color-border)] dark:border-[#38352b] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#a06836]/10 text-[#a06836] dark:text-[#d6985e] flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-[var(--color-text)] mb-1">
                  End-to-End Pseudonymous Verification
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
                  We never store phone numbers, payment records, or identity credentials in web forms. Signal enables full voice, video, and text consultations using username-only identifiers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">

              {onBookSession && (
                <button
                  type="button"
                  onClick={onBookSession}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Conversation</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
