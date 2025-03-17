import React from 'react'
import { Teko } from 'next/font/google';
import { cn } from '@/lib/utils';
const teko = Teko({
  subsets: ["latin-ext"]
})
export default function WhiteLogo() {
  return (
    <div className={cn(
      teko.className,
      'text-4xl font-extrabold',
      'text-white'
    )}>
      Uut Budiarto
    </div>
  )
}
