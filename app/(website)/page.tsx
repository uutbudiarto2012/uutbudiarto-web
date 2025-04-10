import CoreSkills from '@/components/coreskills'
import HomeWorks from '@/components/homeworks'
import SkillSection from '@/components/skills'
import WelcomeSection from '@/components/welcome'
export async function generateMetadata() {
  return {
    title: 'Home - Uut Budiarto',
    description: 'Portofolio profesional Fullstack Developer dengan pengalaman menggunakan Node.js, Next.js, React.js, dan Nuxt.js. Tersedia showcase proyek dan keahlian teknis untuk kebutuhan rekrutmen IT.',
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
      <WelcomeSection />
      <CoreSkills />
      <HomeWorks />
      <SkillSection />
    </>
  )
}