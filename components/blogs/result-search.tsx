'use client'

import { useResultBlog } from "@/hooks/useResutlBlog";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"
import Excerpt from "./exerpt";
import { useEffect } from "react";

export default function ResultSearchComp() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const categories = searchParams.get("category") ?? undefined;
  const search = searchParams.get("keyword") ?? undefined;
  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (categories) queryParams.set("category", categories);
    if (search) queryParams.set("keyword", search);

    if (queryParams.toString()) {
      router.replace(`/search?${queryParams.toString()}`);
    }
  }, [categories, search, router]);

  const { data, isLoading } = useResultBlog({
    categories,
    search
  })
  return (
    <div className="container py-6">
      <div className='mb-6'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Search Result...</h2>
        <div className="text-xs text-slate-300">
          <div> keyword: {search} </div>
          <div> category ID: {categories || '-'} </div>
        </div>
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
