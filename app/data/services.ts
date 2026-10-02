export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  processSteps: { title: string; desc: string }[];
}

export const SERVICES: Service[] = [
  {
    id: "srv-01",
    slug: "architectural-advisory-custom-villas",
    title: "Architectural Advisory & Custom Built Villas",
    shortDesc: "End-to-end bespoke design, plot acquisition, and architectural curation tailored to high-net-worth individuals.",
    fullDesc:
      "We partner with India's leading modernist architects and structural engineers to turn your vision of bespoke living into reality. From acquiring prime land plots in Greater Noida and Noida Expressway to managing master planning, interior design, and municipal approvals.",
    icon: "Compass",
    benefits: [
      "Turnkey Design-Build Execution",
      "Custom Spatial & Landscape Architecture",
      "Direct Material Sourcing (Italian Marble, German Fenestration)",
      "Zero-Hassle Municipal & RERA Approvals"
    ],
    processSteps: [
      { title: "01. Plot Acquisition", desc: "Identifying prime land plots with clean title deeds and high appreciation." },
      { title: "02. Spatial Concepting", desc: "Co-creating blueprints with award-winning architectural masters." },
      { title: "03. Material & Craft Curation", desc: "Hand-selecting premium imported finishes, smart HVAC & automation." },
      { title: "04. Turnkey Delivery", desc: "Final inspection, structural certification, and white-glove handover." }
    ]
  },
  {
    id: "srv-02",
    slug: "luxury-private-brokerage",
    title: "Private Brokerage & Portfolio Acquisition",
    shortDesc: "Discreet off-market property acquisition and high-value sales advisory for premium real estate.",
    fullDesc:
      "Our private brokerage division manages off-market luxury acquisitions, penthouses, and commercial assets. We operate with strict confidentiality, ensuring buyers and sellers achieve transparent valuations without public market exposure.",
    icon: "KeyRound",
    benefits: [
      "Access to Exclusive Off-Market Inventory",
      "Complete Financial & Title Due Diligence",
      "Discreet Confidential Negotiations",
      "Seamless Legal Registration Support"
    ],
    processSteps: [
      { title: "01. Confidential Briefing", desc: "Understanding buyer criteria, liquidity timeline, and asset profile." },
      { title: "02. Off-Market Matching", desc: "Curating unlisted high-value villas, penthouses, and retail assets." },
      { title: "03. Title & Legal Clearance", desc: "Comprehensive 30-year title verification by senior advocates." },
      { title: "04. Transaction Closure", desc: "Structuring payments, escrow management, and deed registry." }
    ]
  },
  {
    id: "srv-03",
    slug: "property-valuation-legal-audit",
    title: "Valuation, Legal Audit & Title Clearance",
    shortDesc: "Institutional grade asset valuation, 30-year title check, and structural safety audits.",
    fullDesc:
      "Avoid legal pitfalls and title disputes. Dynamic Homes provides comprehensive legal due diligence, municipal encumbrance verification, RERA compliance audit, and fair-market valuation reports signed by certified appraisers.",
    icon: "ShieldCheck",
    benefits: [
      "30-Year Chain of Title Verification",
      "RERA & Local Authority Clearance Check",
      "Certified Fair-Market Valuation Reports",
      "Encumbrance & Tax Liability Clearance"
    ],
    processSteps: [
      { title: "01. Document Retrieval", desc: "Gathering allotment letters, registry deeds, and mutation certificates." },
      { title: "02. Authority Audit", desc: "Verifying records with Noida & Greater Noida Development Authorities." },
      { title: "03. Legal Opinion Report", desc: "Issuing formal clearance certified by senior High Court advocates." },
      { title: "04. Fair Valuation Certificate", desc: "Detailed market analysis comparing recent transaction records." }
    ]
  },
  {
    id: "srv-04",
    slug: "high-yield-portfolio-management",
    title: "High-Yield Portfolio & Asset Management",
    shortDesc: "Strategic capital deployment into high-appreciation commercial corridors and rental pre-leased assets.",
    fullDesc:
      "Maximize capital appreciation and generate consistent passive cashflow. We curate commercial real estate portfolios, pre-leased retail shops, and high-street assets along Yamuna Expressway and Noida Transit Nodes.",
    icon: "TrendingUp",
    benefits: [
      "Guaranteed 8% - 10% Net Rental Yield Assets",
      "Pre-Leased to Fortune 500 & MNC Tenants",
      "Quarterly Market Performance Reports",
      "Capital Re-Investment & Exit Advisory"
    ],
    processSteps: [
      { title: "01. Investment Profiling", desc: "Analyzing yield expectations, holding period, and tax efficiency." },
      { title: "02. Commercial Asset Selection", desc: "Filtering pre-leased retail, office space, and warehouse hubs." },
      { title: "03. Lease Escrow & Agreement", desc: "Ensuring long-term lock-in clauses and tri-party lease deeds." },
      { title: "04. Portfolio Optimization", desc: "Continuous asset monitoring and timely secondary market liquidation." }
    ]
  }
];
