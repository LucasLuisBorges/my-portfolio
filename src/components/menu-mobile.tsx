'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { NAVIGATION } from '@/constants'
import { ModeToggle } from './mode-toggle'


export function MenuMobile() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className='h-6 w-6 text-primary' />
      </SheetTrigger>
      <SheetContent side='left' className='py-14'>
        <h1>LOGO</h1>

        <div className='flex flex-col justify-between h-full'>
          <nav className='flex flex-col gap-4 mt-10'>
            {NAVIGATION.map((item, index) => (
              <Link onClick={() => setOpen(false)} key={index} href={item.href} className='flex gap-2 items-center text-base font-medium hover:underline'>
                {item.name}
              </Link>
            )
            )}
          </nav>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>

  )
}