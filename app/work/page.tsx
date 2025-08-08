import Projects from '@/components/sections/work/projects';
import { Project } from '@/lib/interface';

const projects: Project[] = [
  {
    id: 1,
    title: 'Invoice Generator',
    video: '/invoice-genreator.mp4',
    link: 'https://chhavi-paliwal-invoice-generator.vercel.app/',
    category: 'Web Application',
    source: 'https://github.com/chhavi-paliwal/invoice-generator',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
  },
  {
    id: 2,
    title: 'the policlinic',
    video: '/the-polyclinic.mp4',
    link: 'https://policlinic.divinely.dev/',
    category: 'Healthcare Platform',
    source: 'https://github.com/imankitkalirawana/the-policlinic',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind', 'tabler:brand-mongodb'],
  },
  {
    id: 3,
    title: 'the yogic Bowl',
    video: '/the-yogic-bowl.mp4',
    link: 'https://theyogicbowl.divinely.dev/',
    category: 'Restaurant Management',
    source: 'https://github.com/imankitkalirawana/the-yogic-bowl',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind'],
  },
  {
    id: 4,
    title: 'React Portfolio',
    video: '/react-portfolio.mp4',
    technologies: ['tabler:brand-react', 'tabler:brand-tailwind', 'tabler:brand-framer'],
    link: 'https://react-portfolio-kitti.netlify.app/',
    category: 'Portfolio Website',
    source: 'https://github.com/chhavi-paliwal/react-portfolio',
  },
  {
    id: 5,
    title: 'Better.com clone',
    video: '/better-com-clone.mp4',
    link: 'https://better-com-clone.vercel.app/',
    category: 'E-commerce',
    source: 'https://github.com/chhavi-paliwal/better-com-clone',
    technologies: ['tabler:brand-nextjs', 'tabler:brand-tailwind', 'tabler:brand-framer'],
  },
  {
    id: 6,
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
  },
];

export default async function WorkPage() {
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}
