import { cn } from '@/lib/utils';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import WelcomeTools from './tools';
import { Button } from '../ui/button';
const gv = Great_Vibes({
  weight: ['400'],
  subsets: ["latin-ext"]
})

export default function WelcomeSection() {
  return (
    <section className='relative flex flex-col min-h-[80vh] md:min-h-screen'>
      <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
        <Image className='z-0 opacity-20 object-fill' fill alt='ETH' src={'/images/bg-grid.png'} />
      </div>
      <BackgroundBeamsWithCollision className='bg-transparent h-full flex-1'>
        <div className='w-full h-full'>
          <div className="container h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 items-center">
              <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                  Hi, I&apos;m
                  <h1 className={cn(
                    gv.className,
                    'text-4xl text-myprimary-light font-bold'
                  )}>Uut Budiarto</h1>
                </div>
                <div>
                  <h2 className='text-3xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'>
                    Turning Ideas into Reality with Code.
                  </h2>
                  <p className={cn('text-sm md:text-xl mt-2 md:mt-4')}>
                    I transform visions into functional, high-performing digital experiences with precision and passion. 💡
                  </p>
                </div>
                <Button asChild>
                  <a download href="/cv/UutBudiartoCV.pdf">Download CV</a>
                </Button>
              </div>
              <div className='relative z-20 mt-12 ml-12 hidden md:flex items-center justify-center'>
                <div className='relative duration-300 group'>
                  <div className='relative hover:scale-110 duration-500'>
                    <div className='h-[50px] skew-x-[40deg] relative -translate-x-[22px] -translate-y-[2px]  z-10 bg-gradient-to-bl from-myprimary-light/60 via-myprimary/80 to-myprimary-superlight/90'>
                      <Image className='z-0 blur-[3px] opacity-100 object-fill' fill alt='ETH' src={'/images/jawaskrip.png'} />
                    </div>
                    <div className='flex items-center  justify-center w-[44px] h-[230px] -translate-y-[26px] -translate-x-[46px] skew-y-[50deg] absolute bg-gradient-to-tr from-myprimary-light/50 via-myprimary/50 to-myprimary-superlight/60'>
                      <Image className='z-0 blur-[3px] opacity-90' fill alt='ETH' src={'/images/jawaskrip.png'} />
                    </div>
                    <div className='h-[230px] backdrop-blur-[2px] overflow-hidden w-[230px] shrink-0 relative z-20 bg-gradient-to-tl from-myprimary-light/50 via-myprimary/80 to-myprimary-superlight/50'>
                      <Image className='z-0 blur-sm scale-90 group-hover:scale-100 group-hover:blur-none duration-300' fill alt='ETH' src={'/images/jawaskrip.png'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <div className='h-[20vh] md:h-[22vh] -mt-12'>
        <WelcomeTools />
      </div>
    </section>
  )
}
