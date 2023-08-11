import Image from 'next/image';

import { WorkCard } from '@/components/work-card';
import { Works } from '@/constants';
import SobreImage from '../../../public/sobre.jpeg';

export default function Sobre() {
  return (
    <section className='grid grid-cols-4 gap-6 text-primary'>
      <div className='flex flex-col gap-3 bg-background rounded-xl p-7 col-span-4 lg:col-span-3 row-start-1'>
        <h1 className='text-2xl font-medium'>Sobre mim</h1>
        <p className='text-base opacity-80'>
          Sou um desenvolvedor FrontEnd apaixonado por criar experiências digitais excepcionais. Atualmente, meu foco está em tecnologias como Next.js, React e Django. Tenho um profundo conhecimento em desenvolvimento com TypeScript, garantindo código robusto e altamente legível. Minha expertise se estende a diversas bibliotecas de estilização, incluindo o uso habilidoso de Tailwind CSS, Styled Components e outras ferramentas para criar interfaces atraentes e responsivas. Minha jornada inclui experiência em desenvolvimento móvel com React Native, fortalecendo minha capacidade de construir soluções versáteis e abrangentes. Estou sempre em busca de desafios emocionantes e oportunidades de aprendizado contínuo, visando oferecer produtos de alta qualidade que superem as expectativas dos usuários.
        </p>
      </div>
      <div className='flex flex-col gap-3 bg-background rounded-xl p-7 col-span-4 lg:col-span-3 row-start-2'>
        <h1 className='text-2xl font-medium'>Carreira</h1>
        <div className='grid grid-cols-4 gap-2'>
          {Works.map((itens, index) => (
            <WorkCard
              key={index}
              name={itens.name}
              office={itens.office}
              description={itens.description}
              date={itens.date}
              className='col-span-4 2xl:col-span-2'
            />
          ))}
        </div>
      </div>
      <div className='hidden lg:flex bg-background rounded-xl h-[calc(76vh+24px)] p-4 col-span-1 row-span-2'>
        <Image
          src={SobreImage}
          alt='Minha foto'
          className='rounded-xl'
        />
      </div>
    </section>
  )
}