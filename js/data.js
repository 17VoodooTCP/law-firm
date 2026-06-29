/* ============================================================
   CHRISTOPHER R. BRIDGE & CO. — SHARED DATA LAYER
   All site content lives here; admin writes back via localStorage
   ============================================================ */

const DEFAULT_DATA = {
  firm: {
    name: "Christopher R. Bridge & Co.",
    tagline: "Trusted Legal Excellence. Proven Results.",
    subtagline: "Providing strategic legal solutions with integrity, dedication, and experience.",
    subtitle: "Barrister, Solicitor & Legal Consultant",
    phone: "+1 (402) 598-8172",
    phone2: "+44 (7882) 795204",
    email: "contact@christopherrbridgeco.com",
    website: "christopherrbridgeco.com",
    address: "Suite 500, One Canada Square, Canary Wharf, London E14 5AB, UK",
    address2: "1250 Broadway, Suite 3600, New York, NY 10001, USA",
    hours: "Monday–Friday  |  8:00 AM – 6:00 PM (GMT / EST)",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  },

  stats: [
    { label: "Cases Resolved", value: 4800, suffix: "+" },
    { label: "Years of Experience", value: 35, suffix: "+" },
    { label: "Satisfied Clients", value: 12000, suffix: "+" },
    { label: "Legal Professionals", value: 60, suffix: "+" }
  ],

  attorneys: [
    {
      id: 1,
      name: "Christopher R. Bridge",
      title: "Founding & Managing Partner",
      area: "Corporate Law · Business Advisory",
      bio: "With over 30 years of distinguished practice, Mr. Bridge has guided Fortune 500 companies, high-net-worth individuals, and international organizations through complex legal landscapes. His strategic vision and courtroom excellence have earned him recognition among the nation's top attorneys.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
    },
    {
      id: 2,
      name: "Sarah M. Holloway",
      title: "Senior Partner",
      area: "Civil Litigation · Employment Law",
      bio: "Ms. Holloway brings 20+ years of litigation experience with a track record of landmark verdicts. Recognized as a 'Super Lawyer' for five consecutive years, she is known for her tenacious advocacy and meticulous case preparation.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80"
    },
    {
      id: 3,
      name: "James A. Crawford",
      title: "Partner",
      area: "Real Estate Law · Contract Law",
      bio: "Mr. Crawford has closed over $2 billion in real estate and commercial transactions. His deep knowledge of property law and contract negotiations has made him the preferred counsel for developers and institutional investors throughout the region.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80"
    },
    {
      id: 4,
      name: "Dr. Amara N. Osei",
      title: "Partner",
      area: "Immigration Law · International Law",
      bio: "Dr. Osei holds doctoral degrees in both law and international relations. Her fluency in six languages and expertise in cross-border regulatory matters make her uniquely positioned to serve multinational clients and individuals navigating complex immigration pathways.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
    },
    {
      id: 5,
      name: "Michael T. Donovan",
      title: "Senior Associate",
      area: "Criminal Defense · Civil Litigation",
      bio: "A former federal prosecutor, Mr. Donovan's insider perspective gives clients a decisive advantage. His aggressive yet measured approach has secured acquittals and favorable resolutions in hundreds of high-stakes criminal and civil matters.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
    },
    {
      id: 6,
      name: "Rebecca L. Chen",
      title: "Associate",
      area: "Family Law · Estate Planning",
      bio: "Ms. Chen's compassionate approach to sensitive family matters and estate planning has earned her the trust of generations of clients. She specializes in high-asset divorce proceedings, custody arrangements, and comprehensive estate strategies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80"
    }
  ],

  practiceAreas: [
    {
      id: "corporate-law",
      icon: "fa-building-columns",
      title: "Corporate Law",
      short: "Comprehensive corporate counsel for businesses of every scale — from incorporation to governance, mergers, acquisitions, and regulatory compliance.",
      description: "Our corporate law team provides sophisticated counsel across the full business lifecycle. From entity formation and governance frameworks to complex M&A transactions and regulatory compliance, we serve as trusted advisors to companies ranging from emerging startups to established multinational corporations. We help clients navigate securities law, shareholder agreements, joint ventures, and corporate restructuring with precision and strategic insight."
    },
    {
      id: "civil-litigation",
      icon: "fa-scale-balanced",
      title: "Civil Litigation",
      short: "Aggressive and strategic representation in commercial disputes, personal injury, and complex civil matters across state and federal courts.",
      description: "Our litigation team combines rigorous legal analysis with courtroom excellence. We represent plaintiffs and defendants in complex commercial disputes, breach of contract claims, tort actions, and class action litigation. Our attorneys have successfully argued before state supreme courts and federal circuit courts, achieving landmark rulings and favorable verdicts that protect our clients' vital interests."
    },
    {
      id: "real-estate-law",
      icon: "fa-building",
      title: "Real Estate Law",
      short: "Expert guidance through property acquisitions, commercial leasing, development projects, and real estate financing transactions.",
      description: "From residential closings to multi-billion dollar commercial developments, our real estate practice covers the full spectrum of property law. We counsel developers, investors, lenders, and tenants on acquisitions, dispositions, financing, leasing, land use, zoning, and construction matters. Our team brings efficiency and precision to every transaction, protecting your investment at every stage."
    },
    {
      id: "family-law",
      icon: "fa-heart",
      title: "Family Law",
      short: "Compassionate and skilled representation in divorce, custody, adoption, and all family-related legal matters.",
      description: "Family law matters require both legal precision and genuine empathy. Our family law attorneys provide discreet, experienced guidance through divorce proceedings, child custody and support arrangements, adoption, prenuptial agreements, and domestic relations matters. We prioritize resolutions that protect our clients' futures while minimizing conflict, with a special focus on the well-being of children and families."
    },
    {
      id: "employment-law",
      icon: "fa-briefcase",
      title: "Employment Law",
      short: "Protecting employees and employers in workplace disputes, discrimination claims, executive agreements, and labor compliance.",
      description: "We represent both employers and employees in the full range of workplace legal matters. Our employment law practice encompasses discrimination and harassment claims, wrongful termination, wage and hour disputes, executive compensation and severance negotiations, non-compete agreements, and EEOC compliance. We help organizations build legally sound HR policies and vigorously defend clients' rights when workplace disputes arise."
    },
    {
      id: "immigration-law",
      icon: "fa-globe",
      title: "Immigration Law",
      short: "Navigating complex immigration pathways for individuals, families, and businesses seeking U.S. visas, residency, and citizenship.",
      description: "Our immigration practice serves individuals, families, and corporations navigating the complexities of U.S. immigration law. We handle employment-based visas (H-1B, L-1, O-1), family petitions, green card applications, naturalization, asylum, deportation defense, and investor visas (EB-5). For corporate clients, we develop comprehensive immigration management programs to support international talent acquisition and global mobility."
    },
    {
      id: "criminal-defense",
      icon: "fa-shield-halved",
      title: "Criminal Defense",
      short: "Vigorous defense against federal and state criminal charges, protecting your rights and freedom at every stage of proceedings.",
      description: "When facing criminal charges, the stakes could not be higher. Our criminal defense team — led by former prosecutors — provides an unparalleled strategic advantage. We handle white-collar crime, federal criminal defense, DUI/DWI, drug offenses, violent crimes, and appeals. We conduct thorough independent investigations, challenge evidence rigorously, and fight relentlessly to protect our clients' rights, reputations, and liberty."
    },
    {
      id: "business-advisory",
      icon: "fa-chart-line",
      title: "Business Advisory",
      short: "Strategic legal and business counsel to entrepreneurs, executives, and organizations driving growth and managing risk.",
      description: "Beyond traditional legal services, our business advisory practice provides integrated strategic counsel at the intersection of law and business. We partner with executives and board members on governance, risk management, regulatory strategy, and dispute avoidance. Our attorneys serve as fractional general counsel to growing companies, providing enterprise-level legal guidance without the overhead of a full in-house team."
    },
    {
      id: "estate-planning",
      icon: "fa-file-signature",
      title: "Estate Planning",
      short: "Comprehensive estate strategies including wills, trusts, probate administration, and generational wealth preservation.",
      description: "Our estate planning attorneys create comprehensive plans that protect your assets, provide for your loved ones, and ensure your wishes are honored. We draft wills, revocable and irrevocable trusts, powers of attorney, healthcare directives, and develop tax-efficient strategies for high-net-worth individuals and families. We also guide executors and trustees through probate administration and trust management with clarity and care."
    },
    {
      id: "contract-law",
      icon: "fa-handshake",
      title: "Contract Law",
      short: "Drafting, reviewing, and negotiating contracts that protect your interests and provide a clear foundation for every agreement.",
      description: "Every successful business relationship begins with a well-crafted contract. Our contract law team drafts, reviews, and negotiates a full spectrum of commercial agreements — from simple service contracts to complex multi-party joint venture agreements. When contract disputes arise, we provide swift, decisive analysis and work toward efficient resolution through negotiation, mediation, arbitration, or litigation as circumstances require."
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Richard Ashworth",
      title: "CEO, Ashworth Industries",
      text: "Christopher R. Bridge & Co. handled our merger with extraordinary skill and discretion. Their team's depth of knowledge and responsiveness gave our board complete confidence throughout a complex, high-stakes transaction. I would not trust any other firm with matters of this magnitude.",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Linda M. Foster",
      title: "Medical Professional",
      text: "When I faced a professional dispute that threatened my career, Sarah Holloway's team fought with tenacity and intelligence. They secured an outcome that exceeded my expectations. The level of personal attention and communication was exceptional — I never felt like just a case number.",
      rating: 5
    },
    {
      id: 3,
      name: "Marcus & Elena Whitfield",
      title: "Real Estate Investors",
      text: "We've worked with James Crawford on dozens of property acquisitions over the past eight years. His knowledge of real estate law is encyclopedic, and his ability to anticipate and neutralize legal risks has saved us millions. He is simply the best in the business.",
      rating: 5
    },
    {
      id: 4,
      name: "Priya Nambiar",
      title: "Tech Entrepreneur",
      text: "Dr. Osei navigated our company's complex international expansion with remarkable expertise. Her command of immigration and international business law, combined with her genuine commitment to our success, made the entire process smooth and stress-free. Truly exceptional counsel.",
      rating: 5
    },
    {
      id: 5,
      name: "Thomas G. Harrington",
      title: "Business Executive",
      text: "Facing serious federal charges was the most terrifying experience of my life. Michael Donovan's expertise, calm authority, and brilliant strategy turned what seemed like an impossible situation into a complete victory. I owe my freedom and reputation to this extraordinary attorney.",
      rating: 5
    }
  ],

  news: [
    {
      id: 1,
      date: "June 20, 2026",
      category: "Firm News",
      title: "Christopher R. Bridge & Co. Ranked Among Nation's Top 50 Law Firms",
      excerpt: "For the fifth consecutive year, our firm has been recognized by Legal 500 and Chambers USA among the nation's elite law practices, citing our outstanding client service and landmark case results.",
      content: "We are proud to announce that Christopher R. Bridge & Co. has once again been ranked among the nation's top 50 law firms by both Legal 500 and Chambers USA. This recognition reflects our unwavering commitment to legal excellence, client satisfaction, and results-driven representation. Our attorneys have been individually recognized across multiple practice areas, further cementing our reputation as a premier legal institution."
    },
    {
      id: 2,
      date: "June 12, 2026",
      category: "Legal Insights",
      title: "New SEC Regulations: What Corporate Clients Need to Know in 2026",
      excerpt: "Recent SEC rule amendments significantly impact disclosure requirements for public companies. Our corporate team breaks down the key changes and their practical implications for your business.",
      content: "The Securities and Exchange Commission has finalized sweeping amendments to its disclosure rules, effective Q3 2026. These changes affect cybersecurity incident reporting, climate-related disclosures, and executive compensation transparency. Our corporate law team has prepared a comprehensive analysis to help clients understand their new compliance obligations and timeline requirements."
    },
    {
      id: 3,
      date: "May 28, 2026",
      category: "Case Results",
      title: "Landmark Employment Discrimination Victory Secures $18M Settlement",
      excerpt: "Our litigation team secured an $18 million settlement in a landmark class action employment discrimination case, setting a significant precedent for workplace rights protections.",
      content: "Christopher R. Bridge & Co.'s litigation team, led by Senior Partner Sarah M. Holloway, has secured an $18 million settlement in a class action employment discrimination lawsuit filed against a major financial institution. The case involved systemic pay disparity and promotion discrimination affecting over 400 employees. This landmark outcome reinforces our firm's commitment to justice and sets an important precedent for workplace equity."
    },
    {
      id: 4,
      date: "May 15, 2026",
      category: "Legal Insights",
      title: "Navigating the New Federal Immigration Landscape: A 2026 Update",
      excerpt: "Significant policy shifts in federal immigration enforcement require immediate attention from businesses and individuals alike. Dr. Osei provides essential guidance on the current environment.",
      content: "The immigration landscape has shifted considerably in 2026, with new enforcement priorities, updated visa processing timelines, and revised eligibility criteria affecting numerous visa categories. Dr. Amara N. Osei, our Immigration Law Partner, provides a comprehensive overview of what these changes mean for corporate clients managing international workforces and individuals pursuing residency and citizenship pathways."
    }
  ],

  careers: [
    {
      id: 1,
      title: "Senior Associate – Corporate Law",
      type: "Full-Time",
      location: "New York, NY",
      description: "We are seeking a talented Senior Associate with 5-8 years of experience in corporate transactions, M&A, and securities law to join our growing corporate practice group."
    },
    {
      id: 2,
      title: "Litigation Associate",
      type: "Full-Time",
      location: "New York, NY",
      description: "Join our award-winning litigation team. Ideal candidates will have 3-6 years of complex commercial litigation experience with strong research, writing, and courtroom skills."
    },
    {
      id: 3,
      title: "Immigration Law Clerk",
      type: "Full-Time",
      location: "New York, NY",
      description: "An exciting opportunity to work alongside Dr. Osei's internationally recognized immigration practice. Recent law graduates and bar admission candidates encouraged to apply."
    },
    {
      id: 4,
      title: "Legal Administrative Assistant",
      type: "Full-Time",
      location: "New York, NY",
      description: "Support our attorney team with document management, scheduling, client communications, and administrative coordination. Strong organizational skills and attention to detail required."
    }
  ]
};

// Load data from localStorage (admin changes) or fall back to defaults
function getSiteData() {
  const stored = localStorage.getItem("bridgeLawData");
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveSiteData(data) {
  localStorage.setItem("bridgeLawData", JSON.stringify(data));
}

function resetSiteData() {
  localStorage.removeItem("bridgeLawData");
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
