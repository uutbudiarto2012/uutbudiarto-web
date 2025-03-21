import ShareSocial from '@/components/blogs/share-social'
import Image from 'next/image'
import Link from 'next/link';
import { FaUserAlt } from "react-icons/fa";

export default function BlogDetail() {
  return (
    <div className='pt-[120px] pb-12'>
      <div className='py-3 border-b border-white/5 mb-3'>
        <div className="container flex items-center gap-1 text-sm">
          <Link className='flex text-myprimary-superlight' href={'/'}>Home</Link> 
          <div>/</div>
          <Link className='flex text-myprimary-superlight' href={'/blog'}>Blog</Link> 
          <div>/</div>
          <span className='text-slate-500 line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        </div>
      </div>
      <div className='container'>

        <div className="grid md:grid-cols-5 gap-4">
          <div className='md:col-span-3'>
            <header className='mb-2'>
              <h1 className='text-3xl md:text-4xl font-semibold leading-none'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam voluptatem minus libero recusandae rem aperiam quaerat adipisci quo natus.
              </h1>
            </header>
            <div className='relative aspect-video rounded md:rounded-md overflow-hidden'>
              <Image width={1000} height={1000} className="h-full w-full object-cover z-0" alt="link" src={'/images/gallery/1.png'} />
            </div>
            <div className='flex mt-3 mb-4'>
              <div className='flex gap-2 items-center'>
                <div className='w-10 h-10 bg-myprimary-light/5 border border-white/20 rounded-full flex items-center justify-center'>
                  <FaUserAlt />
                </div>
                <div>
                  <div className='text-sm font-bold'>Uut Budiarto</div>
                  <p className='text-[11px]'>Mon, 20 Jan 2027</p>
                </div>
              </div>
              <ShareSocial />
            </div>
            <article className="prose prose-slate sm:prose-sm md:prose-base !text-slate-300">
              <h2>
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <h4>
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat eum incidunt, similique nisi quis nihil a aspernatur ab consequuntur culpa ea fuga nulla. Totam perferendis in ab vel voluptatum corrupti sunt modi iure nesciunt magni ullam repellendus commodi, consequatur eligendi quidem atque quisquam dolores error. Eaque ea fuga eos sint voluptatem delectus asperiores alias obcaecati ipsum tenetur aliquam vero, nemo harum inventore assumenda repellendus libero atque, officiis accusamus commodi corrupti. Accusamus cum voluptatibus, sit quas cumque, harum eveniet nihil aliquam neque eaque laboriosam! Fugiat quis vitae adipisci fugit repellat rem dolores esse repudiandae mollitia odit totam, a aliquid cupiditate sed nam eos voluptate debitis explicabo maiores expedita sit deserunt nesciunt! Magni unde beatae deserunt fugiat blanditiis labore velit animi nulla a eveniet exercitationem illum quia voluptates sapiente molestias, et iure tempora officiis consequuntur nam aspernatur repellendus natus! Nihil vero nulla recusandae ad voluptatibus iusto odio quidem veniam explicabo. Aspernatur nam dolore accusantium illum saepe, est omnis vel ea quod, eveniet vitae placeat deleniti facilis alias, minima maxime nisi asperiores corrupti. Vero quae rerum quibusdam, cupiditate accusamus quaerat voluptates velit, tenetur nulla fugiat ducimus quos nemo accusantium adipisci quam voluptatum aliquid! Non est animi cumque aliquid mollitia? Perferendis repellendus facere ut praesentium sapiente officiis doloremque aut maiores deleniti labore quis alias, explicabo ipsa, laborum fuga soluta sint illo, reiciendis assumenda accusamus vel dolor non? Porro dignissimos, illo expedita accusantium cupiditate eveniet repellat consectetur eos reiciendis! Esse ut beatae quam, consequatur repellendus voluptates eveniet aperiam aut facere provident, iste recusandae corporis ipsam vel ullam. Itaque repellendus, labore eligendi voluptatibus illo distinctio quis quam, ullam, tempore voluptatum possimus iusto illum? Voluptates repellat illum praesentium nam architecto voluptate corporis! Est libero sapiente ipsam amet vel aliquid pariatur totam veritatis? Debitis ducimus aut nihil omnis, blanditiis perspiciatis? A, inventore! Ipsum optio quam cum temporibus.
              </p>
              <code>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt minima saepe, harum perferendis quia temporibus delectus iusto magnam quasi et dolorem doloremque ipsam. Ab animi provident maiores quisquam officiis nostrum doloribus. Laudantium consequatur facere odio quibusdam dignissimos, aspernatur aut minus illum maxime sequi quod sunt ducimus obcaecati excepturi. Tempora aut iste veritatis aspernatur, incidunt, aliquid cupiditate eligendi tempore reiciendis et voluptate. Atque maiores, nulla ea ipsam cumque cupiditate. Tempora eius assumenda provident modi non alias porro, maxime dolore. Quasi voluptatibus magnam aspernatur ex illo! Cupiditate aperiam asperiores dolore quis, distinctio quibusdam itaque? Recusandae voluptatum voluptatem alias accusantium similique atque perferendis, mollitia cumque! Dolorem praesentium sequi magni doloremque adipisci eos animi, minima amet quae quidem cupiditate blanditiis laudantium deleniti fuga rem, expedita commodi odio. Sit inventore beatae ad, nemo earum nobis, doloremque expedita impedit a totam nostrum neque! Dolores eligendi voluptatem illum temporibus hic, recusandae, voluptates laudantium doloribus tenetur exercitationem facilis cupiditate ex provident qui voluptatum ipsum facere similique debitis maiores repellendus unde delectus magnam odio? Minima accusamus aliquid dicta laborum? Magnam consequuntur omnis repudiandae officia pariatur corporis expedita quidem suscipit hic tempore nihil ipsa voluptas, excepturi sit nostrum ratione eos voluptatum earum rerum perferendis eius beatae tenetur facilis neque. Incidunt, iste velit tenetur cum excepturi dolore nobis illum architecto, numquam repellat dignissimos blanditiis porro deserunt. Perferendis mollitia expedita quidem debitis. Quidem, odit. Quam esse molestiae rerum fugit quod eligendi corporis, alias vitae, quo non dolorem, ullam explicabo magnam laudantium nisi aliquid eos neque earum adipisci. Illum commodi porro velit minima totam asperiores nulla eveniet modi neque eaque! Fuga dolor accusamus, rem ullam odio deleniti architecto numquam, porro explicabo enim iste praesentium, doloremque in assumenda animi temporibus blanditiis id tempora corporis nobis! Velit possimus atque facere, doloribus rerum, porro officia omnis sint nisi voluptas, alias perferendis debitis autem eos sequi sed.
              </code>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus minus sint laboriosam, quos est impedit hic earum, quasi eligendi quaerat nam asperiores sapiente unde quisquam vero, nulla ratione quae.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus minus sint laboriosam, quos est impedit hic earum, quasi eligendi quaerat nam asperiores sapiente unde quisquam vero, nulla ratione quae.
              </p>
              <ol>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet</li>
              </ol>
            </article>
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
