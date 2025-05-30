import Image from "next/image";
import Link from 'next/link';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import WhiteLogo from "../logo/WhiteLogo";

export default function MainFooter() {
  return (
    <footer className='relative'>
      <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
        <Image className='z-0 opacity-20 object-fill' fill alt='ETH' src={'/images/bg-grid.png'} />
      </div>
      <div className="container py-8 relative z-10">
        <div className='flex justify-between'>
          <div>
            <WhiteLogo />
            <p className='text-xs font-semibold text-slate-300'>jawaskrip@gmail.com</p>
          </div>
          <div>
            <div className="flex gap-2">
              <Link className='bg-myprimary/30 border-white/10 h-8 w-8 border flex items-center justify-center rounded-md' href="https://www.instagram.com/_uutbudiarto" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link className='bg-myprimary/30 border-white/10 h-8 w-8 border flex items-center justify-center rounded-md' href="https://www.instagram.com/_uutbudiarto" target="_blank" rel="noopener noreferrer">
                <BiLogoInstagramAlt className="w-6 h-6" />
              </Link>
              <Link className='bg-myprimary/30 border-white/10 h-8 w-8 border flex items-center justify-center rounded-md' href="https://x.com/jawaskrip" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-2">
              <Link className="font-bold text-sm" href={'/term-condition'}>Term & Condition</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative z-10 text flex flex-col items-center justify-center text-xs text-slate-400 py-4">
        <div>© {new Date().getFullYear()}, Uut Budiarto</div>
      </div>
    </footer>
  )
}
