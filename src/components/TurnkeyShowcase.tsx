import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { TURNKEY_BUSINESSES } from '../data/turnkeyBusinesses';
import { TurnkeyBusiness } from '../types';

interface TurnkeyShowcaseProps {
  onReserve?: (business: TurnkeyBusiness) => void;
  onHeaderStickChange?: (isAvailableSectionSticky: boolean) => void;
  onOpenHowWeCommunicate?: () => void;
}

export const TurnkeyShowcase: React.FC<TurnkeyShowcaseProps> = ({ onReserve, onHeaderStickChange, onOpenHowWeCommunicate }) => {
  const [selectedIndustry] = useState<string>('All');
  const [searchQuery] = useState<string>('');
  const [selectedBusiness, setSelectedBusiness] = useState<TurnkeyBusiness>(TURNKEY_BUSINESSES[0]);
  const availableHeaderRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!availableHeaderRef.current) return;
      const rect = availableHeaderRef.current.getBoundingClientRect();
      // When the top of "Available today" section reaches near the top of viewport (e.g. <= 80px)
      // and while the section is still in view
      const isPast = rect.top <= 75;
      onHeaderStickChange?.(isPast);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onHeaderStickChange]);

  const filteredBusinesses = TURNKEY_BUSINESSES.filter(biz => {
    const matchesIndustry = selectedIndustry === 'All' || biz.industry === selectedIndustry;
    const matchesSearch = biz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          biz.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          biz.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          biz.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <section id="turnkey" className="pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
      <div className="container-custom">
        
        {/* Unified Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Eyebrow, Heading, Description */}
          <div className="lg:col-span-7">
            <div className="section-label text-xs tracking-[0.08em] uppercase font-semibold text-[var(--color-primary)] mb-3">
              SECURE INTERNATIONAL INCOME & SOVEREIGNTY
            </div>
            
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-[-0.01em] text-[var(--color-text)] leading-[1.08] mb-6">
              A Direct Path to International Markets and Income.
            </h1>

            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
              Global existing and turnkey businesses and website infrastructure saving months of setup between an idea and an international income stream. We help you establish a global business identity from day one while reducing reliance on local business conditions and political uncertainty.
            </p>
          </div>

          {/* Right Column: Callout Context Card */}
          <div className="lg:col-span-5 lg:pt-8">
            <div className="bg-[var(--color-surface-offset)] border border-[var(--color-border)] p-6 sm:p-7 rounded-xl shadow-xs">
              <h4 className="font-display text-base sm:text-xl font-medium tracking-tight text-[var(--color-text)] max-w-2xl leading-[1.15] mb-2">
                Built Beyond Borders.
              </h4>
              <p className="text-sm sm:text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">
                True financial independence requires a business presence beyond local borders. JSEKO.com provides the infrastructure for a resilient, cross-border business you can operate wherever you reside. When needed, we provide ongoing research, development, strategy, and marketing support.
              </p>
            </div>
          </div>

        </div>

        {/* Filter and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[var(--color-divider)] pb-6">
          
          {/* Industry Filter Pills 
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedIndustry === ind
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-surface-offset)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>*/}

          {/* Search Input 
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-[var(--color-text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search venture or domain..."
              className="pl-8 pr-3 py-1.5 text-xs rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-primary)] w-full"
            />
          </div>*/}

        </div>

        {/* Interactive Sandbox for currently selected business 
        <div className="mt-8 mb-14">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="text-[var(--color-text-muted)]">
              Interactive Prototype Preview: <strong className="text-[var(--color-primary)]">{selectedBusiness.domain}</strong>
            </span>
            <span className="text-[var(--color-text-faint)]">
              Click any venture card below to switch live sandbox
            </span>
          </div>
          <InteractiveMockupViewer business={selectedBusiness} onReserve={onReserve} />
        </div>*/}

        <div ref={availableHeaderRef} className="mb-8 scroll-mt-24">
        <br/>
          <h4 className="font-display text-3xl sm:text-4xl lg:text-[2.25rem] font-medium tracking-tight text-[var(--color-text)] max-w-2xl leading-[1.15] mb-2">
            Buy today.
          </h4>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            Browse pre-built, turnkey international assets for immediate acquisition, or contact us to build your custom structure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((biz) => {
            const isSelected = selectedBusiness.id === biz.id;
            const targetUrl = biz.url
              ? (biz.url.startsWith('http://') || biz.url.startsWith('https://') ? biz.url : `https://${biz.url}`)
              : (biz.domain.startsWith('http://') || biz.domain.startsWith('https://') ? biz.domain : `https://${biz.domain}`);
            const displayDomain = biz.domain.replace(/^https?:\/\//, '').replace(/\/$/, '');

            return (
              <div
                key={biz.id}
                onClick={() => setSelectedBusiness(biz)}
                className={`p-6 rounded-xl bg-white dark:bg-[#2a2822] border transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:hover:bg-[#323029] ${
                  isSelected
                    ? 'border-[var(--color-primary)] shadow-md ring-1 ring-[var(--color-primary)]'
                    : 'border-[var(--color-border)]/80 dark:border-[#474338] hover:border-[var(--color-primary)]/70 dark:hover:border-[var(--color-primary)]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:bg-[var(--color-primary)]/20 dark:text-[#5fd1c4] border border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30">
                      {biz.industry}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onReserve?.(biz);
                      }}
                      title={`Inquire or buy ${biz.name}`}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#c85a2b]/10 text-[#c85a2b] hover:bg-[#c85a2b]/20 dark:bg-[#c85a2b]/20 dark:text-[#ea7e52] dark:hover:bg-[#c85a2b]/30 border border-[#c85a2b]/25 dark:border-[#c85a2b]/40 transition-colors cursor-pointer"
                    >
                      For Sale
                    </button>
                  </div>

                  <h3 className="text-xl font-medium text-[var(--color-text)] dark:text-[#faf9f5] mb-1">
                    {biz.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[var(--color-primary)] dark:text-[#5fd1c4] mb-3 tracking-wide">
                    {biz.tagline}
                  </p>

                  {biz.image && (
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Visit ${biz.name} in a new tab`}
                      aria-label={`Visit ${biz.name} live website in new tab`}
                      className="group/thumb block mb-4 relative rounded-lg overflow-hidden border border-[var(--color-border)] dark:border-[#423e34] bg-neutral-950 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-[var(--color-primary)] cursor-pointer"
                    >
                      {/* Browser mockup top bar */}
                      <div className="bg-[var(--color-surface-hover)] dark:bg-[#2c2820] border-b border-[var(--color-border)] dark:border-[#423e34] px-3 py-1.5 flex items-center justify-between text-[11px] text-[var(--color-text-muted)] transition-colors group-hover/thumb:bg-[var(--color-surface-offset)]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-yellow-400/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400/80 inline-block" />
                        </div>
                        <div className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[var(--color-bg)]/80 border border-[var(--color-divider)] text-[var(--color-text-muted)] group-hover/thumb:text-[var(--color-primary)] group-hover/thumb:border-[var(--color-primary)]/40 max-w-[180px] truncate text-center transition-colors">
                          https://{displayDomain.startsWith('www.') ? displayDomain : `www.${displayDomain}`}
                        </div>
                        <div className="w-6 flex items-center justify-end">
                          <ExternalLink className="w-3 h-3 text-[var(--color-text-muted)] group-hover/thumb:text-[var(--color-primary)] transition-colors" />
                        </div>
                      </div>

                      {/* Screenshot image with hover overlay */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                        <img
                          src={biz.image}
                          alt={`${biz.name} hero preview`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/thumb:scale-[1.04]"
                        />

                        {/* Subtle hover overlay badge */}
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/85 text-white border border-white/20 shadow-lg transform translate-y-1 group-hover/thumb:translate-y-0 transition-transform duration-200">
                            <span>Visit Website</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          </span>
                        </div>
                      </div>
                    </a>
                  )}

                  <p className="text-xs text-[var(--color-text-muted)] dark:text-[#d6d3c9] line-clamp-3 leading-relaxed">
                    {biz.description}
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-divider)] dark:border-[#423e34] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onReserve?.(biz);
                    }}
                    className="inline-flex items-center justify-center min-w-[70px] px-4 py-1.5 text-xs font-medium rounded bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer"
                  >
                    <span>Buy</span>
                  </button>

                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center min-w-[70px] gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
