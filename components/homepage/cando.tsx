'use client';

import { motion } from 'framer-motion';

const expertise = [
  {
    id: '01',
    title: 'Front-End Development',
    items: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'Responsive Design'
    ]
  },
  {
    id: '02',
    title: 'Back-End Development',
    items: [
      'Node.js',
      'Express.js',
      'Authentication',
      'RESTful Services',
      'Server-Side Logic'
    ]
  },
  {
    id: '03',
    title: 'UI/UX Design',
    items: [
      'User-Centered Design',
      'Wireframing',
      'Prototyping',
      'Figma',
      'Interaction Design'
    ]
  },
  {
    id: '04',
    title: 'Database & API Integration',
    items: [
      'MongoDB',
      'Mongoose',
      'Firebase',
      'REST API Integration',
      'Data Modeling'
    ]
  },
  {
    id: '05',
    title: 'Creative Projects',
    items: [
      'Personal Love Pages',
      'Hackathon Prototypes',
      'Portfolio Sites',
      'Fun & Functional Side Projects'
    ]
  }
];

export default function Expertise() {
  return (
    <section className="rounded-t-[74px] bg-white px-6 py-20 tracking-wider dark:bg-black md:px-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-sm uppercase tracking-widest text-gray-500">
          Expertise
        </p>
        <p className="mb-16 font-pp-neue-machina text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300 md:text-3xl">
          I blend design thinking with robust development to create digital
          experiences that are both intuitive and technically strong.
        </p>
        <div className="space-y-12">
          {expertise.map((block) => (
            <div
              key={block.id}
              className="border-b border-gray-200 pb-8 dark:border-gray-700"
            >
              <p className="text-sm text-gray-400">{block.id}</p>
              <h3 className="mb-2 text-2xl font-semibold text-black dark:text-white">
                {block.title}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                {block.items.map((item, i) => (
                  <span
                    key={i}
                    className="after:mx-2 after:content-['•'] last:after:content-['']"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
