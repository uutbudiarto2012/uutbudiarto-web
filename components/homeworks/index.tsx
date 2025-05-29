
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function HomeWorks() {
  return (
    <section>
      <div className='mb-4 md:mb-12 container text-center pt-4 md:pt-8 lg:pt-16'>
        <h2 className='text-3xl md:text-5xl font-semibold uppercase leading-tight bg-gradient-to-r from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'>
          My Latest Work
        </h2>
      </div>
      <div className='relative md:min-h-[60vh] flex flex-col justify-center px-3 group'>
        <div className="grid md:grid-cols-2 md:absolute left-0 right-0 top-0 bottom-0 w-full overflow-hidden">
          <div></div>
          <div className='relative w-full border rounded-sm md:rounded-xl md:translate-x-7'>
            <Image className='z-0 h-full w-full group-hover:blur-0 duration-300 object-cover object-left rounded-sm md:rounded-xl' width={1200} height={1200} alt='admin' src={'/images/works/admin-2.png'} />
          </div>
        </div>
        <div className="container py-7 md:py-14">
          <div className="grid md:grid-cols-2">
            <div>
              <p className='text-myprimary-superlight mb-3 text-sm'>Asset Crypto Management</p>
              <div className='space-y-4'>
                <h3 className='text-3xl md:text-5xl leading-none font-semibold text-slate-400 capitalize'>
                  The Personal admin panel to easily control crypto and token
                </h3>
                <p className='text-slate-300 text-sm md:text-base'>
                  Intuitive interface, automated workflows, and seamless integration, Control crypto assets or tokens. Track balances, monitor transactions easily. Integrated with multiple dex and cex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative bg-slate-900/80 group'>
        <div className="grid md:grid-cols-2 md:absolute left-0 right-0 top-0 p-0 bottom-0 w-full overflow-hidden">
          <div className='relative w-full md:overflow-hidden overflow-auto h-[50vh] md:h-auto md:-translate-x-12 p-0'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='z-0 border-myprimary-light/30 group-hover:blur-0 duration-300' alt='admin' src={'/images/works/supreme-1.png'} />
          </div>
          <div></div>
        </div>
        <div className="container py-6 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2">
            <div></div>
            <div className='md:px-6'>
              <p className='text-myprimary-superlight mb-3 text-sm'>Website Supreme Energy</p>
              <div className='space-y-4'>
                <h3 className='text-3xl md:text-5xl leading-none font-semibold text-slate-400 capitalize'>
                  Supreme Energy develops geothermal energy for Indonesia&apos;s sustainable energy solutions.
                </h3>
                <p className='text-slate-300 text-sm md:text-base'>
                  They are committed to safety, the environment, and managing projects like Muara Laboh, Rantau Dedap, and Rajabasa to support national renewable energy.
                </p>
              </div>
              <div className="mt-4">
                <Button asChild>
                  <Link href="https://supreme-energy.com" target="_blank" rel="noopener noreferrer">Visit Website</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-8 flex justify-center'>
        <Button asChild>
          <Link href={'/work'}>Show More Work</Link>
        </Button>
      </div>
    </section>
  )
}
