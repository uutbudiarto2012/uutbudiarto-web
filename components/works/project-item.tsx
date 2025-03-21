import { TWork } from '@/data/work'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdOpen } from 'react-icons/io'

export default function ProjectItem(props: TWork) {
  return (
    <div className={cn(
      "grid md:grid-cols-2 gap-4 md:gap-6 py-6 md:py-12 relative",
      props.imageRight ? "bg-slate-900/50" : ""
    )}>
      <div className={cn(
        'relative h-full w-full  aspect-[12/8]',
        props.imageRight ? "order-1 md:order-2" : ""
      )}>
        <Image className='h-full w-full p-2' src={props.image} width={1000} height={1000} alt='i' />
      </div>
      <div className='flex flex-col justify-center max-w-lg mx-auto px-3 lg:p-0'>
        <div>
          <h2 className='text-2xl leading-none md:text-4xl font-semibold'>
            {props.title}
          </h2>
          <div>
            <p className='text-sm md:text-base lg:text-lg leading-tight'>
              {props.description}
            </p>
          </div>
        </div>
        <div className='flex gap-2 mt-4 flex-wrap'>
          {props.stack.map(i => <div key={i} className='badge-primary'>{i}</div>)}
        </div>
        {
          props.url && (
            <div className='mt-2 md:mt-4 text-myprimary-superlight text-sm font-bold'>
              <Link className='flex items-center gap-2 underline' href={props.url} target="_blank" rel="noopener noreferrer">
                Visit Url <IoMdOpen />
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
