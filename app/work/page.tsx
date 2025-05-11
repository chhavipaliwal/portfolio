import { ProjectGrid } from '@/components/sections/work/project-grid';

export default function Home() {
  return (
    <main className=" translate-y-20 min-h-screen bg-black text-white font-neue-Helvetica-Medium ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-7xl mb-4 bg-secondary-500 text-transparent bg-clip-text">
          My Projects
        </h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Explore my latest projects showcasing innovative solutions and
          creative designs
        </p>

        <ProjectGrid />
      </div>
    </main>
  );
}
