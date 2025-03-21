import CoreSkills from '@/components/coreskills'
import HomeWorks from '@/components/homeworks'
import SkillSection from '@/components/skills'
import WelcomeSection from '@/components/welcome'

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