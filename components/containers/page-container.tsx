import Image from 'next/image'
import React from 'react'
import { SparklesCore } from '../ui/sparkles'
type PageContainerProps = {
  title: string
  subtitle?: string
  background?: string
  children: React.ReactNode
}
export default function PageContainer(props: PageContainerProps) {
  return (
    <div>
      <header className='relative h-[35vh] pt-[70px]'>
        <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
          <Image className='z-0 opacity-10 object-fill' fill alt='ETH' src={'/images/bg-grid.png'} />
        </div>
        <div className="max-w-xl mx-auto px-3 h-full flex flex-col items-center justify-center text-center">
          <h1 className='text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'>{props.title}</h1>
          <p className='text-xs md:text-base'>{props.subtitle}</p>
          <div className="mt-2 w-full max-w-md mx-auto h-6 relative bg-transparent rounded-full overflow-hidden">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={600}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )
}
