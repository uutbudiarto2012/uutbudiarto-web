"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import MainLogo from '../logo/MainLogo'
import { Button } from '../ui/button'
import MenuMobile from './menu-mobile'

export default function MainNavbar() {
  const pathname = usePathname()
  const mainPath = pathname.split('/')[1]
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
            <Link className={cn(
              mainPath === 'experience' ?'text-myprimary-superlight':''
            )} href={'/experience'}>Experience</Link>
            <Link className={cn(
              mainPath === 'work' ?'text-myprimary-superlight':''
            )} href={'/work'}>Work</Link>
            <Link className={cn(
              mainPath === 'gallery' ?'text-myprimary-superlight':''
            )} href={'/gallery'}>Gallery</Link>
            <Link className={cn(
              mainPath === 'blog' ?'text-myprimary-superlight':''
            )} href={'/blog'}>Blog</Link>
          </div>
          <div className='flex gap-2 items-center'>
            <Button className='px-6'>Hire Me</Button>
            <MenuMobile />
          </div>
        </div>
      </div>
    </nav>
  )
}
