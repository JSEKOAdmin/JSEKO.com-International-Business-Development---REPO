import React, { useState, useEffect } from 'react';
import {
  X,
  Mail,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface JoinUpdatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinUpdatesModal: React.FC<JoinUpdatesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailRegex.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/join-updates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setError('Unable to send right now. Please try again in a moment.');
        setIsSubmitting(false);
        return;
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
      return;
    }

    setSubmittedEmail(trimmed);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-updates-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={handleResetAndClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
      />

      {/* Modal Card — Mobile-First Sheet / Centered Dialog */}
      <div className="relative z-10 w-full sm:max-w-md overflow-hidden rounded-t-[24px] sm:rounded-[28px] border-t sm:border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xl">
        {/* Top Row: Eyebrow + Close Button */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Get the Feeling of Freedom</span>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-text)] active:scale-95 cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-4 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <div className="space-y-2">
              <h3
                id="join-updates-modal-title"
                className="font-serif text-2xl sm:text-3xl text-[var(--color-text)] leading-tight"
              >
                You&apos;re on the List
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Thank you for joining. <strong className="text-[var(--color-text)]">JSEKO.com</strong> will email{' '}
                <span className="font-mono text-xs text-[var(--color-primary)] break-all">
                  {submittedEmail}
                </span>{' '}
                with updates and notify you whenever new international businesses become available.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:brightness-95 active:scale-[0.99] cursor-pointer"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-2.5 mb-6">
              <h2
                id="join-updates-modal-title"
                className="font-serif text-2xl sm:text-3xl text-[var(--color-text)] leading-tight"
              >
                Join for JSEKO Updates
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Add your email below so <strong className="text-[var(--color-text)]">JSEKO.com</strong> can email you with updates and notify you when new international businesses become available.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="jseko-join-email"
                  className="block text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)] mb-2"
                >
                  Your Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[var(--color-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="jseko-join-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="you@example.com"
                    className="w-full min-h-[48px] pl-10 pr-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                {error && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[50px] inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:brightness-95 active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Joining...' : 'Join for Updates'}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-[var(--color-divider)] flex items-start gap-2.5 text-xs text-[var(--color-text-muted)]">
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Your email is kept strictly private and used only for JSEKO.com updates and new turnkey business releases.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
