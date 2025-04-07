import Gallery from '@/components/gallery';
import { GalleryHeader } from '@/components/gallery/gallery-header';
import { GroupImages } from '@/components/gallery/GroupImages';
export async function generateMetadata() {
  return {
    title: 'Gallery - Uut Budiarto',
    description: `The collection media by Uut Budiarto`,
  };
}
export default function GalleyPage() {
  return (
    <>
      <GalleryHeader />
      <div className="pb-6">
        <GroupImages />
      </div>
      <div className='bg-slate-900/90 relative'>
        <div className="fixed  z-20 bottom-0 left-0 right-0 justify-center items-center">
          <div className='max-w-xl mx-auto bg-red-600/80 p-2'>
            <h2 className='text-xl'>Under Develop</h2>
            <p className='text-[11px] font-semibold'>This page is under development, all content here is partly dummy content taken from several sources without any intention to commercialize it.</p>
          </div>
        </div>
        <div className="container py-6 md:py-12">
          <Gallery />
        </div>
      </div>
    </>
  )
}
