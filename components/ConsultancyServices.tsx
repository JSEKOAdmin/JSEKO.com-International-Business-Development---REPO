import React, { useState } from 'react';
import { 
  Building2, Rocket, Search, Compass, Target, 
  CheckCircle2, ArrowRight, BarChart2, Shield, Users, Layers 
} from 'lucide-react';

interface ConsultancyServicesProps {
  onStartProject: (track: string) => void;
}

export const ConsultancyServices: React.FC<ConsultancyServicesProps> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'existing' | 'launch'>('existing');

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-[#dcd9d3] dark:border-[#302e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Advisory & Execution Pillars
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1b18] dark:text-[#eae8e1]">
            Two Strategic Paths. One Rigorous Discipline.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed">
            Whether defending ground you hold or architecting a new international venture, JSEK replaces guesswork with disciplined research, positioning precision, and hands-on campaign execution.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#dcd9d3] dark:border-[#302e26] mb-8">
          <button
            onClick={() => setActiveTab('existing')}
            className={`pb-4 px-6 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'existing'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Pillar 01: Supporting Existing Companies</span>
          </button>
          <button
            onClick={() => setActiveTab('launch')}
            className={`pb-4 px-6 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'launch'
                ? 'border-[#0a5c56] text-[#0a5c56] dark:text-[#4fa89e] dark:border-[#4fa89e]'
                : 'border-transparent text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            <Rocket className="w-4 h-4" />
            <span>Pillar 02: Launching New Business Concepts</span>
          </button>
        </div>

        {/* Active Tab Detailed Showcase */}
        {activeTab === 'existing' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 bg-white dark:bg-[#1a1914] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#0a5c56] dark:text-[#4fa89e] uppercase tracking-wider">
                  Established Businesses & Growth-Stage Scaleups
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mt-2 mb-4">
                  Uncovering Untapped Market Share & Cross-Border Expansion
                </h3>
                <p className="text-sm text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed mb-6">
                  For established businesses, JSEK acts as a high-velocity extension of your internal marketing and executive team. We identify where market share is leaking to competitors, optimize your domestic conversion channels, and architect compliant expansion into overseas markets.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <Search className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1c1b18] dark:text-[#eae8e1]">Deep Competitive Positioning Analysis</h5>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Audit competitor messaging, pricing tiers, and channel vulnerabilities to carve distinct defensible territory.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <Target className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1c1b18] dark:text-[#eae8e1]">Go-to-Market & Channel Optimization</h5>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Re-architect lead funnels, paid acquisition, and B2B outbound to accelerate sales velocity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <Compass className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1c1b18] dark:text-[#eae8e1]">Cross-Border Geographic Expansion</h5>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Navigate foreign regulations, localized messaging, and international payment infrastructure to capture global customers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f0eee8] dark:border-[#232219] flex items-center justify-between">
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Typical Engagement: 3 to 6 Month Sprint</span>
                <button
                  onClick={() => onStartProject('Existing Company Optimization')}
                  className="px-5 py-2 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Request Growth Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f7f6f2] dark:bg-[#1f1e18] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6f6d66] dark:text-[#9c9a90]">
                  Engagement Outcomes
                </span>
                <h4 className="font-serif text-xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mt-2 mb-4">
                  Tangible Deliverables
                </h4>

                <ul className="space-y-3 text-xs text-[#1c1b18] dark:text-[#eae8e1]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Comprehensive 40-Page Market Intelligence Dossier
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Repositioned Brand Messaging & Sales Script Matrix
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    High-Converting Ad Campaigns & Creative Assets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    International Currency & Merchant Settlement Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Weekly Senior Strategy Syncs & Real-Time Analytics
                  </li>
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-white dark:bg-[#14130f] border border-[#e5e3dc] dark:border-[#2a2820]">
                  <p className="text-xs italic text-[#6f6d66] dark:text-[#9c9a90]">
                    "JSEK helped us expand our UK-based operations into Australia and Southeast Asia in 90 days, doubling our foreign revenue while maintaining lean operations."
                  </p>
                  <span className="text-[11px] font-bold text-[#1c1b18] dark:text-[#eae8e1] block mt-2">
                    — Managing Director, B2B Logistics SaaS
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'launch' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 bg-white dark:bg-[#1a1914] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#0a5c56] dark:text-[#4fa89e] uppercase tracking-wider">
                  Founders, Inventors & New Ventures
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mt-2 mb-4">
                  Validation to Market-Ready Launch Roadmap
                </h3>
                <p className="text-sm text-[#6f6d66] dark:text-[#9c9a90] leading-relaxed mb-6">
                  For new product concepts and startup ideas, JSEK de-risks the entire journey. We pressure-test assumptions, size real addressable market demand, craft brand positioning, and build your full go-to-market engine before you commit substantial capital.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <Search className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1c1b18] dark:text-[#eae8e1]">Market Sizing & Commercial Validation</h5>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Qualitative customer interviews, TAM/SAM sizing, and price-elasticity testing to confirm genuine willingness-to-pay.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <Layers className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1c1b18] dark:text-[#eae8e1]">Brand Architecture & Premium Domain Pairing</h5>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Pairing your venture with an authoritative category domain and institutional visual identity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                    <Rocket className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1c1b18] dark:text-[#eae8e1]">Launch Sequencing & Initial Customer Acquisition</h5>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Turnkey landing pages, waitlist momentum funnels, and initial paid search triggers to acquire Day-1 customers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f0eee8] dark:border-[#232219] flex items-center justify-between">
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Ideal for: Pre-seed Founders & Serial Operators</span>
                <button
                  onClick={() => onStartProject('New Concept Validation')}
                  className="px-5 py-2 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Validate Your Concept</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f7f6f2] dark:bg-[#1f1e18] p-8 rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6f6d66] dark:text-[#9c9a90]">
                  The JSEK 3-Stage Process
                </span>
                <h4 className="font-serif text-xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mt-2 mb-4">
                  From Napkin to Revenue
                </h4>

                <div className="space-y-4">
                  <div className="p-3 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0a5c56] dark:text-[#4fa89e]">
                      <span>STAGE 01: RESEARCH</span>
                      <span>Days 1–14</span>
                    </div>
                    <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1">
                      Customer interviews, competitor teardowns, and unit economics validation.
                    </p>
                  </div>

                  <div className="p-3 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0a5c56] dark:text-[#4fa89e]">
                      <span>STAGE 02: ASSET BUILD</span>
                      <span>Days 15–30</span>
                    </div>
                    <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1">
                      Brand kit, MVP portal, merchant rails, and analytics tracking deployed.
                    </p>
                  </div>

                  <div className="p-3 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0a5c56] dark:text-[#4fa89e]">
                      <span>STAGE 03: GO-TO-MARKET</span>
                      <span>Day 31+</span>
                    </div>
                    <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1">
                      Targeted ad campaigns, cold outbound, and conversion rate optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
