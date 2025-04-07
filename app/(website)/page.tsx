import CoreSkills from '@/components/coreskills'
import HomeWorks from '@/components/homeworks'
import SkillSection from '@/components/skills'
import WelcomeSection from '@/components/welcome'
export async function generateMetadata() {
  return {
    title: 'Home - Uut Budiarto',
    description: 'Portofolio profesional Fullstack Developer dengan pengalaman menggunakan Node.js, Next.js, React.js, dan Nuxt.js. Tersedia showcase proyek dan keahlian teknis untuk kebutuhan rekrutmen IT.',
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