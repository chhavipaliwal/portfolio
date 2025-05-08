'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const project = projects.find((p) => p.id === params.id);

  useEffect(() => {
    // Simulate loading and progress
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 border-t-2 border-cyan-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-16 max-w-6xl"
          >
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </button>

            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-4 text-cyan-400"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-400 mb-12"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <hr className="border-gray-800 mb-12" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description} This project showcases my skills in{' '}
                  {project.technologies.join(', ')}, focusing on creating an
                  intuitive user experience with attention to detail and
                  performance. Each feature was carefully designed to provide
                  maximum value while maintaining a clean, modern aesthetic that
                  aligns with current design trends.
                </p>

                <div className="mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white rounded-md flex items-center gap-2"
                  >
                    Preview <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3 uppercase">
                    Technologies
                  </h3>
                  <p className="text-gray-400">
                    {project.technologies.join(', ')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 uppercase">
                    Client
                  </h3>
                  <p className="text-gray-400">Personal Project</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 uppercase">
                    Timeline
                  </h3>
                  <p className="text-gray-400">Sep 12, 2024 - Nov 5, 2024</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 uppercase">
                    Progress
                  </h3>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <p className="text-right text-gray-400 mt-1">100%</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold mb-6">Project Demo</h2>
              <div className="rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                <video
                  className="w-full aspect-video"
                  controls
                  autoPlay
                  muted
                  loop
                  src={project.videoUrl}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    className="bg-gray-900 p-6 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold">{feature}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
