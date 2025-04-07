import Image from 'next/image';

export default function Gallery() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='bg-myprimary/30 w-full h-full aspect-square relative rounded-xl md:rounded-3xl overflow-hidden group'>
        <Image width={1200} height={1200} className='w-full h-full object-cover z-0' alt='x' src={'/images/gallery/3.png'} />
        {/* <div className='z-10 flex flex-col justify-end p-3 bg-gradient-to-t from-slate-900 via-slate-50/5 to-slate-50/5 absolute left-0 right-0 bottom-0 top-0 translate-y-full group-hover:translate-y-0 transition'>
          <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
          <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam unde beatae, laboriosam ullam molestias ipsa architecto iste dolores rem?</p>
        </div>  */}
      </div>
      <div className='bg-myprimary/30 w-full h-full aspect-square relative rounded-xl md:rounded-3xl overflow-hidden group'>
        <Image width={1200} height={1200} className='w-full h-full object-cover z-0' alt='x' src={'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'} />
        {/* <div className='z-10 flex flex-col justify-end p-3 bg-gradient-to-t from-slate-900 via-slate-50/5 to-slate-50/5 absolute left-0 right-0 bottom-0 top-0 translate-y-full group-hover:translate-y-0 transition'>
          <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
          <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam unde beatae, laboriosam ullam molestias ipsa architecto iste dolores rem?</p>
        </div>  */}
      </div>
      <div className='bg-myprimary/30 w-full md:col-span-2 h-full aspect-auto relative rounded-xl md:rounded-3xl overflow-hidden group'>
        <Image width={1200} height={1200} className='w-full h-full object-cover z-0' alt='x' src={'/images/works/all/crcpool.png'} />
        {/* <div className='z-10 flex flex-col justify-end p-3 bg-gradient-to-t from-slate-900 via-slate-50/5 to-slate-50/5 absolute left-0 right-0 bottom-0 top-0 translate-y-full group-hover:translate-y-0 transition'>
          <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
          <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam unde beatae, laboriosam ullam molestias ipsa architecto iste dolores rem?</p>
        </div>  */}
      </div>
      <div className='bg-myprimary/30 md:col-span-2 w-full h-full aspect-auto relative rounded-xl md:rounded-3xl overflow-hidden group'>
        <Image width={1200} height={1200} className='w-full h-full object-cover z-0' alt='x' src={'/images/works/all/bellspool.png'} />
        {/* <div className='z-10 flex flex-col justify-end p-3 bg-gradient-to-t from-slate-900 via-slate-50/5 to-slate-50/5 absolute left-0 right-0 bottom-0 top-0 translate-y-full group-hover:translate-y-0 transition'>
          <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
          <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam unde beatae, laboriosam ullam molestias ipsa architecto iste dolores rem?</p>
        </div>  */}
      </div>
      <div className='bg-myprimary/30 w-full h-full aspect-auto relative rounded-xl md:rounded-3xl overflow-hidden group'>
        <Image width={1200} height={1200} className='w-full h-full object-cover z-0' alt='x' src={'/images/gallery/1.png'} />
        {/* <div className='z-10 flex flex-col justify-end p-3 bg-gradient-to-t from-slate-900 via-slate-50/5 to-slate-50/5 absolute left-0 right-0 bottom-0 top-0 translate-y-full group-hover:translate-y-0 transition'>
          <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
          <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam unde beatae, laboriosam ullam molestias ipsa architecto iste dolores rem?</p>
        </div>  */}
      </div>
      <div className='bg-myprimary/30 w-full h-full aspect-auto relative rounded-xl md:rounded-3xl overflow-hidden group'>
        <Image width={1200} height={1200} className='w-full h-full object-cover z-0' alt='x' src={'/images/gallery/2.png'} />
        {/* <div className='z-10 flex flex-col justify-end p-3 bg-gradient-to-t from-slate-900 via-slate-50/5 to-slate-50/5 absolute left-0 right-0 bottom-0 top-0 translate-y-full group-hover:translate-y-0 transition'>
          <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
          <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam unde beatae, laboriosam ullam molestias ipsa architecto iste dolores rem?</p>
        </div>  */}
      </div>
    </div>
  )
}
