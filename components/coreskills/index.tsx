import { Box, Code, Laptop } from 'lucide-react'

export default function CoreSkills() {
  return (
    <section className='py-8 md:py-16 lg:py-24  bg-slate-900/80'>
      <div className="container">
        <header className='text-center space-y-3 mb-6 md:mb-12 max-w-3xl mx-auto'>
          <p className='uppercase font-bold text-myprimary-superlight'>What I Do?</p>
          <h2 className='text-3xl md:text-5xl leading-none font-extrabold text-slate-400 uppercase'>
            Building Scalable & Innovative Digital Solutions.
          </h2>
        </header>
        <div className='flex flex-col md:flex-row items-baseline mt-6 gap-6 text-slate-300'>
          <div className='flex-1 p-3'>
            <div>
              <div className='flex gap-2 text-myprimary-superlight'>
                <div className='h-8 w-8 border border-myprimary-superlight/20 rounded-md flex items-center justify-center'>
                  <Code className='w-5 h-5' />
                </div>
                <div className='text-lg font-bold'>Backend Developer</div>
              </div>
              <div className='mt-3 text-xs md:text-sm'>
                I have expertise in designing scalable, secure, and high-performance backend systems, optimizing APIs, databases, and server logic to ensure seamless integration, reliability, and efficiency in web applications.
              </div>
            </div>
          </div>
          <div className='flex-1 md:border-x-2 border-myprimary-superlight/10 p-3 md:py-3 md:px-6'>
            <div>
              <div className='flex gap-2 text-myprimary-superlight'>
                <div className='h-8 w-8 border border-myprimary-superlight/20 rounded-md flex items-center justify-center'>
                  <Laptop className='w-5 h-5' />
                </div>
                <div className='text-lg font-bold'>Frontend Developer</div>
              </div>
              <div className='mt-3 text-xs md:text-sm'>
                I excel in crafting responsive, intuitive, and high-performance user interfaces using modern frameworks like React.js and Next.js, ensuring seamless UX, accessibility, and optimized rendering for dynamic web applications.
              </div>
            </div>
          </div>
          <div className='flex-1 p-3'>
            <div>
              <div className='flex gap-2 text-myprimary-superlight'>
                <div className='h-8 w-8 border border-myprimary-superlight/20 rounded-md flex items-center justify-center'>
                  <Box className='w-5 h-5' />
                </div>
                <div className='text-lg font-bold'>Web3 Developer</div>
              </div>
              <div className='mt-3 text-xs md:text-sm'>
                I am exploring Web3 development, building decentralized applications and smart contracts while learning blockchain technologies to create secure, transparent, and innovative digital solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
