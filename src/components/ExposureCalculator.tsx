import React, { useState } from 'react';
import { 
  ShieldAlert, TrendingDown, TrendingUp, DollarSign, 
  HelpCircle, ArrowRight, Globe, Lock, Unlock, AlertTriangle 
} from 'lucide-react';
import { COUNTRY_RISK_PROFILES } from '../data/jurisdictionRisk';

export const ExposureCalculator: React.FC<{ onExploreTurnkeys: () => void }> = ({ onExploreTurnkeys }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('ZA');
  const [annualDomesticIncomeUSD, setAnnualDomesticIncomeUSD] = useState<number>(60000);
  const [intlTargetRevenueUSD, setIntlTargetRevenueUSD] = useState<number>(45000);

  const currentProfile = COUNTRY_RISK_PROFILES.find(p => p.code === selectedCountryCode) || COUNTRY_RISK_PROFILES[0];

  // Calculations
  const annualInflation = currentProfile.inflationRate / 100;
  // Estimated 3-year purchasing power degradation if 100% domestic
  const year3DomesticValue = annualDomesticIncomeUSD * Math.pow(1 - (annualInflation * 0.75 + (currentProfile.capitalControlScore > 7 ? 0.08 : 0.02)), 3);
  const projectedCumulativeLoss = (annualDomesticIncomeUSD * 3) - (annualDomesticIncomeUSD + (annualDomesticIncomeUSD * (1 - annualInflation)) + year3DomesticValue);
  
  // With JSEK International Revenue
  const projectedHardCurrencyAccumulation = intlTargetRevenueUSD * 3;
  const netSovereignSafetyRatio = Math.round((projectedHardCurrencyAccumulation / (annualDomesticIncomeUSD * 3)) * 100);

  return (
    <section id="exposure" className="py-16 sm:py-24 bg-[#f0eee8] dark:bg-[#14130f] border-b border-[#dcd9d3] dark:border-[#302e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            Macro Hedging & Sovereign Capital Defense
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1b18] dark:text-[#eae8e1]">
            Why You Need International Cashflow.
          </h2>
          <p className="mt-3 text-base text-[#6f6d66] dark:text-[#9c9a90]">
            Calculate the hidden destruction of domestic currency controls and inflation on your business savings — and quantify the hedge of an offshore USD/EUR revenue stream.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls & Inputs (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1a1914] p-6 sm:p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1] flex items-center gap-2 border-b border-[#f0eee8] dark:border-[#232219] pb-3">
              <Globe className="w-4 h-4 text-[#0a5c56] dark:text-[#4fa89e]" />
              Select Your Origin Jurisdiction
            </h3>

            {/* Country Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-2">
                Origin Country / Market
              </label>
              <select
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-sm font-semibold text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
              >
                {COUNTRY_RISK_PROFILES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.country} ({c.currency})
                  </option>
                ))}
              </select>
            </div>

            {/* Slider 1: Current Domestic Income */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#6f6d66] dark:text-[#9c9a90]">Current Annual Domestic Revenue:</span>
                <span className="text-[#1c1b18] dark:text-[#eae8e1] font-mono font-bold">${annualDomesticIncomeUSD.toLocaleString()} USD eq.</span>
              </div>
              <input
                type="range"
                min="20000"
                max="300000"
                step="5000"
                value={annualDomesticIncomeUSD}
                onChange={(e) => setAnnualDomesticIncomeUSD(Number(e.target.value))}
                className="w-full accent-[#0a5c56]"
              />
              <div className="flex justify-between text-[11px] text-[#6f6d66] mt-1">
                <span>$20k</span>
                <span>$150k</span>
                <span>$300k+</span>
              </div>
            </div>

            {/* Slider 2: Target JSEK International Revenue */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#6f6d66] dark:text-[#9c9a90]">Target JSEK International Revenue:</span>
                <span className="text-[#0a5c56] dark:text-[#4fa89e] font-mono font-bold">${intlTargetRevenueUSD.toLocaleString()} USD/yr</span>
              </div>
              <input
                type="range"
                min="15000"
                max="200000"
                step="5000"
                value={intlTargetRevenueUSD}
                onChange={(e) => setIntlTargetRevenueUSD(Number(e.target.value))}
                className="w-full accent-[#0a5c56]"
              />
              <div className="flex justify-between text-[11px] text-[#6f6d66] mt-1">
                <span>$15k/yr ($1.2k/mo)</span>
                <span>$100k/yr ($8.3k/mo)</span>
                <span>$200k/yr ($16.6k/mo)</span>
              </div>
            </div>

            {/* Country Snapshot */}
            <div className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90]">Capital Control Severity:</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                  {currentProfile.capitalControlScore} / 10 (Critical)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90]">Official Annual Inflation:</span>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  {currentProfile.inflationRate}% / year
                </span>
              </div>
              <p className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90] pt-2 border-t border-[#dcd9d3] dark:border-[#302e26] leading-relaxed">
                {currentProfile.currencyDevaluationTrend}
              </p>
            </div>

          </div>

          {/* Dynamic Risk & Return Output (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Comparative Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Without International Stream */}
              <div className="bg-white dark:bg-[#1a1914] p-6 rounded-2xl border border-rose-200 dark:border-rose-900/60 shadow-sm relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                  100% Domestic Reliance
                </span>
                <div className="text-2xl font-serif font-bold text-[#1c1b18] dark:text-[#eae8e1] mt-1">
                  -${Math.round(projectedCumulativeLoss).toLocaleString()} USD
                </div>
                <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-2">
                  Projected 3-year purchasing power eroded by domestic currency devaluation & banking export friction.
                </p>
              </div>

              {/* With JSEK Turnkey Offshore Stream */}
              <div className="bg-white dark:bg-[#1a1914] p-6 rounded-2xl border border-emerald-300 dark:border-emerald-800/80 shadow-sm relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  With JSEK Offshore USD Stream
                </span>
                <div className="text-2xl font-serif font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  +${Math.round(projectedHardCurrencyAccumulation).toLocaleString()} USD
                </div>
                <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-2">
                  Cumulative 3-year unseizable foreign liquidity accumulated in US/EU/Stablecoin accounts.
                </p>
              </div>

            </div>

            {/* Deep Context Panel */}
            <div className="bg-white dark:bg-[#1a1914] p-6 sm:p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] space-y-4">
              <h4 className="font-serif font-bold text-base text-[#1c1b18] dark:text-[#eae8e1] flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-600" />
                Sovereign Risk Diagnostic for {currentProfile.country}
              </h4>
              
              <p className="text-xs sm:text-sm text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
                {currentProfile.whyOffshoreNeeded}
              </p>

              <div className="pt-3 border-t border-[#f0eee8] dark:border-[#232219]">
                <span className="text-xs font-semibold text-[#1c1b18] dark:text-[#eae8e1] block mb-2">
                  Active Domestic Restrictions:
                </span>
                <ul className="space-y-1.5">
                  {currentProfile.keyRestrictions.map((res, idx) => (
                    <li key={idx} className="text-xs text-[#6f6d66] dark:text-[#9c9a90] flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#f0eee8] dark:border-[#232219] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Recommended Turnkey Models for {currentProfile.country}:</span>
                  <div className="flex gap-1.5 mt-1 flex-wrap">
                    {currentProfile.recommendedBusinessFit.map(fit => (
                      <span key={fit} className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e]">
                        {fit}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onExploreTurnkeys}
                  className="px-4 py-2 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Explore Suitable Businesses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
