import Projects from '@/components/sections/work/projects';
import { projects } from '@/data/projects';

export default async function WorkPage() {
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}
