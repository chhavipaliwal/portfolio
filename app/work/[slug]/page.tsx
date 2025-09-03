'use client';
import Project from '@/components/sections/work/project';
import { projects } from '@/data/projects';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <Project project={project} />;
}
