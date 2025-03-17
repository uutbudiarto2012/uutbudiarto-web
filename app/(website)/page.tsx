import SkillSection from '@/components/skills'
import CoreSkills from '@/components/coreskills'
import HomeWorks from '@/components/homeworks'
import WelcomeSection from '@/components/welcome'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <WelcomeSection />
      <CoreSkills />
      <HomeWorks />
      <SkillSection />
    </div>
  )
}