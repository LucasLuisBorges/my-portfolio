'use client'

import { Briefcase, Database, Github, GraduationCap, Instagram, Linkedin, Mail, User } from 'lucide-react';
import Link from 'next/link';

import { DataCard } from '@/components/data-card';
import { Projects, Skills } from '@/constants';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='grid grid-cols-4 gap-6 text-primary'>
      <DataCard
        name='Projetos'
        icon={Database}
        count={String(Projects.length)}
        color='data'
        className='col-span-4 sm:col-span-2 xl:col-span-1'
      />
      <DataCard
        name='Experiência'
        icon={User}
        count="3+ anos"
        color='city'
        className='col-span-4 sm:col-span-2 xl:col-span-1'
      />
      <DataCard
        name='Trabalho'
        icon={Briefcase}
        count="Full-time"
        color='user'
        className='col-span-4 sm:col-span-2 xl:col-span-1'
      />
      <DataCard
        name='Formação'
        icon={GraduationCap}
        count="Cesusc"
        color='file'
        className='col-span-4 sm:col-span-2 xl:col-span-1'
      />

      <div className='flex flex-col bg-background w-full gap-3 xl:h-96 rounded-2xl p-6 col-span-4 xl:col-span-3'>
        <h1 className='text-2xl font-medium'>Minhas habilidades</h1>
        <p className='opacity-80 text-primary'>
          Sou um desenvolvedor especializado em Next.js e React.js, com amplo domínio em estilização usando Tailwind CSS. Minha experiência abrange desde a criação de interfaces dinâmicas e responsivas até integrações complexas. Habilidades em arquitetura de projetos e desenvolvimento de plataformas, focado em soluções modernas e conectadas. Comprometido em manter-me atualizado para oferecer soluções inovadoras e eficientes.
        </p>
        <h1 className='text-2xl font-medium mt-6'>Minhas habilidades</h1>
        <div className='flex flex-wrap justify-center md:justify-start gap-4'>
          {Skills.map((itens, index) => (
            <Image
              key={index}
              alt='Minhas Habilidades'
              src={itens.src}
              height={30}
              width={40}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col bg-background w-full gap-4 xl:h-96 rounded-2xl p-6 row-start-6 sm:row-start-4 col-span-4 xl:col-span-1 xl:row-start-2 xl:col-start-4'>
        <h1 className='text-2xl font-medium'>Redes</h1>
        <Link
          target='_blank'
          href='https://github.com/LucasLuisBorges'
          className='flex items-center gap-2 w-full bg-[#192A3E] px-2 py-2 lg:px-4 lg:py-4 xl:px-2  xl:py-1 2xl:px-8 2xl:py-3 rounded-sm text-white hover:brightness-90'
        >
          <Github size={28} className='text-white' />
          Github
        </Link>
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/lucasluisborges/'
          className='flex items-center gap-2 w-full bg-[#0E76A8] px-2 py-2 lg:px-4 lg:py-4 xl:px-2  xl:py-1 2xl:px-8 2xl:py-3 rounded-sm text-white hover:brightness-90'
        >
          <Linkedin size={28} className='text-white' />
          Linkedin
        </Link>
        <Link
          target='_blank'
          href='https://www.instagram.com/llborgesss/'
          className='flex items-center gap-2 w-full bg-[#DD2A7B] px-2 py-2 lg:px-4 lg:py-4 xl:px-2  xl:py-1 2xl:px-8 2xl:py-3 rounded-sm text-white hover:brightness-90'
        >
          <Instagram size={28} className='text-white' />
          Instagram
        </Link>
        <Link
          href='/paineis'
          className='flex items-center gap-2 w-full bg-[#EA4335] px-2 py-2 lg:px-4 lg:py-4 xl:px-2  xl:py-1 2xl:px-8 2xl:py-3 rounded-sm text-white hover:brightness-90'
        >
          <Mail size={28} className='text-white' />
          E-mail
        </Link>
      </div>
    </section>
  )
}
