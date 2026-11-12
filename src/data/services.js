import serviceWebDev from '../assets/service_web_dev.jpg';
import serviceMarketing from '../assets/service_marketing.jpg';
import serviceAi from '../assets/service_ai_solutions.jpg';
import serviceCyber from '../assets/service_cybersecurity.jpg';
import caseEcommerce from '../assets/case_ecommerce.jpg';
import programFullstack from '../assets/program_fullstack.jpg';
import academicGradFuture from '../assets/academic_grad_future.jpg';
import academicHeroStudent from '../assets/academic_hero_student.jpg';

// 8 Top Service Cards for the horizontal grid
export const servicesData = [
  {
    id: '01',
    number: '01',
    title: 'Website Development',
    description: 'Modern, responsive and high-performance websites.',
    icon: 'FolderCode',
    featured: false
  },
  {
    id: '02',
    number: '02',
    title: 'SaaS Product Development',
    description: 'Scalable cloud architectures and multi-tenant platforms.',
    icon: 'Cloud',
    featured: false
  },
  {
    id: '03',
    number: '03',
    title: 'Application Development',
    description: 'Native & cross-platform mobile and web applications.',
    icon: 'Smartphone',
    featured: false
  },
  {
    id: '04',
    number: '04',
    title: 'AI Solutions',
    description: 'Smart AI tools to automate workflows and accelerate growth.',
    icon: 'Cpu',
    featured: false
  },
  {
    id: '05',
    number: '05',
    title: 'Cybersecurity',
    description: 'Vulnerability assessment, security testing and threat safety.',
    icon: 'ShieldCheck',
    featured: false
  },
  {
    id: '06',
    number: '06',
    title: 'Digital Marketing & SEO',
    description: 'Strategy-driven marketing, organic search & conversion growth.',
    icon: 'Megaphone',
    featured: false
  },
  {
    id: '07',
    number: '07',
    title: 'Final Year Projects',
    description: 'Real-time project building, IEEE papers & viva training.',
    icon: 'GraduationCap',
    featured: false
  },
  {
    id: '08',
    number: '08',
    title: 'Courses & Placement Training',
    description: 'Industry-driven tech tracks with dedicated placement support.',
    icon: 'Briefcase',
    featured: false
  }
];

// 5 Working Process steps with arrow connectors
export const workingProcessData = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your requirements'
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Create a strategy and roadmap'
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Build and implement the solution'
  },
  {
    step: '04',
    title: 'Test',
    description: 'Ensure quality and performance'
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Launch and provide support'
  }
];

// 8 Detailed Services with alternating image layouts
export const servicesDetailData = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    description:
      'We build modern, responsive and high-performance websites that elevate your digital presence. From custom landing pages to enterprise portals, we engineer fast, secure and scalable web experiences.',
    featuresCol1: ['Business Websites', 'E-Commerce Portals', 'Custom Web Applications'],
    featuresCol2: ['CMS Development', 'Performance & Speed', 'Website Maintenance & Support'],
    image: serviceWebDev,
    imageAlt: 'Modern Website Development with laptop and code',
    layout: 'image-left'
  },
  {
    id: 'saas-product-development',
    number: '02',
    title: 'SaaS Product Development',
    description:
      'We architect and develop robust, multi-tenant Software-as-a-Service (SaaS) products from MVP to enterprise scale with enterprise-grade security, automated billing, and cloud scalability.',
    featuresCol1: ['Multi-Tenant Architecture', 'MVP & Product Prototyping', 'Cloud-Native Microservices'],
    featuresCol2: ['Subscription & Billing API', 'REST & GraphQL Backend', 'High Availability & DevOps'],
    image: caseEcommerce,
    imageAlt: 'SaaS product development and cloud dashboards',
    layout: 'image-right'
  },
  {
    id: 'application-development',
    number: '03',
    title: 'Application Development',
    description:
      'We design and build high-performance mobile and web applications with intuitive user experiences. Whether iOS, Android, or cross-platform, we deliver seamless, responsive functionality.',
    featuresCol1: ['iOS & Android Apps', 'Cross-Platform (Flutter/React Native)', 'Enterprise Mobile Solutions'],
    featuresCol2: ['Intuitive UI/UX Design', 'API & Cloud Backend Sync', 'App Store Deployment & Support'],
    image: programFullstack,
    imageAlt: 'Mobile and application development across devices',
    layout: 'image-left'
  },
  {
    id: 'ai-solutions',
    number: '04',
    title: 'AI Solutions',
    description:
      'We develop smart AI-powered solutions to automate repetitive workflows, enhance operational productivity and scale your business with intelligent machine learning algorithms.',
    featuresCol1: ['Generative AI & LLMs', 'Intelligent Chatbots & Assistants', 'Predictive Analytics & ML'],
    featuresCol2: ['Workflow Automation', 'Computer Vision & NLP', 'Custom AI Model Integration'],
    image: serviceAi,
    imageAlt: 'Futuristic AI holographic cube with neural network',
    layout: 'image-right'
  },
  {
    id: 'cybersecurity',
    number: '05',
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with advanced vulnerability assessment and penetration testing (VAPT). We identify security loopholes and compliance risks before attackers can exploit them.',
    featuresCol1: ['Vulnerability Assessment (VA)', 'Penetration Testing (PT)', 'Web & Mobile App Audits'],
    featuresCol2: ['Network Security & Firewalls', 'Compliance Support (ISO/SOC)', 'Remediation & Patching'],
    image: serviceCyber,
    imageAlt: 'Cybersecurity shield and padlock matrix defense',
    layout: 'image-left'
  },
  {
    id: 'digital-marketing-seo',
    number: '06',
    title: 'Digital Marketing & SEO',
    description:
      'We create data-driven digital marketing campaigns and organic search engine optimization to boost your online visibility, drive qualified leads, and maximize ROI across channels.',
    featuresCol1: ['Search Engine Optimization (SEO)', 'Google & Meta Ads (PPC)', 'Social Media Growth'],
    featuresCol2: ['Content & Email Marketing', 'Keyword & Competitor Analysis', 'Conversion Rate Optimization'],
    image: serviceMarketing,
    imageAlt: 'Digital Marketing strategy with analytics and tablet',
    layout: 'image-right'
  },
  {
    id: 'final-year-projects',
    number: '07',
    title: 'Final Year Projects',
    description:
      'We provide complete guidance, real-time code development, IEEE/Scopus paper implementations, and viva preparation for college students across modern engineering domains.',
    featuresCol1: ['Real-Time Domain Projects', 'IEEE Paper Implementations', 'Complete Source Code & Setup'],
    featuresCol2: ['Report & PPT Preparation', 'One-on-One Viva Training', 'Domain-Specific Mentorship'],
    image: academicGradFuture,
    imageAlt: 'Engineering students working on final year project implementation',
    layout: 'image-left'
  },
  {
    id: 'courses-placement-training',
    number: '08',
    title: 'Courses & Placement Training',
    description:
      'Industry-focused practical training programs designed to bridge the academia-industry gap. Master in-demand technologies with hands-on projects and guaranteed placement guidance.',
    featuresCol1: ['Full-Stack, AI & Cyber Tracks', 'Live Hands-On Coding', 'Industry Expert Mentors'],
    featuresCol2: ['Resume & Mock Interviews', 'Dedicated Placement Assistance', 'Recognized Certification'],
    image: academicHeroStudent,
    imageAlt: 'Students learning tech skills and preparing for placement',
    layout: 'image-right'
  }
];

// 8 FAQs split into 2 columns
export const servicesFaqData = {
  col1: [
    {
      id: 'faq-1',
      question: 'What types of businesses do you work with?',
      answer:
        'We work with businesses of all sizes, from ambitious early-stage startups and emerging businesses to mid-market enterprises and established global companies across multiple industries.'
    },
    {
      id: 'faq-2',
      question: 'How long does a project take?',
      answer:
        'Project timelines vary based on scope and requirements. Standard responsive websites take 2–4 weeks, while complex full-stack web applications, e-commerce portals, or enterprise systems typically take 6–12 weeks.'
    },
    {
      id: 'faq-3',
      question: 'Do you provide ongoing support?',
      answer:
        'Yes! We provide comprehensive post-launch support, 24/7 server monitoring, security patching, regular maintenance, and feature enhancement retainers tailored to your needs.'
    },
    {
      id: 'faq-4',
      question: 'Can you customize solutions for my business?',
      answer:
        'Every solution we design and engineer is custom-built around your specific business objectives, user workflows, and brand identity. We do not use cookie-cutter templates.'
    }
  ],
  col2: [
    {
      id: 'faq-5',
      question: 'What is the cost of your services?',
      answer:
        'Our pricing is transparent, competitive, and based on project scope and deliverables. We provide detailed milestone-based quotes during our initial consultation with no hidden surprises.'
    },
    {
      id: 'faq-6',
      question: 'Do you work with clients outside India?',
      answer:
        'Yes, we actively collaborate with international clients across the US, UK, Middle East, Europe, and Asia-Pacific with seamless communication across different time zones.'
    },
    {
      id: 'faq-7',
      question: 'Will I own the source code of my website?',
      answer:
        'Yes, 100%. Upon project completion and final milestone settlement, complete ownership, all source code, design assets, and intellectual property belong entirely to you.'
    },
    {
      id: 'faq-8',
      question: 'How do I get started?',
      answer:
        'Getting started is quick and easy. Click "Get a Quote" or "Start Your Project" to contact us. We will set up a discovery call, define your requirements, and provide a clear roadmap within 24–48 hours.'
    }
  ]
};

// Kept for backward compatibility
export const industriesData = [
  { name: 'Healthcare', icon: 'Activity', desc: 'Secure HIPAA-compliant healthcare portals and patient management.' },
  { name: 'Education', icon: 'GraduationCap', desc: 'LMS platforms, virtual classrooms, and academic portals.' },
  { name: 'Retail & E-commerce', icon: 'ShoppingCart', desc: 'High-conversion online stores and omni-channel inventory tools.' },
  { name: 'Finance', icon: 'CreditCard', desc: 'Fintech dashboards, payment gateways, and banking security.' },
  { name: 'Travel & Hospitality', icon: 'Plane', desc: 'Booking engines, itinerary managers, and guest experience platforms.' },
  { name: 'Startups', icon: 'Rocket', desc: 'Rapid MVP development, cloud scaling, and modern tech stacks.' }
];
