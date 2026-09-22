import React from 'react';
import { ArrowRight, Globe, Shield, Sparkles, Zap, CheckCircle2, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreTurnkey: () => void;
  onViewAnalysis: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreTurnkey,
  onViewAnalysis
}) => {
  return (
    <section className="relative overflow-hidden border-b border-[#dcd9d3] dark:border-[#302e26] bg-[#f7f6f2] dark:bg-[#14130f]">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 7 Cols: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#0a5c56] dark:bg-[#4fa89e]"></span>
              International Business Advisory · Turnkey Sovereign Ventures
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#1c1b18] dark:text-[#eae8e1] leading-[1.08]">
              Clarity before campaigns. <br />
              <span className="text-[#0a5c56] dark:text-[#4fa89e]">Turnkey businesses</span> built for global income.
            </h1>

            <p className="text-base sm:text-lg text-[#6f6d66] dark:text-[#9c9a90] max-w-2xl leading-relaxed">
              JSEK Marketing helps companies grow smarter—whether strengthening an established brand's market share through research-backed execution, or handing founders an instant, ready-to-operate international business with cross-border payment infrastructure.
            </p>

            {/* Quick 3 Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1c1b18] dark:text-[#eae8e1]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Deep Market Research</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1c1b18] dark:text-[#eae8e1]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>10+ Turnkey Ventures</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1c1b18] dark:text-[#eae8e1]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>USD & Crypto Settlement</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onExploreTurnkey}
                className="px-6 py-3 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-sm font-semibold shadow-md flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Browse Turnkey Ventures (10 Ready)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartProject}
                className="px-5 py-3 rounded-lg bg-white dark:bg-[#1a1914] hover:bg-[#f0eee8] text-[#1c1b18] dark:text-[#eae8e1] border border-[#d4d1ca] dark:border-[#3a382d] text-sm font-medium transition-colors shadow-sm"
              >
                Consultancy Services
              </button>

              <button
                onClick={onViewAnalysis}
                className="px-4 py-3 rounded-lg text-xs font-semibold text-[#0a5c56] dark:text-[#4fa89e] hover:underline flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Read Gary & Axcel Strategic Appraisal</span>
              </button>
            </div>

          </div>

          {/* Right 5 Cols: Visual Interactive Globe & Quick Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#1a1914] rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] p-6 shadow-xl relative">
              
              {/* Globe Visual Card */}
              <div className="flex items-center justify-between border-b border-[#f0eee8] dark:border-[#232219] pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0a5c56] text-white flex items-center justify-center">
                    <Globe className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1c1b18] dark:text-[#eae8e1]">
                      Sovereign Cashflow Map
                    </h3>
                    <p className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90]">
                      Active Cross-Border Corridors
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  LIVE RAILS
                </span>
              </div>

              {/* Sample Corridors */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1c1b18] dark:text-[#eae8e1] block">South Africa → UK / US</span>
                    <span className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90]">Bypasses SARB exchange control caps via EasyPaid</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600">USD Rails</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1c1b18] dark:text-[#eae8e1] block">Ukraine / Russia Diaspora → Thailand</span>
                    <span className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90]">Unseizable liquidity via CryptoConfidant</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600">USDT / USDC</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1c1b18] dark:text-[#eae8e1] block">Latin America → North America</span>
                    <span className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90]">Talent wage arbitrage via EasyHire</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600">55% Spread</span>
                </div>
              </div>

              {/* Bottom Micro Banner */}
              <div className="mt-4 pt-4 border-t border-[#f0eee8] dark:border-[#232219] flex items-center justify-between text-xs text-[#6f6d66] dark:text-[#9c9a90]">
                <span>100+ Category Domains Owned</span>
                <span className="font-bold text-[#0a5c56] dark:text-[#4fa89e]">Ready in 48 Hours</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
