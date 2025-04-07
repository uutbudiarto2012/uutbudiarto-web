"use client"
import { useBlog } from '@/hooks/useBlog'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
const Excerpt = dynamic(() => import('./exerpt'), { ssr: false })
export default function Blog() {
  const { data, isLoading } = useBlog()
  return (
    <div className="container">
      <div className='mb-3'>
        <h2 className='text-2xl md:text-3xl font-semibold'>All Blog</h2>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          !isLoading && data?.map((item) => (
            <Link key={item.id} className='flex  shrink-0 md:hover:scale-105 duration-500' href={item.slug}>
              <div className='relative bg-myprimary-light/10 aspect-square w-16 h-16 md:h-32 md:w-32 rounded md:rounded-md overflow-hidden'>
                {item._embedded?.['wp:featuredmedia'] && <Image width={1000} height={1000} className="h-full w-full object-cover z-0" alt="link" src={item._embedded?.['wp:featuredmedia']?.[0]?.['source_url']} />}
              </div>
              <div className='px-2 flex-1'>
                <h2 className='text-xl md:text-2xl leading-none line-clamp-2' dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                <Excerpt className='text-xs md:text-sm' html={item.excerpt.rendered} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
