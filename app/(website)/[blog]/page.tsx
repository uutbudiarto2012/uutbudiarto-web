import ShareSocial from '@/components/blogs/share-social';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs'
import { headers } from 'next/headers';
import { FaUser } from 'react-icons/fa6';
import { getBySlug } from '@/lib/wp/getBySlug';

export async function generateMetadata({ params }: { params: { blog: string } }) {
  const data = await getBySlug(params.blog)
  const img = data._embedded?.['wp:featuredmedia']?.[0]?.source_url
  if (data) {
    return {
      title: data.title.rendered,
      description: data?.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, ''),
      openGraph: {
        title: data.title.rendered,
        description: data?.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, ''),
        type: 'article',
        url: `${process.env.SITE_URL}/${params.blog}`,
        images: [
          {
            url: img,
            width: 1200,
            height: 630,
            alt: data.title.rendered,
          },
        ],
      },
    }
  }
  return {
    title: 'Blog - Uut Budiarto',
    description: `A tech blog covering fullstack development (Node.js, React, Next.js, Nuxt.js), blockchain, and crypto. Written by a Fullstack Developer passionate about Web3 and future technologies.`,
  };
}

export default async function BlogDetail({ params }: { params: { blog: string } }) {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const data = await getBySlug(params.blog)
  const fullUrl = `${protocol}://${host}/${data.slug}`
  return (
    <div className='pt-[120px] pb-12'>
      <div className='py-3 border-b border-white/5 mb-3'>
        <div className="container flex items-center gap-1 text-sm">
          <Link className='flex text-myprimary-superlight' href={'/'}>Home</Link>
          <div>/</div>
          <Link className='flex text-myprimary-superlight' href={'/blog'}>Blog</Link>
          <div>/</div>
          <span className='text-slate-500 line-clamp-1'>{data.title.rendered}</span>
        </div>
      </div>
      <div className='container'>
        <div className="grid md:grid-cols-5 gap-4">
          <div className='md:col-span-3 w-full overflow-hidden'>
            <header className='mb-2'>
              <h1 className='text-3xl md:text-4xl font-semibold leading-none' dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
            </header>
            <div className='relative aspect-auto rounded md:rounded-md overflow-hidden border bg-slate-500/20 border-white/20'>
              {
                data?._embedded?.['wp:featuredmedia'] && (
                  <Image width={1000} height={1000} className="h-full w-full object-contain z-0" alt="link" src={data?._embedded?.['wp:featuredmedia']?.[0]?.['source_url']} />
                )
              }
            </div>
            <div className='flex mt-3 mb-4'>

              <div className='flex gap-2 items-center'>
                <div className='w-10 h-10 relative overflow-hidden bg-myprimary-light/5 border border-white/20 rounded-full flex items-center justify-center'>
                  {
                    data?._embedded?.author?.[0]?.avatar_urls ? (
                      <Image width={1000} height={1000} className="h-full w-full object-contain z-0" alt="link" src={data?._embedded?.author?.[0]?.avatar_urls?.['24']} />
                    ) : (
                      <FaUser />
                    )
                  }
                </div>
                <div>
                  <div className='text-sm font-bold capitalize'>
                    {data?._embedded?.author?.[0]?.name || '-'}
                  </div>
                  <p className='text-[11px]'>
                    {dayjs(data.date).format('ddd, DD MMMM YYYY')}
                  </p>
                </div>
              </div>
              <ShareSocial url={fullUrl} />
            </div>
            <article
              className="prose prose-slate sm:prose-sm md:prose-base !text-slate-300"
              dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
            />
          </div>
          <div className='md:col-span-2 px-4'>
            <div className='sticky top-[120px] space-y-3'>
              <div className="border border-white/10 bg-myprimary-light/5 aspect-[2/1] border-dashed flex items-center justify-center">
                Ads Available...
              </div>
              <div className="border border-white/10 bg-myprimary-light/5 aspect-[2/1] border-dashed flex items-center justify-center">
                Ads Available...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
