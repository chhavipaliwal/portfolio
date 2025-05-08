'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
}

export function ProjectCard({ project, isHovered }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && isHovered && isVideoLoaded) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, isVideoLoaded]);

  return (
    <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <video
          ref={videoRef}
          src={project.thumbnail}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
        <motion.div
          initial={{ y: 10, opacity: 0.8 }}
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-3">{project.category}</p>

          <motion.div
            className="flex items-center gap-2 text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm">View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
