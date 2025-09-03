import type { Project } from '@/lib/interface';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Insur Hotels',
    video: '/insur-hotels.mp4',
    link: 'https://insurhotels.com',
    category: 'Web Application',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'A luxury hotel chain providing unparalleled hospitality and comfort.',
    description:
      'Experience the beauty of serene getaways with my project portfolio, featuring exclusive retreats like Winged Villa in Bhimtal, Seraibagh in Ranthambore, and Riverwal in Jim Corbett. Each retreat offers unique experiences—from tranquil lakeside views to luxury immersed in wildlife, and riverside relaxation amid lush greenery. This portfolio is developed using Next.js 14, styled with TailwindCSS, and enhanced with NEXTUI and Shadcn UI for a modern, aesthetic design. MongoDB powers the backend, ensuring seamless data management for a smooth user experience.',
  },
  {
    id: 2,
    title: 'Invoice Generator',
    video: '/invoice-genreator.mp4',
    link: 'https://chhavi-paliwal-invoice-generator.vercel.app/',
    category: 'Web Application',
    source: 'https://github.com/chhavi-paliwal/invoice-generator',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'Create professional invoices in seconds.',
    description:
      'Streamline your billing with a clean, fast, and user-friendly invoice generator. This web application enables you to effortlessly create professional invoices, customize fields, add line items, and instantly download a print-ready PDF. Built with the power of Next.js and the elegance of Tailwind CSS, it ensures a smooth and responsive experience across all devices.',
  },

  {
    id: 3,
    title: 'the policlinic',
    video: '/the-polyclinic.mp4',
    link: 'https://policlinic.divinely.dev/',
    category: 'Healthcare Platform',
    source: 'https://github.com/imankitkalirawana/the-policlinic',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind', 'tabler:brand-mongodb'],
    tagline: 'Connecting patients and providers, seamlessly.',
    description:
      'A comprehensive healthcare platform designed to modernize clinic operations. Features include secure patient registration, an intuitive appointment booking system, and an admin dashboard for management. Built as a full-stack application with Next.js, Tailwind CSS, and MongoDB, it offers a robust solution for modern healthcare.',
  },
  {
    id: 4,
    title: 'the yogic Bowl',
    video: '/the-yogic-bowl.mp4',
    link: 'https://theyogicbowl.divinely.dev/',
    category: 'Restaurant Management',
    source: 'https://github.com/imankitkalirawana/the-yogic-bowl',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'A fresh digital presence for your restaurant.',
    description:
      "A beautifully crafted website and management system for 'The Yogic Bowl' restaurant. This project features an elegant menu, seamless user experience, and an easy-to-manage admin panel. Built with Next.js and Tailwind CSS, it's optimized for performance and aesthetics to reflect a unique brand identity.",
  },
  {
    id: 5,
    title: 'React Portfolio',
    video: '/react-portfolio.mp4',
    link: 'https://react-portfolio-kitti.netlify.app/',
    category: 'Portfolio Website',
    source: 'https://github.com/chhavi-paliwal/react-portfolio',
    technologies: ['tabler:brand-react', 'tabler:brand-tailwind', 'tabler:brand-framer'],
    tagline: 'Showcasing skills with fluid animation.',
    description:
      'A dynamic personal portfolio designed to leave a lasting impression. This project leverages React, Tailwind CSS, and the magic of Framer Motion to create a fluid user experience. It features smooth animations and elegant transitions to effectively showcase projects and skills.',
  },
  {
    id: 6,
    title: 'Better.com clone',
    video: '/better-com-clone.mp4',
    link: 'https://better-com-clone.vercel.app/',
    category: 'E-commerce',
    source: 'https://github.com/chhavi-paliwal/better-com-clone',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind', 'tabler:brand-framer'],
    tagline: 'Recreating a modern FinTech experience.',
    description:
      "A high-fidelity clone of the Better.com website, demonstrating the ability to build complex user interfaces. This project meticulously recreates the platform's layout and responsive design using Next.js for performance, Tailwind CSS for precision, and Framer Motion for engaging animations.",
  },
  {
    id: 7,
    title: 'Social Media App',
    video: '/socialConnect.mp4',
    link: 'https://social-media-app-nu-ten.vercel.app/',
    category: 'Social Media',
    source: 'https://github.com/chhavi-paliwal/social-media-app',
    technologies: [
      'tabler:brand-react',
      'tabler:brand-nodejs',
      'tabler:brand-tailwind',
      'tabler:brand-mongodb',
    ],
    tagline: 'A full-stack social networking experience.',
    description:
      'A complete social media application built from the ground up. Features user authentication, post creation, a dynamic feed, and interactions like likes/comments. The frontend is built with React and Tailwind, communicating with a robust backend API powered by Node.js, Express, and MongoDB.',
  },
];
