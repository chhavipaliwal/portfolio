'use client';

import { motion } from 'framer-motion';
import Button from '../ui/button';
import { useState } from 'react';
import { cn } from '@heroui/react';

interface Expertise {
  id: string;
  title: string;
  items: string[];
  color: string;
}

const expertise: Expertise[] = [
  {
    id: '01',
    title: 'Front-End Development',
    items: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'Responsive Design',
    ],
    color: 'hover:bg-blue-100',
  },
  {
    id: '02',
    title: 'Back-End Development',
    items: [
      'Node.js',
      'Express.js',
      'Authentication',
      'RESTful Services',
      'Server-Side Logic',
    ],
    color: 'hover:bg-red-100',
  },
  {
    id: '03',
    title: 'UI/UX Design',
    items: [
      'User-Centered Design',
      'Wireframing',
      'Prototyping',
      'Figma',
      'Interaction Design',
    ],
    color: 'hover:bg-green-100',
  },
  {
    id: '04',
    title: 'Database & API Integration',
    items: [
      'MongoDB',
      'Mongoose',
      'Firebase',
      'REST API Integration',
      'Data Modeling',
    ],
    color: 'hover:bg-yellow-100',
  },
  {
    id: '05',
    title: 'Creative Projects',
    items: [
      'Personal Love Pages',
      'Hackathon Prototypes',
      'Portfolio Sites',
      'Fun & Functional Side Projects',
    ],
    color: 'hover:bg-purple-100',
  },
];

export default function Expertise() {
  return (
    <section className="-translate-y-32 rounded-t-[74px] bg-white py-20 font-neue-Helvetica-Condensed-light tracking-wider dark:bg-black">
      <div className="mx-auto">
        <div className="mb-20 text-center">
          <p className="mb-6 text-sm uppercase tracking-widest text-gray-500">
            Expertise
          </p>
          <p className="mb-16 text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300 md:text-3xl">
            I blend design thinking with robust development to create digital
            experiences that are both intuitive and technically strong.
          </p>
        </div>
        <div>
          {expertise.map((item) => (
            <ExpertiseItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseItem({ item }: { item: Expertise }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <motion.div
      key={item.id}
      layout
      className={cn(
        'border-b transition-colors cursor-default font-manrope relative grid p-6 grid-cols-[0.6fr_1fr] gap-8 border-gray-200 pb-8 dark:border-gray-700',
        item.color
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3 className="font-bold text-default">{item.id}</h3>
      <div className="flex flex-col gap-4">
        <div className="flex  flex-col gap-4">
          <h3 className="text-3xl font-semibold text-background">
            {item.title}
          </h3>
          <div className="flex tracking-tight font-bold uppercase flex-wrap gap-x-2 gap-y-1 text-sm text-default">
            {item.items.map((item, i) => (
              <span
                key={i}
                className="after:ml-2 after:content-['•'] last:after:content-['']"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Button className="border-background font-semibold border text-background">
            discuss the project
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
