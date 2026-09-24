import React, { useState } from 'react';
import { 
  X, CheckCircle2, Shield, Send, Globe, DollarSign, Calendar 
} from 'lucide-react';
import { TurnkeyBusiness } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrand?: string | TurnkeyBusiness;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialBrand }) => {
  const brandName = typeof initialBrand === 'string' ? initialBrand : initialBrand?.name;
  const brandDomain = typeof initialBrand === 'object' ? initialBrand?.domain : undefined;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('South Africa');
  const [inquiryType, setInquiryType] = useState(brandName ? `Acquire Turnkey: ${brandName}` : 'Consultancy Sprint');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#1a1914] rounded-2xl max-w-xl w-full border border-[#dcd9d3] dark:border-[#302e26] p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6f6d66] hover:text-[#1c1b18] dark:hover:text-white p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a5c56] dark:text-[#4fa89e]">
                Direct Line to Gary & JSEK Advisory
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1] mt-1">
                {brandName ? `Inquire: ${brandName} (${brandDomain || ''})` : 'Start a Project / Strategic Review'}
              </h3>
              <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] mt-1">
                Discuss turnkey business acquisition, sovereign asset protection, or retained market research.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., David Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1">
                    Direct Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1">
                    Origin / Residence Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                  >
                    <option value="South Africa">South Africa</option>
                    <option value="Ukraine / Eastern Europe">Ukraine / Eastern Europe</option>
                    <option value="Thailand / Southeast Asia">Thailand / Southeast Asia</option>
                    <option value="United Kingdom / Europe">United Kingdom / Europe</option>
                    <option value="United States / Canada">United States / Canada</option>
                    <option value="Australia / New Zealand">Australia / New Zealand</option>
                    <option value="Latin America">Latin America</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1">
                    Primary Objective
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                  >
                    <option value="Turnkey Acquisition">Acquire a Turnkey Ready Business</option>
                    <option value="Existing Company Expansion">Existing Company International Expansion</option>
                    <option value="New Concept Validation">New Concept Validation Sprint</option>
                    <option value="Offshore Entity & Crypto Advisory">Offshore Entity & Crypto Rails Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6f6d66] dark:text-[#9c9a90] uppercase tracking-wider mb-1">
                  Specific Requirements / Business Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current situation, target timeline, or questions about the turnkey brand..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-[#f7f6f2] dark:bg-[#1f1e18] border border-[#d4d1ca] dark:border-[#3a382d] text-xs text-[#1c1b18] dark:text-[#eae8e1] focus:outline-none focus:border-[#0a5c56]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0a5c56] hover:bg-[#084a45] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to JSEK Advisory</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#6f6d66] dark:text-[#9c9a90]">
                Strict confidentiality. All asset transfers conducted via Escrow.com or Dan.com.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1c1b18] dark:text-[#eae8e1]">
              Inquiry Received
            </h3>
            <p className="text-xs text-[#6f6d66] dark:text-[#9c9a90] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1c1b18] dark:text-[#eae8e1]">{name}</strong>. Gary and the JSEK team have received your request regarding <span className="font-semibold text-[#0a5c56] dark:text-[#4fa89e]">{inquiryType}</span>. You will receive an email confirmation and direct calendar invitation at <strong className="text-[#1c1b18] dark:text-[#eae8e1]">{email}</strong> within 12 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-lg bg-[#0a5c56] text-white text-xs font-semibold"
              >
                Return to Overview
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
