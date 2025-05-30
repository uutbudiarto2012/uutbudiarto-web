import React from 'react'
import { Teko } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
const teko = Teko({
  subsets: ["latin-ext"]
})
export default function MainLogo() {
  return (
    <Link href={'/'} className={cn(
      teko.className,
      'text-3xl md:text-4xl font-semibold md:font-bold',
      'bg-gradient-to-tr from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'
    )}>
      Uut B
    </Link>
  )
}
