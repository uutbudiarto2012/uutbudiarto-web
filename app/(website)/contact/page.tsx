import PageContainer from '@/components/containers/page-container'
import Image from 'next/image'
import { FaEnvelope, FaGithub, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

export default function ContactPage() {
  return (
    <PageContainer title='Contact' subtitle='Connect With Me'>
      <div className="bg-slate-900/50 h-full relative">
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full z-0">
          <Image className='z-0 opacity-10 blur-xl object-cover grayscale' fill alt='ETH' src={'/images/skills/bg-buble.png'} />
        </div>
        <div className="container relative z-10">
          <div className="w-full py-12 md:py-24">
            <div className='pb-6'>
              <h2 className='text-center text-3xl'>Contact me at</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
              <div className='flex gap-2 items-center'>
                <div className='w-16 h-16 flex items-center justify-center border rounded-xl border-white/20 bg-myprimary/20'>
                  <FaWhatsapp className='w-12 h-12' />
                </div>
                <div className='flex-1 space-y-2'>
                  <div className='font-semibold'>089699009090</div>
                  <div className='font-semibold'>082220089090</div>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='w-16 h-16 flex items-center justify-center border rounded-xl border-white/20 bg-myprimary/20'>
                  <FaEnvelope className='w-12 h-12' />
                </div>
                <div className='flex-1 space-y-2'>
                  <div className='font-semibold'>fileku.uut@gmail.com</div>
                  <div className='font-semibold'>hikids.developer@gmail.com</div>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <a href="https://www.instagram.com/_uutbudiarto" target="_blank" rel="noopener noreferrer" className='w-16 h-16 flex items-center justify-center border rounded-xl border-white/20 bg-myprimary/20'>
                  <FaInstagram className='w-12 h-12' />
                </a>
                <a href="https://github.com/uutbudiarto2012" target="_blank" rel="noopener noreferrer" className='w-16 h-16 flex items-center justify-center border rounded-xl border-white/20 bg-myprimary/20'>
                  <FaGithub className='w-12 h-12' />
                </a>
                <a href="https://x.com/jawaskrip" target="_blank" rel="noopener noreferrer" className='w-16 h-16 flex items-center justify-center border rounded-xl border-white/20 bg-myprimary/20'>
                  <FaXTwitter className='w-12 h-12' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
