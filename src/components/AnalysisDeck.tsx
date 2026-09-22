import React, { useState } from 'react';
import { 
  BarChart3, CheckCircle2, AlertTriangle, ShieldCheck, 
  TrendingUp, DollarSign, Layers, Globe, Users, FileText, 
  Cpu, ArrowRight, Lightbulb, Compass, Zap, HelpCircle, Check, Copy, Sparkles 
} from 'lucide-react';
import { 
  EXECUTIVE_SCORECARD, SWOT_ANALYSIS, 
  STRATEGIC_RECOMMENDATIONS, TARGET_PERSONAS 
} from '../data/strategicAnalysis';

export const AnalysisDeck: React.FC = () => {
  const [swotTab, setSwotTab] = useState<'all' | 'strengths' | 'weaknesses' | 'opportunities' | 'threats'>('all');
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>(TARGET_PERSONAS[0].id);
  const [activeAnalysisSection, setActiveAnalysisSection] = useState<'verdict' | 'swot' | 'economics' | 'recommendations' | 'compliance'>('verdict');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copySummaryText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Banner */}
        <div className="bg-[#1c1b18] text-[#eae8e1] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#302e26] relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Appraisal & Business Model Evaluation
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Executive Analysis: JSEK Marketing & Turnkey Business Engine
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#9c9a90] leading-relaxed">
              An in-depth evaluation of Gary's hybrid model: combining high-ticket marketing consulting with an asset-backed catalog of 100+ generic "Easy-" domains to provide entrepreneurs trapped in currency-controlled or unstable economies with instant, day-one international revenue infrastructure.
            </p>

            <div className="mt-8 pt-6 border-t border-[#302e26] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="text-xs text-[#9c9a90] block">Overall Viability Score</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">8.8 / 10</span>
              </div>
              <div>
                <span className="text-xs text-[#9c9a90] block">Market Demand Intensity</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-teal-300">9.4 / 10</span>
              </div>
              <div>
                <span className="text-xs text-[#9c9a90] block">Target Unit Margin</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">55%–85%</span>
              </div>
              <div>
                <span className="text-xs text-[#9c9a90] block">Macro Tailwinds</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-blue-300">Unprecedented</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex border-b border-[#dcd9d3] dark:border-[#302e26] mb-10 overflow-x-auto no-scrollbar gap-2">
          <button
            onClick={() => setActiveAnalysisSection('verdict')}
            className={`pb-4 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-all ${
              activeAnalysisSection === 'verdict'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>1. Executive Scorecard & Thesis</span>
          </button>
          <button
            onClick={() => setActiveAnalysisSection('swot')}
            className={`pb-4 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-all ${
              activeAnalysisSection === 'swot'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. SWOT Deep-Dive</span>
          </button>
          <button
            onClick={() => setActiveAnalysisSection('economics')}
            className={`pb-4 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-all ${
              activeAnalysisSection === 'economics'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>3. Economics & Revenue Mechanics</span>
          </button>
          <button
            onClick={() => setActiveAnalysisSection('recommendations')}
            className={`pb-4 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-all ${
              activeAnalysisSection === 'recommendations'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>4. Gary & Axcel Strategic Roadmap</span>
          </button>
          <button
            onClick={() => setActiveAnalysisSection('compliance')}
            className={`pb-4 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-all ${
              activeAnalysisSection === 'compliance'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>5. Compliance & Banking Playbook</span>
          </button>
        </div>

        {/* 1. EXECUTIVE SCORECARD & THESIS */}
        {activeAnalysisSection === 'verdict' && (
          <div className="space-y-10">
            
            {/* Core Thesis Card */}
            <div className="bg-white dark:bg-[#1a1914] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mb-4">
                The Fundamental Thesis: Why This Business Model Works
              </h3>
              <div className="prose dark:prose-invert text-sm sm:text-base text-[#6f6d66] dark:text-[#9c9a90] space-y-4 max-w-none leading-relaxed">
                <p>
                  Most digital marketing agencies operate as undifferentiated, race-to-the-bottom cost centers. Gary's insight transforms JSEK into a <strong>high-ticket sovereign risk hedge</strong>. By combining premium domain names (e.g. <em>EasyCare, EasyTax, EasyHire, EasyPaid</em>) with turnkey web infrastructure, payment rails, and marketing execution, JSEK is not just selling consulting hours—it is selling <strong>instant offshore income generation capacity</strong>.
                </p>
                <p>
                  <strong>The Core Psychological Driver:</strong> In jurisdictions like South Africa (severe SARB foreign exchange caps and currency devaluation), Ukraine/Russia (war, capital freezes, displacement to hubs like Thailand/Bali), and Latin America (inflation), founders and wealthy families are terrified of having 100% of their net worth locked in a single sovereign system. Earning USD/EUR/crypto internationally is an existential necessity.
                </p>
              </div>

              {/* 5 Dimensions Breakdown */}
              <div className="mt-8 pt-6 border-t border-[#f0eee8] dark:border-[#232219] space-y-4">
                <h4 className="font-serif font-bold text-base text-[#1c1b18] dark:text-[#eae8e1]">
                  Strategic Dimension Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EXECUTIVE_SCORECARD.dimensions.map((dim, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#1c1b18] dark:text-[#eae8e1]">{dim.name}</span>
                        <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e]">
                          {dim.score} / 10
                        </span>
                      </div>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1.5 leading-relaxed">
                        {dim.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Personas Matrix */}
            <div className="bg-white dark:bg-[#1a1914] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mb-6">
                Target Customer Personas & Willingness-to-Pay
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TARGET_PERSONAS.map(p => (
                  <div key={p.id} className="p-6 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a5c56] dark:text-[#4fa89e]">
                        {p.location}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1] mt-1 mb-2">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mb-4 leading-relaxed">
                        <strong>Core Pain:</strong> {p.painPoint}
                      </p>
                      <div className="text-xs text-[#1c1b18] dark:text-[#eae8e1] bg-white dark:bg-[#14130f] p-3 rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                        <span className="text-[#6f6d66] dark:text-[#9c9a90] block text-[11px]">Primary Motivation:</span>
                        {p.motivation}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#dcd9d3] dark:border-[#302e26] flex items-center justify-between">
                      <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Target Budget:</span>
                      <span className="font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400">
                        {p.willingnessToPay}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. SWOT DEEP-DIVE */}
        {activeAnalysisSection === 'swot' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1]">
                Comprehensive SWOT Matrix
              </h3>
              <div className="flex gap-2">
                {(['all', 'strengths', 'weaknesses', 'opportunities', 'threats'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setSwotTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                      swotTab === tab
                        ? 'bg-[#0a5c56] text-white shadow-sm'
                        : 'bg-[#f0eee8] dark:bg-[#1f1e18] text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* STRENGTHS */}
              {(swotTab === 'all' || swotTab === 'strengths') && (
                <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1914] border-t-4 border-t-emerald-500 border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
                  <h4 className="font-serif font-bold text-lg text-emerald-800 dark:text-emerald-400 flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    Strengths (Internal Advantages)
                  </h4>
                  <div className="space-y-4">
                    {SWOT_ANALYSIS.strengths.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs sm:text-sm text-[#1c1b18] dark:text-[#eae8e1]">{item.title}</h5>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                            {item.impact}
                          </span>
                        </div>
                        <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1.5 leading-relaxed">{item.description}</p>
                        {item.mitigationOrAction && (
                          <p className="text-[11px] text-emerald-700 dark:text-emerald-300 mt-2 font-medium">
                            💡 Strategic Leverage: {item.mitigationOrAction}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WEAKNESSES */}
              {(swotTab === 'all' || swotTab === 'weaknesses') && (
                <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1914] border-t-4 border-t-amber-500 border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
                  <h4 className="font-serif font-bold text-lg text-amber-800 dark:text-amber-400 flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Weaknesses (Internal Constraints)
                  </h4>
                  <div className="space-y-4">
                    {SWOT_ANALYSIS.weaknesses.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs sm:text-sm text-[#1c1b18] dark:text-[#eae8e1]">{item.title}</h5>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-semibold">
                            {item.impact}
                          </span>
                        </div>
                        <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1.5 leading-relaxed">{item.description}</p>
                        {item.mitigationOrAction && (
                          <p className="text-[11px] text-amber-700 dark:text-amber-300 mt-2 font-medium">
                            🔧 Required Fix: {item.mitigationOrAction}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* OPPORTUNITIES */}
              {(swotTab === 'all' || swotTab === 'opportunities') && (
                <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1914] border-t-4 border-t-blue-500 border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
                  <h4 className="font-serif font-bold text-lg text-blue-800 dark:text-blue-400 flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Opportunities (Market Expansion)
                  </h4>
                  <div className="space-y-4">
                    {SWOT_ANALYSIS.opportunities.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs sm:text-sm text-[#1c1b18] dark:text-[#eae8e1]">{item.title}</h5>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-semibold">
                            {item.impact}
                          </span>
                        </div>
                        <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1.5 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* THREATS */}
              {(swotTab === 'all' || swotTab === 'threats') && (
                <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1914] border-t-4 border-t-rose-500 border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
                  <h4 className="font-serif font-bold text-lg text-rose-800 dark:text-rose-400 flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-rose-500" />
                    Threats (External & Regulatory Risks)
                  </h4>
                  <div className="space-y-4">
                    {SWOT_ANALYSIS.threats.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs sm:text-sm text-[#1c1b18] dark:text-[#eae8e1]">{item.title}</h5>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-semibold">
                            {item.impact}
                          </span>
                        </div>
                        <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1.5 leading-relaxed">{item.description}</p>
                        {item.mitigationOrAction && (
                          <p className="text-[11px] text-rose-700 dark:text-rose-300 mt-2 font-medium">
                            🛡️ Compliance Safeguard: {item.mitigationOrAction}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* 3. ECONOMICS & REVENUE MECHANICS */}
        {activeAnalysisSection === 'economics' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#1a1914] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mb-2">
                The Triple-Engine Financial Architecture
              </h3>
              <p className="text-sm text-[#6f6d66] dark:text-[#9c9a90] mb-8">
                How JSEK scales from initial asset sales to compounding high-margin recurring retained earnings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Engine 1 */}
                <div className="p-6 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                  <div className="w-10 h-10 rounded-lg bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] flex items-center justify-center font-bold text-sm mb-4">
                    01
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">
                    Turnkey Asset Sale (Upfront)
                  </h4>
                  <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 my-2">
                    $10,000 – $18,000
                  </div>
                  <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
                    Buyer acquires the domain (via Escrow), live web application, merchant rails, and brand assets. Immediate cash injection with 85%+ gross margin.
                  </p>
                </div>

                {/* Engine 2 */}
                <div className="p-6 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 flex items-center justify-center font-bold text-sm mb-4">
                    02
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">
                    Strategic GTM Retainer (MRR)
                  </h4>
                  <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400 my-2">
                    $2,500 – $4,500 / mo
                  </div>
                  <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
                    Mandatory 90-day execution sprint for competitive research, paid advertising setup, channel optimization, and international customer acquisition.
                  </p>
                </div>

                {/* Engine 3 */}
                <div className="p-6 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 flex items-center justify-center font-bold text-sm mb-4">
                    03
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">
                    Consulting & Advisory Sprints
                  </h4>
                  <div className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400 my-2">
                    $15,000 – $35,000
                  </div>
                  <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
                    Pillar 1 & 2 consulting for existing SMEs looking to expand internationally or founders validating completely bespoke new concepts.
                  </p>
                </div>

              </div>

              {/* 12-Month Pro-Forma Simulation */}
              <div className="mt-8 pt-6 border-t border-[#f0eee8] dark:border-[#232219]">
                <h4 className="font-serif font-bold text-base text-[#1c1b18] dark:text-[#eae8e1] mb-4">
                  12-Month Revenue Pro-Forma (Selling Just 2 Turnkeys / Month + Retainers)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-[#dcd9d3] dark:border-[#302e26] rounded-xl overflow-hidden">
                    <thead className="bg-[#f0eee8] dark:bg-[#232219] font-bold text-[#1c1b18] dark:text-[#eae8e1]">
                      <tr>
                        <th className="p-3">Timeline</th>
                        <th className="p-3">Turnkey Sales (Upfront)</th>
                        <th className="p-3">Active Retainers (MRR)</th>
                        <th className="p-3">Monthly Gross Revenue</th>
                        <th className="p-3">Annual Run Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#dcd9d3] dark:divide-[#302e26] text-[#6f6d66] dark:text-[#9c9a90]">
                      <tr>
                        <td className="p-3 font-semibold text-[#1c1b18] dark:text-[#eae8e1]">Month 1</td>
                        <td className="p-3">$25,000 (2 units)</td>
                        <td className="p-3">$6,000 (2 clients)</td>
                        <td className="p-3 font-bold text-[#0a5c56] dark:text-[#4fa89e]">$31,000</td>
                        <td className="p-3 font-mono">$372,000/yr</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#1c1b18] dark:text-[#eae8e1]">Month 6</td>
                        <td className="p-3">$25,000 (2 units)</td>
                        <td className="p-3">$24,000 (8 retained clients)</td>
                        <td className="p-3 font-bold text-[#0a5c56] dark:text-[#4fa89e]">$49,000</td>
                        <td className="p-3 font-mono">$588,000/yr</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#1c1b18] dark:text-[#eae8e1]">Month 12</td>
                        <td className="p-3">$37,500 (3 units)</td>
                        <td className="p-3">$45,000 (15 retained clients)</td>
                        <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">$82,500</td>
                        <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">$990,000/yr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 4. RECOMMENDATIONS FOR GARY & AXCEL */}
        {activeAnalysisSection === 'recommendations' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1]">
                  Actionable Strategic Roadmap for Gary & Axcel
                </h3>
                <p className="text-xs sm:text-sm text-[#6f6d66] dark:text-[#9c9a90]">
                  5 core initiatives to execute across the next 90 days to scale JSEK into a dominant player.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {STRATEGIC_RECOMMENDATIONS.map((rec, idx) => (
                <div key={rec.id} className="p-6 rounded-2xl bg-white dark:bg-[#1a1914] border border-[#dcd9d3] dark:border-[#302e26] shadow-sm">
                  <div className="flex items-center justify-between gap-4 flex-wrap pb-3 border-b border-[#f0eee8] dark:border-[#232219]">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#0a5c56] text-white flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">
                        {rec.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] font-medium">
                        {rec.category}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-medium">
                        {rec.priority}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6f6d66] dark:text-[#9c9a90] mt-3 leading-relaxed">
                    {rec.overview}
                  </p>

                  <div className="mt-4 p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <span className="text-xs font-bold text-[#1c1b18] dark:text-[#eae8e1] block mb-2">
                      Execution Action Steps:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#6f6d66] dark:text-[#9c9a90]">
                      {rec.actionSteps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Expected Outcome: {rec.expectedImpact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. COMPLIANCE & BANKING PLAYBOOK */}
        {activeAnalysisSection === 'compliance' && (
          <div className="bg-white dark:bg-[#1a1914] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1]">
              Cross-Border Compliance, Sanctions & Anti-Freeze Architecture
            </h3>
            <p className="text-sm text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
              When dealing with international capital flight and displaced entrepreneurs (Ukraine, Russia, South Africa, Latin America), JSEK must follow strict institutional protocols to protect its own banking rails from being flagged or frozen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-3">
                <h4 className="font-serif font-bold text-base text-rose-900 dark:text-rose-200 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Critical Compliance Traps to Avoid
                </h4>
                <ul className="space-y-2 text-xs text-rose-800 dark:text-rose-300">
                  <li>• <strong>Never hold client funds in custody:</strong> Always route settlements directly into the client's own offshore merchant account (Stripe, Mercury) or non-custodial crypto wallet.</li>
                  <li>• <strong>No Sanctioned Persons (OFAC/EU):</strong> Always run clients through automated KYC verification before selling turnkey assets.</li>
                  <li>• <strong>Avoid Pure Domain Squatting Claims:</strong> Always transfer the domain alongside a functional codebase, logo files, and trademark transfer agreement to prove legitimate business transfer.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
                <h4 className="font-serif font-bold text-base text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Recommended Turnkey Tech & Banking Stack
                </h4>
                <ul className="space-y-2 text-xs text-emerald-800 dark:text-emerald-300">
                  <li>• <strong>Entity Formation:</strong> Wyoming or Delaware LLC via Stripe Atlas / Firstbase ($500 setup).</li>
                  <li>• <strong>Corporate Banking:</strong> Mercury Bank or Wise Business for USD/EUR wires.</li>
                  <li>• <strong>Dual Payment Rails:</strong> Stripe Card Checkout + Crypto.com / Helio / Solana Pay for instant USDC stablecoin settlement.</li>
                  <li>• <strong>Asset Escrow:</strong> Use Escrow.com or Dan.com for high-ticket domain & IP transfers.</li>
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
