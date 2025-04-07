import FormSearchFilter from '@/components/blogs/form-search'
import dynamic from 'next/dynamic';
const ResultSearchComp = dynamic(() => import('@/components/blogs/result-search'), { ssr: false });
import React from 'react'

export default function SearchResultPost() {
  return (
    <div>
      <div className='pt-[100px] bg-slate-900/50'>
        <div className="container py-2 grid md:grid-cols-3"></div>
      </div>
      <FormSearchFilter />
      <ResultSearchComp />
    </div>
  )
}
