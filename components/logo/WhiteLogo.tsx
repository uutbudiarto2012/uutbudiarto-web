import React from 'react'
import { Teko } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
const teko = Teko({
  subsets: ["latin-ext"]
})
export default function WhiteLogo() {
  return (
    <Link href={'/'} className={cn(
      teko.className,
      'text-4xl font-extrabold block',
      'text-white'
    )}>
      Uut Budiarto
    </Link>
  )
}
