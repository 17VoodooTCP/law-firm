// Default seed data — mirrors js/data.js for the browser
module.exports = {
  firm: {
    name: "Christopher R. Bridge & Co.",
    tagline: "Trusted Legal Excellence. Proven Results.",
    subtagline: "Providing strategic legal solutions with integrity, dedication, and experience.",
    phone: "+1 (402) 598-8172",
    phone2: "+44 (7882) 795204",
    email: "contact@christopherrbridgeco.com",
    website: "christopherrbridgeco.com",
    address: "Suite 500, One Canada Square, Canary Wharf, London E14 5AB, UK",
    address2: "1250 Broadway, Suite 3600, New York, NY 10001, USA",
    founded: "1991",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
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
      name: "Christopher R. Bridge",
      title: "Founding & Managing Partner",
      area: "Corporate Law · Business Advisory",
      bio: "With over 30 years of distinguished practice, Mr. Bridge has guided Fortune 500 companies, high-net-worth individuals, and international organizations through complex legal landscapes. His strategic vision and courtroom excellence have earned him recognition among the nation's top attorneys.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
      credentials: ["J.D., Harvard Law School", "30+ Years Experience", "Chambers USA Band 1", "Super Lawyer 2015–2026"]
    },
    {
      name: "Sarah M. Holloway",
      title: "Senior Partner",
      area: "Civil Litigation · Employment Law",
      bio: "Ms. Holloway brings 20+ years of litigation experience with a track record of landmark verdicts. Recognized as a 'Super Lawyer' for five consecutive years, she is known for her tenacious advocacy and meticulous case preparation.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80",
      credentials: ["J.D., Columbia Law School", "20+ Years Experience", "Super Lawyer 2018–2026", "AV Preeminent Rated"]
    },
    {
      name: "James A. Crawford",
      title: "Partner",
      area: "Real Estate Law · Contract Law",
      bio: "Mr. Crawford has closed over $2 billion in real estate and commercial transactions. His deep knowledge of property law and contract negotiations has made him the preferred counsel for developers and institutional investors throughout the region.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
      credentials: ["J.D., NYU School of Law", "18+ Years Experience", "Real Estate Law Expert", "$2B+ Transactions Closed"]
    },
    {
      name: "Dr. Amara N. Osei",
      title: "Partner",
      area: "Immigration Law · International Law",
      bio: "Dr. Osei holds doctoral degrees in both law and international relations. Her fluency in six languages and expertise in cross-border regulatory matters make her uniquely positioned to serve multinational clients and individuals navigating complex immigration pathways.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
      credentials: ["Ph.D. International Law", "J.D., Georgetown University", "Fluent in 6 Languages", "Global Immigration Expert"]
    },
    {
      name: "Michael T. Donovan",
      title: "Senior Associate",
      area: "Criminal Defense · Civil Litigation",
      bio: "A former federal prosecutor, Mr. Donovan's insider perspective gives clients a decisive advantage. His aggressive yet measured approach has secured acquittals and favorable resolutions in hundreds of high-stakes criminal and civil matters.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
      credentials: ["J.D., Fordham Law School", "Former Federal Prosecutor", "Criminal Defense Specialist", "AV Preeminent Rated"]
    },
    {
      name: "Rebecca L. Chen",
      title: "Associate",
      area: "Family Law · Estate Planning",
      bio: "Ms. Chen's compassionate approach to sensitive family matters and estate planning has earned her the trust of generations of clients. She specializes in high-asset divorce proceedings, custody arrangements, and comprehensive estate strategies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
      credentials: ["J.D., Cornell Law School", "Family Law Specialist", "Estate Planning Expert", "Rising Star 2022–2026"]
    }
  ],

  practiceAreas: [
    {
      id: "corporate-law",
      icon: "fa-building-columns",
      title: "Corporate Law",
      short: "Comprehensive corporate counsel for businesses of every scale — from incorporation to governance, mergers, acquisitions, and regulatory compliance.",
      description: "Our corporate law practice stands at the intersection of business strategy and legal precision. We advise clients on entity formation, corporate governance frameworks, shareholder agreements, and board matters. Our M&A team has guided hundreds of transactions ranging from strategic acquisitions to cross-border mergers, ensuring regulatory compliance and optimal deal structure at every stage."
    },
    {
      id: "civil-litigation",
      icon: "fa-scale-balanced",
      title: "Civil Litigation",
      short: "Aggressive, strategic representation in complex commercial disputes, class actions, and appellate proceedings across federal and state courts.",
      description: "When disputes arise, our litigation team is ready to fight relentlessly on your behalf. We handle commercial contract disputes, business torts, fraud claims, partnership disputes, and complex class actions. Our attorneys are seasoned trial lawyers with deep federal and state court experience, and our appellate practice has reversed judgments at the highest levels."
    },
    {
      id: "real-estate-law",
      icon: "fa-house-chimney",
      title: "Real Estate Law",
      short: "Full-service real estate legal support for acquisitions, development, leasing, financing, and land use — residential and commercial.",
      description: "From negotiating multi-million dollar commercial acquisitions to resolving complex zoning disputes, our real estate practice covers every facet of property law. We represent developers, institutional investors, REITs, and individual buyers in purchase and sale transactions, commercial leasing, construction contracts, title disputes, and land use approvals."
    },
    {
      id: "family-law",
      icon: "fa-heart",
      title: "Family Law",
      short: "Compassionate, discreet representation in divorce, child custody, adoption, and estate planning matters with a focus on your family's future.",
      description: "Family legal matters are among the most personal and sensitive challenges a person can face. Our family law attorneys combine deep legal expertise with genuine empathy to guide clients through divorce proceedings, child custody arrangements, spousal support negotiations, adoption proceedings, and prenuptial agreements — always prioritizing the well-being of every family member."
    },
    {
      id: "employment-law",
      icon: "fa-briefcase",
      title: "Employment Law",
      short: "Protecting employee and employer rights in wrongful termination, discrimination, harassment, and executive compensation matters.",
      description: "Our employment law practice serves both employees and employers navigating the complex landscape of workplace rights and obligations. We handle wrongful termination claims, discrimination and harassment cases, executive compensation disputes, non-compete agreements, and employment contract negotiations — providing skilled representation at every stage from negotiation to litigation."
    },
    {
      id: "immigration-law",
      icon: "fa-passport",
      title: "Immigration Law",
      short: "Expert guidance on visas, green cards, naturalization, and deportation defense for individuals, families, and corporations.",
      description: "Immigration law is constantly evolving, and the stakes couldn't be higher. Our immigration attorneys guide individuals, families, and corporate clients through every aspect of U.S. immigration — employment-based visas, family petitions, investor visas, naturalization, and removal defense. We bring multilingual capability and global expertise to every case."
    },
    {
      id: "criminal-defense",
      icon: "fa-gavel",
      title: "Criminal Defense",
      short: "Vigorous defense representation in federal and state criminal matters — from investigation through trial and appeal.",
      description: "Facing criminal charges can be life-altering. Our criminal defense team — led by a former federal prosecutor — provides aggressive, strategic defense across all phases of the criminal process. We handle white-collar crime, fraud, DUI, drug offenses, and violent crime cases, working tirelessly to protect our clients' rights, freedom, and reputation."
    },
    {
      id: "general-counsel",
      icon: "fa-shield-halved",
      title: "General Counsel Services",
      short: "Fractional and full-service general counsel solutions for startups, SMEs, and growing enterprises seeking sophisticated legal leadership.",
      description: "Not every business needs a full-time general counsel — but every business deserves one. Our fractional GC service provides small and mid-sized businesses with access to senior legal talent on a flexible basis. We serve as your trusted legal partner, advising on contracts, risk management, regulatory compliance, board matters, and strategic transactions."
    },
    {
      id: "estate-planning",
      icon: "fa-scroll",
      title: "Estate Planning",
      short: "Comprehensive wills, trusts, probate administration, and tax planning strategies to protect your legacy for generations.",
      description: "Estate planning is the most important gift you can give your loved ones. Our estate planning attorneys craft comprehensive strategies including wills, revocable and irrevocable trusts, healthcare directives, powers of attorney, and sophisticated tax minimization plans. We also handle estate administration and probate proceedings with sensitivity and efficiency."
    },
    {
      id: "contract-law",
      icon: "fa-file-contract",
      title: "Contract Law",
      short: "Drafting, reviewing, and enforcing commercial contracts, vendor agreements, licensing deals, and complex multi-party transactions.",
      description: "Every successful business relationship begins with a well-crafted contract. Our contract attorneys draft, review, and negotiate agreements across all commercial sectors — from simple vendor contracts to complex multi-party licensing deals and joint venture agreements. When disputes arise, we pursue efficient resolution through negotiation, arbitration, or litigation."
    }
  ],

  testimonials: [
    {
      text: "Christopher R. Bridge & Co. handled our $50M acquisition with extraordinary skill and discretion. Their team's attention to detail and strategic foresight were simply unmatched.",
      author: "Jonathan Whitfield",
      role: "CEO, Whitfield Capital Group",
      rating: 5
    },
    {
      text: "When facing a wrongful termination suit, Ms. Holloway's team secured a result that exceeded every expectation. Professional, compassionate, and absolutely relentless.",
      author: "Patricia Nwosu",
      role: "Senior Executive, TechForward Inc.",
      rating: 5
    },
    {
      text: "Dr. Osei navigated our complex international visa matters with expertise that goes beyond any other firm I've worked with. We now have operations in three countries thanks to her guidance.",
      author: "Markus Brandt",
      role: "Founder, Brandt Global Ventures",
      rating: 5
    },
    {
      text: "The estate planning service we received from Rebecca Chen was thorough, thoughtful, and gave our family complete peace of mind for the future.",
      author: "Eleanor & Thomas Sinclair",
      role: "Clients since 2019",
      rating: 5
    },
    {
      text: "Michael Donovan's criminal defense work was nothing short of extraordinary. He delivered an acquittal in a case everyone said was unwinnable. Forever grateful.",
      author: "Name Withheld",
      role: "Verified Client",
      rating: 5
    }
  ],

  news: [
    {
      title: "Bridge & Co. Secures Landmark Verdict in $120M Commercial Dispute",
      category: "Case Results",
      date: "June 15, 2026",
      excerpt: "Our litigation team achieved a decisive victory in one of the year's most complex commercial disputes, securing $120M for our client after a six-week federal trial.",
      content: "In a landmark ruling that has reverberated across the commercial litigation landscape, our senior litigation team secured a $120 million verdict on behalf of our corporate client against a former business partner for breach of fiduciary duty and misappropriation of trade secrets. The six-week federal trial, led by Ms. Sarah Holloway, involved over 200 exhibits and testimony from 18 expert witnesses."
    },
    {
      title: "Firm Expands International Practice with New Global Partnerships",
      category: "Firm News",
      date: "May 28, 2026",
      excerpt: "Christopher R. Bridge & Co. announces strategic partnerships with leading law firms in London, Singapore, and Dubai to expand international client services.",
      content: "We are pleased to announce the formation of three strategic international partnerships that will significantly expand our capacity to serve clients with global legal needs. These alliances with top-tier firms in London, Singapore, and Dubai will provide our clients seamless access to expert local counsel across major commercial jurisdictions."
    },
    {
      title: "Understanding the 2026 Corporate Transparency Act: What Businesses Must Know",
      category: "Legal Insights",
      date: "May 10, 2026",
      excerpt: "New federal disclosure requirements are now in effect. Our corporate team outlines what business owners need to do to maintain compliance and avoid penalties.",
      content: "The Corporate Transparency Act's beneficial ownership reporting requirements are now fully in effect for most U.S. companies. Non-compliance carries penalties of up to $500 per day. Our corporate law team has prepared a comprehensive compliance guide to help businesses understand their reporting obligations and avoid costly mistakes."
    },
    {
      title: "Bridge & Co. Named Among Nation's Top Law Firms for Fourth Consecutive Year",
      category: "Firm News",
      date: "April 22, 2026",
      excerpt: "For the fourth year running, we have been recognized among the top 50 law firms in the United States by the National Law Journal.",
      content: "We are honored to announce that Christopher R. Bridge & Co. has once again been included in the National Law Journal's prestigious 'Top 50 Law Firms' ranking — our fourth consecutive year earning this distinction. The recognition reflects our team's commitment to exceptional client service, landmark results, and contributions to the broader legal community."
    }
  ],

  careers: [
    {
      title: "Senior Associate — Corporate Law",
      department: "Corporate Law",
      location: "New York, NY",
      type: "Full-Time",
      description: "We are seeking a Senior Associate with 5–8 years of experience in corporate transactions, M&A, and securities law. Candidates must have top academic credentials and strong analytical skills.",
      requirements: ["5–8 years corporate law experience", "M&A transaction experience required", "J.D. from top-tier law school", "New York bar admission"]
    },
    {
      title: "Litigation Associate",
      department: "Civil Litigation",
      location: "New York, NY",
      type: "Full-Time",
      description: "Join our dynamic litigation team handling complex commercial disputes in federal and state courts. Ideal candidates have 3–6 years of litigation experience and strong courtroom presence.",
      requirements: ["3–6 years litigation experience", "Federal court experience preferred", "Strong research and writing skills", "NY bar admission required"]
    },
    {
      title: "Immigration Paralegal",
      department: "Immigration Law",
      location: "New York, NY (Hybrid)",
      type: "Full-Time",
      description: "Support our immigration law team with case management, client communications, and document preparation for employment-based and family immigration matters.",
      requirements: ["2+ years immigration paralegal experience", "Multilingual preferred", "Strong organizational skills", "USCIS filing experience"]
    },
    {
      title: "Legal Summer Associate",
      department: "Firm-Wide",
      location: "New York, NY",
      type: "Summer Program",
      description: "Our 10-week summer associate program offers law students a comprehensive experience across all practice areas, mentorship from senior partners, and meaningful work from day one.",
      requirements: ["Current 2L or 3L law student", "Top academic record", "Strong writing sample", "Application deadline: February 28"]
    }
  ]
};
