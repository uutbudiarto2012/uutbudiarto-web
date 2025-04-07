import { axiosClient } from '@/lib/axiosClient'
import { WPPost } from '@/types/post'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
const Excerpt = dynamic(() => import('./exerpt'), { ssr: false })
export async function getLargeHilight(): Promise<WPPost> {
  const response = await axiosClient({
    url: 'posts?_embed&tags=4&_fields=id,title,excerpt,_links,_embedded,slug',
  })
  return response.data?.[0]
}

export default async function LargeHilight() {
  const data = await getLargeHilight()
  return (
    <Link href={data.slug}>
      <div className='group'>
        <div className='relative aspect-[12/8] rounded md:rounded-md overflow-hidden'>
          {data._embedded?.['wp:featuredmedia'] && <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={data._embedded?.['wp:featuredmedia']?.[0]?.['source_url'] || '/images/gallery/1.png'} />}
        </div>
        <div className='py-1'>
          <h2 className='text-2xl md:text-3xl leading-none line-clamp-2' dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
          <Excerpt html={data.excerpt.rendered} />
        </div>
        <div className='py-1 flex items-center gap-2 text-sm font-semibold'>
          <div className='capitalize'>{data?._embedded?.author?.[0]?.name || '-'}</div>
          <div>|</div>
          <div>{dayjs(data.date).format('ddd, DD MMMM YYYY')}</div>
        </div>
      </div>
    </Link>
  )
}
