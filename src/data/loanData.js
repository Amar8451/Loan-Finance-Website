export const contactInfo = {
  companyName: "Siyaram Loans & Finance",
  tagline: "Empowering Your Dreams, Financing Your Future.",
  proprietor: "Ramesh Sawant",
  phone: "+91 82919 19192",
  phoneClean: "+918291919192",
  email: "siyaramloans4u@gmail.com",
  experience: "Since 2012",
  disbursement: "₹10,000 Cr+",
  partnersCount: "270+",
  coverage: "Pan-India Cases",
  customerFees: "0%",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Loan Solutions", href: "#loan-solutions" },
  { name: "Balance Transfer", href: "#balance-transfer" },
  { name: "Case Study", href: "#case-study" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "₹10,000 Cr+", label: "Disbursement Done", prefix: "₹", targetNumber: 10000, suffix: " Cr+", subtext: "Processed across institutional networks" },
  { value: "270+", label: "Banking & Financial Partners", targetNumber: 270, suffix: "+", subtext: "National & private institutional reach" },
  { value: "Since 2012", label: "Industry Experience", targetNumber: 2012, isYear: true, subtext: "14+ years of financial consulting" },
  { value: "0%", label: "Customer Fees", targetNumber: 0, suffix: "%", subtext: "100% zero-cost consultation guarantee" },
];

export const trustGuaranteeFeatures = [
  {
    number: "01",
    title: "Zero Customer Fees",
    description: "No consulting or customer service fees charged to the applicant at any stage of loan advisory.",
    icon: "ShieldCheck",
    badge: "100% Free"
  },
  {
    number: "02",
    title: "270+ Institutional Partners",
    description: "Direct access to an extensive ecosystem of leading national banking and non-banking financial institutions.",
    icon: "Building2",
    badge: "Wide Network"
  },
  {
    number: "03",
    title: "Transparent Options",
    description: "Loan terms, rate comparisons, and sanction structures are presented with complete upfront clarity.",
    icon: "Eye",
    badge: "Clear Terms"
  },
  {
    number: "04",
    title: "Client-First Approach",
    description: "Dedicated focus on identifying the most suitable financing profile without backend customer surcharges.",
    icon: "Users",
    badge: "Unbiased Advisory"
  },
];

export const revenueModelSteps = [
  {
    step: "01",
    title: "Institutional Compensation",
    description: "Siyaram Loans & Finance is compensated directly by panel banking and financial institutional partners upon successful matching.",
    icon: "Landmark",
    highlight: "Direct Partner Payouts"
  },
  {
    step: "02",
    title: "No Hidden Markups",
    description: "No backend processing premiums, evaluation upcharges, or consulting fees are charged to the customer's loan profile.",
    icon: "CheckCircle2",
    highlight: "Zero Extra Burden"
  },
  {
    step: "03",
    title: "Rate-Focused Matching",
    description: "The service aims to identify suitable financing and competitive interest-rate options for each unique financial profile.",
    icon: "TrendingDown",
    highlight: "Optimal ROI Selection"
  },
  {
    step: "04",
    title: "Complete Transparency",
    description: "All loan options and structures are presented upfront, giving you full control over your borrowing decisions.",
    icon: "FileSpreadsheet",
    highlight: "100% Upfront Disclosures"
  },
];

export const balanceTransferOptions = [
  {
    id: "home-loan",
    title: "Home Loan Transfer",
    icon: "Home",
    badge: "High Savings Impact",
    highlight: "Starting at 7.00% Lowest ROI",
    rate: "7.00%",
    rateSuffix: "Lowest ROI",
    points: [
      "Migrate existing high-interest mortgages to competitive rates",
      "Reduce monthly EMI burden substantially",
      "Potentially shorten total loan repayment duration",
      "Top-up loan facilities available for additional liquidity",
    ],
    ctaText: "Explore Home Loan Transfer",
    category: "Home Loan Transfer"
  },
  {
    id: "personal-loan",
    title: "Personal Loan Consolidation",
    icon: "Briefcase",
    badge: "Debt Restructuring",
    highlight: "Lowest Market ROI Matching",
    rate: "Lowest ROI",
    rateSuffix: "Market Matching",
    points: [
      "Consolidate multiple high-interest debts into one organized loan",
      "Combine scattered credit balances across cards and lenders",
      "Reduce overall weighted interest burden",
      "Move toward a single streamlined monthly payment cycle",
    ],
    ctaText: "Explore Personal Loan Consolidation",
    category: "Personal Loan Consolidation"
  }
];

export const caseStudyData = {
  title: "Financial Impact: Balance Transfer Case Study",
  subtitle: "The Math of Optimization",
  quote: "A simple 2.00% reduction in your interest baseline generates significant potential savings over the lifetime of a long-term mortgage.",
  disclaimer: "Note: The figures below illustrate a verified case study example from our presentation. Actual terms, savings, and sanction parameters depend on individual borrower eligibility and panel partner guidelines.",
  totalSavings: "₹15,00,000",
  parameters: [
    {
      param: "Principal Loan Value",
      market: "₹50,00,000",
      siyaram: "₹50,00,000",
      isHighlight: false,
    },
    {
      param: "Assumed Rate of Interest (ROI)",
      market: "9.00%",
      siyaram: "7.00%",
      diff: "Save 2.00% ROI",
      isHighlight: true,
    },
    {
      param: "Total Interest Payable — 20 Yrs",
      market: "₹57,96,000",
      siyaram: "₹43,03,000",
      diff: "₹14,93,000 Saved",
      isHighlight: true,
    },
  ],
  standardBankTotal: "₹1,07,96,000",
  siyaramTotal: "₹93,03,000",
};

export const loanSolutions = [
  {
    id: "instant-cash",
    title: "Instant Cash Loans",
    category: "Personal & Urgent",
    description: "Highly specialized rapid cash solutions for sudden operational or personal financial requirements with swift documentation.",
    icon: "Wallet",
    features: ["Rapid Assessment", "Minimal Documentation", "Fast Disbursement Window"],
    color: "from-blue-600 to-indigo-700",
    glow: "shadow-blue-500/20"
  },
  {
    id: "business-expansion",
    title: "Business Expansion",
    category: "Commercial & MSME",
    description: "Tailored financing for MSMEs, enterprise growth, business expansion, infrastructure upgrades, inventory, and working capital needs.",
    icon: "TrendingUp",
    features: ["Working Capital Solutions", "Machinery & Infrastructure", "Customized Tenures"],
    color: "from-slate-900 to-navy-800",
    glow: "shadow-navy-600/20"
  },
  {
    id: "vehicle-financing",
    title: "Vehicle Financing",
    category: "Automotive & Fleet",
    description: "Financing options structured for commercial fleet vehicles, personal four-wheelers, and two-wheelers with flexible tenure terms.",
    icon: "Car",
    features: ["Commercial Vehicles", "Personal 4-Wheelers", "Two-Wheeler Solutions"],
    color: "from-blue-700 to-royal-800",
    glow: "shadow-royal-500/20"
  },
  {
    id: "fresh-property",
    title: "Fresh Property Purchase",
    category: "Real Estate & Housing",
    description: "Financing options for residential property acquisitions, new home purchases, housing construction, and property modernization.",
    icon: "Home",
    features: ["Residential Purchase", "Home Construction", "Modernization Top-Up"],
    color: "from-indigo-900 to-navy-950",
    glow: "shadow-indigo-500/20"
  }
];

export const whyChooseCards = [
  {
    number: "01",
    title: "Zero Customer Fees",
    description: "100% complimentary consulting and advisory. You never pay a single rupee for our expertise.",
    icon: "BadgePercent"
  },
  {
    number: "02",
    title: "270+ Institutional Partners",
    description: "Direct ties with leading public banks, private lenders, NBFCs, and housing finance companies.",
    icon: "Building2"
  },
  {
    number: "03",
    title: "Pan-India Cases",
    description: "Seamless application assistance and case processing across all states and major hubs in India.",
    icon: "Compass"
  },
  {
    number: "04",
    title: "Since 2012",
    description: "Over a decade of seasoned market experience navigating evolving financial regulations and credit lines.",
    icon: "History"
  },
  {
    number: "05",
    title: "Multiple Loan Solutions",
    description: "From micro-cash solutions to multi-crore business expansions and mortgage transfers under one roof.",
    icon: "Layers"
  },
  {
    number: "06",
    title: "Transparent Process",
    description: "Zero hidden charges, clear comparison sheets, and objective institutional match recommendations.",
    icon: "SearchCheck"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    description: "Tell us the type, size, and timeline of the financing required via form, phone, or WhatsApp.",
    icon: "MessageSquare",
    duration: "Day 1"
  },
  {
    step: "02",
    title: "Profile Assessment",
    description: "Our experts review the customer's financial profile, repayment capability, and loan objectives.",
    icon: "FileSearch",
    duration: "Quick Review"
  },
  {
    step: "03",
    title: "Partner Matching",
    description: "Identify and shortlist the most suitable institutional financing options with optimal interest rates.",
    icon: "GitCompare",
    duration: "Rate Match"
  },
  {
    step: "04",
    title: "Loan Processing",
    description: "Proceed with the selected partner institution for documentation, sanction, and disbursement.",
    icon: "CheckCircle",
    duration: "Smooth Sanction"
  }
];

export const psuBanks = [
  { name: "State Bank of India", cap: "₹ 5,00,179.88 CR", tag: "Largest PSU Bank" },
  { name: "Bank of Baroda", cap: "₹ 1,00,272.71 CR", tag: "Top PSU Lender" },
  { name: "Punjab National Bank", cap: "₹ 83,518.55 CR", tag: "Premier National Bank" },
  { name: "Union Bank of India", cap: "₹ 79,239.07 CR", tag: "Major Institutional Bank" },
  { name: "Indian Overseas Bank", cap: "₹ 74,343.19 CR", tag: "Leading Retail Partner" },
  { name: "Canara Bank", cap: "₹ 71,005.06 CR", tag: "Pan-India Network" },
  { name: "Indian Bank", cap: "₹ 51,094.22 CR", tag: "Established Network" },
  { name: "UCO Bank", cap: "₹ 45,014.18 CR", tag: "Govt. of India Undertaking" },
  { name: "Bank of India", cap: "₹ 42,533.46 CR", tag: "National Footprint" },
  { name: "Central Bank of India", cap: "₹ 38,300.30 CR", tag: "Public Sector Partner" },
];

export const majorPrivateBanks = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "IDFC FIRST Bank",
  "Bajaj Housing Finance",
  "Tata Capital",
  "Piramal Finance",
  "L&T Finance",
  "Aditya Birla Capital"
];

export const partnerInstitutions = [
  { type: "Public Sector Banks", count: "Top 10 PSU Banks (SBI, BOB, PNB...)", icon: "Landmark" },
  { type: "Private Commercial Banks", count: "HDFC, ICICI, Axis & Premier Lenders", icon: "Building" },
  { type: "Housing Finance Companies (HFCs)", count: "50+ Specialized Mortgage Lenders", icon: "Home" },
  { type: "Non-Banking Financial Companies (NBFCs)", count: "180+ Recognized Partners", icon: "Coins" },
];

