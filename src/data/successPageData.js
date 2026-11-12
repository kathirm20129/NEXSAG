import priyaAvatar from '../assets/avatar_priya.jpg';
import arunAvatar from '../assets/avatar_arun.jpg';
import rameshAvatar from '../assets/avatar_ramesh.jpg';
import snehaAvatar from '../assets/avatar_sneha.jpg';

import caseHospitality from '../assets/case_hospitality.jpg';
import caseBeauty from '../assets/case_beauty.jpg';
import caseEcommerce from '../assets/case_ecommerce.jpg';
import caseHealthcare from '../assets/case_healthcare.jpg';

import galleryImg1 from '../assets/Gallery/image1.jpeg';
import galleryImg2 from '../assets/Gallery/image2.jpeg';
import galleryImg3 from '../assets/Gallery/image3.jpeg';
import galleryImg4 from '../assets/Gallery/image4.jpeg';
import galleryImg5 from '../assets/Gallery/image5.jpeg';
import galleryImg6 from '../assets/Gallery/image6.jpeg';
import galleryImg7 from '../assets/Gallery/image7.jpeg';
import galleryImg8 from '../assets/Gallery/image8.jpeg';
import galleryImg9 from '../assets/Gallery/image9.jpeg';
import galleryImg10 from '../assets/Gallery/image10.jpeg';

// 4 Stats in Hero Bar
export const heroStatsData = [
  {
    id: 'projects',
    value: '100+',
    label: 'Students Guided',
    icon: 'briefcase'
  },
  {
    id: 'students',
    value: '20+',
    label: 'Courses & Trainings',
    icon: 'users'
  },
  {
    id: 'placement',
    value: '85%',
    label: 'Success Rate',
    icon: 'chart'
  },
  {
    id: 'clients',
    value: '30+',
    label: 'Live Industry Projects',
    icon: 'smile'
  }
];

// 4 Journey Pillars
export const journeyPillarsData = [
  {
    id: 'innovation',
    title: 'Innovation',
    subtitle: 'in Every Project',
    icon: 'target'
  },
  {
    id: 'people',
    title: 'People-Centric',
    subtitle: 'Approach',
    icon: 'users'
  },
  {
    id: 'quality',
    title: 'Quality',
    subtitle: 'and Excellence',
    icon: 'trophy'
  },
  {
    id: 'long-term',
    title: 'Long-Term',
    subtitle: 'Relationships',
    icon: 'growth'
  }
];

// 3 Client Testimonials
export const clientTestimonialsData = [
  {
    id: 'ramesh',
    name: 'Ramesh K',
    role: 'Business Owner',
    quote: 'NexSAG delievred an excellent website for our business. Their team is professional and responsive.',
    avatar: rameshAvatar,
    rating: 5
  },
  {
    id: 'sneha',
    name: 'Sneha M',
    role: 'Student',
    quote: 'The training programs are very practical and helped me build my career.',
    avatar: snehaAvatar,
    rating: 5
  },
  {
    id: 'karthik',
    name: 'Karthik P',
    role: 'Entrepreneur',
    quote: 'Great support and innovative solutions. Highly recommended for digital services.',
    avatar: arunAvatar,
    rating: 5
  }
];

// 4 Student Success Stories
export const studentSuccessStoriesData = [
  {
    id: 'priya',
    name: 'Priya S',
    role: 'Data Analyst',
    company: 'TCS',
    companyLogo: 'tcs',
    quote: 'The training and support were excellent. I got placed in a top company!',
    avatar: priyaAvatar
  },
  {
    id: 'arun',
    name: 'Arun K',
    role: 'Web Developer',
    company: 'Infosys',
    companyLogo: 'infosys',
    quote: 'Practical training with real-time projects helped me gain confidence.',
    avatar: arunAvatar
  },
  {
    id: 'divya',
    name: 'Divya R',
    role: 'Digital Marketer',
    company: 'amazon',
    companyLogo: 'amazon',
    quote: 'The course content was up-to-date and industry relevant.',
    avatar: snehaAvatar
  },
  {
    id: 'vignesh',
    name: 'Vignesh T',
    role: 'Python Developer',
    company: 'wipro',
    companyLogo: 'wipro',
    quote: 'Great learning experience and strong placement support.',
    avatar: rameshAvatar
  }
];

import { allProjectsData } from './projectsData';
export { allProjectsData };

// Case Studies & Projects (Businesses That Grew with NexSAG)
export const businessCaseStudiesData = allProjectsData;

// Real NexSAG Office & Campus Gallery Images
export const galleryImagesData = [
  {
    id: 'g1',
    image: galleryImg1,
    title: 'Certificate Awarding Ceremony',
    subtitle: 'DevOps & Cloud Programs',
    category: 'Certifications',
    tag: 'Student Placement'
  },
  {
    id: 'g2',
    image: galleryImg2,
    title: 'NexSAG Official Certification',
    subtitle: 'DevOps Program Completion',
    category: 'Credentials',
    tag: 'Verified Certificate'
  },
  {
    id: 'g3',
    image: galleryImg3,
    title: 'Hands-on Classroom Training',
    subtitle: 'Interactive Mentor Workshop',
    category: 'Training',
    tag: 'Live Learning'
  },
  {
    id: 'g4',
    image: galleryImg4,
    title: 'Technical Discussion & Code Review',
    subtitle: 'Industry-Standard Practices',
    category: 'Workshops',
    tag: 'Code Review'
  },
  {
    id: 'g5',
    image: galleryImg5,
    title: 'Project Milestone Review',
    subtitle: 'Practical Project Delivery',
    category: 'Planning',
    tag: 'Project Guidance'
  },
  {
    id: 'g6',
    image: galleryImg6,
    title: 'Mentor Lecture & Architecture Walkthrough',
    subtitle: 'Modern Engineering Concepts',
    category: 'Mentorship',
    tag: 'Tech Masterclass'
  },
  {
    id: 'g7',
    image: galleryImg7,
    title: '1-on-1 Student Career Mentorship',
    subtitle: 'Personalized Review & Guidance',
    category: 'Guidance',
    tag: '1-on-1 Support'
  },
  {
    id: 'g8',
    image: galleryImg8,
    title: 'Lead Architect Tech Masterclass',
    subtitle: 'Real-World System Design',
    category: 'Masterclass',
    tag: 'Industry Insights'
  },
  {
    id: 'g9',
    image: galleryImg9,
    title: 'Classroom Project Collaboration',
    subtitle: 'Team Building & Problem Solving',
    category: 'Teamwork',
    tag: 'Collaborative Work'
  },
  {
    id: 'g10',
    image: galleryImg10,
    title: 'Student Batch Seminar & Interaction',
    subtitle: 'Career Readiness & Goal Setting',
    category: 'Seminar',
    tag: 'Campus Life'
  }
];

export const videoTestimonialsData = galleryImagesData;
