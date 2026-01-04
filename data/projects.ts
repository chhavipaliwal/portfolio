import type { Project } from '@/lib/interface';

export const projects: Project[] = [
  {
    slug: 'insur-hotels',
    title: 'insur hotels',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/insur-hotels.mp4',
    link: 'https://insurhotels.com',
    category: 'Web Application',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'A luxury hotel chain providing unparalleled hospitality and comfort.',
    description:
      'Experience the beauty of serene getaways with my project portfolio, featuring exclusive retreats like Winged Villa in Bhimtal, Seraibagh in Ranthambore, and Riverwal in Jim Corbett. Each retreat offers unique experiences—from tranquil lakeside views to luxury immersed in wildlife, and riverside relaxation amid lush greenery. This portfolio is developed using Next.js 14, styled with TailwindCSS, and enhanced with NEXTUI and Shadcn UI for a modern, aesthetic design. MongoDB powers the backend, ensuring seamless data management for a smooth user experience.',
    client: 'Shri S.K. Chawla',
  },
  {
    slug: 'the-yogic-bowl',
    title: 'the yogic Bowl',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/the-yogic-bowl.mp4',
    link: 'https://theyogicbowl.divinely.dev/',
    category: 'Web Application',
    source: 'https://github.com/chhavipaliwal/the-yogic-bowl',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'A fresh digital presence for your restaurant.',
    description:
      "A beautifully crafted website and management system for 'The Yogic Bowl' restaurant. This project features an elegant menu, seamless user experience, and an easy-to-manage admin panel. Built with Next.js and Tailwind CSS, it's optimized for performance and aesthetics to reflect a unique brand identity.",
    client: 'Ms. Priya Rajain',
  },
  {
    slug: 'divinely-store',
    title: 'divinely store',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/divinely-store.mp4',
    link: 'https://store.divinely.dev/',
    category: 'Web Application',
    source: 'https://github.com/chhavipaliwal/divinely-store',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'A centralized hub for free and essential development resources.',
    description:
      'Divinely Store is an open source project designed and developed for Ankit Kalirawana, a web developer, providing centralized access to free and essential development resources to their team.',
    client: 'Ankit Kalirawana',
  },
  {
    slug: 'invoice-generator',
    title: 'invoice generator',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/invoice-genreator.mp4',
    link: 'https://chhavi-paliwal-invoice-generator.vercel.app/',
    category: 'Personal Project',
    source: 'https://github.com/chhavi-paliwal/invoice-generator',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
    tagline: 'Create professional invoices in seconds.',
    description:
      'Streamline your billing with a clean, fast, and user-friendly invoice generator. This web application enables you to effortlessly create professional invoices, customize fields, add line items, and instantly download a print-ready PDF. Built with the power of Next.js and the elegance of Tailwind CSS, it ensures a smooth and responsive experience across all devices.',
  },
  {
    slug: 'the-policlinic',
    title: 'the policlinic',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/the-polyclinic.mp4',
    link: 'https://policlinic.divinely.dev/',
    category: 'Contributed',
    source: 'https://github.com/imankitkalirawana/the-policlinic',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind', 'tabler:brand-mongodb'],
    tagline: 'Connecting patients and providers, seamlessly.',
    description:
      'A comprehensive healthcare platform designed to modernize clinic operations. Features include secure patient registration, an intuitive appointment booking system, and an admin dashboard for management. Built as a full-stack application with Next.js, Tailwind CSS, and MongoDB, it offers a robust solution for modern healthcare.',
  },

  {
    slug: 'react-portfolio',
    title: 'react portfolio',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/react-portfolio.mp4',
    link: 'https://react-portfolio-kitti.netlify.app/',
    category: 'Personal Project',
    source: 'https://github.com/chhavi-paliwal/react-portfolio',
    technologies: ['tabler:brand-react', 'tabler:brand-tailwind', 'tabler:brand-framer'],
    tagline: 'Showcasing skills with fluid animation.',
    description:
      'A dynamic personal portfolio designed to leave a lasting impression. This project leverages React, Tailwind CSS, and the magic of Framer Motion to create a fluid user experience. It features smooth animations and elegant transitions to effectively showcase projects and skills.',
  },
  {
    slug: 'better-com-clone',
    title: 'better.com clone',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/better-com-clone.mp4',
    link: 'https://better-com-clone.vercel.app/',
    category: 'Personal Project',
    source: 'https://github.com/chhavi-paliwal/better-com-clone',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind', 'tabler:brand-framer'],
    tagline: 'Recreating a modern FinTech experience.',
    description:
      "A high-fidelity clone of the Better.com website, demonstrating the ability to build complex user interfaces. This project meticulously recreates the platform's layout and responsive design using Next.js for performance, Tailwind CSS for precision, and Framer Motion for engaging animations.",
  },
  {
    slug: 'social-media-app',
    title: 'social media app',
    video: 'https://pub-ab1090e7d272462f9dcdf859626e7687.r2.dev/socialConnect.mp4',
    link: 'https://social-media-app-nu-ten.vercel.app/',
    category: 'Personal Project',
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
