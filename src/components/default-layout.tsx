'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { NAVIGATION } from '@/constants';
import { cn } from '@/lib/utils';
import { Avatar } from './avatar';
import { MenuMobile } from './menu-mobile';
import { ModeToggle } from './mode-toggle';

interface IProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: IProps) {
  const routerPath = usePathname();

  return (
    <div className='flex'>
      <aside className='hidden fixed xl:flex flex-col items-center gap-10 w-72 h-screen overflow-auto py-9 bg-background shadow-lg'>
        <h1>LOGO</h1>

        <nav className='w-4/5 flex flex-col gap-4'>
          {NAVIGATION.map((item, index) => (

            <Link key={index} href={item.href} className={cn('flex gap-2 items-center text-base font-medium hover:underline', routerPath === item.href && 'text-[#00DEA3]')}>
              {item.name}
              {routerPath === item.href && <div className='h-2 w-2 rounded-full bg-[#00DEA3]' />}
            </Link>
          )
          )}
        </nav>
      </aside>

      <main className='ml-0 xl:ml-72 w-full  p-6 bg-dashboard dark:bg-dashboardDark min-h-screen bg-repeat-y bg-contain'>
        <header className='flex justify-between items-center bg-background shadow-md rounded-lg px-6 py-4 mb-6'>
          <div className='flex items-center gap-2 md:hidden'>
            <Avatar src="https://github.com/LucasLuisBorges.png" name='LB' />
            <div>
              <h1 className='text-base text-primary'>Lucas 2xl</h1>
              <p className='text-xs text-primary opacity-80'>Desenvolvedor</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <h1 className='text-lg xl:text-xl font-bold'>Olá, Meu nome é Lucas e sou desenvolvedor web</h1>
            <p className='text-sm font-light opacity-80'>
              Desenvolvedor front end de Florianópolis, Brasil, apaixonado por programação e freelancer.
            </p>
          </div>
          <div className='hidden xl:flex items-center gap-4'>
            <ModeToggle />
            <Avatar src="https://github.com/LucasLuisBorges.png" name='LB' />
          </div>
          <div className='flex xl:hidden'>
            <MenuMobile />
          </div>
        </header>
        {children}
      </main>
    </div>
  )
}