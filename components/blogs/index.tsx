import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div className="container">
      <div className='mb-3'>
        <h2 className='text-2xl md:text-3xl font-semibold'>All Blog</h2>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          [1, 2, 3, 4, 6, 7, 2, 6,1].map((item, index) => (
            <Link key={index} className='flex  shrink-0 md:hover:scale-105 duration-500' href={'/text-slug-detail-123'}>
              <div className='relative aspect-square w-16 h-16 md:h-32 md:w-32 rounded md:rounded-md overflow-hidden'>
                <Image width={1000} height={1000} className="h-full w-full object-cover z-0" alt="link" src={'/images/gallery/' + item + '.png'} />
              </div>
              <div className='px-2 flex-1'>
                <h2 className='text-xl md:text-2xl leading-none line-clamp-2'>Lorem ipsum dolor sit amet.</h2>
                <p className='text-sm md:text-base line-clamp-2'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus libero officiis at praesentium beatae incidunt architecto ea animi deleniti!
                </p>
              </div>
            </Link>
          ))
        }

      </div>
    </div>
  )
}
