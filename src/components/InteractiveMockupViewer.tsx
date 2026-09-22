import React, { useState } from 'react';
import { 
  CheckCircle2, Shield, Globe, CreditCard, Sparkles, UserCheck, 
  MapPin, Clock, ArrowRight, DollarSign, Lock, AlertCircle, Copy, Check 
} from 'lucide-react';
import { TurnkeyBusiness } from '../types';

interface InteractiveMockupViewerProps {
  business: TurnkeyBusiness;
  onReserve: (business: TurnkeyBusiness) => void;
}

export const InteractiveMockupViewer: React.FC<InteractiveMockupViewerProps> = ({ business, onReserve }) => {
  const [activeTab, setActiveTab] = useState<'app_mockup' | 'specs' | 'assets'>('app_mockup');
  const [copied, setCopied] = useState(false);

  const handleCopyDomain = () => {
    navigator.clipboard.writeText(`https://${business.domain}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-[#1a1914] rounded-2xl border border-[#dcd9d3] dark:border-[#302e26] overflow-hidden shadow-lg">
      
      {/* Browser Bar Frame */}
      <div className="bg-[#f0eee8] dark:bg-[#232219] px-4 py-3 border-b border-[#dcd9d3] dark:border-[#302e26] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="ml-3 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#14130f] border border-[#d4d1ca] dark:border-[#3a382d] text-xs font-mono text-[#6f6d66] dark:text-[#9c9a90]">
            <Lock className="w-3 h-3 text-emerald-600" />
            <span>https://{business.domain}</span>
            <button 
              onClick={handleCopyDomain}
              className="ml-1.5 hover:text-[#1c1b18] dark:hover:text-white"
              title="Copy URL"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Mockup sub-tabs */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setActiveTab('app_mockup')}
            className={`px-3 py-1 rounded-md transition-colors ${
              activeTab === 'app_mockup'
                ? 'bg-[#0a5c56] text-white font-medium'
                : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            Live Web Interface
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-3 py-1 rounded-md transition-colors ${
              activeTab === 'specs'
                ? 'bg-[#0a5c56] text-white font-medium'
                : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            Monetization & Economics
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-3 py-1 rounded-md transition-colors ${
              activeTab === 'assets'
                ? 'bg-[#0a5c56] text-white font-medium'
                : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
            }`}
          >
            Included Assets ({business.includedAssets.length})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {activeTab === 'app_mockup' && (
          <div>
            {/* Specific High-Fidelity UI based on previewType */}
            {business.previewType === 'telehealth' && (
              <div className="space-y-6">
                <div className="bg-[#f7f6f2] dark:bg-[#1f1e18] p-5 rounded-xl border border-[#dcd9d3] dark:border-[#302e26]">
                  <div className="flex items-center justify-between border-b border-[#dcd9d3] dark:border-[#302e26] pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0a5c56] text-white flex items-center justify-center font-bold text-sm">
                        EC
                      </div>
                      <span className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">EziCare International</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        14 Verified Caregivers on Standby (Bangkok & Cape Town)
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-[#14130f] p-4 rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 flex items-center justify-center font-bold">
                          SN
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-[#1c1b18] dark:text-[#eae8e1]">Sister Nontle M.</h5>
                          <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Certified ICU Nurse & Escort</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs flex justify-between text-[#6f6d66] dark:text-[#9c9a90]">
                        <span>Cape Town, SA</span>
                        <span className="font-semibold text-emerald-600">$28/hr (Billed in USD)</span>
                      </div>
                      <button className="mt-3 w-full py-1.5 rounded bg-[#0a5c56] text-white text-xs font-medium hover:bg-[#084a45]">
                        Instant Booking · GPS Tracked
                      </button>
                    </div>

                    <div className="bg-white dark:bg-[#14130f] p-4 rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 flex items-center justify-center font-bold">
                          AP
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-[#1c1b18] dark:text-[#eae8e1]">Anong P. (RN)</h5>
                          <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Senior Elder Care Specialist</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs flex justify-between text-[#6f6d66] dark:text-[#9c9a90]">
                        <span>Bangkok, TH</span>
                        <span className="font-semibold text-emerald-600">$24/hr (Billed in USD)</span>
                      </div>
                      <button className="mt-3 w-full py-1.5 rounded bg-[#0a5c56] text-white text-xs font-medium hover:bg-[#084a45]">
                        Instant Booking · GPS Tracked
                      </button>
                    </div>

                    <div className="bg-[#f0eee8] dark:bg-[#14130f] p-4 rounded-lg border border-[#e5e3dc] dark:border-[#2a2820] flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0a5c56] dark:text-[#4fa89e]">Family Portal</span>
                        <h5 className="font-bold text-sm mt-1 text-[#1c1b18] dark:text-[#eae8e1]">Cross-Border Billing Bridge</h5>
                        <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1">
                          Family pays via Stripe or Apple Pay in USD; local caregiver receives local currency direct deposit.
                        </p>
                      </div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-2">
                        Gross Spread: 42% per shift
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {business.previewType === 'invoicing_crypto' && (
              <div className="space-y-4">
                <div className="bg-[#f7f6f2] dark:bg-[#1f1e18] p-5 rounded-xl border border-[#dcd9d3] dark:border-[#302e26]">
                  <div className="flex items-center justify-between pb-3 border-b border-[#dcd9d3] dark:border-[#302e26]">
                    <span className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">EziPaid Multi-Rail Settlement</span>
                    <span className="text-xs font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-1 rounded-full">
                      Zero Capital Control Interception
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <span className="text-xs font-medium text-[#6f6d66] dark:text-[#9c9a90]">Client Invoice #INV-2026-89</span>
                      <div className="text-2xl font-bold font-mono text-[#1c1b18] dark:text-[#eae8e1] my-1">$4,850.00 USD</div>
                      <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Billed to: Acme Corp (London, UK)</p>
                      <div className="mt-3 flex gap-2">
                        <button className="flex-1 py-1 text-xs rounded bg-blue-600 text-white font-medium">Stripe Card Pay</button>
                        <button className="flex-1 py-1 text-xs rounded bg-emerald-600 text-white font-medium">USDC / USDT (Solana)</button>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820] space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#6f6d66] dark:text-[#9c9a90]">Western Client Pays:</span>
                        <span className="font-bold text-[#1c1b18] dark:text-[#eae8e1]">$4,850.00 USD</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#6f6d66] dark:text-[#9c9a90]">Platform Invoicing Fee (1.5%):</span>
                        <span className="font-bold text-emerald-600">+$72.75 USD</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#6f6d66] dark:text-[#9c9a90]">Settlement Destination:</span>
                        <span className="font-mono text-xs text-blue-600 dark:text-blue-400">0x71...8F29 (Arbitrum Vault)</span>
                      </div>
                      <div className="pt-2 border-t border-[#e5e3dc] dark:border-[#2a2820] text-xs text-emerald-600 font-medium">
                        ✓ Capital arrives in 4 seconds with zero bank wire delay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {business.previewType === 'tax_expat' && (
              <div className="space-y-4">
                <div className="bg-[#f7f6f2] dark:bg-[#1f1e18] p-5 rounded-xl border border-[#dcd9d3] dark:border-[#302e26]">
                  <div className="flex items-center justify-between pb-3 border-b border-[#dcd9d3] dark:border-[#302e26]">
                    <span className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">EziTax Expat Residency Compass</span>
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 px-2.5 py-1 rounded-full font-medium">
                      183-Day Physical Presence Shield
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Days Outside Home Country:</span>
                      <div className="text-xl font-bold text-emerald-600">224 / 365 Days</div>
                      <p className="text-[11px] text-emerald-700 mt-0.5">✓ Non-resident status preserved</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Current Tax Jurisdiction:</span>
                      <div className="text-xl font-bold text-[#1c1b18] dark:text-[#eae8e1]">Dubai Freezone (0%)</div>
                      <p className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90] mt-0.5">Corporate entity verified</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#14130f] rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Estimated Tax Savings:</span>
                      <div className="text-xl font-bold text-blue-600">$42,800 USD/yr</div>
                      <p className="text-[11px] text-[#6f6d66] dark:text-[#9c9a90] mt-0.5">Compared to 45% domestic rate</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fallback generic high-fidelity preview for other archetypes */}
            {['talent_recruiting', 'wealth_crypto', 'cyber_privacy', 'legal_offshore', 'logistics_freight', 'coworking_remote', 'va_placement'].includes(business.previewType) && (
              <div className="bg-[#f7f6f2] dark:bg-[#1f1e18] p-5 rounded-xl border border-[#dcd9d3] dark:border-[#302e26] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#dcd9d3] dark:border-[#302e26]">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#0a5c56] dark:text-[#4fa89e]" />
                    <span className="font-serif font-bold text-lg text-[#1c1b18] dark:text-[#eae8e1]">{business.name} Operating Portal</span>
                  </div>
                  <span className="text-xs bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] px-2.5 py-1 rounded-full font-medium">
                    {business.industry} Infrastructure
                  </span>
                </div>
                <p className="text-sm text-[#6f6d66] dark:text-[#9c9a90]">{business.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {business.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs bg-white dark:bg-[#14130f] p-3 rounded-lg border border-[#e5e3dc] dark:border-[#2a2820]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[#1c1b18] dark:text-[#eae8e1]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Summary Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#f0eee8] dark:bg-[#232219]">
              <div>
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90] block">Setup & Deployment Speed</span>
                <span className="text-sm font-bold text-[#1c1b18] dark:text-[#eae8e1] flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#0a5c56] dark:text-[#4fa89e]" />
                  {business.setupTime} to Live Cashflow
                </span>
              </div>
              <div>
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90] block">Target International Markets</span>
                <span className="text-xs font-semibold text-[#1c1b18] dark:text-[#eae8e1]">
                  {business.targetGeos.join(' · ')}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90] block">Turnkey Acquisition Price</span>
                <span className="text-lg font-bold text-[#0a5c56] dark:text-[#4fa89e]">
                  ${business.suggestedPrice.toLocaleString()} USD
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#dcd9d3] dark:border-[#302e26]">
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Operating Profit Margin</span>
                <div className="text-2xl font-serif font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {business.estimatedMargin}
                </div>
                <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-2">
                  High cash-efficiency through cross-border labor spread or SaaS subscriptions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#dcd9d3] dark:border-[#302e26]">
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Monthly JSEK Growth Retainer</span>
                <div className="text-2xl font-serif font-bold text-[#0a5c56] dark:text-[#4fa89e] mt-1">
                  ${business.monthlyRetainer.toLocaleString()}/mo
                </div>
                <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-2">
                  Includes ongoing research, ad management, positioning refinement, and tech upgrades.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#dcd9d3] dark:border-[#302e26]">
                <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Time-to-First Cashflow</span>
                <div className="text-2xl font-serif font-bold text-blue-600 dark:text-blue-400 mt-1">
                  7 to 14 Days
                </div>
                <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-2">
                  Campaigns launch immediately upon DNS & merchant rails transfer.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
              <h5 className="font-bold text-sm text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Why This Model Protects Against Sovereign Risk
              </h5>
              <p className="text-xs text-amber-800 dark:text-amber-300 mt-1 leading-relaxed">
                {business.internationalValue}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'assets' && (
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-[#1c1b18] dark:text-[#eae8e1]">
              Included Intellectual Property & Operational Assets
            </h4>
            <div className="space-y-2.5">
              {business.includedAssets.map((asset, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#e5e3dc] dark:border-[#2a2820]">
                  <div className="w-6 h-6 rounded-full bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#1c1b18] dark:text-[#eae8e1]">{asset}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Footer */}
        <div className="mt-6 pt-5 border-t border-[#dcd9d3] dark:border-[#302e26] flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#6f6d66] dark:text-[#9c9a90]">Interested in acquiring this ready venture?</span>
            <p className="text-sm font-bold text-[#1c1b18] dark:text-[#eae8e1]">
              Exclusive 1-of-1 Package · Transfer via Escrow.com
            </p>
          </div>
          <button
            onClick={() => onReserve(business)}
            className="px-6 py-2.5 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-sm font-semibold shadow-md flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <span>Inquire / Reserve {business.domain}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
