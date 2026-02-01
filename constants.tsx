
import { PersonalInfo, Service, Project, FAQ, Benefit, ServiceDeepDiveItem } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "M. Saim Qasim",
  title: "UI/UX Designer",
  tagline: "Crafting experiences that resonate.",
  subtitle: "UI/UX Designer | Web & Mobile",
  location: "Lahore, Pakistan",
  email: "m.saimqasim7802@gmail.com",
  phone: "0310 5401407",
  bio: [
    "I'm a UI/UX designer based in Lahore, Pakistan, specializing in creating digital experiences that balance aesthetics with functionality. My design philosophy centers on understanding people—their needs, frustrations, and aspirations—then translating those insights into interfaces that feel intuitive and delightful.",
    "With a background in user-centered design and a passion for visual storytelling, I approach every project as an opportunity to solve real problems. Whether it's streamlining a complex workflow, reimagining a brand's digital presence, or designing a product from scratch, I believe the best design is invisible—it simply works.",
    "When I'm not designing, you'll find me exploring design trends, experimenting with new tools, or seeking inspiration in the world around me. I'm always excited to collaborate with teams and individuals who value thoughtful, human-centered design."
  ],
  approach: "I believe great design solves real problems. My approach combines empathy-driven research, strategic thinking, and pixel-perfect execution to create digital experiences that users love and businesses value. Every interface tells a story—I make sure it's a memorable one.",
  heroImage: "/images/Hero-img.png",
  aboutImage: "/images/aboutimg.png",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/muhammad-saim-qasim-422a3239a/",
    behance: "https://www.behance.net/MuhammadSaimQasim",
    instagram: "https://www.instagram.com/m.saimqasim/"
  }
};

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: "Globe",
    title: "Web Design",
    description: "Creating intuitive, conversion-focused websites that blend aesthetic appeal with strategic user journeys. From landing pages to complex web applications, I design experiences that engage and convert.",
    color: "#FFB5B5"
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Mobile App Design",
    description: "Designing seamless mobile experiences that users interact with daily. I focus on touch-friendly interfaces, intuitive navigation, and delightful micro-interactions that make apps feel native and responsive.",
    color: "#8B7355"
  },
  {
    id: 3,
    icon: "Search",
    title: "User Research & Testing",
    description: "Uncovering user needs through comprehensive research methodologies. I conduct user interviews, usability testing, and data analysis to inform design decisions and validate solutions with real user feedback.",
    color: "#1A1A1A"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SwiftParcel Delivery App",
    type: "Mobile App Design",
    shortDescription: "Eliminated user friction in the parcel tracking journey by redesigning the information architecture. Reduced delivery confusion by 43%.",
    image: "https://picsum.photos/seed/swiftparcel/800/500",
    tags: ["Mobile", "UX Research", "Redesign"],
    year: 2025,
    featured: true,
    behanceUrl: "https://www.behance.net/gallery/swiftparcel-dummy",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34440-large.mp4",
    caseStudy: {
      challenge: "The existing app had a confusing tracking interface causing high support tickets.",
      solution: "Implemented a visual timeline and progressive disclosure of shipment details.",
      results: "43% reduction in delivery-related support inquiries within 3 months."
    }
  },
  {
    id: 2,
    title: "TPL Pest Control Services",
    type: "Web Design",
    shortDescription: "Complete visual and UX overhaul for a leading pest control company. Streamlined service booking flow and modernized brand presence.",
    image: "https://picsum.photos/seed/tpl/800/500",
    tags: ["Web", "Redesign", "B2C"],
    year: 2024,
    featured: true,
    behanceUrl: "https://www.behance.net/gallery/tpl-dummy",
    caseStudy: {
      challenge: "Outdated brand image and a high drop-off rate on the booking form.",
      solution: "Simplified 5-step form into a 3-step interactive wizard with trust badges.",
      results: "35% increase in lead conversions and 20% faster booking time."
    }
  },
  {
    id: 3,
    title: "DataLens AI Analytics",
    type: "SaaS Platform Design",
    shortDescription: "Designed an intelligent B2B data analytics platform that transforms complex datasets into actionable insights using AI.",
    image: "https://picsum.photos/seed/datalens/800/500",
    tags: ["SaaS", "B2B", "AI", "Dashboard"],
    year: 2025,
    featured: true,
    behanceUrl: "https://www.behance.net/gallery/datalens-dummy",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-accountant-working-on-a-spreadsheet-on-his-laptop-34443-large.mp4",
    caseStudy: {
      challenge: "B2B users felt overwhelmed by dense tables and lack of intuitive data filtering.",
      solution: "Introduced natural language querying and automated chart suggestions.",
      results: "28% improvement in daily active user engagement for data analysts."
    }
  },
  {
    id: 4,
    title: "Amra & Elma Marketing Hub",
    type: "Web Redesign",
    shortDescription: "Reimagined the digital presence of a leading influencer marketing agency. Bold, modern interface showcasing their portfolio.",
    image: "https://picsum.photos/seed/amra/800/500",
    tags: ["Web", "Marketing", "Redesign", "Agency"],
    year: 2024,
    featured: true,
    behanceUrl: "https://www.behance.net/gallery/amra-dummy",
    caseStudy: {
      challenge: "Agency portfolio was hidden behind deep navigation layers.",
      solution: "Used a high-impact grid layout with immersive project previews.",
      results: "60% increase in portfolio page views and better lead quality."
    }
  },
  {
    id: 5,
    title: "FreshMart Grocery",
    type: "Web Design",
    shortDescription: "Designed a modern grocery shopping experience with smart cart features and recipe recommendations.",
    image: "https://picsum.photos/seed/freshmart/800/500",
    tags: ["E-commerce", "Web", "Mobile"],
    year: 2024,
    featured: false
  },
  {
    id: 6,
    title: "MindfulPath Wellness",
    type: "Mobile App",
    shortDescription: "Created a calming, accessible mental health app focusing on meditation and mood tracking.",
    image: "https://picsum.photos/seed/mindfulpath/800/500",
    tags: ["Mobile", "Health", "Wellness"],
    year: 2024,
    featured: false
  },
  {
    id: 7,
    title: "TechHub Dashboard",
    type: "Dashboard Design",
    shortDescription: "Redesigned a complex analytics dashboard to improve data visualization and reduce cognitive load.",
    image: "https://picsum.photos/seed/techhub/800/500",
    tags: ["SaaS", "Dashboard", "Analytics", "B2B"],
    year: 2025,
    featured: false
  },
  {
    id: 8,
    title: "HomeNest Real Estate",
    type: "Web Design",
    shortDescription: "Built an intuitive property search platform with advanced filters and virtual tours.",
    image: "https://picsum.photos/seed/homenest/800/500",
    tags: ["Web", "Real Estate", "Search", "AI"],
    year: 2024,
    featured: false
  }
];

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: "What is your design process like?",
    answer: "My design process typically follows five key phases: Discovery & Research, Ideation & Wireframing, Visual Design, Prototyping, and Testing & Iteration. I believe in involving stakeholders early and often."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A simple website redesign might take 3-4 weeks, while a comprehensive mobile app design could take 8-12 weeks."
  },
  {
    id: 3,
    question: "Do you work with startups or established companies?",
    answer: "Both! I love the energy of startups building something new, and I equally enjoy helping established companies refine and elevate their digital presence."
  },
  {
    id: 4,
    question: "What tools do you use?",
    answer: "I primarily use Figma for interface design and prototyping, Adobe Creative Suite for graphics, and tools like Miro and FigJam for collaboration."
  },
  {
    id: 5,
    question: "Can you help with development/coding?",
    answer: "While I focus on design, I have a strong understanding of front-end technologies (HTML, CSS, React) and work closely with developers."
  },
  {
    id: 6,
    question: "What's your availability?",
    answer: "I'm currently accepting new projects! Reach out via the contact section, and I'll get back to you within 24-48 hours."
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    icon: "Calendar",
    title: "Quick Response",
    description: "I respond to all inquiries within 24-48 hours."
  },
  {
    id: 2,
    icon: "Heart",
    title: "Personalized Approach",
    description: "Every project gets my full attention and custom strategy."
  },
  {
    id: 3,
    icon: "CheckCircle",
    title: "Quality Guaranteed",
    description: "Unlimited revisions until you're 100% satisfied."
  }
];

// EDIT THESE IMAGES BELOW:
export const SERVICE_DEEP_DIVE: { uxDesign: ServiceDeepDiveItem[], brandDesign: ServiceDeepDiveItem[] } = {
  uxDesign: [
    { label: "User Research & Interviews", image: "/images/ux-research.png" },
    { label: "User Flow & Journey Mapping", image: "/images/ux-flow.png" },
    { label: "Wireframing & Prototyping", image: "/images/ux-wireframe.png" },
    { label: "Usability Testing & Iteration", image: "/images/ux-testing.png" },
    { label: "Information Architecture", image: "/images/ux-ia.png" },
    { label: "Interaction Design", image: "/images/ux-interaction.png" }
  ],
  brandDesign: [
    { label: "Visual Identity Design", image: "/images/brand-visual.png" },
    { label: "Design System Creation", image: "/images/brand-system.png" },
    { label: "UI Style Guides", image: "/images/brand-style.png" },
    { label: "Responsive Web Design", image: "/images/brand-responsive.png" },
    { label: "Mobile App Interfaces", image: "/images/brand-mobile.png" },
    { label: "Micro-interactions & Animations", image: "/images/brand-micro.png" }
  ]
};
