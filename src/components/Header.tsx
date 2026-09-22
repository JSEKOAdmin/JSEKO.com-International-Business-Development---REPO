import React from 'react';
import { Globe, BarChart3, ShieldCheck, Sparkles, Moon, Sun, ArrowUpRight, Compass } from 'lucide-react';
import { AppMode } from '../types';

interface HeaderProps {
  currentMode: AppMode;
  onModeChange: (mode: AppMode) => void;
  onOpenContact: (brand?: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onModeChange,
  onOpenContact,
  isDark,
  onToggleTheme,
  activeSection
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#f7f6f2]/90 dark:bg-[#14130f]/90 border-b border-[#dcd9d3] dark:border-[#302e26] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0a5c56] dark:bg-[#4fa89e] text-white flex items-center justify-center shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif text-xl font-bold tracking-tight text-[#1c1b18] dark:text-[#eae8e1] flex items-center gap-2">
                JSEKO.com
                <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full bg-[#0a5c56]/10 text-[#0a5c56] dark:bg-[#4fa89e]/20 dark:text-[#4fa89e] font-semibold">
                  Global Studio
                </span>
              </div>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#0a5c56] dark:text-[#4fa89e] mt-0.5">
                International Business Development
              </p>
            </div>
          </div>

          {/* Mode Switcher Banner / Tabs */}
          <div className="bg-[#f0eee8] dark:bg-[#1f1e18] p-1 rounded-xl border border-[#d4d1ca] dark:border-[#3a382d] flex items-center shadow-inner">
            <button
              id="mode-portal-btn"
              onClick={() => onModeChange('client_portal')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentMode === 'client_portal'
                  ? 'bg-white dark:bg-[#28261e] text-[#0a5c56] dark:text-[#4fa89e] shadow-sm font-semibold'
                  : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18] dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Client Portal & Ventures</span>
            </button>
            <button
              id="mode-analysis-btn"
              onClick={() => onModeChange('strategic_analysis')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentMode === 'strategic_analysis'
                  ? 'bg-[#0a5c56] text-white shadow-sm font-semibold'
                  : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18] dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="flex items-center gap-1.5">
                Strategic Analysis
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
            </button>
          </div>

          {/* Actions & Links */}
          <div className="flex items-center gap-3">
            {currentMode === 'client_portal' && (
              <nav className="hidden lg:flex items-center gap-6 mr-2">
                <a
                  href="#services"
                  className={`text-sm transition-colors ${
                    activeSection === 'services'
                      ? 'text-[#0a5c56] dark:text-[#4fa89e] font-semibold'
                      : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
                  }`}
                >
                  Consultancy
                </a>
                <a
                  href="#turnkey"
                  className={`text-sm transition-colors flex items-center gap-1 ${
                    activeSection === 'turnkey'
                      ? 'text-[#0a5c56] dark:text-[#4fa89e] font-semibold'
                      : 'text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18]'
                  }`}
                >
                  Turnkey Catalog
                  <span className="text-[10px] bg-[#0a5c56] text-white px-1.5 py-0.2 rounded font-mono">10 Ready</span>
                </a>
                <a
                  href="#exposure"
                  className="text-sm text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18] transition-colors"
                >
                  Risk Calculator
                </a>
                <a
                  href="#validator"
                  className="text-sm text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18] transition-colors"
                >
                  Idea Tester
                </a>
              </nav>
            )}

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-[#d4d1ca] dark:border-[#3a382d] text-[#6f6d66] dark:text-[#9c9a90] hover:text-[#1c1b18] dark:hover:text-white transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA */}
            <button
              id="start-project-btn"
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-sm font-medium transition-all shadow-sm hover:shadow"
            >
              <span>{currentMode === 'client_portal' ? 'Start a Project' : 'Book Strategic Review'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
