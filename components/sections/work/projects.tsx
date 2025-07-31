import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Insur Hotels',
    description:
      'Hotel booking platform with room selection and reservation system',
    video: '/placeholder.svg?height=300&width=500',
    link: 'https://insurhotels.com',
    technologies: ['Next.js', 'Tailwind', 'Framer', 'MongoDB', 'AWS', 'Vercel'],
    category: 'Web Application',
  },
  {
    id: 2,
    title: 'MedBook Appointments',
    description: 'Medical appointment booking system with patient management',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['React', 'Tailwind', 'Node.js'],
    category: 'Healthcare Platform',
  },
  {
    id: 3,
    title: 'Patient Dashboard',
    description:
      'Healthcare management system for patient records and appointments',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Express'],
    category: 'Dashboard',
  },
  {
    id: 4,
    title: 'DataVault Pro',
    description: 'Advanced file management and database administration tool',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
    category: 'Data Management',
  },
];

const techIcons = {
  'Next.js': '⚡',
  React: '⚛️',
  Tailwind: '🎨',
  Framer: '🎭',
  MongoDB: '🍃',
  AWS: '☁️',
  Vercel: '▲',
  'Node.js': '🟢',
  TypeScript: '📘',
  PostgreSQL: '🐘',
  Express: '🚀',
  'Vue.js': '💚',
  Docker: '🐳',
};

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4 font-neue-Helvetica-Medium">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] group cursor-pointer"
            >
              {/* Project Image */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Category */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-gray-600"
                    >
                      <span className="text-base">
                        {techIcons[tech as keyof typeof techIcons] || '🔧'}
                      </span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
