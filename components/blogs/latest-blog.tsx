import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LatestBlog() {
  return (
    <div className="container">
      <div className='mb-3'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Latest Blog</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
        {
          [1, 2, 3, 4, 6, 7, 2, 6].map((item, index) => (
            <Link key={index} className='aspect-[5/3] hover:scale-105 duration-500' href={'/text-slug-detail-123'}>
              <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
                <Image width={1000} height={1000} className="h-full w-full object-cover z-0" alt="link" src={'/images/gallery/' + item + '.png'} />
              </div>
              <div className='py-2'>
                <h2 className='text-xl md:text-2xl leading-none line-clamp-1'>Lorem ipsum dolor sit amet.</h2>
                <p className='text-xs line-clamp-2'>
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
