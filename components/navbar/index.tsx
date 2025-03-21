"use client"
import React, { useEffect, useState } from 'react'
import MainLogo from '../logo/MainLogo'
import Link from 'next/link'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export default function MainNavbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={cn(
      'fixed left-0 right-0 top-0 z-30 duration-300',
      scrollPosition >= 200 ? 'backdrop-blur-lg bg-slate-950/80' : ''
    )}>
      <div className={cn(
        "container flex items-center duration-300",
        scrollPosition >= 200 ? 'h-[70px]' : 'h-[120px]'
      )}>
        <div className='w-[200px] shrink-0'>
          <MainLogo />
        </div>
        <div className='flex-1 flex justify-end gap-6'>
          <div className='hidden md:flex items-center flex-1 gap-6'>
            <Link href={'/experience'}>Experience</Link>
            <Link href={'/work'}>Work</Link>
            <Link href={'/gallery'}>Gallery</Link>
            <Link href={'/blog'}>Blog</Link>
          </div>
          <div>
            <Button className='px-6'>Hire Me</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
