import CoreSkills from '@/components/coreskills'
import HomeWorks from '@/components/homeworks'
import SkillSection from '@/components/skills'
import WelcomeSection from '@/components/welcome'
import Head from 'next/head';
export async function generateMetadata() {
  return {
    title: 'Home - Uut Budiarto',
    description: 'Portofolio profesional Fullstack Developer dengan pengalaman menggunakan Node.js, Next.js, React.js, dan Nuxt.js. Tersedia showcase proyek dan keahlian teknis untuk kebutuhan rekrutmen IT.',
    authors: [{ name: "Uut Budiarto", url: "https://uutbudiarto.fun" }],
    openGraph: {
      title: 'Home - Uut Budiarto',
      description: 'Portofolio profesional Fullstack Developer dengan pengalaman menggunakan Node.js, Next.js, React.js, dan Nuxt.js. Tersedia showcase proyek dan keahlian teknis untuk kebutuhan rekrutmen IT.',
      type: 'article',
      url: `${process.env.SITE_URL}`,
      images: [
        {
          url: `${process.env.SITE_URL}/images/jawaskrip.png`,
          width: 512,
          height: 512,
          alt: 'uut budiarto',
        },
      ],
    },
  };
}
export default function HomePage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Uut Budiarto",
              "url": "https://uutbudiarto-web.vercel.app",
              "sameAs": [],
              "jobTitle": "Web Developer",
              "description": "Uut Budiarto is a professional web developer who specializes in modern JavaScript frameworks like Next.js."
            }
          `
        }} />
      </Head>
      <WelcomeSection />
      <CoreSkills />
      <HomeWorks />
      <SkillSection />
    </>
  )
}