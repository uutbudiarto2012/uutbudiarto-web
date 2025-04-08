import Image from 'next/image'
import Link from 'next/link'
import LargeHilight from './large-hilight'
import { axiosClient } from '@/lib/axiosClient'
import { WPPost } from '@/types/post'
import loadDynamic from 'next/dynamic'
const Excerpt = loadDynamic(() => import('./exerpt'), { ssr: false })

export const dynamic = 'force-dynamic'

export async function getHilightUp(): Promise<WPPost[]> {
  const response = await axiosClient({
    url: 'posts?_embed&tags=5&_fields=id,title,excerpt,_links,_embedded,slug',
  })
  return response.data
}

export default async function BlogHilight() {
  const data = await getHilightUp()
  return (
    <div className='grid md:grid-cols-2 gap-8 md:gap-5 container'>
      <LargeHilight />
      <div className='grid grid-cols-2 gap-2 md:gap-5'>
        {
          data.map(item => (
            <Link key={item?.id} className='aspect-[5/3] group' href={item?.slug}>
              <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
                {item._embedded?.['wp:featuredmedia'] && <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={item._embedded?.['wp:featuredmedia']?.[0]?.['source_url'] || '/images/gallery/1.png'} />}
              </div>
              <div className='py-2'>
                <h2 className='text-xl md:text-2xl leading-none line-clamp-1' dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                <Excerpt className='text-xs line-clamp-2' html={item?.excerpt?.rendered} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
