import PageContainer from '@/components/containers/page-container'
import MyProject from '@/components/works'
import { works } from '@/data/work'
import { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const title = 'Works - Uut Budiarto'
  const description =
    'Explore a curated list of full-stack projects including enterprise systems, educational platforms, company profiles, and blockchain explorers—built with Next.js, Laravel, Nuxt.js, and more.'

  const ogImages = works.slice(0, 3).map((project) => ({
    url: project.image.startsWith('http')
      ? project.image
      : `${process.env.SITE_URL}/${project.image}`,
    alt: project.title,
  }))

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.SITE_URL}/work`,
      siteName: 'My Portfolio',
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((img) => img.url),
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(`${process.env.SITE_URL}`),
  }
}

export default function WorkPage() {
  return (
    <PageContainer title='Works' subtitle='My work and success project'>
      <MyProject />
    </PageContainer>
  )
}
