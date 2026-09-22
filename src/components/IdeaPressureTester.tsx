import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, AlertCircle, ArrowRight, 
  HelpCircle, RefreshCw, BarChart2, Shield, Globe 
} from 'lucide-react';
import { TURNKEY_BUSINESSES } from '../data/turnkeyBusinesses';

export const IdeaPressureTester: React.FC<{ onContact: (conceptName: string) => void }> = ({ onContact }) => {
  const [conceptTitle, setConceptTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('Global Remote Workers & Expats');
  const [businessModel, setBusinessModel] = useState('SaaS / Digital Marketplace');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<null | {
    score: number;
    verdict: string;
    tamRating: string;
    riskFactor: string;
    recommendedActions: string[];
    suggestedDomainPairing: string;
  }>(null);

  const handleQuickLoad = (bizName: string) => {
    const biz = TURNKEY_BUSINESSES.find(b => b.name === bizName);
    if (biz) {
      setConceptTitle(biz.name + ' - ' + biz.tagline);
      setTargetAudience(biz.targetGeos[0]);
      setBusinessModel(biz.industry);
    }
  };

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conceptTitle.trim()) return;

    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluationResult({
        score: Math.floor(Math.random() * 12) + 84, // 84-96
        verdict: 'High Viability for Cross-Border Cashflow with Proper Positioning Scaffolding',
        tamRating: '$2.4B Global Cross-Border Addressable Niche',
        riskFactor: 'Moderate — Requires strict multi-currency checkout and localized value messaging',
        recommendedActions: [
          'Pair with a high-trust memorable generic domain name to cut paid ad customer acquisition costs by ~45%',
          'Establish a US Wyoming LLC or UAE Freezone entity to avoid domestic sovereign exchange restrictions',
          'Deploy dual fiat (Stripe) + stablecoin (USDC) checkout rails for zero-drag international billing',
          'Execute a 30-day JSEK research sprint to identify competitors and validate buyer willingness-to-pay'
        ],
        suggestedDomainPairing: conceptTitle.toLowerCase().includes('care') ? 'ezicare.com' :
                                conceptTitle.toLowerCase().includes('tax') ? 'easytax.global' :
                                conceptTitle.toLowerCase().includes('hire') || conceptTitle.toLowerCase().includes('talent') ? 'easyhire.work' :
                                conceptTitle.toLowerCase().includes('pay') || conceptTitle.toLowerCase().includes('invoice') ? 'easypaid.io' :
                                'cryptoconfidant.com'
      });
    }, 600);
  };

  return (
    <section id="validator" className="py-16 sm:py-24 border-b border-[#dcd9d3] dark:border-[#302e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Concept Validation Engine
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1b18] dark:text-[#eae8e1]">
            Pressure-Test Your Business Concept.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
            Before spending tens of thousands on unvalidated software development or marketing campaigns, simulate a JSEK 4-Pillar validation scan on your new business idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Area */}
          <div className="lg:col-span-6 bg-white dark:bg-[#1a1914] p-6 sm:p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
            <h3 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1] mb-2">
              Concept Parameters
            </h3>
            <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mb-6">
              Enter your custom concept or select a ready template to test its international viability.
            </p>

            {/* Quick Template Fillers */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] block mb-2">
                Or Quick-Fill with Turnkey Archetypes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['EasyCare', 'EasyTax', 'EasyPaid', 'EasyHire', 'CryptoConfidant'].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleQuickLoad(t)}
                    className="px-2.5 py-1 rounded text-xs bg-[#f0eee8] dark:bg-[#232219] hover:bg-[#dcd9d3] text-[#1c1b18] dark:text-[#eae8e1] font-medium transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleEvaluate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1.5">
                  Business / Product Concept Name & Summary
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Cross-border healthcare escort platform for elderly parents in Asia"
                  value={conceptTitle}
                  onChange={(e) => setConceptTitle(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-sm text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1.5">
                    Target International Market
                  </label>
                  <select
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs font-medium text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                  >
                    <option value="Global Remote Workers & Expats">Global Remote Workers & Expats</option>
                    <option value="North America (US & Canada)">North America (US & Canada)</option>
                    <option value="Western & Southern Europe">Western & Southern Europe</option>
                    <option value="Southeast Asia (Thailand, Bali, Singapore)">Southeast Asia (Thailand, Bali, SG)</option>
                    <option value="South Africa & Emerging Markets">South Africa & Emerging Markets</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1.5">
                    Business Model Archetype
                  </label>
                  <select
                    value={businessModel}
                    onChange={(e) => setBusinessModel(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs font-medium text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                  >
                    <option value="SaaS / Digital Marketplace">SaaS / Digital Marketplace</option>
                    <option value="High-Ticket Concierge / Advisory">High-Ticket Concierge / Advisory</option>
                    <option value="Agency / Remote Service Arbitrage">Agency / Remote Service Arbitrage</option>
                    <option value="E-commerce / Cross-Border Logistics">E-commerce / Cross-Border Logistics</option>
                    <option value="Subscription Membership">Subscription Membership</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isEvaluating}
                className="w-full mt-2 py-3 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                {isEvaluating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Running JSEK 4-Pillar Validation Matrix...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run Market Feasibility Diagnostic</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-6">
            {evaluationResult ? (
              <div className="bg-white dark:bg-[#1a1914] p-6 sm:p-8 rounded-2xl border border-emerald-300 dark:border-emerald-800/80 shadow-md space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#f0eee8] dark:border-[#232219]">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      JSEK Validation Diagnostic
                    </span>
                    <h4 className="font-serif font-bold text-xl text-[#1c1b18] dark:text-[#eae8e1]">
                      Market Feasibility Score
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif font-bold text-emerald-600 dark:text-emerald-400">
                      {evaluationResult.score}/100
                    </span>
                    <span className="block text-[10px] text-[#6f6d66]">Viability Index</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                  <h5 className="font-bold text-xs text-emerald-900 dark:text-emerald-200">Executive Summary:</h5>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-1 leading-relaxed">
                    {evaluationResult.verdict}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-[#f7f6f2] dark:bg-[#1f1e18] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                    <span className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90] block">Estimated TAM:</span>
                    <span className="text-xs font-bold text-[#1c1b18] dark:text-[#eae8e1]">{evaluationResult.tamRating}</span>
                  </div>
                  <div className="p-3 bg-[#f7f6f2] dark:bg-[#1f1e18] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                    <span className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90] block">Regulatory & FX Risk:</span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{evaluationResult.riskFactor}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#1c1b18] dark:text-[#eae8e1] block mb-2">
                    Recommended JSEK Launch Actions:
                  </span>
                  <ul className="space-y-2">
                    {evaluationResult.recommendedActions.map((act, idx) => (
                      <li key={idx} className="text-xs text-[#6f6d66] dark:text-[#9c9a90] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#f0eee8] dark:border-[#232219] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90]">Recommended Turnkey Asset:</span>
                    <span className="font-mono text-xs font-bold text-[#0a5c56] dark:text-[#4fa89e] block">
                      {evaluationResult.suggestedDomainPairing}
                    </span>
                  </div>
                  <button
                    onClick={() => onContact(conceptTitle || 'Validation Sprint')}
                    className="px-4 py-2 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Schedule Strategy Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-[#f7f6f2] dark:bg-[#1f1e18] p-8 rounded-2xl border border-dashed border-[#d4d1ca] dark:border-[#3a382d] text-center flex flex-col items-center justify-center min-h-[380px]">
                <Globe className="w-12 h-12 text-[#b3b0a8] dark:text-[#605e54] mb-3" />
                <h4 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">
                  Awaiting Concept Input
                </h4>
                <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] max-w-sm mt-1 leading-relaxed">
                  Fill in your concept details on the left and click "Run Market Feasibility Diagnostic" to generate an instant JSEK opportunity report.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
