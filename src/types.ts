export type AppMode = 'client_portal' | 'strategic_analysis';

export interface TurnkeyBusiness {
  id: string;
  name: string;
  domain: string;
  url?: string;
  image?: string;
  tagline: string;
  industry: 'Healthcare' | 'Fintech & Tax' | 'HR & Talent' | 'Sovereign Wealth & Crypto' | 'Legal & Compliance' | 'Logistics' | 'Operations' | 'Psychology-inspired wellbeing' | string;
  description: string;
  problemSolved: string;
  internationalValue: string;
  targetGeos: string[];
  setupTime: string;
  estimatedMargin: string;
  suggestedPrice: number;
  monthlyRetainer: number;
  badge: 'Featured' | 'High Demand' | 'Crypto Ready' | 'Rapid Launch' | 'Enterprise';
  includedAssets: string[];
  features: string[];
  sampleCustomers: string[];
  colorAccent: string;
  previewType: 'telehealth' | 'tax_expat' | 'talent_recruiting' | 'invoicing_crypto' | 'wealth_crypto' | 'cyber_privacy' | 'legal_offshore' | 'logistics_freight' | 'coworking_remote' | 'va_placement' | string;
}

export interface CountryRiskProfile {
  country: string;
  code: string;
  currency: string;
  capitalControlScore: number; // 1-10 (10 = severe restrictions)
  inflationRate: number; // percentage
  currencyDevaluationTrend: string;
  keyRestrictions: string[];
  whyOffshoreNeeded: string;
  recommendedBusinessFit: string[];
}

export interface SwotItem {
  title: string;
  description: string;
  impact: 'Critical' | 'High' | 'Moderate';
  mitigationOrAction?: string;
}

export interface StrategicRecommendation {
  id: string;
  category: 'Product Strategy' | 'GTM & Positioning' | 'Compliance & Risk' | 'Pricing & Monetization' | 'Technical Architecture';
  priority: 'Immediate (Week 1-2)' | 'Short-Term (Month 1)' | 'Medium-Term (Quarter 1)';
  title: string;
  overview: string;
  actionSteps: string[];
  expectedImpact: string;
}

export interface SiteContent {
  pricing?: {
    headerEyebrow?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    tier1TopLabel?: string;
    tier1Name?: string;
    tier1Price?: string;
    tier1Description?: string;
    tier1ButtonLabel?: string;
    tier2TopLabel?: string;
    tier2Name?: string;
    tier2Price?: string;
    tier2Description?: string;
    tier2ButtonLabel?: string;
    tier3TopLabel?: string;
    tier3Name?: string;
    tier3Price?: string;
    tier3Description?: string;
    tier3Feature?: string;
    tier3ButtonLabel?: string;
  };
}
