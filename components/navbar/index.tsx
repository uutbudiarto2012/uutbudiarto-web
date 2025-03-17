import React from 'react'
import MainLogo from '../logo/MainLogo'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function MainNavbar() {
  return (
    <nav className='fixed left-0 right-0 top-0 z-30 backdrop-blur-[3px]'>
      <div className="container flex items-center h-[70px]">
        <div className='w-[200px] shrink-0'>
          <MainLogo />
        </div>
        <div className='flex-1 flex justify-end gap-6'>
          <div className='hidden md:flex items-center flex-1 gap-6'>
            <Link href={'/'}>Experience</Link>
            <Link href={'/'}>Work</Link>
            <Link href={'/'}>Gallery</Link>
            <Link href={'/'}>Blog</Link>
          </div>
          <div>
            <Button className='px-6'>Hire Me</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
