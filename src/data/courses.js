import pythonImg from '../assets/program_python.jpg';
import sqlImg from '../assets/program_sql.jpg';
import cloudImg from '../assets/program_cloud.jpg';

import avatarPriya from '../assets/avatar_priya.jpg';
import avatarArun from '../assets/avatar_arun.jpg';
import avatarSneha from '../assets/avatar_sneha.jpg';

// 4 Hero Benefit Cards (Overlapping Hero)
export const academicHeroFeatures = [
  {
    id: 'cert',
    title: 'Certified Courses',
    description: 'Learn from industry experts',
    icon: 'Award'
  },
  {
    id: 'hands-on',
    title: 'Hands-on Training',
    description: 'Real-world experience',
    icon: 'Laptop'
  },
  {
    id: 'curriculum',
    title: 'Updated Curriculum',
    description: 'Latest technologies',
    icon: 'BookOpen'
  },
  {
    id: 'placement',
    title: 'Placement Support',
    description: 'Career guidance and support',
    icon: 'Briefcase'
  }
];

// Popular Programs Slider Cards
export const popularProgramsData = [
  {
    id: 'python',
    title: 'Python',
    tech: 'Core Python, Django, Flask & Automation',
    image: pythonImg
  },
  {
    id: 'sql',
    title: 'SQL',
    tech: 'PostgreSQL, MySQL, Database Design & Queries',
    image: sqlImg
  },
  {
    id: 'cloud',
    title: 'Cloud',
    tech: 'AWS, Azure & Cloud Infrastructure',
    image: cloudImg
  }
];

// 4 Features inside the Dark Banner "Your Career Growth is Our Priority"
export const whyLearnFeatures = [
  {
    id: 'expert',
    title: 'Expert Trainers',
    description: 'Industry professionals',
    icon: 'GraduationCap'
  },
  {
    id: 'practical',
    title: 'Practical Training',
    description: 'Live projects',
    icon: 'BookOpen'
  },
  {
    id: 'certification',
    title: 'Certification',
    description: 'Recognized certificates',
    icon: 'Award'
  },
  {
    id: 'support',
    title: 'Placement Support',
    description: 'Career assistance',
    icon: 'Briefcase'
  }
];

// 4 Program Categories
export const programCategoriesData = [
  {
    id: 'final-year-project',
    title: 'Final Year Project',
    description: 'IEEE & real-time domain projects with complete documentation, source code and viva guidance',
    icon: 'GraduationCap'
  },
  {
    id: 'placement-training',
    title: 'Placement & Training Support',
    description: '100% placement support, aptitude training, resume building and mock interview preparation',
    icon: 'Briefcase'
  },
  {
    id: 'courses',
    title: 'Courses',
    description: 'Hands-on practical training in high-demand technologies with industry-recognized certifications',
    icon: 'BookOpen'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Expert technology strategy, architectural consulting, digital solutions and career roadmaps',
    icon: 'Users'
  }
];

// 5 Learning Process Steps
export const learningProcessSteps = [
  {
    step: '01',
    title: 'Enroll',
    description: 'Choose your program and register.',
    icon: 'UserPlus'
  },
  {
    step: '02',
    title: 'Learn',
    description: 'Gain knowledge from expert trainers.',
    icon: 'BookOpen'
  },
  {
    step: '03',
    title: 'Practice',
    description: 'Work on real-world projects.',
    icon: 'Laptop'
  },
  {
    step: '04',
    title: 'Get Certified',
    description: 'Receive a recognized certificate.',
    icon: 'Award'
  },
  {
    step: '05',
    title: 'Get Placed',
    description: 'Get career support and placement assistance.',
    icon: 'Briefcase'
  }
];

// 3 Student Testimonial Cards
export const studentTestimonialsData = [
  {
    id: 'shafiq',
    name: 'Shafiq M',
    role: 'B-Tech - IT',
    college: 'Velalar College of Engineering and Technology',
    location: 'Erode',
    quote:
      "Honestly, I was struggling before I reached out here. But the way you guys explained every step and adjusted all my requirements was just amazing. Project came out perfect and I didn't even stress much. Huge thanks!!",
    avatar: avatarArun,
    rating: 5
  },
  {
    id: 'chaitra',
    name: 'Chaitra S',
    role: 'Computer Science Graduate',
    college: 'Vidyavahini First Grade College',
    location: 'Bengaluru',
    quote:
      "Nice. Within a day you guys gave a project by adding all my requirements and gave complete explanation. It was excellent!",
    avatar: avatarPriya,
    rating: 5
  },
  {
    id: 'harini',
    name: 'Harini G',
    role: 'Artificial Intelligence and Machine Learning',
    college: 'Rajalakshmi Engineering College',
    location: 'Chennai',
    quote:
      "Can't thank you enough. I was totally clueless before, but your help gave me so much confidence. Submitted the project proudly. Thank you thank you thank you!!",
    avatar: avatarSneha,
    rating: 5
  }
];

// Kept for backward compatibility
export const coursesData = popularProgramsData;
export const academicBenefits = academicHeroFeatures;
export const whyLearnPillars = whyLearnFeatures;
