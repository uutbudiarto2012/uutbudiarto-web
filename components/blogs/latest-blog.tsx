import { axiosClient } from '@/lib/axiosClient'
import { WPPost } from '@/types/post'
import loadDynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Excerpt = loadDynamic(() => import('./exerpt'), { ssr: false })

export const dynamic = 'force-dynamic'
export async function getLatestBlog(): Promise<WPPost[]> {
  const response = await axiosClient({
    url: 'posts',
    params: {
      per_page: 4,
      orderby: 'date',
      order: 'desc',
      _embed: '',
      _fields: 'id, title, excerpt, _links, _embedded, slug'
    }
  })
  return response.data
}

export default async function LatestBlog() {
  const data = await getLatestBlog()
  return (
    <div className="container">
      <div className='mb-3'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Latest Blog</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
        {
          data?.map((item, index) => (
            <Link key={index} className='aspect-[5/3] hover:scale-105 duration-500' href={item.slug}>
              <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
                {item._embedded?.['wp:featuredmedia'] && <Image width={1000} height={1000} className="h-full w-full object-cover z-0" alt="link" src={item._embedded?.['wp:featuredmedia']?.[0]?.['source_url'] || '/images/gallery/1.png'} />}
              </div>
              <div className='py-2'>
                <h2 className='text-xl md:text-2xl leading-none line-clamp-2' dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                <Excerpt className='text-xs md:text-sm line-clamp-2' html={item?.excerpt?.rendered} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
