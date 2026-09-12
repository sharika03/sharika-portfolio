export type NavItem = {
  id: string;
  label: string;
};

export type Metric = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  /** Render the counter with thousands separators. */
  grouped?: boolean;
  label: string;
  detail: string;
};

export type SkillGroup = {
  id: string;
  name: string;
  items: string[];
};

export type CaseStudy = {
  id: string;
  client: string;
  scope: string;
  period: string;
  problem: string;
  approach: string;
  impact: string;
  details: string[];
  tags: string[];
};

export type Engagement = {
  name: string;
  period: string;
  summary: string;
};

export type Role = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  summary?: string;
  engagements?: Engagement[];
  sites?: string[];
};

export type Certification = {
  name: string;
  level: string;
  issuer: string;
  issued: string;
};

export type Education = {
  degree: string;
  abbreviation: string;
  field: string;
  institution: string;
  period: string;
};

export const profile = {
  name: "Sharika Dubey",
  title: "Technical Lead",
  tagline: "Microservices Architecture & Engineering Team Leadership",
  roles: ["Technical Lead", "Microservices Architect", "Engineering Team Leader"],
  heroSupport:
    "13+ years engineering software — leading teams, architecting systems, shipping at scale.",
  email: "sharika.dubey@gmail.com",
  phone: "+91 7065175175",
  phoneHref: "+917065175175",
  linkedin: {
    label: "linkedin.com/in/sharika-dubey-36518358",
    href: "https://www.linkedin.com/in/sharika-dubey-36518358",
  },
  location: "Noida, UP, India",
  availability: "Open to Remote",
  resumeHref: "/resume.pdf",
  about: [
    "Thirteen years in, my career splits cleanly in two: a decade spent deep in Magento and e-commerce architecture, then a deliberate move into microservices, event-driven systems, and engineering leadership.",
    "Today I lead a team of 10+ engineers at ThinkSys, where we own a production communications platform built on Twilio, Mailgun, and Kafka-based dispatch — and where the delivery lifecycle has to stay correct across compliance, bounces, and reconciliation.",
    "I am also directing the design of a next-generation automation engine that replaces a legacy flat rules system, the kind of problem where the schema decisions made early determine how much the platform can carry later.",
    "I stay comfortable across the full stack — PHP and Magento, Ruby on Rails, React.js, and AWS-based microservice architectures — which keeps me close enough to the code to lead the architecture rather than merely approve it.",
  ],
} as const;

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const metrics: Metric[] = [
  {
    id: "years",
    value: 13,
    suffix: "+",
    label: "Years of Engineering Experience",
    detail: "E-commerce architecture through to distributed systems leadership",
  },
  {
    id: "engineers",
    value: 10,
    suffix: "+",
    label: "Engineers Led",
    detail: "Direct team across backend, frontend, and platform work",
  },
  {
    id: "messages",
    value: 400000,
    prefix: "~",
    grouped: true,
    label: "Messages Processed Every 7 Days",
    detail: "Email and SMS dispatched through the communications platform",
  },
  {
    id: "records",
    value: 150,
    suffix: "M+",
    label: "Historical Records Managed",
    detail: "Live production message and delivery-status history",
  },
  {
    id: "rules",
    value: 6800,
    grouped: true,
    suffix: "+",
    label: "Active Automation Rules",
    detail: "Running concurrently in a production rules engine",
  },
  {
    id: "accounts",
    value: 200,
    suffix: "+",
    label: "Customer Accounts Supported",
    detail: "Multi-tenant estate with per-property configuration",
  },
  {
    id: "teams",
    value: 4,
    label: "Cross-Functional Teams Coordinated",
    detail: "Shared platform architecture and API contract alignment",
  },
];

/** The three figures surfaced directly beneath the hero headline. */
export const heroMetricIds = ["years", "engineers", "messages"] as const;

export const skillGroups: SkillGroup[] = [
  {
    id: "leadership",
    name: "Leadership",
    items: [
      "Team Management (10+ direct reports)",
      "Cross-Team Architecture Coordination",
      "Sprint Planning",
      "Mentoring",
    ],
  },
  {
    id: "architecture",
    name: "Architecture",
    items: [
      "Microservices",
      "Event-Driven Systems",
      "Apache Kafka",
      "REST APIs",
      "GraphQL",
      "System & Schema Design",
    ],
  },
  {
    id: "languages",
    name: "Languages & Frameworks",
    items: [
      "PHP",
      "Ruby on Rails",
      "React.js",
      "JavaScript",
      "jQuery",
      "KnockoutJS",
      "Magento 1 & 2 (Adobe Commerce)",
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    items: [
      "AWS EKS",
      "AWS ECR",
      "AWS Secrets Manager",
      "AWS S3",
      "AWS KMS",
      "Docker",
      "CircleCI",
      "Jenkins",
      "Git",
    ],
  },
  {
    id: "integrations",
    name: "Integrations & Data",
    items: [
      "Twilio (SMS/Voice/A2P)",
      "Mailgun",
      "MySQL",
      "MSSQL",
      "Epicor P21",
      "Akeneo PIM",
    ],
  },
  {
    id: "methodology",
    name: "Methodology",
    items: [
      "Agile",
      "Scrum",
      "Kanban",
      "Requirements Analysis",
      "Risk Management",
    ],
  },
];

export const featuredWork: CaseStudy[] = [
  {
    id: "anyonehome",
    client: "AnyoneHome (Inhabit)",
    scope: "Communications Platform & Microservices Architecture",
    period: "Oct 2025 – Present",
    problem:
      "A production communications platform was dispatching every email and SMS through a legacy flat rules engine that could not express staged customer journeys or per-property behaviour, while the delivery lifecycle spanned a decade of accumulated message history.",
    approach:
      "Lead a team of 10+ engineers owning the Twilio and Mailgun integration and Kafka-based dispatch, while directing the architecture of Playbook — a next-generation automation engine built around enrollment-gated membership, stage-based customer journeys, and per-property trigger overrides.",
    impact:
      "~400,000 messages dispatched every 7 days across a live estate of 150M+ historical records, 6,800+ active automation rules, and 200+ customer accounts, deployed continuously on AWS EKS.",
    details: [
      "Leads a team of 10+ engineers owning the platform's communications module — Twilio and Mailgun integration with Kafka-based automated messaging — supporting ~400,000 email and SMS messages every 7 days across active customer accounts.",
      "Leads the team designing and building Playbook, a next-generation automation platform replacing a legacy flat rules engine: personally directing architecture decisions and reviewing all implementation, introducing enrollment-gated membership, stage-based customer journeys, and per-property trigger overrides.",
      "Coordinates with 4 other engineering teams on shared platform architecture and API contracts.",
      "Owns the message delivery lifecycle — bounce handling, opt-in/opt-out compliance, and delivery-status reconciliation — for a live system spanning 150M+ historical records and 6,800+ active automation rules across 200+ customer accounts.",
      "Operates services on AWS EKS with CircleCI-driven CI/CD across dev, UAT, RC, and production, on Docker-based deployment.",
    ],
    tags: [
      "Apache Kafka",
      "Twilio",
      "Mailgun",
      "AWS EKS",
      "CircleCI",
      "Microservices",
    ],
  },
  {
    id: "captainu",
    client: "CaptainU.com (Stack Sports)",
    scope: "Collegiate Sports Recruiting Platform",
    period: "May 2024 – Sep 2025",
    problem:
      "A recruiting platform used by millions of athletes and coaches needed a steady stream of new features, third-party integrations, and business workflows without destabilising the workflows already in production.",
    approach:
      "Led a Ruby on Rails microservices and React.js engineering team, owning technical solutioning end to end: sprint planning, code review, task allocation, and mentoring, in close collaboration with product and cross-functional partners.",
    impact:
      "Delivered scalable, maintainable feature work at national scale while holding application performance and reliability steady throughout.",
    details: [
      "Led a Ruby on Rails (microservices) and React.js engineering team developing and enhancing platform features, third-party integrations, and business workflows for a collegiate sports recruiting platform used by millions of athletes and coaches.",
      "Owned technical solutioning end-to-end — sprint planning, code reviews, task allocation, and mentoring — while collaborating with product and cross-functional teams to deliver scalable, maintainable features and ensure application performance and reliability.",
    ],
    tags: ["Ruby on Rails", "React.js", "Microservices", "REST APIs", "Mentoring"],
  },
  {
    id: "magento",
    client: "Magento E-Commerce Engagements",
    scope: "Multi-Client Platform Modernisation",
    period: "Aug 2019 – Apr 2024",
    problem:
      "Three enterprise commerce clients were carrying ageing Magento 1 and early Magento 2 estates, with manual deployments and catalogue and order data sitting disconnected from their ERP and PIM systems.",
    approach:
      "Led the version upgrades and platform migrations, introduced Docker-based environments and Jenkins pipeline support, and built custom REST APIs to synchronise commerce data with Epicor P21 and Akeneo PIM.",
    impact:
      "Modernised all three storefronts onto Magento 2.4.6 with repeatable deployments and automated ERP and PIM data flow.",
    details: [
      "proworldinc.com — Led the Magento 2.3.5 to 2.4.6 upgrade, implemented Dockerization, and supported the Jenkins deployment pipeline.",
      "abatix.com — Managed a B2B Magento store synchronised with Epicor P21 and Akeneo PIM; implemented client-specific integrations (HubSpot, ShipHawk, Element Express); developed custom REST APIs; led the Magento 1.14 to 2.4.6 migration.",
      "spacemantra.com — Contributed to a new Magento 2 store build, including theme customisation and custom module integration.",
    ],
    tags: [
      "Magento 2",
      "Adobe Commerce",
      "Epicor P21",
      "Akeneo PIM",
      "Docker",
      "Jenkins",
    ],
  },
];

export const experience: Role[] = [
  {
    company: "ThinkSys Software Pvt. Ltd.",
    role: "Associate Project Lead / Team Lead",
    period: "Aug 2019 – Present",
    location: "Noida, India",
    current: true,
    summary:
      "Leads engineering teams across a production communications platform, a collegiate sports recruiting platform, and a portfolio of enterprise Magento modernisation work.",
    engagements: [
      {
        name: "AnyoneHome (Inhabit) — Communications Platform & Microservices Architecture",
        period: "Oct 2025 – Present",
        summary:
          "Leads 10+ engineers owning Twilio and Mailgun integration with Kafka-based dispatch, directs the Playbook automation engine replacing a legacy rules system, and owns the delivery lifecycle across 150M+ records and 6,800+ active rules for 200+ accounts.",
      },
      {
        name: "CaptainU.com (Stack Sports) — Collegiate Sports Recruiting Platform",
        period: "May 2024 – Sep 2025",
        summary:
          "Led a Ruby on Rails microservices and React.js team, owning sprint planning, code review, task allocation, and mentoring for a platform used by millions of athletes and coaches.",
      },
      {
        name: "Magento E-Commerce Engagements",
        period: "Aug 2019 – Apr 2024",
        summary:
          "Led Magento upgrades and migrations to 2.4.6 for proworldinc.com, abatix.com, and spacemantra.com, including Dockerization, Jenkins pipelines, custom REST APIs, and Epicor P21 and Akeneo PIM synchronisation.",
      },
    ],
  },
];

export const earlyCareer: Role[] = [
  {
    company: "IDS Logic",
    role: "Sr. Software Engineer",
    period: "Jun 2018 – Aug 2019",
    summary:
      "Developed and customised Magento 2 themes and checkout flows, and built a Warranty Registration Module.",
    sites: ["store.idslogic.com", "metals4u.co.uk", "pebblegrey.co.uk"],
  },
  {
    company: "SynapseIndia",
    role: "Sr. Software Engineer",
    period: "May 2017 – May 2018",
    summary:
      "Spearheaded development of multiple B2B and B2C Magento stores with dynamic modules and customisations.",
    sites: ["loveweddingbands.com", "shopmaiya.com", "waydirect.co.uk"],
  },
  {
    company: "SoftProdigy",
    role: "Software Engineer",
    period: "Sep 2015 – Dec 2016",
    summary:
      "Delivered end-to-end Magento builds across 8+ client projects — installations, theming, payment and shipping integration, and eBay and osCommerce migrations.",
  },
  {
    company: "Newgenray Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "Mar 2014 – Jun 2015",
    summary:
      "Delivered end-to-end Magento solutions, custom modules, and UX redesigns across 10+ client sites.",
  },
  {
    company: "Bigthing.co",
    role: "PHP Developer",
    period: "Aug 2013 – Mar 2014",
    summary:
      "Built foundational Magento theming expertise, delivering a fully functional Magento shopping site and a CRM system.",
  },
  {
    company: "e.Soft CONNECT",
    role: "Project Intern",
    period: "Feb 2013 – Jul 2013",
    summary:
      "Developed a media-industry website and CRM using PHP, MySQL, jQuery, CSS, and JavaScript.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Adobe Commerce Developer",
    level: "Adobe Certified Expert",
    issuer: "Adobe",
    issued: "Issued Sep 2023",
  },
  {
    name: "Adobe Commerce Developer",
    level: "Adobe Certified Professional",
    issuer: "Adobe",
    issued: "Issued Sep 2023",
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    field: "Computer Science",
    institution: "KNIPSS Sultanpur",
    period: "2010 – 2013",
  },
  {
    degree: "Bachelor of Computer Applications",
    abbreviation: "BCA",
    field: "Computer Science",
    institution: "Jaybees College",
    period: "Jul 2007 – May 2010",
  },
];
