"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { SparklesCore } from "../ui/sparkles";

export function GalleryHeader() {
  const images = [
    "/images/works/admin-2.png",
    "/images/works/all/wow.png",
    "/images/works/all/junkpool.png",
    "/images/works/all/bellspool.png",
    "/images/works/all/blockraid.png",
    "/images/works/all/atlaz-lms.png",
    "/images/works/all/crcpool.png",
    "/images/works/all/koselani.png",
    "/images/works/all/sidms.png",
    "/images/works/all/supreme-website.png",
    "/images/works/all/ansa.png",
    "/images/works/admin-2.png",
    "/images/works/all/wow.png",
    "/images/works/all/junkpool.png",
    "/images/works/all/bellspool.png",
    "/images/works/all/blockraid.png",
    "/images/works/all/atlaz-lms.png",
    "/images/works/all/crcpool.png",
    "/images/works/all/koselani.png",
    "/images/works/all/sidms.png",
    "/images/works/all/supreme-website.png",
    "/images/works/all/ansa.png",
    "/images/works/admin-2.png",
    "/images/works/all/wow.png",
    "/images/works/all/junkpool.png",
    "/images/works/all/bellspool.png",
    "/images/works/all/blockraid.png",
    "/images/works/all/atlaz-lms.png",
    "/images/works/all/crcpool.png",
    "/images/works/all/koselani.png",
    "/images/works/all/sidms.png",
    "/images/works/all/supreme-website.png",
    "/images/works/all/ansa.png",
  ];
  return (
    <div className="relative bg-myprimary/5">
      <div className="mx-auto pt-32 bg-gradient-to-t from-myprimary/10 via-myprimary/5 to-slate-950 px-3 h-full flex flex-col backdrop-blur-[0.5px] items-center justify-center text-center absolute top-0 left-0 right-0 bottom-0 z-10">
        <h1 className='text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'>Gallery</h1>
        <p className='text-xs md:text-base'>The Memory Collection</p>
        <div className="mt-2 w-full max-w-md mx-auto h-6 relative bg-transparent rounded-full overflow-hidden">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
      <ThreeDMarquee images={images} className="h-[35vh]" />
    </div>
  );
}
