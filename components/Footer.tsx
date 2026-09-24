import React from 'react';
import { Globe, Mail, Shield, ArrowUpRight } from 'lucide-react';
import { AppMode } from '../types';

interface FooterProps {
  onModeChange: (mode: AppMode) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onModeChange, onOpenContact }) => {
  return (
    <footer className="bg-[#14130f] text-[#eae8e1] border-t border-[#302e26] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#302e26]">
          
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0a5c56] text-white flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                JSEK Marketing
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#9c9a90] leading-relaxed max-w-sm">
              International business marketing consultancy specializing in research, strategy, and execution. Blending hands-on marketing implementation with turnkey international business infrastructure.
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#9c9a90]">Direct Inquiries:</span>
              <a href="mailto:hello@jsekmarketing.com" className="block text-sm font-mono font-medium text-emerald-400 hover:underline">
                hello@jsekmarketing.com
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Consulting & Ventures
            </h4>
            <ul className="space-y-2 text-xs text-[#9c9a90]">
              <li><a href="#services" className="hover:text-white transition-colors">Supporting Existing Companies</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Launching New Concepts</a></li>
              <li><a href="#turnkey" className="hover:text-white transition-colors">Turnkey Business Catalog (10 Ready)</a></li>
              <li><a href="#exposure" className="hover:text-white transition-colors">Sovereign Risk Calculator</a></li>
              <li><a href="#validator" className="hover:text-white transition-colors">Idea Pressure-Tester</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Strategic Evaluation Deck
            </h4>
            <p className="text-xs text-[#9c9a90] leading-relaxed">
              Access the complete SWOT analysis, pro-forma cashflow models, and 90-day execution roadmap prepared for Gary & Axcel.
            </p>
            <button
              onClick={() => {
                onModeChange('strategic_analysis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-xs font-semibold transition-colors"
            >
              <span>View Executive Analysis Deck</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#605e54] gap-4">
          <p>© {new Date().getFullYear()} JSEK Marketing. Research, Strategy, and Turnkey Sovereign Infrastructure.</p>
          <div className="flex items-center gap-6">
            <span>Bangkok · Cape Town · London · Wyoming</span>
            <span>Confidential Asset Transfers via Escrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
