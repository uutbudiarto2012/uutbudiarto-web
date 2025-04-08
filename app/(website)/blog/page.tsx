import Blog from '@/components/blogs'
import FormSearchFilter from '@/components/blogs/form-search'
import BlogHilight from '@/components/blogs/hilight'
import LatestBlog from '@/components/blogs/latest-blog'
export const dynamic = 'force-dynamic'
export async function generateMetadata() {
  return {
    title: 'Blog - Uut Budiarto',
    description: `A tech blog covering fullstack development (Node.js, React, Next.js, Nuxt.js), blockchain, and crypto. Written by a Fullstack Developer passionate about Web3 and future technologies.`,
  };
}
export default function BlogPage() {
  return (
    <>
      <div className='pt-[130px] bg-slate-900/50'>
        <div className="container py-2 grid md:grid-cols-3"></div>
      </div>
      <FormSearchFilter />
      <div className='space-y-10 py-6'>
        <BlogHilight />
        <LatestBlog />
        <Blog />
      </div>
    </>
  )
}
