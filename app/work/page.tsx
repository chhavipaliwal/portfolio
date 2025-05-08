import { ProjectGrid } from '@/components/sections/work/project-grid';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
          My Portfolio
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
