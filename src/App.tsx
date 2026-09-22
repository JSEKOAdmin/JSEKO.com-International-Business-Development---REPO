import React, { useState, useEffect } from 'react';
import { TurnkeyBusiness } from './types';
import { TurnkeyShowcase } from './components/TurnkeyShowcase';
import { PricingPage } from './components/PricingPage';
import { HowWeCommunicatePage } from './components/HowWeCommunicatePage';
import { AboutUsPage } from './components/AboutUsPage';
import { TermsAndPrivacyPage } from './components/TermsAndPrivacyPage';
import { ArrowRight, ShieldCheck, Calendar, Globe } from 'lucide-react';
import heroMapImage from './assets/images/hero-map.png';
import mainLogoImage from './assets/images/main-logo.png';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'pricing' | 'how-we-communicate' | 'about' | 'terms'>('home');
  const [selectedBrand, setSelectedBrand] = useState<TurnkeyBusiness | string | undefined>(undefined);
  const [isAvailableSticky, setIsAvailableSticky] = useState(false);

  // Initialize theme from system preference
  useEffect(() => {
    const isDarkSystem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isDarkSystem ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Listen to browser navigation and sync with URL pathname (e.g. /jseko-terms)
  useEffect(() => {
    const handleUrlRoute = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/jseko-terms')) {
        setCurrentView('terms');
      } else if (path.startsWith('/about')) {
        setCurrentView('about');
      } else if (path.startsWith('/how-we-communicate')) {
        setCurrentView('how-we-communicate');
      } else if (path.startsWith('/pricing') || path.startsWith('/book')) {
        setCurrentView('pricing');
      } else if (path === '/' || path === '') {
        setCurrentView('home');
      }
    };

    handleUrlRoute();
    window.addEventListener('popstate', handleUrlRoute);
    return () => window.removeEventListener('popstate', handleUrlRoute);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Ensure scroll is immediately reset to the top whenever currentView switches
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentView]);

  const handleNavigateToPricing = (brand?: TurnkeyBusiness | string) => {
    if (brand) {
      setSelectedBrand(brand);
    }
    setCurrentView('pricing');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleBackHome = () => {
    setCurrentView('home');
    setMobileMenuOpen(false);
    if (window.location.pathname.startsWith('/jseko-terms')) {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleNavigateToHowWeCommunicate = () => {
    setCurrentView('how-we-communicate');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleNavigateToAbout = () => {
    setCurrentView('about');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleNavigateToTerms = () => {
    setCurrentView('terms');
    setMobileMenuOpen(false);
    if (!window.location.pathname.startsWith('/jseko-terms')) {
      window.history.pushState(null, '', '/jseko-terms');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-divider)] transition-all duration-300 shadow-xs">
        <div className="container-custom">
          
          {/* Default Header vs Collapsed Available Today Sticky Header */}
          {currentView === 'home' && isAvailableSticky ? (
            <div className="flex items-center justify-between py-2.5 sm:py-3 transition-all duration-300">
              <div className="flex flex-col pr-3 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-display text-base sm:text-lg lg:text-xl font-medium tracking-tight text-[var(--color-text)] whitespace-nowrap">
                    Available today.
                  </span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
                  <span className="hidden md:inline-block text-xs text-[var(--color-text-muted)] truncate max-w-[450px] lg:max-w-[650px]">
                    Browse pre-built, revenue-ready international assets for immediate acquisition, or contact us to build your custom structure.
                  </span>
                </div>
                <p className="text-[11px] sm:hidden text-[var(--color-text-muted)] truncate">
                  Pre-built international assets for immediate acquisition.
                </p>
              </div>

              {/* Actions right */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* How We Communicate Link */}
                <button
                  onClick={handleNavigateToHowWeCommunicate}
                  className="hidden md:inline-flex text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                >
                  How We Communicate
                </button>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors bg-transparent cursor-pointer"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'dark' ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  )}
                </button>

                {/* CTA Button */}
                <button 
                  onClick={() => handleNavigateToPricing()}
                  className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-[var(--radius-sm)] text-xs sm:text-[0.85rem] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer"
                >
                  Book a Conversation
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-3.5 sm:py-5 transition-all duration-300">
              {/* Logo & Sub-branding Kicker */}
              <button 
                onClick={handleBackHome}
                className="flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left group shrink-0"
              >
                <img
                  src={mainLogoImage}
                  alt="JSEKO.com Logo"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-[var(--color-border)] shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-display text-[1.15rem] sm:text-[1.35rem] font-medium tracking-[0.01em] text-[var(--color-text)] leading-none group-hover:text-[var(--color-primary)] transition-colors">
                    JSEKO.com
                  </span>
                  <span className="text-[9.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[var(--color-primary)] dark:text-[#5fd1c4] leading-tight mt-1">
                    International Business Development
                  </span>
                </div>
              </button>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* About Us Nav Link */}
                <button
                  onClick={handleNavigateToAbout}
                  className={`hidden sm:inline-flex text-xs sm:text-[0.875rem] font-medium transition-colors cursor-pointer ${
                    currentView === 'about'
                      ? 'text-[var(--color-primary)] font-semibold'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  About Us
                </button>

                {/* How We Communicate Nav Link */}
                <button
                  onClick={handleNavigateToHowWeCommunicate}
                  className={`hidden sm:inline-flex text-xs sm:text-[0.875rem] font-medium transition-colors cursor-pointer ${
                    currentView === 'how-we-communicate'
                      ? 'text-[var(--color-primary)] font-semibold'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  How We Communicate
                </button>

                {/* Theme Toggle - Always visible */}
                <button 
                  onClick={toggleTheme}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors bg-transparent cursor-pointer"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'dark' ? (
                    <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  )}
                </button>

                {/* Desktop CTA Button */}
                <button 
                  onClick={() => handleNavigateToPricing()}
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-[var(--radius-sm)] text-[0.9rem] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer"
                >
                  Book a Conversation
                </button>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="sm:hidden w-8 h-8 flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors cursor-pointer"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="6" x2="20" y2="6"></line>
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Mobile Collapsed Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="sm:hidden pt-2 pb-4 border-t border-[var(--color-divider)] flex flex-col gap-2 animate-fadeIn">
              <button 
                onClick={handleNavigateToAbout}
                className={`w-full text-left py-2 px-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors cursor-pointer ${
                  currentView === 'about'
                    ? 'bg-[var(--color-surface-offset)] text-[var(--color-primary)] font-semibold'
                    : 'text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-offset)]'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={handleNavigateToHowWeCommunicate}
                className={`w-full text-left py-2 px-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors cursor-pointer ${
                  currentView === 'how-we-communicate'
                    ? 'bg-[var(--color-surface-offset)] text-[var(--color-primary)] font-semibold'
                    : 'text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-offset)]'
                }`}
              >
                How We Communicate
              </button>
              <button 
                onClick={() => handleNavigateToPricing()}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-[var(--radius-sm)] text-sm font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer shadow-xs"
              >
                Book a Conversation
              </button>
            </div>
          )}

        </div>
      </header>

      {/* Main Content: Single Page View OR Book a Conversation / Pricing Page OR How We Communicate OR About Us OR Terms */}
      {currentView === 'pricing' ? (
        <main className="flex-1">
          <PricingPage
            onBackHome={handleBackHome}
            onOpenHowWeCommunicate={handleNavigateToHowWeCommunicate}
            onOpenAbout={handleNavigateToAbout}
            onOpenTerms={handleNavigateToTerms}
          />
        </main>
      ) : currentView === 'how-we-communicate' ? (
        <main className="flex-1">
          <HowWeCommunicatePage
            onBackHome={handleBackHome}
            onBookSession={() => handleNavigateToPricing()}
            onOpenAbout={handleNavigateToAbout}
          />
        </main>
      ) : currentView === 'about' ? (
        <main className="flex-1">
          <AboutUsPage
            onBackHome={handleBackHome}
            onExploreTurnkey={handleBackHome}
            onBookConversation={() => handleNavigateToPricing()}
          />
        </main>
      ) : currentView === 'terms' ? (
        <main className="flex-1">
          <TermsAndPrivacyPage
            onBackHome={handleBackHome}
            onBookConversation={() => handleNavigateToPricing()}
          />
        </main>
      ) : (
        <main className="flex-1">
          
          {/* Retained Turnkey International Businesses Section */}
          <TurnkeyShowcase 
            onReserve={handleNavigateToPricing} 
            onHeaderStickChange={setIsAvailableSticky}
            onOpenHowWeCommunicate={handleNavigateToHowWeCommunicate}
          />

          {/* 
            ======================================================================
            COMMENTED OUT: Hero, Services, Capability Strip, Process, and Contact
            ======================================================================

          // Hero Section
          <section className="relative overflow-hidden border-b border-[var(--color-divider)]">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-12 py-16 sm:py-24 lg:py-28">
                
                // Left Column: Copy & Actions
                <div className="lg:col-span-7">
                  <div className="text-xs tracking-[0.08em] uppercase text-[var(--color-primary)] font-semibold mb-4">
                    Research · Strategy · Marketing
                  </div>

                  <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-[-0.01em] text-[var(--color-text)] mb-6 max-w-[14ch]">
                    Clarity before campaigns.
                  </h1>

                  <p className="text-base sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-[46ch] mb-8">
                    JSEK Marketing helps companies grow market share and launch new ventures through disciplined research, sharp strategy, and marketing built to perform — domestically and internationally.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <button 
                      onClick={() => handleNavigateToPricing()}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-sm)] text-[0.95rem] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors cursor-pointer"
                    >
                      Book a Conversation
                    </button>
                    <a 
                      href="#services" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-sm)] text-[0.95rem] font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      See what we do
                    </a>
                  </div>
                </div>

                // Right Column: Hero Graphic (Global Sovereign Corridors Photo) - Hidden on Mobile
                <div className="hidden lg:block lg:col-span-5">
                  <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] group">
                    // Hero Map Photo
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#151412]">
                      <img
                        src={heroMapImage}
                        alt="Global Cross-Border Market Corridors Map"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      // Subtle Vignette & Gradient Overlays for High Contrast
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      // Floating Hub Badges
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white text-[11px] font-mono pointer-events-none">
                        <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-white/90 flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                          Global Reach · Day One
                        </span>
                      </div>
                    </div>

                    // Visual Map Footer Bar
                    <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--color-divider)] bg-[var(--color-surface)] text-[11px] text-[var(--color-text-muted)]">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span>Ready-to-Operate Ventures</span>
                      </span>
                      <span className="font-medium text-[var(--color-primary)] font-mono">
                        USD · EUR · Crypto Rails
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          // Services Section
          <section id="services" className="py-20">
            <div className="container-custom">
              
              <div className="section-label text-xs tracking-[0.08em] uppercase font-semibold text-[var(--color-primary)] mb-3">
                What we do
              </div>

            <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-[-0.01em] text-[var(--color-text)] max-w-[20ch] leading-[1.1]">
              Two paths. One discipline.
            </h2>

            <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-[56ch] mt-4 leading-relaxed">
              Whether you're defending ground you already hold or building something entirely new, every engagement starts with the same rigor: understand the market before acting on it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
              
              // Pillar 01
              <div className="border-t border-[var(--color-divider)] pt-7">
                <div className="font-display text-sm text-[var(--color-text-faint)] mb-3">
                  01
                </div>
                <h3 className="font-display font-medium text-2xl text-[var(--color-text)] mb-3">
                  Grow existing companies
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-[48ch] mb-6 leading-relaxed">
                  For established businesses, we identify where market share is being left on the table and build the strategy and execution to claim it.
                </p>
                <ul className="list-none flex flex-col gap-2.5">
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Competitive and market positioning research</span>
                  </li>
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Go-to-market and channel strategy refinement</span>
                  </li>
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Domestic and international expansion planning</span>
                  </li>
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Direct, hands-on marketing execution</span>
                  </li>
                </ul>
              </div>

              // Pillar 02
              <div className="border-t border-[var(--color-divider)] pt-7">
                <div className="font-display text-sm text-[var(--color-text-faint)] mb-3">
                  02
                </div>
                <h3 className="font-display font-medium text-2xl text-[var(--color-text)] mb-3">
                  Launch new concepts
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-[48ch] mb-6 leading-relaxed">
                  For new products and ventures, we validate the opportunity and build the roadmap to take an idea from concept to market-ready launch.
                </p>
                <ul className="list-none flex flex-col gap-2.5">
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Market sizing and opportunity validation</span>
                  </li>
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Brand strategy and positioning development</span>
                  </li>
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Go-to-market planning and launch sequencing</span>
                  </li>
                  <li className="text-sm text-[var(--color-text)] flex gap-2.5 items-baseline">
                    <span className="text-[var(--color-primary)] flex-shrink-0">—</span>
                    <span>Cross-border market entry strategy</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        // Capability Strip
        <div className="bg-[var(--color-surface-offset)] border-y border-[var(--color-divider)]">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              
              <div className="p-6 sm:p-8 lg:border-r border-[var(--color-divider)]">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-primary)] font-medium">
                  Research
                </div>
                <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5">
                  Grounded in data, not assumption
                </div>
              </div>

              <div className="p-6 sm:p-8 border-l border-b sm:border-b-0 lg:border-l-0 lg:border-r border-[var(--color-divider)]">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-primary)] font-medium">
                  Strategy
                </div>
                <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5">
                  Clear direction before spend
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t sm:border-t-0 lg:border-r border-[var(--color-divider)]">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-primary)] font-medium">
                  Marketing
                </div>
                <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5">
                  Execution that moves the needle
                </div>
              </div>

              <div className="p-6 sm:p-8 border-l border-t sm:border-t-0 border-[var(--color-divider)]">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-primary)] font-medium">
                  Global
                </div>
                <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5">
                  Domestic and international reach
                </div>
              </div>

            </div>
          </div>
        </div>

        // Process Section
        <section id="process" className="py-20 border-t border-[var(--color-divider)]">
          <div className="container-custom">
            
            <div className="section-label text-xs tracking-[0.08em] uppercase font-semibold text-[var(--color-primary)] mb-3">
              How we work
            </div>

            <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-[-0.01em] text-[var(--color-text)] max-w-[24ch] leading-[1.1]">
              A straightforward process, applied rigorously.
            </h2>

            <div className="mt-12 sm:mt-16 flex flex-col">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-[var(--color-divider)] items-baseline">
                <div className="md:col-span-2 font-display text-2xl text-[var(--color-text-faint)]">
                  01
                </div>
                <div className="md:col-span-3">
                  <h4 className="font-display font-medium text-xl text-[var(--color-text)]">
                    Research
                  </h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-[56ch] leading-relaxed">
                    We study the market, the competition, and the customer before recommending a single tactic.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-[var(--color-divider)] items-baseline">
                <div className="md:col-span-2 font-display text-2xl text-[var(--color-text-faint)]">
                  02
                </div>
                <div className="md:col-span-3">
                  <h4 className="font-display font-medium text-xl text-[var(--color-text)]">
                    Strategy
                  </h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-[56ch] leading-relaxed">
                    We translate findings into a clear plan — positioning, channels, and priorities defined.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-y border-[var(--color-divider)] items-baseline">
                <div className="md:col-span-2 font-display text-2xl text-[var(--color-text-faint)]">
                  03
                </div>
                <div className="md:col-span-3">
                  <h4 className="font-display font-medium text-xl text-[var(--color-text)]">
                    Execution
                  </h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-[56ch] leading-relaxed">
                    We act as a direct extension of your team or lead the launch independently, start to finish.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        // Contact Section — Button Only, No Form
        <section id="contact" className="py-20">
          <div className="container-custom">
            
            <div className="bg-[var(--color-text)] text-[var(--color-text-inverse)] rounded-[var(--radius-lg)] p-8 sm:p-14 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
              
              <div className="space-y-4 max-w-2xl">
                <h2 className="font-display font-medium text-3xl sm:text-5xl text-[var(--color-text-inverse)] leading-[1.08] max-w-[16ch]">
                  Ready to grow or launch?
                </h2>
                <p className="text-sm sm:text-base text-[var(--color-text-faint)] max-w-xl leading-relaxed">
                  Every conversation is confidential and educational — a space to think clearly through your situation, priorities, and options.
                </p>
                
                <div className="pt-2 flex items-center gap-6 flex-wrap text-xs text-[var(--color-text-faint)]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                    Private 1-on-1 Advisory
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                    20-Minute Introductory Sessions
                  </span>
                </div>
              </div>

              // Direct Action Button
              <div className="flex items-center w-full md:w-auto flex-shrink-0">
                <button
                  onClick={() => handleNavigateToPricing()}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold transition-all shadow-lg hover:scale-[1.02] cursor-pointer whitespace-nowrap w-full sm:w-auto"
                >
                  <span>Book a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </section>
        */}

      </main>
      )}

      {/* Footer */}
      <footer className="border-t border-[var(--color-divider)] py-8 sm:py-12">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={mainLogoImage}
                alt="JSEKO.com Logo"
                referrerPolicy="no-referrer"
                className="w-6 h-6 rounded-full object-cover border border-[var(--color-border)] opacity-80 shrink-0"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-xs font-semibold text-[var(--color-text)]">
                  JSEKO.com
                </span>
                <span className="hidden sm:inline text-xs text-[var(--color-text-faint)]">·</span>
                <span className="text-[10.5px] font-sans font-medium uppercase tracking-[0.12em] text-[var(--color-primary)] dark:text-[#5fd1c4]">
                  International Business Development
                </span>
                <span className="text-[11px] text-[var(--color-text-faint)] block sm:inline mt-0.5 sm:mt-0">
                  &copy; 2026.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="mailto:hello@jsekmarketing.com" 
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                hello@jsekmarketing.com
              </a>
              <button 
                onClick={() => {
                  if (currentView !== 'home') handleBackHome();
                  setTimeout(() => {
                    const el = document.getElementById('turnkey');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                Turnkey
              </button>
              <button 
                onClick={handleNavigateToAbout}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button 
                onClick={handleNavigateToHowWeCommunicate}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                How We Communicate
              </button>
              <button 
                onClick={() => handleNavigateToPricing()}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                Book a Conversation
              </button>
              <button 
                onClick={handleNavigateToTerms}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                Terms & Privacy
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
