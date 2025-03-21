import Gallery from '@/components/gallery';
import { GalleryHeader } from '@/components/gallery/gallery-header';
import { GroupImages } from '@/components/gallery/GroupImages';

export default function GalleyPage() {
  return (
    <>
      <GalleryHeader />
      <GroupImages />
      <div className='bg-slate-900/90'>
        <div className="container py-6 md:py-12">
          <Gallery />
        </div>
      </div>
    </>
  )
}
