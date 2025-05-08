import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    description:
      'A sleek and user-friendly invoicing web app designed to streamline billing for freelancers and small businesses. Users can generate, preview, and download professional invoices with customizable details and branding.',
    category: 'Productivity',
    thumbnail: '/invoice.mp4',
    videoUrl: '/invoice.mp4',
    technologies: ['TypeScript', 'Tailwind CSS', 'React', 'Framer Motion'],
    features: [
      'Custom client and item input',
      'Real-time invoice preview',
      'Downloadable PDF generation',
      'Responsive UI with minimalist design',
    ],
  },
  {
    id: 'the-kody',
    title: 'The Kody',
    description:
      'A collaborative platform for developers to share, explore, and manage reusable code snippets. Designed to boost productivity and learning by fostering code reusability within the developer community.',
    category: 'Development Tools',
    thumbnail: '/the-kody.mov',
    videoUrl: '/the-kody.mov',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Tag-based snippet organization',
      'Syntax highlighting code editor',
      'Search and filter functionality',
      'Save and manage favorite snippets',
    ],
  },
  {
    id: 'the-polyclinic',
    title: 'The Polyclinic',
    description:
      'A modern clinic management system for small to medium-sized healthcare centers. It simplifies doctor scheduling, appointment booking, and patient record management through an intuitive interface.',
    category: 'Healthcare',
    thumbnail: '/the-polyclinic.mp4',
    videoUrl: '/the-polyclinic.mp4',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Doctor and patient authentication',
      'Real-time appointment scheduling',
      'Medical record tracking',
      'Admin dashboard for clinic operations',
    ],
  },
  {
    id: 'pinch-of-yum',
    title: 'Pinch of Yum',
    description:
      'A beautifully designed website for a fine-dining restaurant, focusing on showcasing its unique offerings, vibrant ambiance, and seamless customer experience.',
    category: 'Hospitality',
    thumbnail: '/pinch-of-yum.mp4',
    videoUrl: '/pinch-of-yum.mp4',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive menu display',
      'Ambiance image carousel',
      'Reservation and contact forms',
      'Fully responsive and aesthetic layout',
    ],
  },
  {
    id: 'yogic-bowl',
    title: 'Yogic Bowl',
    description:
      'A wellness-themed café website promoting plant-based living and holistic nutrition. Designed with an earthy vibe and clean design to engage a health-conscious audience.',
    category: 'Lifestyle',
    thumbnail: '/yogic-bowl.mp4',
    videoUrl: '/yogic-bowl.mp4',
    technologies: ['React', 'Tailwind CSS'],
    features: [
      'Detailed menu with nutrition info',
      'Wellness blog section',
      'Social media integration',
      'Mobile-first earthy design',
    ],
  },
  {
    id: 'better-clone',
    title: 'Better-Clone',
    description:
      'A polished UI/UX replica of the Better.com homepage created for design practice. This project focuses on replicating professional web standards and modern responsive design.',
    category: 'Design Practice',
    thumbnail: '/better-clone.mp4',
    videoUrl: '/better-clone.mp4',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Pixel-perfect clone',
      'Responsive layout on all devices',
      'Scroll-based animations',
      'Component-based reusable structure',
    ],
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description:
      'A minimal and responsive calculator application offering essential arithmetic functions with smooth interaction and a clean interface for daily use.',
    category: 'Utilities',
    thumbnail: '/calculator.mp4',
    videoUrl: '/calculator.mp4',
    technologies: ['React', 'CSS'],
    features: [
      'Basic arithmetic operations',
      'Keyboard and on-screen input',
      'Theme switch (light/dark)',
      'Responsive layout',
    ],
  },
  {
    id: 'react-portfolio',
    title: 'React Portfolio',
    description:
      'A professional and interactive portfolio site to showcase personal projects, skills, and resume. Designed with subtle animations and a modern dark-themed aesthetic.',
    category: 'Portfolio',
    thumbnail: '/react-portfolio.mp4',
    videoUrl: '/react-portfolio.mp4',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Animated project gallery',
      'Resume download and skills display',
      'Smooth page transitions',
      'Contact form with email integration',
    ],
  },
];
