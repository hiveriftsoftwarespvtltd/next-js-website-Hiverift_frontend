export interface FullIndustryDetails {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  heroImage: string;
  proofMetrics: {
    value: string;
    label: string;
  }[];
  specializedServices: {
    title: string;
    desc: string;
    badge: string;
    deliverables: string[];
  }[];
  targetSegments: {
    title: string;
    desc: string;
  }[];
  challengesVsSolutions: {
    challenge: string;
    solution: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  regionalHubs: {
    city: string;
    badge: string;
    areas: string;
    focus: string;
  }[];
  searchTerms: string[];
  featuresList: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const REGIONAL_HUBS_DEFAULT = [
  {
    city: "Gurgaon Hub",
    badge: "Cyber City & Golf Course Road",
    areas: "DLF Phase 1-5, Cyber City, Golf Course Ext Rd, Sohna Road, Udyog Vihar",
    focus: "Enterprise cloud platforms, high-velocity digital products, scalable web apps & automated CRM pipelines."
  },
  {
    city: "Noida Hub",
    badge: "Sector 62, 137 & Greater Noida",
    areas: "Sector 62, Sector 18, Expressway Sector 137, Greater Noida Knowledge Park",
    focus: "Institutional portals, custom operations ERP, cloud database pipelines & automated customer intake."
  },
  {
    city: "Delhi Hub",
    badge: "Central, South & West Delhi",
    areas: "Karol Bagh, Connaught Place, South Extension, Okhla, Dwarka Expressway",
    focus: "Corporate web development, high-trust regulatory architectures, local Google 3-Pack SEO & digital growth."
  },
  {
    city: "Pan-India & Global",
    badge: "Nationwide & Overseas Markets",
    areas: "Mumbai, Bangalore, Hyderabad, Pune, Dubai, Singapore, UK, USA",
    focus: "Multi-currency digital architectures, global edge CDN delivery, international payment gateways & 99.99% uptime."
  }
];

export const FULL_INDUSTRIES_DATA: Record<string, FullIndustryDetails> = {
  healthcare: {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    badge: "NABH, HIPAA & ABDM Compliant Architecture",
    subtitle: "Build Connected, High-Trust Digital Experiences for Healthcare",
    description: "Help patients discover specialists, book OPD consultations, communicate with physicians, and securely access medical records through fast, HIPAA/ABDM-ready digital platforms.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920",
    proofMetrics: [
      { value: "< 0.5s", label: "OPD Booking Speed" },
      { value: "100%", label: "ABDM & Data Privacy" },
      { value: "0s", label: "WhatsApp Report Sync" },
      { value: "99.99%", label: "Uptime Reliability" }
    ],
    specializedServices: [
      {
        title: "Hospital & Healthcare Websites",
        desc: "High-trust institutional web platforms showcasing medical departments, doctors' credentials, emergency contact, and patient guides.",
        badge: "Hospital Web",
        deliverables: ["Doctor directory search", "OPD schedules", "NABH accreditation badges", "Emergency direct dial", "Virtual hospital tour", "Health checkup packages"]
      },
      {
        title: "Doctor & Clinic Appointment Systems",
        desc: "Frictionless online consultation booking with doctor availability sync, slot management, and automated WhatsApp confirmations.",
        badge: "Appointment UX",
        deliverables: ["Real-time calendar booking", "Multi-doctor schedule management", "Automated SMS/WhatsApp reminders", "Pre-payment token collection", "Cancellation & rescheduling", "Follow-up triggers"]
      },
      {
        title: "Telemedicine & Video Consultation",
        desc: "WebRTC-powered, end-to-end encrypted video consultation portals connecting patients with physicians from home.",
        badge: "Telehealth",
        deliverables: ["Zero-download browser video calls", "Digital prescription generator", "Integrated pharmacy routing", "Encrypted clinical chat", "Payment gateway integration", "Medical history review"]
      },
      {
        title: "Patient Portals & Health Records (EHR)",
        desc: "Confidential patient accounts for downloading diagnostic lab reports, discharge summaries, and prescription archives.",
        badge: "Patient Portal",
        deliverables: ["Encrypted medical records vault", "Historical lab trend charts", "Multi-family member profiles", "Vaccination records", "Doctor note downloads", "Two-factor patient authentication"]
      },
      {
        title: "Diagnostic Lab & Report Automation",
        desc: "Automated report dispatch system connecting pathology machines to WhatsApp, email, and patient dashboards.",
        badge: "Lab Systems",
        deliverables: ["Barcode sample tracking", "Automated PDF report dispatch", "WhatsApp test download links", "Home sample collection booking", "Doctor reference commission portal", "Critical value alert triggers"]
      },
      {
        title: "Healthcare Digital Marketing & Local SEO",
        desc: "Dominating local search for 'best hospital near me' and 'specialist doctor' through compliant medical SEO and high-ROI Google Ads.",
        badge: "Medical Growth",
        deliverables: ["Google 3-Pack clinic optimization", "Medical specialist landing pages", "NABH compliance disclaimers", "Patient video review showcases", "High-intent PPC campaigns", "Local citation building"]
      }
    ],
    targetSegments: [
      { title: "Multi-Speciality Hospitals", desc: "Enterprise websites, doctor directories, multi-department OPD booking & emergency infrastructure." },
      { title: "Speciality Clinics & Daycare", desc: "Dental, eye care, IVF, dermatology & orthopaedic clinic appointment engines." },
      { title: "Diagnostic & Pathology Labs", desc: "Online test booking, home collection management & automated WhatsApp report delivery." },
      { title: "Telehealth & HealthTech Startups", desc: "WebRTC video consultation apps, digital pharmacies & AI health assistant portals." }
    ],
    challengesVsSolutions: [
      {
        challenge: "High patient no-shows and congested front-desk phone lines during morning OPD hours.",
        solution: "Automated real-time slot scheduling with instant WhatsApp confirmations and 2-hour reminder alerts reducing no-shows by 50%."
      },
      {
        challenge: "Strict medical privacy compliance (HIPAA, ABDM) and fear of patient record leaks.",
        solution: "Bank-grade 256-bit AES encryption at rest and in transit with role-based access control (RBAC) and audit-ready access logs."
      },
      {
        challenge: "Slow manual report delivery causing patient anxiety and administrative phone overload.",
        solution: "Direct laboratory information system (LIS) webhook integration delivering verified PDF reports via WhatsApp in under 30 seconds."
      },
      {
        challenge: "Poor Google search visibility against hospital aggregator directories like Practo.",
        solution: "Custom schema-structured doctor profile pages and local hospital SEO capturing high-intent organic patient searches directly."
      }
    ],
    techStack: [
      { category: "Frontend & Mobile", items: ["Next.js 15", "React 19", "React Native", "Tailwind CSS", "WebRTC"] },
      { category: "Backend & Cloud", items: ["Node.js", "NestJS", "PostgreSQL", "Docker", "AWS HealthLake", "Redis"] },
      { category: "Integrations & APIs", items: ["WhatsApp Cloud API", "Razorpay Health", "ABDM M1/M2/M3", "HL7/FHIR", "Twilio"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Hospital Website Development Delhi", "Clinic Appointment Booking System Gurgaon", "Telemedicine App Development India",
      "Diagnostic Lab Portal Development Noida", "Doctor Consultation Website Design Delhi NCR", "NABH Compliant Hospital Website",
      "Healthcare CRM Integration Delhi", "Patient Portal Software Development", "Online Doctor Appointment Platform",
      "Healthcare SEO Agency Gurgaon", "Medical Website Development Company Delhi", "Pathology Lab Management Software",
      "Healthcare Mobile App Development", "Telehealth Platform Development Noida", "Hospital ERP Integration Delhi NCR",
      "Doctor Profile SEO Management", "Dental Clinic Website Design Gurgaon", "Pharmacy eCommerce Platform India",
      "Healthcare Lead Generation Agency Delhi", "Clinical Trial Data Management Portal", "Healthcare Web Developers Near Me"
    ],
    featuresList: [
      "Mobile-first responsive patient booking layout",
      "Instant WhatsApp appointment confirmations & reminders",
      "Secure encrypted patient medical records vault",
      "Doctor schedule management & leave blackout calendar",
      "Online consultation fee collection via UPI / Netbanking",
      "Automated diagnostic test report PDF generation",
      "Google Maps integration with clinic directions",
      "Emergency one-tap helpline & ambulance dialer",
      "Doctor bio, degrees, publications & verified reviews",
      "HIPAA / ABDM data privacy architectural standards",
      "Zero vendor lock-in with 100% full source code ownership"
    ],
    faqs: [
      {
        question: "How do you ensure patient data privacy and compliance?",
        answer: "Our healthcare solutions are engineered with strict encryption standards (AES-256 at rest, TLS 1.3 in transit), role-based permissions, and compliance alignment with India's DPDP Act, ABDM standards, and international HIPAA guidelines."
      },
      {
        question: "Can patients book appointments and receive reports on WhatsApp?",
        answer: "Yes! We integrate the official WhatsApp Cloud API allowing patients to choose appointment slots, receive automated calendar confirmations, and download verified PDF lab reports with a single tap."
      },
      {
        question: "Can you integrate our existing Hospital Information System (HIS / LIS)?",
        answer: "Yes, we regularly integrate custom web portals and mobile apps with existing hospital ERPs, laboratory information systems, and electronic health record databases via REST or HL7/FHIR webhooks."
      },
      {
        question: "How long does it take to launch a healthcare portal?",
        answer: "A modern clinic appointment website can be launched in 2 to 3 weeks. A comprehensive hospital portal with doctor directories, multi-department scheduling, and telemedicine capabilities typically takes 4 to 6 weeks."
      },
      {
        question: "Do we get complete ownership of the code and patient database?",
        answer: "Yes, 100%. HiveRift transfers all source code repositories, database credentials, and server configurations to your organization upon project completion."
      }
    ]
  },

  finance: {
    id: "finance",
    title: "Finance & FinTech",
    badge: "Bank-Grade Encryption & Audit-Ready Architecture",
    subtitle: "Build High-Trust, Secure Digital Platforms for Financial Institutions",
    description: "Develop institutional websites, client investment dashboards, interactive loan calculators, customer onboarding portals, and automated financial lead management tailored to modern financial workflows.",
    heroImage: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1920",
    proofMetrics: [
      { value: "256-bit", label: "Bank-Grade SSL" },
      { value: "< 0.3s", label: "Calculation Latency" },
      { value: "100%", label: "Code Ownership" },
      { value: "3x", label: "Qualified Lead Volume" }
    ],
    specializedServices: [
      {
        title: "Financial Services & Institutional Websites",
        desc: "Authoritative, institutional web platforms designed to inspire trust, showcase advisory services, and attract high-net-worth investors.",
        badge: "FinTech Web",
        deliverables: ["Institutional design", "Regulatory disclaimers", "Advisory service showcases", "Leadership profiles", "Investor relations portals", "Security trust badges"]
      },
      {
        title: "Interactive Loan, EMI & SIP Calculators",
        desc: "Frictionless real-time calculators for home loans, personal loans, mutual fund returns, and insurance premiums with instant lead capture.",
        badge: "Calculators",
        deliverables: ["Interactive amortization graphs", "Dynamic interest adjustment", "Instant PDF schedule download", "One-click application trigger", "Lead qualification scoring", "Mobile responsive sliders"]
      },
      {
        title: "Client Investment & Loan Dashboards",
        desc: "Secure customer account portals for digital KYC submission, loan application tracking, portfolio overview, and statement downloads.",
        badge: "Client Portal",
        deliverables: ["Digital KYC document upload", "Application progress tracker", "Portfolio performance graphs", "Account statement generation", "Two-factor authentication", "Secure messaging"]
      },
      {
        title: "Financial CRM & Underwriting Pipelines",
        desc: "Automated pipelines capturing high-intent loan and investment inquiries, routing them to credit relationship managers in real-time.",
        badge: "CRM & Funnels",
        deliverables: ["Omnichannel inquiry capture", "CIBIL / credit score pre-screen", "Automated agent assignment", "WhatsApp loan approval alerts", "Manager escalation triggers", "Compliance audit logging"]
      },
      {
        title: "Insurance Policy Management Systems",
        desc: "Self-service policy selection, quote comparison, premium payment renewal, and digitized claims submission portals.",
        badge: "InsurTech",
        deliverables: ["Multi-policy quote comparison", "Automated renewal alerts", "Claims status tracking", "Digital document verification", "Payment gateway integration", "Agent commission portal"]
      },
      {
        title: "FinTech Growth Marketing & High-ROI SEO",
        desc: "Capturing search traffic for commercial loan queries, wealth management terms, and investment services across Google Search.",
        badge: "Financial Growth",
        deliverables: ["Commercial keyword ranking", "High-intent Google Ads management", "Competitor brand protection", "Financial schema markup", "Landing page conversion audits", "Localized financial SEO"]
      }
    ],
    targetSegments: [
      { title: "Non-Banking Financial Companies (NBFCs)", desc: "Loan origination portals, borrower dashboards, EMI calculators & credit scoring pipelines." },
      { title: "Wealth Management & Advisors", desc: "Private client portals, portfolio performance dashboards & SEBI-compliant advisory websites." },
      { title: "Insurance Brokers & Aggregators", desc: "Instant quote comparison engines, policy renewal reminders & claims tracking systems." },
      { title: "FinTech Startups & Micro-Lending", desc: "Next.js web applications, instant KYC verification & automated WhatsApp payment flows." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Customer anxiety regarding safety, payment processing security, and personal financial data.",
        solution: "Hardened security architecture featuring SSL 256-bit encryption, strict CSP headers, vulnerability scanning, and clear trust credentials."
      },
      {
        challenge: "High drop-off rates on complicated multi-step financial application forms.",
        solution: "Frictionless multi-step stepper UI with field validation, auto-save drafts, and WhatsApp recovery links boosting completions by 40%."
      },
      {
        challenge: "Slow legacy backend systems failing during high-volume advertising campaigns.",
        solution: "Serverless Next.js edge caching and optimized PostgreSQL microservices maintaining sub-second speeds even during sudden surges."
      },
      {
        challenge: "Unqualified inquiries wasting expensive credit officer time.",
        solution: "Interactive calculators that capture verified loan requirements, income brackets, and contact numbers before human hand-off."
      }
    ],
    techStack: [
      { category: "Frontend & UI", items: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "Chart.js"] },
      { category: "Security & Cloud", items: ["PostgreSQL", "Docker", "AWS KMS", "Cloudflare WAF", "Redis", "Node.js"] },
      { category: "Integrations & FinTech", items: ["Razorpay / Cashfree", "Stripe", "DigiLocker API", "CIBIL Webhooks", "WhatsApp API"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "FinTech Website Development Delhi", "Financial Service Website Design Gurgaon", "Loan EMI Calculator Web Development",
      "NBFC Software Development Company Noida", "Wealth Management Portal Development Delhi NCR", "Insurance Broker Website Development",
      "Investment Dashboard Development India", "Banking Portal Development Delhi", "FinTech App Development Gurgaon",
      "Financial Lead Generation Agency Delhi NCR", "Financial CRM Integration Noida", "Mutual Fund Advisory Website Design",
      "Microfinance Management Software", "Stock Broker Trading Portal Development", "Accounting Firm Website Design Delhi",
      "Tax Advisory Web Application", "Peer to Peer Lending Platform India", "FinTech SEO Agency Gurgaon",
      "Credit Score Checking Portal Development", "Financial Technology Solutions Delhi"
    ],
    featuresList: [
      "Bank-grade SSL encryption and security headers",
      "Real-time interactive loan, EMI and investment calculators",
      "Client document upload vault for KYC verification",
      "Multi-stage loan application tracker with SMS/WhatsApp alerts",
      "Role-based staff portal for relationship managers",
      "Automated lead scoring and routing to credit teams",
      "Clean financial schema markup for Google rich snippets",
      "Sub-second page speeds (<0.5s) optimized for mobile traffic",
      "Full compliance disclaimers and regulatory licensing displays",
      "100% intellectual property ownership with zero vendor lock-in"
    ],
    faqs: [
      {
        question: "How do you handle security for financial websites and portals?",
        answer: "We employ defense-in-depth architecture: end-to-end SSL/TLS encryption, secure HTTP-only cookies, automated rate-limiting against brute force, and data isolation at rest ensuring bank-grade protection."
      },
      {
        question: "Can the interactive calculators be customized to our exact lending formulas?",
        answer: "Yes, 100%. We write custom calculation algorithms for reducing balance EMIs, compounding interest, processing fees, GST calculations, and insurance premium brackets."
      },
      {
        question: "Can loan leads be automatically sent to our CRM and WhatsApp?",
        answer: "Yes! Every form submission or calculator interaction triggers real-time webhooks dispatching customer details directly to LeadSquared, Salesforce, Zoho, or your internal loan origination system."
      },
      {
        question: "What is the typical turnaround time for a financial website?",
        answer: "A standard financial corporate website takes 2 to 3 weeks. A complex portal featuring customer accounts, digital KYC upload, and calculator engines typically takes 4 to 5 weeks."
      },
      {
        question: "Do you assist with financial compliance and regulatory disclaimers?",
        answer: "Yes, we structure project pages to include prominent statutory notices, licensing information (RBI/SEBI/IRDAI guidelines), privacy policies, and terms of service."
      }
    ]
  },

  education: {
    id: "education",
    title: "Education & E-Learning",
    badge: "Scalable EdTech, LMS & Admissions Architecture",
    subtitle: "Build Engaging, Scalable Digital Platforms for Education",
    description: "Empower schools, universities, competitive coaching institutes, and EdTech startups with custom learning management systems, admissions portals, live class streaming, and fee collection engines.",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1920",
    proofMetrics: [
      { value: "< 0.3s", label: "Video Latency" },
      { value: "100%", label: "Automated Invoicing" },
      { value: "100%", label: "Code Ownership" },
      { value: "0", label: "Video Buffering" }
    ],
    specializedServices: [
      {
        title: "Learning Management Systems (LMS)",
        desc: "Custom-built, scalable course platforms featuring modular curriculum, progress tracking, quiz engines, and automated certificates.",
        badge: "Custom LMS",
        deliverables: ["Video lecture streaming", "Lesson completion tracking", "Automated quiz grading", "Downloadable PDF notes", "Course completion certificates", "Discussion forums"]
      },
      {
        title: "Student, Parent & Faculty Portals",
        desc: "Secure self-service dashboards for tracking attendance, examination schedules, assignment submissions, and progress report cards.",
        badge: "Student Portal",
        deliverables: ["Attendance tracking calendar", "Digital assignment submission", "Teacher grading dashboards", "Exam timetable & hall tickets", "Parent-teacher messaging", "Notice board announcements"]
      },
      {
        title: "School & University Authority Websites",
        desc: "Commanding academic web platforms designed to showcase campus infrastructure, curriculum, faculty credentials, and drive admissions.",
        badge: "Academic Web",
        deliverables: ["Interactive campus virtual tour", "Course & prospectus downloads", "Alumni network directory", "Academic calendar & events", "Faculty department showcases", "Accreditation badges"]
      },
      {
        title: "Live Classes & Anti-Cheat Examination Engines",
        desc: "WebRTC and Zoom-integrated live lecture environments with screen-lock proctored examinations and automated percentile generation.",
        badge: "Live & Exams",
        deliverables: ["Zero-lag live lecture streaming", "Anti-cheat tab lock detection", "Timed mock test papers", "Instant rank & percentile generation", "Question bank management", "Recorded lecture archives"]
      },
      {
        title: "Admission Lead Funnels & Fee Management",
        desc: "High-converting student enrollment landing pages with integrated payment gateway for tuition fee collection and installment reminders.",
        badge: "Admissions CRM",
        deliverables: ["Online application form", "Integrated fee payment gateways", "Automated WhatsApp fee receipts", "Installment payment tracking", "Lead capture CRM integration", "Counselor allocation"]
      },
      {
        title: "Education SEO & Course Enrollment Marketing",
        desc: "First-page Google rankings for competitive course queries, coaching programs, and localized school admissions across Delhi NCR.",
        badge: "Student Growth",
        deliverables: ["Local school & coaching SEO", "High-ROI Google Ads campaigns", "Course catalog rich snippets", "Student review video showcases", "Admissions seasonal PPC", "Organic keyword clusters"]
      }
    ],
    targetSegments: [
      { title: "K-12 Schools & International Academies", desc: "Campus websites, digital prospectus downloads, admissions pipelines & parent portals." },
      { title: "Colleges & Higher Ed Universities", desc: "Departmental web portals, online degree management & examination software." },
      { title: "Competitive Coaching Institutes", desc: "IIT-JEE, NEET, UPSC test series portals, video courses & student rank trackers." },
      { title: "EdTech Startups & Course Creators", desc: "Custom LMS platforms, paid video subscriptions & mobile learning applications." }
    ],
    challengesVsSolutions: [
      {
        challenge: "High student drop-off rates on slow, clunky open-source Moodle or WordPress LMS templates.",
        solution: "Bespoke Next.js LMS architecture with instantaneous page transitions, modern gamified badges, and distraction-free video playback."
      },
      {
        challenge: "Manual fee collection causing delayed payments and administrative paperwork headaches.",
        solution: "Automated fee invoicing engine with direct UPI/Card checkout, recurring payment triggers, and WhatsApp receipts."
      },
      {
        challenge: "Unauthorized video piracy and credential sharing among non-paying students.",
        solution: "Encrypted HLS video streaming with dynamic watermarking showing student phone numbers and single-session login limits."
      },
      {
        challenge: "High cost per lead on Google Ads during competitive annual admission seasons.",
        solution: "Conversion-optimized landing pages with instant syllabus downloads and phone OTP verification lowering acquisition costs by 35%."
      }
    ],
    techStack: [
      { category: "Frontend & Video", items: ["Next.js 15", "React 19", "WebRTC", "Video.js", "Tailwind CSS"] },
      { category: "Backend & Storage", items: ["Node.js", "PostgreSQL", "AWS S3 / CloudFront", "Redis", "Docker"] },
      { category: "Integrations & APIs", items: ["Razorpay / Stripe", "Zoom / Agora API", "WhatsApp Cloud API", "Google Classroom"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "School Website Development Delhi", "LMS Development Company Gurgaon", "Coaching Institute Website Design Noida",
      "Online Course Platform Development Delhi NCR", "Student Portal Software India", "University Web Portal Development",
      "EdTech App Development Gurgaon", "School ERP Integration Delhi", "Online Examination System Development",
      "Education Website Development Agency", "Teacher Student Dashboard Development", "Admission Lead Generation Agency Delhi NCR",
      "Kindergarten Website Design Gurgaon", "College Admission Portal Noida", "Live Video Learning Platform India",
      "E-Learning App Development Delhi", "Education SEO Agency Gurgaon", "Course Selling Website Development",
      "Tutor Booking Platform Development", "Education Technology Solutions Delhi"
    ],
    featuresList: [
      "Sub-second video playback with encrypted streaming protocols",
      "Modular course curriculum with quiz & assignment checkpoints",
      "Student & parent login dashboards with attendance trackers",
      "Online admission application forms with document upload",
      "Automated fee collection via UPI, cards, and netbanking",
      "Anti-cheat proctored examination engine with instant scoring",
      "WhatsApp automated fee receipts and lecture schedule alerts",
      "Alumni directory and academic event calendar integration",
      "Mobile-friendly interface tested across all smartphone sizes",
      "100% intellectual property and student data ownership"
    ],
    faqs: [
      {
        question: "Can our LMS handle thousands of concurrent live students during peak lectures?",
        answer: "Yes! Our cloud-native architecture scales horizontally on AWS with global CDN edge caching, ensuring zero buffering even when thousands of students log in simultaneously."
      },
      {
        question: "How do you protect our premium course video content from being downloaded or pirated?",
        answer: "We implement dynamic forensic watermarking (displaying the student's name and ID across the screen) and encrypted HLS video streams that prevent screen-grabbing and unauthorized file downloads."
      },
      {
        question: "Can parents view their children's grades and attendance on mobile?",
        answer: "Yes. Our parent portal provides a clean, mobile-optimized view of real-time attendance, monthly report cards, upcoming exam dates, and pending fee dues."
      },
      {
        question: "What is the timeline for developing a custom education platform?",
        answer: "A school or coaching institute website takes 2 to 3 weeks. A complete LMS platform with student portals, video streaming, and automated test series takes 4 to 6 weeks."
      },
      {
        question: "Do we own the platform and student database?",
        answer: "Yes, 100%. Unlike SaaS platforms (Teachable, Kajabi) that charge monthly fees and lock your data, HiveRift delivers full code and database ownership with zero ongoing platform commissions."
      }
    ]
  },

  hospitality: {
    id: "hospitality",
    title: "Travel & Hospitality",
    badge: "Direct Bookings & 0% OTA Commission Architecture",
    subtitle: "Make Travel Booking Effortless From Search to Checkout",
    description: "Empower boutique hotels, luxury resorts, tour operators, and travel agencies with custom direct reservation engines, live flight/hotel API integrations, and automated guest WhatsApp alerts.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920",
    proofMetrics: [
      { value: "0%", label: "OTA Commissions" },
      { value: "< 0.5s", label: "Availability Sync" },
      { value: "100%", label: "Code Ownership" },
      { value: "+65%", label: "Direct Bookings" }
    ],
    specializedServices: [
      {
        title: "Direct Hotel & Resort Booking Engines",
        desc: "High-converting reservation engines enabling guests to book rooms directly, eliminating costly 15-25% OTA commissions.",
        badge: "Direct Booking",
        deliverables: ["Real-time room calendar", "Seasonal dynamic pricing", "Add-on amenity sales (spa, dining)", "Instant SMS/WhatsApp confirmation", "Multi-room selection", "Direct payment processing"]
      },
      {
        title: "Tour Operator & Package Portals",
        desc: "Custom holiday package builders with multi-day itinerary displays, day-wise route maps, inclusion checklists, and instant quotation.",
        badge: "Tour Portals",
        deliverables: ["Interactive trip itineraries", "Day-by-day photo galleries", "Customizable package builders", "Deposit & balance payment split", "PDF itinerary downloads", "Group booking calculators"]
      },
      {
        title: "Flight & Hotel API Integrations (GDS)",
        desc: "Connecting your portal with Amadeus, Sabre, Hotelbeds, or Travelport for real-time global inventory synchronization.",
        badge: "GDS APIs",
        deliverables: ["Live seat & room availability", "Dynamic markup management", "Instant PNR & voucher dispatch", "Multi-supplier price comparison", "Automated ticket cancellation", "Currency conversion"]
      },
      {
        title: "Guest Dashboards & WhatsApp Concierge",
        desc: "Self-service guest portals for check-in documentation, itinerary modifications, and automated WhatsApp trip updates.",
        badge: "Guest UX",
        deliverables: ["Digital pre-arrival check-in", "Automated WhatsApp directions", "Itinerary PDF download", "Special dietary request forms", "Loyalty discount codes", "One-tap front desk WhatsApp"]
      },
      {
        title: "Multi-Currency International Payments",
        desc: "Accept reservations from domestic and international travelers seamlessly with automated currency conversion and zero payment friction.",
        badge: "Payments",
        deliverables: ["Stripe / Razorpay international payments", "Apple Pay & Google Pay ready", "Multi-currency price switcher", "Zero-chargeback fraud detection", "Automated invoice generation", "Refund workflows"]
      },
      {
        title: "Hospitality SEO & Google Hotel Ads",
        desc: "Outranking booking aggregators for your property name and capturing high-intent holiday searchers on Google.",
        badge: "Travel Growth",
        deliverables: ["Google Business Profile 3-Pack SEO", "Google Hotel Ads integration", "High-intent vacation keyword rankings", "Luxury resort visual storytelling", "Seasonal holiday PPC funnels", "Influencer review showcases"]
      }
    ],
    targetSegments: [
      { title: "Boutique Hotels & Luxury Resorts", desc: "Direct booking engines, room availability calendars & zero-commission guest checkout." },
      { title: "Tour Operators & Travel Agencies", desc: "Holiday package portals, day-wise itinerary showcases & customized group booking quotes." },
      { title: "Vacation Rental & Villa Companies", desc: "Property showcase websites, calendar blocking & instant WhatsApp host chat." },
      { title: "Corporate Travel Desks", desc: "B2B employee travel booking, GST invoicing & automated approval workflows." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Losing 15% to 25% of top-line revenue to aggregators like MakeMyTrip, Agoda, and Booking.com.",
        solution: "Custom branded direct booking engine with best-price guarantee widgets, exclusive perks, and instant checkout increasing direct revenue by 65%."
      },
      {
        challenge: "High cart abandonment when guests encounter clunky mobile booking calendars.",
        solution: "Frictionless mobile booking interface with real-time room availability, autofill guest details, and one-tap UPI/Card payment."
      },
      {
        challenge: "Slow manual itinerary creation leading to lost travel package inquiries.",
        solution: "Automated itinerary generator producing beautiful branded PDF itineraries and instant WhatsApp quotes in under 2 minutes."
      },
      {
        challenge: "Double-booking errors across multiple sales channels and offline desks.",
        solution: "Two-way iCal / API channel manager synchronization ensuring room inventory is blocked across all channels in real time."
      }
    ],
    techStack: [
      { category: "Storefront & Engine", items: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend & Database", items: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"] },
      { category: "Travel Integrations", items: ["Amadeus API", "Hotelbeds", "Stripe", "Razorpay", "WhatsApp API"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Hotel Website Development Delhi", "Travel Agency Website Design Gurgaon", "Tour Booking Portal Development Noida",
      "Resort Booking Engine Development Delhi NCR", "Flight API Integration Company India", "Hotelbeds API Integration Agency",
      "Vacation Rental Website Development", "Travel Portal Development Gurgaon", "Direct Hotel Booking Software",
      "Hospitality SEO Agency Delhi", "Tour Operator Software Development", "Travel Mobile App Development Noida",
      "Online Travel Agency Web Development", "Hotel CRM Integration Delhi NCR", "Luxury Resort Website Design Gurgaon",
      "Travel Itinerary Builder Software", "Corporate Travel Portal Development", "Hotel Google Ads Agency Delhi",
      "Homestay Booking Platform India", "Travel Technology Solutions Delhi"
    ],
    featuresList: [
      "Sub-second room availability calendar with dynamic pricing",
      "Direct commission-free booking engine with instant confirmations",
      "Day-wise tour itinerary builder with high-res photo galleries",
      "International multi-currency payment gateway (Stripe & Razorpay)",
      "Automated WhatsApp booking confirmations and arrival directions",
      "Two-way calendar sync preventing double-booking errors",
      "Google Hotel Ads and Schema markup for rich search results",
      "Customer self-service dashboard for invoice & voucher downloads",
      "Mobile-optimized checkout with Apple Pay & UPI one-tap payment",
      "100% full source code ownership with zero ongoing platform cuts"
    ],
    faqs: [
      {
        question: "How does a direct booking engine help us beat OTA commissions?",
        answer: "By offering guests exclusive perks (free breakfast, early check-in, lowest price guarantee) and a sub-second, frictionless booking experience, you convert lookers into direct bookers, saving 15-25% on every reservation."
      },
      {
        question: "Can our website synchronize availability with Booking.com and Airbnb?",
        answer: "Yes! We implement two-way channel synchronization (via iCal and Channel Manager APIs) so whenever a room is booked on your website, it is automatically marked unavailable across all third-party OTAs."
      },
      {
        question: "Do you build tour package builders with custom pricing?",
        answer: "Yes, we engineer custom package calculators allowing travel agencies to define seasonal rates, hotel tiers (3-star, 4-star, luxury), vehicle options, and optional sightseeing excursions with dynamic pricing."
      },
      {
        question: "What is the delivery timeline for a hospitality platform?",
        answer: "A luxury boutique hotel website with an integrated booking engine takes 2 to 3 weeks. A complex travel portal with multi-destination itineraries and GDS flight/hotel APIs takes 4 to 6 weeks."
      },
      {
        question: "Do we have to pay monthly transaction fees or commissions to HiveRift?",
        answer: "Never. HiveRift charges a transparent, fixed-milestone development fee. You keep 100% of your booking revenues with zero commissions or vendor lock-in."
      }
    ]
  },

  retail: {
    id: "retail",
    title: "Retail & eCommerce",
    badge: "Headless Commerce, Sub-Second Load & High AOV",
    subtitle: "Build Fast, High-Converting Online Stores Engineered to Scale",
    description: "From breakout D2C brands to high-volume multi-vendor marketplaces, HiveRift engineers custom eCommerce experiences that maximize product discovery, checkout completion, and customer retention.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920",
    proofMetrics: [
      { value: "< 0.5s", label: "Product Page Speed" },
      { value: "+40%", label: "Checkout Conversion" },
      { value: "100%", label: "Code Ownership" },
      { value: "0", label: "Flash-Sale Downtime" }
    ],
    specializedServices: [
      {
        title: "Headless eCommerce & Next.js Storefronts",
        desc: "Ultra-fast custom storefronts decoupled from legacy backends, delivering sub-second page loads and superior Google Core Web Vitals.",
        badge: "Headless",
        deliverables: ["Sub-second initial page load", "Custom micro-animations", "Dynamic search filtering", "Instant add-to-cart", "Server-side rendering (SSR)", "Global edge caching"]
      },
      {
        title: "Shopify Plus & WooCommerce Engineering",
        desc: "Bespoke theme architecture, custom Liquid modules, private Shopify apps, and frictionless single-page checkout flows.",
        badge: "Shopify & Woo",
        deliverables: ["Custom Shopify Plus themes", "One-click checkout optimization", "Third-party app audit & removal", "Custom collection filters", "Subscription billing setups", "Wholesale B2B portal"]
      },
      {
        title: "Multi-Vendor Marketplace Architectures",
        desc: "Robust marketplace platforms supporting independent vendor stores, automated payout splits, commission tracking, and seller portals.",
        badge: "Marketplaces",
        deliverables: ["Vendor registration & onboarding", "Automated commission splits", "Unified multi-seller cart", "Merchant inventory dashboards", "Customer review verification", "Order fulfillment tracking"]
      },
      {
        title: "Omnichannel Inventory & Warehouse Sync",
        desc: "Real-time stock synchronization across physical retail outlets, warehouse ERPs, and online digital storefronts.",
        badge: "Inventory ERP",
        deliverables: ["Multi-warehouse stock allocation", "Barcode scanning integration", "Automated low-stock alerts", "Return & exchange management", "ERP webhook synchronization", "Batch order fulfillment"]
      },
      {
        title: "Cart Abandonment & WhatsApp Recovery",
        desc: "Automated retention workflows re-engaging shoppers who abandon their carts via targeted WhatsApp messages and personalized discounts.",
        badge: "CRO & Recovery",
        deliverables: ["One-tap WhatsApp checkout links", "Automated 30-min cart alerts", "Personalized dynamic discounts", "Post-purchase delivery tracking", "Repeat buyer loyalty points", "Exit-intent popup offers"]
      },
      {
        title: "eCommerce SEO & Performance Marketing",
        desc: "Dominating Google Shopping feeds, category keyword clusters, and high-ROI Meta/Google ad campaigns to scale monthly revenue.",
        badge: "Growth Marketing",
        deliverables: ["Google Merchant Center feeds", "Structured product schema", "Category page SEO optimization", "High-ROAS Meta catalog ads", "Customer lifetime value scaling", "Retargeting funnels"]
      }
    ],
    targetSegments: [
      { title: "Direct-to-Consumer (D2C) Brands", desc: "High-speed Next.js and Shopify Plus storefronts optimized for Instagram ads and high AOV." },
      { title: "Multi-Brand Retail Chains", desc: "Omnichannel websites connecting retail stores with unified online ordering and inventory." },
      { title: "Multi-Vendor Marketplaces", desc: "Scalable seller portals, commission engines and split payment processing architectures." },
      { title: "B2B Wholesale & Distributors", desc: "Tiered wholesale pricing, bulk order entry forms, tax invoicing & credit line management." }
    ],
    challengesVsSolutions: [
      {
        challenge: "High cart abandonment rates on mobile devices due to slow loading and tedious checkout forms.",
        solution: "Frictionless one-page checkout with autofilled address via phone number, UPI intent payment, and sub-second load times."
      },
      {
        challenge: "Online store crashing or slowing to a crawl during high-traffic festival sales and flash promotions.",
        solution: "Cloud-native serverless architecture with global CDN caching ensuring zero downtime even under 100,000+ concurrent shoppers."
      },
      {
        challenge: "Inventory mismatches between retail stores and online channels causing frustrating stockout cancellations.",
        solution: "Real-time bi-directional inventory webhooks updating stock levels within 500ms of any purchase across all channels."
      },
      {
        challenge: "Skyrocketing customer acquisition costs (CAC) eating up all profit margins.",
        solution: "Automated WhatsApp re-engagement flows and technical eCommerce SEO generating organic search revenue and repeat buyers."
      }
    ],
    techStack: [
      { category: "Storefront Tech", items: ["Next.js 15", "React 19", "Shopify Plus", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend & Data", items: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS S3"] },
      { category: "eCommerce APIs", items: ["Razorpay / Cashfree", "Stripe", "Shiprocket API", "WhatsApp Cloud API", "Algolia"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "eCommerce Website Development Delhi", "Shopify Plus Agency Gurgaon", "Custom eCommerce Development Noida",
      "WooCommerce Website Design Delhi NCR", "Multi Vendor Marketplace Development", "D2C Brand Website Development Gurgaon",
      "Headless Commerce Development Delhi", "eCommerce App Development Noida", "Online Store Speed Optimization",
      "eCommerce SEO Agency Delhi NCR", "Retail ERP Integration Company", "B2B eCommerce Portal Development",
      "Payment Gateway Integration Delhi", "Fashion Brand Website Design Gurgaon", "Grocery eCommerce App Development",
      "eCommerce Conversion Rate Optimization", "Inventory Management Portal India", "Shopify Developer in Delhi",
      "Next.js eCommerce Agency Gurgaon", "Retail Technology Solutions Delhi"
    ],
    featuresList: [
      "Sub-second page speeds (<0.5s) on mobile 4G/5G connections",
      "One-page frictionless checkout supporting UPI, cards, and COD",
      "Real-time multi-warehouse inventory tracking and stock alerts",
      "Automated WhatsApp abandoned cart recovery with instant checkout links",
      "Advanced facet search with instant filtering by size, color, and price",
      "Automated courier integration with Shiprocket / Delhivery for live tracking",
      "Dynamic customer review showcase with verified buyer badges",
      "Wholesale B2B portal with tiered pricing and GST tax invoicing",
      "Product schema markup for Google Shopping rich snippet inclusion",
      "100% intellectual property ownership with zero recurring platform commissions"
    ],
    faqs: [
      {
        question: "Should we build on Shopify Plus or a custom Headless Next.js stack?",
        answer: "If you want an all-in-one ecosystem with existing apps, Shopify Plus is great. If you demand sub-second load times, total UI design freedom, zero app monthly bloat, and superior Google SEO, a Headless Next.js storefront is the gold standard. We build both."
      },
      {
        question: "How do you optimize checkout to prevent cart abandonment?",
        answer: "We streamline checkout into a single page with phone number OTP autofill, prominent trust badges, transparent delivery dates, and direct UPI intent buttons (GPay, PhonePe, Paytm) that eliminate manual card entry."
      },
      {
        question: "Can you synchronize our website inventory with physical retail stores?",
        answer: "Yes! We build automated webhooks connecting your POS (e.g. Logic ERP, Tally, Ginesys) with your eCommerce database, ensuring stock counts remain 100% accurate across both physical and digital stores."
      },
      {
        question: "What is the typical timeline for an eCommerce project?",
        answer: "A custom Shopify or WooCommerce store takes 2 to 3 weeks. An enterprise Headless Next.js commerce platform or multi-vendor marketplace takes 4 to 6 weeks."
      },
      {
        question: "Do you provide ongoing technical support after launch?",
        answer: "Yes, every eCommerce project includes 30 days of complimentary hyper-care support, followed by optional monthly SLAs covering server monitoring, speed maintenance, security patches, and promotional campaign readiness."
      }
    ]
  },

  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    badge: "Industry 4.0, Custom ERP & B2B Dealer Portals",
    subtitle: "Digitize Factory Operations, Production Tracking & B2B Distribution",
    description: "Replace manual paper-based processes and disconnected spreadsheets with high-performance B2B dealer portals, factory inventory systems, automated RFQ workflows, and corporate industrial websites.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920",
    proofMetrics: [
      { value: "5x", label: "Faster RFQ Turnaround" },
      { value: "-60%", label: "Manual Data Entry" },
      { value: "100%", label: "Code Ownership" },
      { value: "24/7", label: "Factory Visibility" }
    ],
    specializedServices: [
      {
        title: "Industrial Corporate Websites & Digital Catalogs",
        desc: "Showcase manufacturing capabilities, machinery specifications, ISO certifications, and downloadable CAD/PDF engineering datasheets.",
        badge: "Industrial Web",
        deliverables: ["Product spec sheets", "Interactive machinery viewer", "Downloadable CAD/PDF catalogs", "ISO certification showcases", "Global inquiry routing", "Factory virtual tour"]
      },
      {
        title: "B2B Dealer & Distributor Ordering Portals",
        desc: "Self-service online ordering platforms for dealers with customized price tiers, credit line tracking, and dispatch status updates.",
        badge: "Dealer Portal",
        deliverables: ["Tiered dealer pricing matrices", "Bulk order spreadsheet upload", "Credit limit & ledger tracking", "Real-time dispatch alerts", "Warranty claim submission", "Sales incentive dashboards"]
      },
      {
        title: "Custom Cloud ERP & Factory Operations Systems",
        desc: "Tailored operations platforms tracking Bill of Materials (BOM), shopfloor production stages, raw material requisitions, and QC audits.",
        badge: "Custom ERP",
        deliverables: ["Bill of Materials (BOM) manager", "Shop floor production tracking", "Raw material stockout alerts", "Quality control inspection logs", "Machine maintenance schedules", "Staff shift management"]
      },
      {
        title: "Quotation & RFQ Processing Automation",
        desc: "Automated cost estimation engines that generate commercial B2B quotations in minutes instead of taking days of manual engineering time.",
        badge: "RFQ Automation",
        deliverables: ["Dynamic pricing calculator", "Automated PDF quotation generator", "Sales engineer approval matrix", "Customer quote acceptance tracking", "WhatsApp quotation dispatch", "CRM pipeline sync"]
      },
      {
        title: "Supply Chain & Warehouse Management",
        desc: "End-to-end material tracking from supplier gate entry through production batches to finished goods dispatch.",
        badge: "Supply Chain",
        deliverables: ["Inbound gate entry logging", "Barcode & QR batch tracking", "Warehouse bin allocation", "Dispatch gate pass generation", "Courier & transporter tracking", "Vendor evaluation metrics"]
      },
      {
        title: "Industrial B2B SEO & Global Export Funnels",
        desc: "Capturing search demand from domestic procurement managers and international buyers searching for industrial manufacturers.",
        badge: "Export Growth",
        deliverables: ["B2B keyword cluster optimization", "Google Search Ads for OEM buyers", "Multi-language export landing pages", "Technical schema markup", "Indiamart/TradeIndia conversion audits", "Global RFQ capture forms"]
      }
    ],
    targetSegments: [
      { title: "Original Equipment Manufacturers (OEMs)", desc: "Corporate capability showcases, component catalogs & high-value engineering inquiry funnels." },
      { title: "Industrial Machinery & Tooling Makers", desc: "Machine specification databases, dealer quotation portals & spare parts ordering systems." },
      { title: "Automotive Ancillary & Metal Fabrication", desc: "Shopfloor tracking, QC inspection logs, supplier portals & dispatch management." },
      { title: "Export Houses & Bulk Distributors", desc: "Multi-currency export portals, container tracking & international buyer RFQ systems." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Lost orders due to 3-5 day delays in manually calculating costs and generating B2B quotations.",
        solution: "Automated RFQ pricing engine calculating material, labor, and margin formulas to generate branded PDF quotations in under 5 minutes."
      },
      {
        challenge: "Blind spots between what is happening on the factory floor and what sales promises to clients.",
        solution: "Cloud-connected production tracking dashboards showing live work-in-progress status from cutting to final packing."
      },
      {
        challenge: "Dealers calling customer support constantly to check stock availability and dispatch status.",
        solution: "Self-service B2B dealer portal where dealers view real-time stock, place bulk orders, and track courier waybills 24/7."
      },
      {
        challenge: "Critical raw material stockouts shutting down expensive production lines unexpectedly.",
        solution: "Automated reorder-level alerts that trigger procurement purchase orders before inventories drop below safety thresholds."
      }
    ],
    techStack: [
      { category: "Web & Portal UI", items: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"] },
      { category: "Backend & Systems", items: ["Node.js", "PostgreSQL", "Docker", "AWS", "Python", "Redis"] },
      { category: "Industrial Integrations", items: ["Tally / SAP Webhooks", "Barcode APIs", "WhatsApp API", "PDF Generation Engines"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Manufacturing Website Development Delhi", "B2B Portal Development Gurgaon", "Custom ERP Development Company Noida",
      "Industrial Equipment Website Design", "Dealer Portal Development Delhi NCR", "Factory Management Software India",
      "RFQ Automation System Development", "Industrial Machinery Website Gurgaon", "Supply Chain Portal Development",
      "Manufacturing ERP Integration Delhi", "B2B eCommerce Platform Manufacturing", "Distributor Management System Noida",
      "Export House Website Design Delhi", "Automotive Parts Portal Development", "Industrial SEO Agency Gurgaon",
      "Production Tracking Software India", "Factory Automation Web Portal", "OEM Website Development Delhi NCR",
      "Manufacturing Technology Solutions Delhi", "Industrial Digital Transformation Agency"
    ],
    featuresList: [
      "Online digital engineering catalog with downloadable CAD/PDF specs",
      "Automated RFQ quotation engine with multi-tier approval workflows",
      "Self-service dealer ordering portal with custom price matrices",
      "Real-time dispatch and shipment tracking with transporter waybills",
      "Shopfloor production batch tracking and QC inspection logging",
      "Two-way integration with Tally, SAP, or existing accounting software",
      "WhatsApp automated quotation dispatch and dispatch notifications",
      "Mobile-friendly interface for field sales engineers and factory supervisors",
      "Multi-language support for international export procurement managers",
      "100% source code ownership with zero ongoing per-user license fees"
    ],
    faqs: [
      {
        question: "Can you build a custom ERP that fits our exact manufacturing processes?",
        answer: "Yes, exactly. Unlike rigid off-the-shelf ERPs (SAP, Oracle) that force you to change how your factory operates and cost millions in license fees, we build lean, customized cloud systems tailored to your unique workflows."
      },
      {
        question: "Can our dealers place bulk orders and check their credit ledger online?",
        answer: "Yes! The B2B dealer portal gives each authorized distributor a secure login to view their personalized price tier, credit balance, pending invoices, and place bulk orders with real-time stock validation."
      },
      {
        question: "Can the system integrate with our existing Tally or accounting software?",
        answer: "Yes, we regularly build bi-directional webhooks and automated sync tools that push approved invoices, purchase orders, and payment entries directly into Tally, Busy, or SAP."
      },
      {
        question: "What is the timeline for an industrial manufacturing platform?",
        answer: "A corporate industrial website with catalog downloads takes 2 to 3 weeks. A comprehensive B2B dealer portal or custom shopfloor ERP platform takes 4 to 6 weeks."
      },
      {
        question: "Do we have to pay recurring user license fees for our staff and dealers?",
        answer: "No. You own 100% of the software and codebase. You can create unlimited accounts for employees, factory staff, dealers, and suppliers without paying a single rupee in per-user license fees."
      }
    ]
  },

  logistics: {
    id: "logistics",
    title: "Logistics & Supply Chain",
    badge: "Real-Time Tracking & 3PL Fleet Architecture",
    subtitle: "Streamline Freight Operations, Consignment Tracking & Fleet Management",
    description: "Replace manual call inquiries and paper waybills with real-time consignment tracking portals, freight quotation engines, 3PL warehouse dashboards, and automated courier communication.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920",
    proofMetrics: [
      { value: "Real-Time", label: "GPS Tracking Sync" },
      { value: "< 0.3s", label: "Waybill Lookup" },
      { value: "100%", label: "Code Ownership" },
      { value: "-40%", label: "Call Center Load" }
    ],
    specializedServices: [
      {
        title: "Consignment & Waybill Tracking Portals",
        desc: "Instant tracking lookup by AWB / container number showing live milestone timelines, GPS locations, and estimated delivery dates.",
        badge: "Live Tracking",
        deliverables: ["Instant waybill number search", "Milestone timeline display", "Live GPS vehicle location", "Automated SMS/WhatsApp alerts", "Proof of delivery (POD) viewer", "Exception & delay alerts"]
      },
      {
        title: "Freight Rate Calculators & Booking Portals",
        desc: "Dynamic freight cost estimation for air, ocean, and surface cargo with volumetric weight calculation and instant booking checkout.",
        badge: "Rate Engines",
        deliverables: ["Volumetric weight calculator", "Ocean, air & road rate cards", "Port-to-port route lookup", "Instant freight quote generator", "Online shipping booking", "Customs duty estimation"]
      },
      {
        title: "3PL Warehouse Management Dashboards",
        desc: "Centralized cloud dashboards for inventory receiving, pallet storage allocation, pick-and-pack workflows, and automated dispatch passes.",
        badge: "3PL Systems",
        deliverables: ["Inbound cargo logging", "Pallet bin allocation", "Pick & pack verification", "Dispatch gate pass generator", "Client inventory view", "Low-stock alert webhooks"]
      },
      {
        title: "Fleet & Driver Management Portals",
        desc: "Manage vehicle documentation, driver trip logging, fuel expense tracking, and scheduled maintenance alerts in one platform.",
        badge: "Fleet Ops",
        deliverables: ["Vehicle compliance & permit tracking", "Driver trip assignment", "Fuel expense logging", "Scheduled maintenance alerts", "Route optimization suggestions", "Driver mobile view"]
      },
      {
        title: "Digital Proof-of-Delivery (POD) Systems",
        desc: "Paperless delivery confirmation capture featuring digital signatures, timestamped photo evidence, and instant customer dispatch.",
        badge: "Digital POD",
        deliverables: ["Mobile signature capture", "Timestamped photo upload", "GPS geo-stamp confirmation", "Instant customer email dispatch", "Disputed delivery resolution", "Automated invoice release"]
      },
      {
        title: "Logistics Digital Marketing & Corporate B2B SEO",
        desc: "Generating consistent freight contract inquiries and dominating local Google search for freight forwarders and 3PL providers.",
        badge: "Logistics Growth",
        deliverables: ["Google 3-Pack logistics rankings", "Trade corridor keyword clusters", "B2B shipping PPC campaigns", "Customs broker landing pages", "Corporate RFQ capture funnels", "Client testimonial showcases"]
      }
    ],
    targetSegments: [
      { title: "Freight Forwarders & Customs Brokers", desc: "Container tracking, rate calculators, custom clearance portals & corporate shipping inquiries." },
      { title: "3PL & Warehouse Operators", desc: "Client inventory dashboards, pallet allocation systems & dispatch reconciliation." },
      { title: "Fleet & Trucking Companies", desc: "Vehicle tracking, driver duty logs, trip billing & automated proof-of-delivery capture." },
      { title: "Last-Mile Courier Startups", desc: "Consignment tracking web portals, courier delivery apps & automated WhatsApp updates." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Customer support overwhelmed with hundreds of phone calls asking 'Where is my shipment?'.",
        solution: "Sub-second waybill lookup portal paired with automated WhatsApp milestone alerts reducing support inquiries by 40%."
      },
      {
        challenge: "Lost or delayed delivery payments due to lost physical paper Proof-of-Delivery (POD) slips.",
        solution: "Paperless digital POD mobile capture with customer e-signatures and timestamps triggering instant invoice generation."
      },
      {
        challenge: "Complex volumetric weight calculations causing frequent shipping pricing disputes.",
        solution: "Interactive dimension-based freight calculator that computes accurate CBM/CFT volumetric weight and transparent freight pricing."
      },
      {
        challenge: "High vehicle downtime due to forgotten permit renewals and missed maintenance schedules.",
        solution: "Automated fleet compliance dashboard sending proactive alerts before vehicle fitness, insurance, or road permits expire."
      }
    ],
    techStack: [
      { category: "Web & Mobile", items: ["Next.js 15", "React 19", "React Native", "Tailwind CSS"] },
      { category: "Cloud & Location", items: ["Google Maps Platform", "Node.js", "PostgreSQL", "Redis", "Docker"] },
      { category: "Logistics APIs", items: ["GPS Device Webhooks", "WhatsApp Cloud API", "Razorpay", "SMS Gateways"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Logistics Website Development Delhi", "Shipment Tracking Portal Development Gurgaon", "Freight Forwarder Website Design Noida",
      "3PL Warehouse Management Software", "Fleet Management Portal Delhi NCR", "Courier Delivery App Development India",
      "Waybill Generation System Development", "Cargo Website Development Gurgaon", "Logistics ERP Integration Delhi",
      "Transportation Management Portal Noida", "Freight Rate Calculator Development", "Last Mile Delivery Software India",
      "Supply Chain Visibility Platform", "Cold Chain Logistics Website Design", "Customs Broker Website Development Delhi",
      "Logistics SEO Agency Gurgaon", "Truck Booking App Development", "Container Tracking Web Portal",
      "Logistics Technology Solutions Delhi", "Express Courier Portal Development"
    ],
    featuresList: [
      "Sub-second consignment tracking by AWB, container or order number",
      "Interactive freight rate calculator with volumetric weight conversion",
      "Automated WhatsApp tracking updates on shipment dispatch and out-for-delivery",
      "Digital Proof of Delivery (POD) capture with signatures and timestamps",
      "3PL client portal for real-time inventory and dispatch monitoring",
      "Google Maps integration with live route milestones and depot locations",
      "Automated e-waybill generation and billing reconciliation workflows",
      "Mobile-friendly interface for warehouse operators, drivers and consignees",
      "B2B corporate contract inquiry funnels with transparent pricing calculators",
      "100% intellectual property ownership with zero monthly per-transaction cuts"
    ],
    faqs: [
      {
        question: "Can our customers track their shipments directly on WhatsApp?",
        answer: "Yes! We integrate the official WhatsApp Cloud API so customers can simply text their waybill or order number to your verified business number and receive instant status and delivery ETAs."
      },
      {
        question: "Can your system integrate with our GPS device providers on our trucks?",
        answer: "Yes, we integrate with major GPS tracking providers (Teltonika, Convex, Fleetx, etc.) via REST APIs and webhooks to reflect real-time vehicle positions directly on your portal."
      },
      {
        question: "Do you build international freight quote calculators with airport and sea port codes?",
        answer: "Yes, our dynamic freight engines allow clients to select origin/destination sea ports (POL/POD) or airports (IATA codes), input container or pallet dimensions, and view instant freight rate quotes."
      },
      {
        question: "What is the turnaround time for a logistics platform?",
        answer: "A corporate freight forwarder website with instant tracking takes 2 to 3 weeks. A comprehensive 3PL portal or fleet management platform with GPS webhooks takes 4 to 5 weeks."
      },
      {
        question: "Do we own the source code and tracking software?",
        answer: "Yes, 100%. HiveRift delivers full source code repositories and deployment infrastructure with zero recurring software royalties."
      }
    ]
  },

  "professional-services": {
    id: "professional-services",
    title: "Professional Services & Consulting",
    badge: "Authority Positioning, Client Intake & Encrypted Vaults",
    subtitle: "Establish Market Authority & Automate High-Value Client Intake",
    description: "Transform your consulting firm, accounting practice, architecture studio, or advisory agency into an authoritative digital powerhouse with bespoke websites, pre-screened client booking, and encrypted client vaults.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920",
    proofMetrics: [
      { value: "3x", label: "High-Ticket Client Inquiries" },
      { value: "100%", label: "Calendar Automation" },
      { value: "100%", label: "Code Ownership" },
      { value: "< 0.5s", label: "Page Load Speed" }
    ],
    specializedServices: [
      {
        title: "High-Authority Corporate Firm Websites",
        desc: "Commanding, editorial web platforms showcasing credentials, partner bios, practice area overviews, and high-impact client case studies.",
        badge: "Corporate Web",
        deliverables: ["Editorial typography", "Senior partner credentials", "Practice area overviews", "Published thought leadership", "Client case studies", "Industry awards showcase"]
      },
      {
        title: "Automated Consultation Intake & Booking",
        desc: "Frictionless calendar scheduling with pre-qualification intake questions ensuring you only spend time on qualified high-ticket leads.",
        badge: "Client Intake",
        deliverables: ["Direct calendar booking sync", "Pre-meeting qualification questions", "Automated email/SMS reminders", "Consultation fee collection", "Zoom/Teams meeting generation", "Conflict check workflows"]
      },
      {
        title: "Confidential Client Document & Data Vaults",
        desc: "End-to-end encrypted client portals for securely uploading financial records, audit papers, architectural drawings, and legal briefs.",
        badge: "Client Vault",
        deliverables: ["Encrypted document storage", "Digital e-signature integration", "Project milestone tracking", "Invoice and retainer payments", "Privileged client messaging", "Two-factor authentication"]
      },
      {
        title: "Interactive Scope & Retainer Estimators",
        desc: "Interactive calculators allowing prospective corporate clients to estimate project scope and investment tiers, capturing qualified enterprise leads.",
        badge: "Scope Calculators",
        deliverables: ["Dynamic scope selector", "Estimated budget bracket", "Instant proposal generation", "CRM lead qualification score", "Automated NDA dispatch", "Sales notification webhooks"]
      },
      {
        title: "B2B CRM & Deal Velocity Pipelines",
        desc: "Centralize client inquiries from your website, LinkedIn, and referrals into a streamlined CRM pipeline with automated follow-ups.",
        badge: "B2B CRM",
        deliverables: ["Omnichannel lead aggregation", "Automated proposal follow-up alerts", "Client communication history", "Contract renewal reminders", "Sales performance metrics", "WhatsApp webhook alerts"]
      },
      {
        title: "Thought Leadership SEO & Executive Branding",
        desc: "Dominating Google Search for commercial advisory terms, executive searches, and localized corporate consulting across Delhi NCR.",
        badge: "Authority Growth",
        deliverables: ["Thought leadership blog directory", "Google 3-Pack firm rankings", "Executive LinkedIn funnel design", "B2B Google Ads management", "Schema markup for corporate entities", "Whitepaper download gates"]
      }
    ],
    targetSegments: [
      { title: "Management & Strategy Consultants", desc: "Authority-building websites, case study showcases & automated executive discovery calls." },
      { title: "Chartered Accountants & Tax Advisors", desc: "Secure tax document vaults, GST advisory portals & recurring client billing systems." },
      { title: "Architecture & Interior Studios", desc: "Ultra-high-res project portfolio galleries, floorplan viewers & design consultation booking." },
      { title: "Human Resources & Executive Search", desc: "Candidate intake portals, confidential executive search directories & client dashboards." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Outdated, template-looking websites failing to convey the premium authority and fees your firm commands.",
        solution: "Bespoke editorial design with dark slate typography, clean whitespace, and high-impact case studies reflecting true corporate leadership."
      },
      {
        challenge: "Wasting hours in manual back-and-forth emails just to schedule an initial discovery call.",
        solution: "Seamless automated booking with customized pre-screening questions that filter out tire-kickers and sync directly with Google/Outlook calendar."
      },
      {
        challenge: "Unsecured email attachments for sensitive client financial documents and contracts.",
        solution: "Bank-grade encrypted client portal allowing clients to securely upload audit files and sign engagement letters with one tap."
      },
      {
        challenge: "Losing corporate inquiries to competing multinational consultancies on search engines.",
        solution: "Technical B2B search engine optimization and thought leadership article directories ranking your partners at the top of Google."
      }
    ],
    techStack: [
      { category: "Web & Design", items: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend & Vault", items: ["Node.js", "PostgreSQL", "AWS S3 Encrypted", "Docker", "Redis"] },
      { category: "B2B Integrations", items: ["Google / Outlook Calendar", "HubSpot API", "Stripe", "DocuSign / Zoop", "WhatsApp API"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Consulting Firm Website Development Delhi", "Corporate Website Design Company Gurgaon", "CA Firm Website Development Noida",
      "Professional Services Website Design", "Client Intake Portal Development Delhi NCR", "Architecture Studio Website Design Gurgaon",
      "Law Accounting Firm Web Development", "Consulting Lead Generation Agency Delhi", "Client Document Portal Software",
      "Professional Services SEO Agency", "Management Consultant Website Design", "Executive Search Portal Development",
      "Tax Consultant Website Design Noida", "Corporate Advisory Web Development", "Agency Website Development Gurgaon",
      "Consultant Booking System Development", "B2B Service Portal Development Delhi", "Corporate Branding Website Design",
      "Professional Services Tech Solutions Delhi", "Enterprise Consulting Web Agency"
    ],
    featuresList: [
      "Editorial, authoritative corporate design reflecting high fees and credibility",
      "Integrated consultation scheduling with pre-qualification intake questionnaires",
      "Bank-grade encrypted client document portal with secure file sharing",
      "Interactive scope and retainer pricing calculators for prospective clients",
      "Digital engagement letter and contract signing with legally binding e-signatures",
      "Automated reminder alerts via email and WhatsApp reducing meeting no-shows",
      "Sub-second page speeds (<0.5s) optimized for mobile corporate decision-makers",
      "Thought leadership article directory with author bios and social sharing",
      "Full schema markup establishing your firm as an authorized ProfessionalService",
      "100% full intellectual property ownership with zero recurring vendor cuts"
    ],
    faqs: [
      {
        question: "How does a custom website help our firm command higher fees?",
        answer: "High-value enterprise clients judge credibility within 3 seconds. An editorial, bespoke website with verified client case studies, structured practice areas, and a seamless intake process immediately signals institutional competence and justifies premium retainers."
      },
      {
        question: "Can we charge upfront consultation fees before clients book time on our calendar?",
        answer: "Yes! We can integrate payment gateways (Stripe, Razorpay) directly into your scheduling flow so clients must pay your consultation fee before confirming a meeting slot."
      },
      {
        question: "Is the client document vault secure enough for confidential financial data?",
        answer: "Yes, our vaults use 256-bit AES encryption at rest and TLS 1.3 in transit, backed by AWS infrastructure with individual user permissions and audit logs meeting strict compliance standards."
      },
      {
        question: "What is the typical development timeline for a professional services website?",
        answer: "A high-authority corporate consulting website takes 2 to 3 weeks. A firm platform with integrated client portals, document vaults, and intake workflows takes 4 to 5 weeks."
      },
      {
        question: "Can we publish our own research articles and case studies easily?",
        answer: "Yes, we integrate an intuitive headless CMS that allows your team to publish rich case studies, whitepapers, and regulatory updates in minutes without touching any code."
      }
    ]
  },

  "food-restaurant": {
    id: "food-restaurant",
    title: "Restaurants & Food Businesses",
    badge: "0% Commission Direct Ordering & Table Booking",
    subtitle: "Take Direct Orders, Fill Tables & Eliminate Aggregator Commissions",
    description: "Empower restaurants, cloud kitchens, cafés, and multi-outlet food chains with custom zero-commission online food ordering, real-time table reservations, digital QR menus, and automated kitchen printing.",
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920",
    proofMetrics: [
      { value: "0%", label: "Aggregator Commission" },
      { value: "< 0.3s", label: "Menu Browsing Speed" },
      { value: "100%", label: "Code Ownership" },
      { value: "Instant", label: "Kitchen Ticket Sync" }
    ],
    specializedServices: [
      {
        title: "Zero-Commission Direct Online Ordering",
        desc: "Custom-branded food ordering web application enabling diners to order delivery or takeaway directly, keeping 100% of the bill value.",
        badge: "Direct Ordering",
        deliverables: ["Mouth-watering mobile digital menu", "Item customizations & add-ons", "Instant UPI & Card checkout", "Direct thermal kitchen printer sync", "Automated delivery fee calculator", "Real-time order status tracking"]
      },
      {
        title: "Table Reservation & Guest Booking Engine",
        desc: "Frictionless table reservation system with slot management, guest preferences, party size limits, and instant WhatsApp confirmations.",
        badge: "Table Booking",
        deliverables: ["Real-time table slot selection", "Cover management & capacity limits", "Automated WhatsApp table confirmation", "Special dietary requirement notes", "Pre-payment for high-demand slots", "Table turn-time optimization"]
      },
      {
        title: "Dine-In QR Code Digital Ordering & Pay",
        desc: "Contactless digital QR menus on restaurant tables allowing guests to browse food photos, order items, and pay without waiting for servers.",
        badge: "QR Dine-In",
        deliverables: ["Table-specific QR code generation", "High-res food photo galleries", "Live order addition to open bill", "Split bill & instant tip options", "Direct kitchen ticket routing", "Zero app download required"]
      },
      {
        title: "Multi-Outlet & Cloud Kitchen Routing",
        desc: "Centralized system automatically routing customer orders to the closest kitchen branch based on GPS pin location and stock availability.",
        badge: "Cloud Kitchens",
        deliverables: ["Automatic GPS store allocation", "Branch-wise menu & stock toggle", "Delivery rider dispatch integration", "Centralized manager dashboard", "Cross-outlet sales analytics", "Peak hour surge management"]
      },
      {
        title: "Customer Loyalty & WhatsApp Re-Ordering",
        desc: "Turn one-time diners into lifelong regulars with automated WhatsApp promotional alerts, birthday offers, and loyalty cash-back points.",
        badge: "Guest Loyalty",
        deliverables: ["Automated WhatsApp repeat offers", "Digital loyalty wallet points", "Birthday & anniversary vouchers", "Customer order history analytics", "Favorite item one-click re-order", "SMS/WhatsApp broadcast campaigns"]
      },
      {
        title: "Local Food SEO & Google Maps Diners Funnel",
        desc: "Dominating Google Search and Google Maps for 'best restaurant near me', 'cafe in Gurgaon', and 'family dinner in Delhi'.",
        badge: "Food SEO",
        deliverables: ["Google Business Profile 3-Pack SEO", "Food photography optimization", "Menu schema markup for Google", "Customer review generation funnels", "Localized Google Ads campaigns", "Zomato/Swiggy commission reduction"]
      }
    ],
    targetSegments: [
      { title: "Fine Dining & Casual Restaurants", desc: "Atmospheric websites, table reservation engines & direct guest relationship management." },
      { title: "Cloud Kitchens & QSR Brands", desc: "High-speed delivery ordering apps, kitchen order printing & delivery driver dispatch." },
      { title: "Multi-Outlet Bakery & Café Chains", desc: "Multi-store ordering, loyalty reward wallets & centralized commissary inventory." },
      { title: "Food Franchises & Hospitality Groups", desc: "Centralized brand portals, franchise onboarding & multi-location sales reporting." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Losing 25% to 35% of every food order to aggregators like Zomato and Swiggy.",
        solution: "Your own custom direct ordering system with exclusive customer discounts and automated WhatsApp re-order incentives keeping 100% of profit."
      },
      {
        challenge: "Chaotic kitchen order confusion during Friday night dining peaks.",
        solution: "Direct integration with thermal kitchen ticket printers (KOT) automatically printing orders the second payment is verified."
      },
      {
        challenge: "Double-booked tables and angry walk-in customers on busy weekends.",
        solution: "Automated table booking engine with live capacity caps, automated reminder calls, and deposit requirements for large groups."
      },
      {
        challenge: "Zero customer data ownership—aggregators hide customer phone numbers from you.",
        solution: "Your own platform collects 100% of guest names, phone numbers, and dining preferences for high-ROI direct WhatsApp marketing."
      }
    ],
    techStack: [
      { category: "Ordering Storefront", items: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion"] },
      { category: "POS & Backend", items: ["Node.js", "PostgreSQL", "Redis", "Thermal Printer Webhooks"] },
      { category: "Food Tech APIs", items: ["Razorpay / Cashfree", "WhatsApp Cloud API", "Google Maps Distance API", "Dunzo / Shadowfax API"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Restaurant Website Development Delhi", "Online Food Ordering System Gurgaon", "Cloud Kitchen Portal Development Noida",
      "Table Reservation System Delhi NCR", "Cafe Website Design Gurgaon", "QR Code Menu Ordering System",
      "Bakery eCommerce Website Development", "Multi Outlet Restaurant Software Delhi", "Kitchen Order Ticket System India",
      "Restaurant Mobile App Development", "Food Franchise Portal Development", "Direct Food Delivery Software Noida",
      "Restaurant SEO Agency Gurgaon", "Fine Dining Website Design Delhi", "Bar and Pub Website Development",
      "Fast Food Ordering App India", "Restaurant POS Integration Delhi NCR", "Food Business Web Development",
      "Restaurant Technology Solutions Delhi", "Food Brand eCommerce Platform"
    ],
    featuresList: [
      "Zero-commission food ordering web app with sub-second menu browsing",
      "Direct integration with kitchen thermal printers (KOT) for instant prep",
      "Real-time table reservation calendar with automated WhatsApp confirmation",
      "Dine-in QR code menu ordering and pay directly from restaurant tables",
      "One-tap checkout supporting Google Pay, PhonePe, Paytm, and cards",
      "Multi-outlet automatic GPS branch routing to nearest kitchen",
      "Customer loyalty wallet with automated birthday and anniversary offers",
      "Google Maps integration with exact live delivery radius boundaries",
      "Menu schema markup for direct Google Search item indexing",
      "100% customer phone number and transaction data ownership"
    ],
    faqs: [
      {
        question: "How does direct ordering help us reduce reliance on Zomato and Swiggy?",
        answer: "By placing QR codes on takeaway boxes, tables, and social media offering '10% off on direct website orders', you migrate high-frequency customers to your own zero-commission platform, saving 25-35% on every single order."
      },
      {
        question: "How do orders reach the kitchen staff in real time?",
        answer: "Our ordering engine connects directly to your restaurant's thermal POS printer via local LAN or cloud webhooks, automatically printing physical KOT slips the instant payment is confirmed."
      },
      {
        question: "Can we set delivery fees based on exact distance from our restaurant?",
        answer: "Yes! We integrate Google Maps Distance Matrix API to calculate accurate delivery charges dynamically based on kilometers or provide free delivery above specific cart thresholds."
      },
      {
        question: "What is the timeline to launch our restaurant ordering website?",
        answer: "A single-outlet restaurant website with table reservation and online ordering takes 2 to 3 weeks. A multi-outlet cloud kitchen network with rider dispatch takes 3 to 4 weeks."
      },
      {
        question: "Do we own the customer database?",
        answer: "Yes, 100%! Unlike aggregator apps that hide customer contact numbers, you have unrestricted access to every customer name, phone number, and order history to drive high-margin repeat sales."
      }
    ]
  },

  startups: {
    id: "startups",
    title: "Tech Startups & SaaS Platforms",
    badge: "High-Velocity MVPs, Scalable SaaS & Product Architecture",
    subtitle: "Launch Faster, Scale Without Technical Debt & Win Investors",
    description: "We partner with visionary founders to engineer production-ready MVPs, scalable B2B SaaS web applications, investor-ready pitch platforms, and high-converting go-to-market funnels in weeks.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920",
    proofMetrics: [
      { value: "4 Weeks", label: "Average MVP Launch" },
      { value: "< 0.4s", label: "Global Edge Latency" },
      { value: "100%", label: "Code Ownership" },
      { value: "VC-Ready", label: "Clean Architecture" }
    ],
    specializedServices: [
      {
        title: "Rapid MVP Product Engineering",
        desc: "Turn your wireframes or product specs into a robust, deployed full-stack web application in 3 to 5 weeks using modern Next.js and cloud primitives.",
        badge: "MVP Sprints",
        deliverables: ["Full-stack Next.js 15 app", "User authentication & onboarding", "Core business logic features", "Relational database schema", "Automated deployment CI/CD", "Responsive mobile layouts"]
      },
      {
        title: "Multi-Tenant SaaS Dashboards & RBAC",
        desc: "Enterprise-grade SaaS architectures featuring team workspaces, role-based access control (RBAC), activity logs, and settings matrices.",
        badge: "SaaS Dashboards",
        deliverables: ["Multi-tenant data isolation", "Role & permission matrices", "Team member invitation flows", "Audit logs & security alerts", "Dark/Light UI theme systems", "Interactive data visualizations"]
      },
      {
        title: "Subscription Billing & Metered Usage Workflows",
        desc: "Flawless payment gateway integration supporting recurring monthly/annual plans, free trials, metered credit usage, and automated invoicing.",
        badge: "Billing Engines",
        deliverables: ["Stripe / LemonSqueezy / Razorpay", "Tiered pricing table UI", "Automated prorated upgrades", "Dunning & failed payment retry", "Usage-based credit meters", "Self-service billing portal"]
      },
      {
        title: "API Microservices & Webhook Infrastructure",
        desc: "Scalable REST and GraphQL backend architectures engineered for high concurrency, developer integration, and third-party ecosystems.",
        badge: "API Architecture",
        deliverables: ["Fast Node.js / NestJS microservices", "OpenAPI / Swagger documentation", "Rate limiting & API key auth", "Outgoing webhook dispatchers", "Background job queues (BullMQ)", "Zero-downtime database migrations"]
      },
      {
        title: "High-Converting SaaS Landing Pages & GTM",
        desc: "Product landing pages with modern interactive UI mockups, feature walkthrough carousels, and conversion funnels that drive sign-ups.",
        badge: "GTM Funnels",
        deliverables: ["Interactive product demos", "Feature comparison tables", "Social proof & review walls", "Interactive ROI calculators", "Waitlist & early access funnels", "Product Hunt launch preparation"]
      },
      {
        title: "Programmatic SEO & Founder Growth Marketing",
        desc: "Scaling organic product discovery through programmatic landing page engines, technical SEO, and conversion analytics instrumentation.",
        badge: "SaaS Growth",
        deliverables: ["Programmatic SEO directory setup", "Product analytics (PostHog/GA4)", "Conversion funnel instrumentation", "A/B testing implementation", "SaaS keyword cluster ranking", "Viral referral loop mechanics"]
      }
    ],
    targetSegments: [
      { title: "Pre-Seed & Seed Stage Founders", desc: "Rapid 4-week MVP development, investor pitch prototypes & initial customer validation." },
      { title: "B2B SaaS Product Companies", desc: "Multi-tenant dashboards, complex API integrations & enterprise security compliance." },
      { title: "AI & Automation Startups", desc: "LLM agent integration, vector database search, OpenAI/Anthropic API pipelines." },
      { title: "Developer Tools & API Platforms", desc: "Developer documentation portals, SDK integrations & metered usage billing engines." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Burning through valuable runway on slow, bloated dev teams that take 6+ months to launch an MVP.",
        solution: "Laser-focused 4-week agile sprints deploying production-ready code with weekly staging releases so you launch before runway evaporates."
      },
      {
        challenge: "Messy, unmaintainable code written by cheap freelancers failing institutional VC due diligence.",
        solution: "Clean, type-safe TypeScript codebase with modular component hierarchy, automated linting, and strict architectural separation."
      },
      {
        challenge: "Struggling to configure complex recurring subscription billing and enterprise team permissions.",
        solution: "Turnkey Stripe / Razorpay Subscriptions integration with self-service customer billing portals and granular RBAC workspaces."
      },
      {
        challenge: "Slow, generic landing pages failing to explain your product's unique value proposition to buyers.",
        solution: "World-class interactive product landing pages with interactive UI previews and compelling copy that converts visitors into active users."
      }
    ],
    techStack: [
      { category: "Product Stack", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
      { category: "Backend & Data", items: ["Node.js", "NestJS", "PostgreSQL", "Supabase", "Redis", "Docker"] },
      { category: "APIs & AI Tools", items: ["Stripe", "OpenAI / Anthropic API", "PostHog", "Resend", "AWS / Vercel"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "SaaS Website Development Delhi", "MVP Development Company Gurgaon", "Startup Web Development Agency Noida",
      "SaaS Dashboard Development Delhi NCR", "Tech Startup MVP Builder India", "B2B SaaS Landing Page Design",
      "Stripe Subscription Integration Delhi", "Next.js SaaS Development Agency", "React Web Application Development Gurgaon",
      "Startup Product Engineering Noida", "SaaS UI UX Design Company", "API Development Company Delhi NCR",
      "AI Startup Web Development Gurgaon", "SaaS SEO Agency India", "Startup Pitch Deck Website Design",
      "Cloud Native MVP Development", "Software Product Engineering Delhi", "Developer Tooling Portal Development",
      "Startup Technology Solutions Delhi", "Full Stack MVP Agency Gurgaon"
    ],
    featuresList: [
      "Full-stack Next.js 15 product architecture with sub-second page rendering",
      "Multi-tenant workspace architecture with role-based permissions (RBAC)",
      "Automated subscription billing supporting recurring plans, trials and invoices",
      "Clean TypeScript code adhering to strict enterprise and VC diligence standards",
      "API microservice architecture with OpenAPI documentation and webhooks",
      "Interactive data charts and analytics dashboards for end users",
      "Integrated product analytics tracking conversion funnels and user retention",
      "Cloud-native deployment on AWS or Vercel with automated staging pipelines",
      "High-converting marketing landing page with interactive product walkthroughs",
      "100% intellectual property ownership with zero vendor lock-in or equity cuts"
    ],
    faqs: [
      {
        question: "How fast can you take our startup from concept to a live MVP?",
        answer: "Our focused startup sprint methodology takes you from approved wireframes to a live, production-deployed MVP with authentication, database, core workflows, and payments in 3 to 5 weeks."
      },
      {
        question: "Do you take equity or do we retain 100% ownership?",
        answer: "We take zero equity. You retain 100% full intellectual property ownership, code repositories, database access, and architectural documentation from day one."
      },
      {
        question: "Can our in-house engineers take over the codebase easily after launch?",
        answer: "Absolutely. We write clean, self-documenting TypeScript code following modern industry standards with comprehensive README guides, component libraries, and CI/CD pipelines, making handoff seamless."
      },
      {
        question: "Can you integrate AI models (OpenAI, Anthropic, Vector DBs) into our product?",
        answer: "Yes! We frequently integrate LLM endpoints, streaming AI chat completions, RAG knowledge retrieval with pgvector/Pinecone, and automated background AI workflows."
      },
      {
        question: "What is your pricing structure for startup MVP development?",
        answer: "We offer transparent, fixed-price milestone milestones. We define your scope clearly before writing a line of code so you never face surprise billing or budget creep."
      }
    ]
  },

  legal: {
    id: "legal",
    title: "Legal & Law Firms",
    badge: "BCI Compliant, Encrypted Client Portals & Authority",
    subtitle: "Establish Digital Authority While Maintaining Ethical Legal Compliance",
    description: "Build prestigious, informative digital platforms for corporate law firms, advocates, arbitration panels, and legal consultants compliant with Bar Council regulations, featuring encrypted client vaults.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920",
    proofMetrics: [
      { value: "100%", label: "BCI Ethics Compliant" },
      { value: "256-bit", label: "Client Vault Encryption" },
      { value: "100%", label: "Code Ownership" },
      { value: "< 0.5s", label: "Page Load Speed" }
    ],
    specializedServices: [
      {
        title: "Bar Council Compliant Law Firm Websites",
        desc: "Prestigious, dignified web platforms strictly structured in compliance with Bar Council guidelines to provide factual practice information.",
        badge: "Law Firm Web",
        deliverables: ["Ethical informational disclaimer gates", "Partner & associate credentials", "Categorized practice areas", "Published legal articles & insights", "Firm milestone history", "Multi-office location maps"]
      },
      {
        title: "Confidential Client Case & Document Vaults",
        desc: "End-to-end encrypted client portals allowing corporate clients to securely upload sensitive legal briefs, contracts, and court filings.",
        badge: "Client Vault",
        deliverables: ["Encrypted document storage", "Digital e-signatures", "Privileged communication notes", "Court date milestone trackers", "Invoice & retainer payment tracking", "Two-factor authentication"]
      },
      {
        title: "Conflict of Interest & Pre-Screened Intake",
        desc: "Automated preliminary intake workflows that collect essential matter details while conducting conflict of interest checks before meetings.",
        badge: "Intake Systems",
        deliverables: ["Conflict check pre-screening forms", "Practice area routing", "Automated consultation calendars", "Retainer fee payments", "Automated non-disclosure confirmations", "Matter reference numbers"]
      },
      {
        title: "Legal Knowledge Base & Judgment Repositories",
        desc: "Searchable legal article repositories and client alerts showcasing firm expertise in corporate, IPR, tax, and litigation law.",
        badge: "Legal Insights",
        deliverables: ["Full-text searchable legal articles", "Category filters by jurisdiction & act", "Downloadable PDF legal advisories", "Email newsletter subscription", "Author partner attribution", "Social media sharing"]
      },
      {
        title: "Law Firm Practice Management & Billing",
        desc: "Custom cloud systems for managing matter files, billable lawyer hours, retainers, and compliant corporate tax invoicing.",
        badge: "Practice Ops",
        deliverables: ["Matter docket management", "Billable time tracking", "Custom fee quote generation", "Trust account ledger tracking", "Court hearing date reminders", "Multi-advocate access roles"]
      },
      {
        title: "Legal Authority & Local Search Positioning",
        desc: "Ethical search visibility ensuring corporate general counsels and individuals find your firm when searching for verified legal counsel.",
        badge: "Legal Authority",
        deliverables: ["Google 3-Pack law firm rankings", "Practice area keyword authority", "Strict compliance with advertising rules", "Corporate law schema markup", "Legal directory optimization", "Chambers & Legal 500 showcases"]
      }
    ],
    targetSegments: [
      { title: "Corporate & Commercial Law Firms", desc: "Prestigious firm websites, practice area showcases, cross-border M&A credentials & partner bios." },
      { title: "High Court & Supreme Court Advocates", desc: "Informational practice pages, landmark judgment highlights & consultation scheduling." },
      { title: "Intellectual Property & Patent Bureaus", desc: "Trademark filing portals, patent portfolio tracking & online fee calculation tools." },
      { title: "Dispute Resolution & Arbitration Panels", desc: "Arbitration proceeding portals, panel arbitrator profiles & confidential document rooms." }
    ],
    challengesVsSolutions: [
      {
        challenge: "Strict Bar Council of India rules prohibiting commercial advertising and solicitation.",
        solution: "Clean, dignified informational layout with mandatory initial disclaimer acknowledgment gates adhering strictly to legal ethics."
      },
      {
        challenge: "Sensitive client legal documents leaked or intercepted through ordinary unsecured email.",
        solution: "Bank-grade 256-bit encrypted client vaults with two-factor authentication and strict access logs guaranteeing attorney-client privilege."
      },
      {
        challenge: "Wasting expensive partner time on consultations with conflicting parties or out-of-scope matters.",
        solution: "Automated preliminary intake questionnaire conducting conflict-of-interest checks before consultation time is confirmed."
      },
      {
        challenge: "Outdated, clunky websites failing to convey the intellectual firepower of senior legal partners.",
        solution: "Modern, bespoke typography, crisp serif headers, and polished layouts reflecting institutional prestige and authority."
      }
    ],
    techStack: [
      { category: "Web Architecture", items: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion"] },
      { category: "Security & Cloud", items: ["Node.js", "PostgreSQL", "AWS KMS Encrypted Vault", "Docker"] },
      { category: "Legal APIs", items: ["DigiLocker / e-Sign API", "Razorpay / Stripe", "Calendar Sync", "WhatsApp API"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      "Law Firm Website Development Delhi", "Advocate Website Design Gurgaon", "Legal Portal Development Noida",
      "Law Firm Web Development Delhi NCR", "Bar Council Compliant Website Design", "Legal Case Management Software India",
      "Client Document Vault for Law Firms", "IPR Law Firm Website Design Gurgaon", "Corporate Law Firm Website Delhi",
      "Lawyer Consultation Booking System", "Legal Tech Software Development Noida", "Arbitration Bureau Website Design",
      "Litigation Law Firm Portal Delhi NCR", "Legal SEO Agency Gurgaon", "Advocate Profile Web Design",
      "Legal Billing Software Development", "Supreme Court Lawyer Website Delhi", "Law Firm Practice Management System",
      "Legal Technology Solutions Delhi", "Boutique Law Firm Web Design"
    ],
    featuresList: [
      "Prestigious, dignified design compliant with Bar Council regulations",
      "Mandatory disclaimer acknowledgment gate prior to accessing content",
      "Bank-grade 256-bit encrypted client document vault and messaging",
      "Preliminary conflict-of-interest intake screening workflows",
      "Integrated partner calendar scheduling with automated reminders",
      "Searchable legal bulletin and landmark judgment insight repository",
      "Sub-second page speeds (<0.5s) optimized for mobile corporate clients",
      "Accreditation and directory recognition showcase (Chambers, Legal 500)",
      "Strict data privacy architecture ensuring attorney-client privilege",
      "100% intellectual property and client record database ownership"
    ],
    faqs: [
      {
        question: "How do you ensure law firm websites comply with Bar Council regulations?",
        answer: "We strictly adhere to Bar Council of India guidelines by ensuring the website is purely informational, featuring a clear entry disclaimer gate, displaying verified factual credentials, and avoiding aggressive promotional or solicitation language."
      },
      {
        question: "Can corporate clients securely upload confidential contracts and briefs?",
        answer: "Yes. Our client vault uses 256-bit AES encryption at rest and TLS 1.3 in transit, backed by AWS infrastructure with individual user permissions ensuring complete attorney-client privilege."
      },
      {
        question: "Can we include an automated conflict of interest check in our intake form?",
        answer: "Yes! We can configure your intake forms to ask for opposing party names and matter jurisdiction, enabling your administrative team to run conflict checks before any confidential discussion occurs."
      },
      {
        question: "What is the timeline for developing a prestigious law firm website?",
        answer: "A boutique law firm informational website takes 2 to 3 weeks. A comprehensive firm platform with client document vaults, judgment repositories, and partner practice management takes 4 to 5 weeks."
      },
      {
        question: "Do we own the website code and client database?",
        answer: "Yes, 100%. HiveRift delivers all source code repositories, databases, and hosting credentials with zero ongoing royalties or vendor lock-in."
      }
    ]
  }
};

export function getFullIndustryDetails(id: string): FullIndustryDetails {
  if (FULL_INDUSTRIES_DATA[id]) {
    return FULL_INDUSTRIES_DATA[id];
  }

  // Sensible default fallback for any unlisted industry
  const formattedTitle = id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    id,
    title: formattedTitle,
    badge: "Enterprise Sector Architecture",
    subtitle: `Build Scalable, High-Performance Digital Solutions for ${formattedTitle}`,
    description: `Empower your ${formattedTitle.toLowerCase()} business with custom web development, mobile applications, CRM integrations, and performance marketing engineered for measurable growth.`,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920",
    proofMetrics: [
      { value: "< 0.5s", label: "Page Load Speed" },
      { value: "100%", label: "Code Ownership" },
      { value: "24/7", label: "Monitoring & Support" },
      { value: "99.99%", label: "Uptime SLA" }
    ],
    specializedServices: [
      {
        title: `${formattedTitle} Web Development`,
        desc: `Custom, brand-defining web platforms built on Next.js 15 designed for speed, authority, and lead conversion.`,
        badge: "Web Platform",
        deliverables: ["Custom responsive design", "Core Web Vitals <0.5s", "Lead generation funnels", "CRM integrations", "SEO-ready architecture", "100% code ownership"]
      },
      {
        title: `Customer & Client Dashboards`,
        desc: `Secure self-service portals with user authentication, document access, and transaction history.`,
        badge: "User Portals",
        deliverables: ["User authentication & RBAC", "Document upload vaults", "Real-time activity logs", "Customer support chat", "Two-factor security", "Mobile responsive UI"]
      },
      {
        title: `Workflow & Operations Automation`,
        desc: `Digitize operational bottlenecks with custom cloud software, automated notifications, and business integrations.`,
        badge: "Operations",
        deliverables: ["Automated task routing", "WhatsApp & email notifications", "Custom business rules", "Data export & reports", "Role permissions", "Error tracking"]
      },
      {
        title: `Payment & API Integrations`,
        desc: `Connect your platform with payment gateways, third-party software, and external webhooks smoothly.`,
        badge: "Integrations",
        deliverables: ["Payment gateway setup", "Third-party API sync", "Webhook listeners", "Automated invoices", "Data synchronization", "Secure credential vaults"]
      },
      {
        title: `Mobile Applications (iOS & Android)`,
        desc: `Native and cross-platform Flutter/React Native mobile applications for on-the-go customer and staff engagement.`,
        badge: "Mobile Apps",
        deliverables: ["Cross-platform Flutter / React Native", "Push notifications", "Offline mode sync", "Biometric login", "App store deployment", "Sub-second responsiveness"]
      },
      {
        title: `SEO & Digital Performance Marketing`,
        desc: `Dominating high-intent search terms and generating qualified commercial leads across Google and social channels.`,
        badge: "Growth Marketing",
        deliverables: ["Google 3-Pack local SEO", "High-intent keyword clusters", "Paid search campaign management", "Conversion rate audits", "Structured schema markup", "Monthly ROI reporting"]
      }
    ],
    targetSegments: [
      { title: "Mid-Market Enterprises", desc: `Established ${formattedTitle.toLowerCase()} companies needing modern digital architecture.` },
      { title: "Fast-Growing Startups", desc: `Disruptive businesses building innovative platforms in ${formattedTitle.toLowerCase()}.` },
      { title: "Specialized Service Providers", desc: `Professional firms and consultants delivering niche solutions.` },
      { title: "Multi-Location Chains", desc: `Organizations managing regional branches across Delhi NCR and India.` }
    ],
    challengesVsSolutions: [
      {
        challenge: `Slow, outdated legacy websites failing to convert modern mobile visitors in ${formattedTitle.toLowerCase()}.`,
        solution: `Sub-second Next.js 15 web architecture delivering instant page loads and high conversion rates.`
      },
      {
        challenge: "Disconnected manual spreadsheets causing communication friction and lost inquiries.",
        solution: "Centralized cloud workflows and automated WhatsApp/CRM integrations synchronizing data in real time."
      },
      {
        challenge: "Vendor lock-in and steep recurring monthly license costs with zero code ownership.",
        solution: "100% intellectual property ownership with zero ongoing platform royalties or restrictive licenses."
      },
      {
        challenge: "Low search engine visibility losing qualified customers to competing regional providers.",
        solution: "Comprehensive technical SEO and structured schema markup establishing dominant search presence."
      }
    ],
    techStack: [
      { category: "Frontend Tech", items: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"] },
      { category: "Backend & Cloud", items: ["Node.js", "PostgreSQL", "Docker", "AWS", "Redis"] },
      { category: "APIs & Automations", items: ["WhatsApp Cloud API", "Razorpay / Stripe", "Google APIs", "Webhooks"] }
    ],
    regionalHubs: REGIONAL_HUBS_DEFAULT,
    searchTerms: [
      `${formattedTitle} Website Development Delhi`, `${formattedTitle} Web Design Company Gurgaon`,
      `${formattedTitle} Software Development Noida`, `${formattedTitle} Portal Development Delhi NCR`,
      `${formattedTitle} App Development India`, `Custom ${formattedTitle} Solutions Gurgaon`,
      `${formattedTitle} CRM Integration Delhi`, `${formattedTitle} SEO Agency Delhi NCR`,
      `Best ${formattedTitle} Developers Near Me`, `${formattedTitle} Digital Marketing Agency`
    ],
    featuresList: [
      "Sub-second page speeds (<0.5s) on mobile 4G/5G networks",
      "Custom responsive design tailored to sector audience expectations",
      "Interactive consultation booking and project requirements forms",
      "Automated lead capture with instant email and WhatsApp notifications",
      "Role-based administrative dashboards for staff and customers",
      "Secure payment gateway integration supporting UPI, cards, and netbanking",
      "Technical SEO architecture with structured schema markup",
      "High-concurrency cloud infrastructure with 99.99% uptime reliability",
      "Two-factor authentication and bank-grade data security protocols",
      "100% full intellectual property ownership with zero vendor lock-in"
    ],
    faqs: [
      {
        question: `Why choose HiveRift for ${formattedTitle} technology solutions?`,
        answer: `HiveRift combines senior engineering expertise, sub-second Next.js performance, and commercial conversion focus. We don't use generic templates—we build custom digital platforms tailored to your exact industry workflows.`
      },
      {
        question: `How long does it take to develop a platform in ${formattedTitle}?`,
        answer: "A standard industry corporate website takes 2 to 3 weeks. A complex platform featuring custom dashboards, user authentication, and integrations takes 4 to 6 weeks."
      },
      {
        question: "Can you integrate our existing software, CRM, and WhatsApp?",
        answer: "Yes, 100%. We regularly build bi-directional webhooks and API integrations connecting your website to CRMs, payment gateways, and WhatsApp Cloud API."
      },
      {
        question: "Do we own the source code and platform after launch?",
        answer: "Yes, 100%. Upon project sign-off, HiveRift transfers all source code repositories, databases, and server access to your organization with zero vendor lock-in."
      }
    ]
  };
}
