import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogHilight() {
  return (
    <div className='grid md:grid-cols-2 gap-8 md:gap-5 container'>
      <Link href={'/text-slug-detail-123'}>
        <div className='group'>
          <div className='relative aspect-[12/8] rounded md:rounded-md overflow-hidden'>
            <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={'/images/gallery/1.png'} />
          </div>
          <div className='py-1'>
            <h2 className='text-2xl md:text-3xl leading-none line-clamp-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita minima et delectus in asperiores eius obcaecati omnis tenetur cumque.
            </h2>
            <p className='line-clamp-1 text-xs md:text-base leading-tight'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, consequuntur alias aliquam asperiores accusamus veritatis est illo ipsam nisi fuga dicta repellendus debitis ullam repellat! Inventore voluptatem accusamus vel sapiente alias eum amet nobis saepe, sed quidem rerum consequatur nemo earum asperiores ea exercitationem at repudiandae sit delectus omnis ipsa? Animi, voluptas quibusdam ipsam nostrum fuga ut ex hic, consectetur distinctio error repellendus eveniet corrupti natus facilis a velit odio molestiae veniam. Ea error, placeat nobis non mollitia ipsa. Laudantium obcaecati assumenda sequi eum exercitationem sit error enim inventore esse, atque, blanditiis debitis totam illum laborum veritatis voluptatem. Cumque harum est velit iste dolor vero et cum corrupti, rem temporibus? Fugiat eos magni molestiae dolor minima! Asperiores, commodi impedit rem tempore temporibus et libero consequatur pariatur earum aliquam nobis sequi deserunt odit labore sed, reiciendis fuga esse id? Quam, distinctio consequatur. Sit, dignissimos deserunt? Soluta veritatis voluptas odit optio cumque, deserunt facere asperiores ex dignissimos, assumenda maiores totam consequatur aperiam. Sit, voluptatem dolores tempore voluptas pariatur error incidunt fugiat doloribus accusamus ad sequi consequatur alias a suscipit doloremque iure sunt qui laborum nam distinctio. Quas inventore atque dolore autem porro id soluta ipsa rerum, dolor saepe praesentium laboriosam assumenda vero?
            </p>
          </div>
          <div className='py-1 flex items-center gap-2 text-sm font-semibold'>
            <div>By: Jhon Doe</div>
            <div>|</div>
            <div>2012-20-12</div>
          </div>
        </div>
      </Link>
      <div className='grid grid-cols-2 gap-2 md:gap-5'>
        <Link className='aspect-[5/3] group' href={'/text-slug-detail-123'}>
          <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
            <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={'/images/gallery/2.png'} />
          </div>
          <div className='py-2'>
            <h2 className='text-xl md:text-2xl leading-none line-clamp-1'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-xs line-clamp-2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus libero officiis at praesentium beatae incidunt architecto ea animi deleniti!
            </p>
          </div>
        </Link>
        <Link className='aspect-[5/3] group' href={'/text-slug-detail-123'}>
          <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
            <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={'/images/gallery/3.png'} />
          </div>
          <div className='py-2'>
            <h2 className='text-xl md:text-2xl leading-none line-clamp-1'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-xs line-clamp-2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus libero officiis at praesentium beatae incidunt architecto ea animi deleniti!
            </p>
          </div>
        </Link>
        <Link className='aspect-[5/3] group' href={'/text-slug-detail-123'}>
          <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
            <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={'/images/gallery/4.png'} />
          </div>
          <div className='py-2'>
            <h2 className='text-xl md:text-2xl leading-none line-clamp-1'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-xs line-clamp-2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus libero officiis at praesentium beatae incidunt architecto ea animi deleniti!
            </p>
          </div>
        </Link>
        <Link className='aspect-[5/3] group' href={'/text-slug-detail-123'}>
          <div className='relative h-full w-full rounded md:rounded-md overflow-hidden'>
            <Image width={1000} height={1000} className="h-full w-full object-cover z-0 group-hover:scale-110 duration-500" alt="link" src={'/images/gallery/6.png'} />
          </div>
          <div className='py-2'>
            <h2 className='text-xl md:text-2xl leading-none line-clamp-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit quibusdam nulla minus temporibus ex neque iusto doloribus vitae molestiae?
            </h2>
            <p className='text-xs line-clamp-2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus libero officiis at praesentium beatae incidunt architecto ea animi deleniti!
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
