'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.span
      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm"
      whileHover={{ scale: 1.05, backgroundColor: '#164e63' }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  );
}
