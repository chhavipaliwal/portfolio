const projects = [
  {
    id: 1,
    title: 'Invoice Generator',
    video: '/vedio/invoice-genreator.mov',
    link: 'https://chhavi-paliwal-invoice-generator.vercel.app/',
    category: 'Web Application',
  },
  {
    id: 2,
    title: 'the policlinic',
    video: '/vedio/clinic.mov',
    link: 'https://the-policlinic.vercel.app/',
    category: 'Healthcare Platform',
  },
  {
    id: 3,
    title: 'the yogic Bowl',
    video: '/vedio/the-yogic-bowl.mov',
    link: 'https://theyogicbowl.divinely.dev/',
    category: 'Restaurant Management',
  },
  {
    id: 4,
    title: 'React Portfolio',
    video: '/vedio/react-portfolio.mov',
    technologies: ['React', 'Tailwind', 'Framer'],
    link: 'https://react-portfolio-kitti.netlify.app/',
    category: 'Portfolio Website',
  },
  {
    id: 5,
    title: 'Better.com clone',
    video: '/vedio/better-com-clone.mov',
    link: 'https://better-com-clone.vercel.app/',
    category: 'E-commerce',
  },
  {
    id: 6,
    title: 'Social Media App',
    video: '/vedio/socialConnect.mov',
    link: 'https://social-media-app-nu-ten.vercel.app/',
    category: 'Social Media',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-4 font-neue-Helvetica-Medium">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] group cursor-pointer"
          >
            {/* Project Image with Overlay */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[24rem] object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title and Category Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                  <h2 className="text-white text-lg font-semibold drop-shadow-md">
                    {project.title}
                  </h2>
                  <span className="text-xs text-white px-3 py-1 bg-black/40 rounded-full border border-white/30">
                    {project.category}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
