import { SwotItem, StrategicRecommendation } from '../types';

export const EXECUTIVE_SCORECARD = {
  overallScore: 8.8,
  verdict: 'High-Potential Venture with Compelling Macro Tailwinds',
  tagline: 'Transforming domain portfolio & marketing expertise into high-margin international sovereign diversification infrastructure.',
  dimensions: [
    { name: 'Market Demand & Pain Point Intensity', score: 9.4, desc: 'Extreme. Capital flight, sovereign currency risk, and geopolitical instability are at a 30-year high.' },
    { name: 'Value Proposition & Speed-to-Market', score: 9.0, desc: 'Unbeatable. Handing a founder a ready brand, domain, and operational infrastructure bypasses 6–12 months of setup friction.' },
    { name: 'Unit Economics & Margins', score: 8.8, desc: 'Exceptional. Upfront asset acquisition ($8.5k–$18k) paired with recurring monthly execution retainers ($2.5k–$4.5k/mo).' },
    { name: 'Defensibility & Moat', score: 7.5, desc: 'Portfolio of 100+ generic "Ezi-X" premium domains is a strong physical moat; execution quality and GTM playbook are the differentiator.' },
    { name: 'Execution & Regulatory Complexity', score: 6.8, desc: 'Requires careful jurisdictional compliance (anti-money laundering, tax residency, sanctions compliance).' }
  ]
};

export const SWOT_ANALYSIS: {
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
} = {
  strengths: [
    {
      title: 'Proprietary Portfolio of 100+ High-Recall Generic Domains',
      description: 'Owns an enviable collection of "Ezi-" brand assets (EziCare, EziTax, EziHire, EziPaid) that carry immediate trust, high CTR, and instant category authority.',
      impact: 'Critical',
      mitigationOrAction: 'Bundle domains strictly with turnkey software/GTM playbooks rather than selling raw names to multiply enterprise valuation by 10x.'
    },
    {
      title: 'Dual-Engine Revenue Model (Upfront Liquidity + Sticky Retainer)',
      description: 'Avoids the cashflow starvation of purely service-based agencies. Earns $10k-$18k upfront per turnkey setup, then locks clients into high-margin $2,500-$4,500/mo research and execution retainers.',
      impact: 'High'
    },
    {
      title: 'Deep Empathy with Real Sovereign Risk (First-Hand Founder Insight)',
      description: 'Gary’s lived experience in Thailand dealing with relocated Ukrainian, Russian, and South African entrepreneurs gives JSEK unmatched authentic positioning on capital preservation and cross-border cashflow.',
      impact: 'High'
    },
    {
      title: 'Frictionless Time-to-Market for Clients (48-Hour Deployment)',
      description: 'A traditional international startup takes 6 to 12 months to incorporate, brand, build, and connect payment rails. JSEK provides this operational scaffold out-of-the-box.',
      impact: 'Critical'
    }
  ],
  weaknesses: [
    {
      title: 'Potential Client Misalignment on Operational Responsibility',
      description: 'Clients may assume "Turnkey" means passive income where JSEK operates the daily service, rather than JSEK providing the infrastructure and marketing while the client handles domain fulfillment.',
      impact: 'Critical',
      mitigationOrAction: 'Explicitly define the division of labor in the onboarding contract: JSEK delivers Market Research, Tech Scaffold & GTM; the Client handles service delivery/operations.'
    },
    {
      title: 'Fulfillment Scalability Bottleneck on Developer/Partner (Axcel)',
      description: 'If 5 to 10 turnkey businesses sell simultaneously, building bespoke websites and integrations from scratch could overwhelm technical capacity.',
      impact: 'High',
      mitigationOrAction: 'Standardize modular boilerplate architectures (Next.js/React + Stripe + Supabase) so deploying a new brand takes hours, not weeks.'
    },
    {
      title: 'Brand Positioning Ambiguity (Consultancy vs. Venture Incubator)',
      description: 'Presenting as a conventional marketing consultancy while pitching turnkey offshore crypto/business assets can confuse traditional enterprise clients.',
      impact: 'Moderate',
      mitigationOrAction: 'Present JSEK as an "International Business Venture & Marketing Studio" with distinct client tracks.'
    }
  ],
  opportunities: [
    {
      title: 'Strategic Partnerships with Offshore Incorporation & Neo-Banks',
      description: 'Partner with Firstbase, Stripe Atlas, Mercury Bank, and offshore registered agents to bundle legal incorporation with every JSEK business sale, earning referral kickbacks.',
      impact: 'High',
      mitigationOrAction: 'Establish affiliate/partner agreements for $500–$1,000 additional margin per client.'
    },
    {
      title: 'Fractional Equity & Revenue-Share Upside Models',
      description: 'For promising founders with limited cash, offer a discounted setup fee in exchange for a 5–15% gross revenue royalty or equity stake in the offshore holding company.',
      impact: 'High'
    },
    {
      title: 'Crypto & Stablecoin Settlement Infrastructure as a Core Differentiator',
      description: 'While traditional agencies only know Stripe/PayPal, JSEK can offer dual fiat + non-custodial crypto rails (USDC/USDT), directly solving capital control freezes.',
      impact: 'Critical'
    },
    {
      title: 'Interactive Self-Serve "International Business Marketplace"',
      description: 'Creating a public catalog where entrepreneurs browse ready businesses, test financial models, and place deposits transforms JSEK into a micro-private equity exchange.',
      impact: 'High'
    }
  ],
  threats: [
    {
      title: 'International Sanctions & Banking Compliance Scrutiny',
      description: 'Working with clients from Russia, Ukraine, or high-risk jurisdictions carries strict KYC/AML liability. Inadvertently assisting sanctioned individuals can freeze merchant accounts.',
      impact: 'Critical',
      mitigationOrAction: 'Mandate third-party KYC verification (Sumsub or Persona) and focus on legitimate non-sanctioned entrepreneurs relocating abroad.'
    },
    {
      title: 'Payment Gateway Account Terminations (Stripe/PayPal Cross-Border)',
      description: 'Stripe frequently flags and freezes accounts of non-resident owners operating in emerging markets without established local entities.',
      impact: 'High',
      mitigationOrAction: 'Ensure all turnkey clients set up compliant US Wyoming/Delaware LLCs with dedicated EINs and multi-rail crypto fallback options.'
    },
    {
      title: 'Market Perception of "Turnkey Businesses" vs. Real Quality',
      description: 'The phrase "turnkey business" is sometimes associated with low-quality dropshipping scams on the internet.',
      impact: 'Moderate',
      mitigationOrAction: 'Lead with rigorous research, institutional design, live working prototypes, and emphasize hands-on strategic GTM execution.'
    }
  ]
};

export const STRATEGIC_RECOMMENDATIONS: StrategicRecommendation[] = [
  {
    id: 'rec-1',
    category: 'Product Strategy',
    priority: 'Immediate (Week 1-2)',
    title: 'Package the "Top 10 Flagship Turnkeys" with Working Live MVPs',
    overview: 'Instead of keeping domain names as passive ideas on paper, launch the top 10 concepts (EasyCare, EasyTax, EasyHire, EasyPaid, etc.) as interactive, working demo portals. When prospects see functional mockups with working checkout flows, conversion jumps 400%.',
    actionSteps: [
      'Deploy the 10 interactive concept preview environments built in this application.',
      'Document the exact asset deliverables for each brand (Domain, UI code, SOPs, GTM funnel).',
      'Set clear fixed tier pricing ($8,500 – $18,000 upfront).'
    ],
    expectedImpact: 'Immediate credibility, inbound buyer inquiries, and faster sales cycles.'
  },
  {
    id: 'rec-2',
    category: 'GTM & Positioning',
    priority: 'Immediate (Week 1-2)',
    title: 'Position as "International Sovereign Asset Diversification" Rather Than a Generic Agency',
    overview: 'Generic marketing agencies compete on price with thousands of freelancers. JSEK is in the high-ticket "Sovereign Financial Resilience" business—helping entrepreneurs hedge against domestic economic collapse by building offshore USD cashflow engines.',
    actionSteps: [
      'Refine the headline: "Clarity before campaigns. Turnkey global businesses built for international income."',
      'Target high-net-worth expat communities in Thailand, Dubai, Bali, Portugal, and Cape Town.',
      'Produce case studies illustrating how an offshore business bypasses domestic currency devaluation.'
    ],
    expectedImpact: 'Justifies $10k+ price points and attracts premium, non-price-sensitive founders.'
  },
  {
    id: 'rec-3',
    category: 'Compliance & Risk',
    priority: 'Short-Term (Month 1)',
    title: 'Establish a Turnkey Offshore Legal & Merchant Onboarding Pipeline',
    overview: 'Ensure every turnkey client is seamlessly routed into a legal US LLC or UAE Freezone entity with compliant corporate banking (Mercury / Brex / Wise) and crypto non-custodial wallets to prevent banking freezes.',
    actionSteps: [
      'Partner with US incorporation platforms (Stripe Atlas / Firstbase / Doola).',
      'Provide standardized contractor agreements and international IP assignment deeds.',
      'Implement strict KYC screening to filter out sanctioned parties.'
    ],
    expectedImpact: 'Zero merchant account freezes, bulletproof client retention, and $500–$1,500 partner revenue per deal.'
  },
  {
    id: 'rec-4',
    category: 'Pricing & Monetization',
    priority: 'Short-Term (Month 1)',
    title: 'Enforce the "Acquisition + 90-Day Execution Sprint" Bundle',
    overview: 'Never sell just the domain or website alone. Every turnkey sale should mandatorily include a 3-month JSEK Marketing Execution Retainer ($3,000/mo) to guarantee that the client actually generates revenue.',
    actionSteps: [
      'Structure packages as: $12,500 Upfront + $3,000/mo for 90 days ($21,500 total deal value).',
      'Assign dedicated GTM milestones: Month 1 Research/Setup, Month 2 Soft Launch/Ads, Month 3 Channel Optimization.',
      'Offer optional ongoing growth retainers post Month 3.'
    ],
    expectedImpact: 'Guarantees high lifetime value (LTV) per client and prevents buyer regret.'
  },
  {
    id: 'rec-5',
    category: 'Technical Architecture',
    priority: 'Medium-Term (Quarter 1)',
    title: 'Build a Modular Multi-Tenant Micro-SaaS Engine for Axcel',
    overview: 'Develop a standardized, reusable Next.js + Tailwind + Supabase template with plug-and-play modules (Authentication, Stripe Billing, Crypto Checkout, Admin Dashboard) so Axcel can spin up any of Gary’s 100 domain concepts in under 4 hours.',
    actionSteps: [
      'Create a shared component library for directory, booking, marketplace, and SaaS patterns.',
      'Automate DNS provisioning and Cloudflare SSL routing across the 100 domains.',
      'Utilize modern serverless stacks with zero fixed server overhead until monetization.'
    ],
    expectedImpact: 'Cuts developer delivery time by 85%, allowing Axcel to manage 20+ live client deployments effortlessly.'
  }
];

export const TARGET_PERSONAS = [
  {
    id: 'trapped_founder',
    title: 'The Sovereign-Hedging Domestic Founder',
    location: 'South Africa, Latin America, Nigeria, Turkey',
    painPoint: 'Wealth is trapped in a depreciating currency; local banks scrutinize foreign transactions; sovereign risk threatens family savings.',
    motivation: 'Desperately wants a legitimate offshore entity earning USD/EUR/GBP to hedge against domestic collapse.',
    idealFit: ['EasyCare', 'EasyPaid', 'EasyHire', 'CryptoConfidant'],
    willingnessToPay: '$10,000 – $25,000'
  },
  {
    id: 'relocated_expat',
    title: 'The Displaced Expat & Digital Nomad Operator',
    location: 'Thailand (Bangkok/Phuket), UAE (Dubai), Bali, Cyprus, Portugal',
    painPoint: 'Fled home country (Ukraine, Russia, Western high-tax zones); cannot easily access home banking; needs a clean international business to sustain a global lifestyle.',
    motivation: 'Needs a turnkey business that generates borderless cashflow, easily manageable from a laptop in Southeast Asia or Europe.',
    idealFit: ['EasyTax', 'EasyDesk', 'EasyShield', 'EasyStaff'],
    willingnessToPay: '$8,000 – $18,000'
  },
  {
    id: 'established_sme',
    title: 'The Established Domestic Business Seeking Global Expansion',
    location: 'Australia, UK, South Africa, Regional Exporters',
    painPoint: 'Domestic market has reached saturation; lack the in-house research and go-to-market expertise to enter North America or Europe.',
    motivation: 'Wants JSEK’s senior research and execution team to de-risk market entry and execute campaigns.',
    idealFit: ['JSEK Pillar 1: Existing Company Expansion & GTM Strategy'],
    willingnessToPay: '$15,000 – $40,000'
  }
];
