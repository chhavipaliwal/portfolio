'use client';
import Project from '@/components/sections/work/project';
import { projects } from '@/data/projects';

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { id } = params;

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <Project project={project} />;
}
