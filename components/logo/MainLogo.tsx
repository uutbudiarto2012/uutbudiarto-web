import React from 'react'
import { Teko } from 'next/font/google';
import { cn } from '@/lib/utils';
const teko = Teko({
  subsets: ["latin-ext"]
})
export default function MainLogo() {
  return (
    <div className={cn(
      teko.className,
      'text-4xl font-extrabold',
      'bg-gradient-to-tr from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'
    )}>
      Uut Budiarto
    </div>
  )
}
