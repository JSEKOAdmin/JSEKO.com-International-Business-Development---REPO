import { CountryRiskProfile } from '../types';

export const COUNTRY_RISK_PROFILES: CountryRiskProfile[] = [
  {
    country: 'South Africa',
    code: 'ZA',
    currency: 'ZAR (South African Rand)',
    capitalControlScore: 8.5,
    inflationRate: 5.4,
    currencyDevaluationTrend: '-38% vs USD over 5 years; strict Reserve Bank (SARB) approvals required for capital export beyond single discretionary allowances.',
    keyRestrictions: [
      'Single Discretionary Allowance (SDA) capped at R1,000,000 per calendar year',
      'Foreign Investment Allowance (FIA) capped at R10M and requires complex SARS Tax Compliance Status PIN',
      'Mandatory reporting of foreign earnings; local banks hold or scrutinize inbound wires',
      'Power grid instability (loadshedding) & sovereign sovereign downgrade risks'
    ],
    whyOffshoreNeeded: 'Local wealth is trapped in a rapidly depreciating currency with severe barriers to external diversification. Creating an offshore corporate presence with USD/EUR cashflows circumvents SARB traps entirely.',
    recommendedBusinessFit: ['EasyCare', 'EasyPaid', 'EasyHire', 'EasyTax', 'CryptoConfidant']
  },
  {
    country: 'Ukraine / Eastern Europe',
    code: 'UA',
    currency: 'UAH (Ukrainian Hryvnia)',
    capitalControlScore: 9.0,
    inflationRate: 8.2,
    currencyDevaluationTrend: 'Martial law currency restrictions; severe limits on foreign currency purchases and cross-border bank card withdrawals.',
    keyRestrictions: [
      'National Bank of Ukraine (NBU) limits cross-border card transactions to protect reserves',
      'Men aged 18-60 restricted from leaving; millions of families displaced across Europe and Asia',
      'Domestic banking vulnerability during grid attacks and territorial threats',
      'Need for borderless, non-custodial capital mobility to support families abroad'
    ],
    whyOffshoreNeeded: 'Living in relocation hubs (like Thailand, Poland, UAE) requires continuous foreign income streams in USD or USDT that cannot be frozen by wartime banking decrees.',
    recommendedBusinessFit: ['CryptoConfidant', 'EasyPaid', 'EasyHire', 'EasyShield', 'EasyDesk']
  },
  {
    country: 'Russia / CIS Region',
    code: 'RU',
    currency: 'RUB (Russian Ruble)',
    capitalControlScore: 9.8,
    inflationRate: 8.8,
    currencyDevaluationTrend: 'SWIFT disconnect for major banks; Western financial embargoes; total blocking of Visa/Mastercard abroad.',
    keyRestrictions: [
      'Complete cutoff from Western banking rails (SWIFT, Stripe, PayPal, Apple Pay)',
      'Punitive reporting of foreign bank accounts to domestic tax authorities (FNS)',
      'Severe limits on cash export and international wire transfers to "unfriendly" states',
      'High risk of asset forfeiture or forced conversion to sovereign bonds'
    ],
    whyOffshoreNeeded: 'Hundreds of thousands of skilled tech professionals relocated to Thailand, Bali, Dubai, Armenia, Georgia. They need clean, compliant, Western-facing turnkey brands to bill global clients legitimately.',
    recommendedBusinessFit: ['EasyLegal', 'EasyTax', 'EasyPaid', 'CryptoConfidant', 'EasyHire']
  },
  {
    country: 'Argentina & Latin America',
    code: 'AR',
    currency: 'ARS (Argentine Peso)',
    capitalControlScore: 8.8,
    inflationRate: 65.0,
    currencyDevaluationTrend: 'Historic triple-digit inflation swings; strict "Cepo Cambiario" limits legal USD purchases to $200/month.',
    keyRestrictions: [
      'Heavy gap between official and Blue Dollar rates with punitive currency conversion rules',
      'Mandatory pesification of export service earnings within 5 days',
      'Extreme volatility wiping out domestic cash reserves and purchasing power'
    ],
    whyOffshoreNeeded: 'Earning local currency is economic suicide. Founders must hold all client billing offshore in Wyoming/Delaware LLCs with direct stablecoin or USD settlements.',
    recommendedBusinessFit: ['EasyPaid', 'EasyHire', 'EasyStaff', 'CryptoConfidant']
  },
  {
    country: 'Nigeria / West Africa',
    code: 'NG',
    currency: 'NGN (Nigerian Naira)',
    capitalControlScore: 8.2,
    inflationRate: 31.5,
    currencyDevaluationTrend: 'Naira devalued by over 70% in recent cycles; commercial banks routinely suspend international card spending.',
    keyRestrictions: [
      'Central Bank of Nigeria (CBN) FX restrictions on non-essential imports',
      'International card limits capped at $20-$100/month on standard accounts',
      'Massive brain drain of tech talent requiring foreign employer sponsorship or contractor rails'
    ],
    whyOffshoreNeeded: 'Digital agencies and service providers must invoice through US/UK legal wrappers and crypto rails to bypass local FX scarcity.',
    recommendedBusinessFit: ['EasyHire', 'EasyStaff', 'EasyPaid', 'EasyLegal']
  },
  {
    country: 'United Kingdom / Western Europe',
    code: 'GB',
    currency: 'GBP (£)',
    capitalControlScore: 2.5,
    inflationRate: 2.8,
    currencyDevaluationTrend: 'Abolition of Non-Dom tax status; rising corporation taxes (25%); wealth flight to Dubai, Switzerland, and Southern Europe.',
    keyRestrictions: [
      'Strict IR35 contractor tax rules squeezing freelancer margins',
      'Exit taxes and aggressive worldwide income taxation',
      'High operational overhead making local service businesses uncompetitive'
    ],
    whyOffshoreNeeded: 'UK founders seek international holding structures (UAE, US LLC) and turnkey digital service businesses that can be run remotely from tax-favorable jurisdictions.',
    recommendedBusinessFit: ['EasyTax', 'EasyCare', 'EasyStaff', 'EasyShip']
  }
];
