import { ProjectCard } from '@/components/project-card';
import { Projects } from '@/constants';

export default function Projetos() {
  return (
    <section className='flex bg-background rounded-xl min-h-[50vh] p-7'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-2'>
        {Projects.map((itens, index) => (
          <ProjectCard
            key={index}
            name={itens.name}
            office={itens.office}
            src={itens.src}
          />
        ))}
      </div>
    </section>
  )
}