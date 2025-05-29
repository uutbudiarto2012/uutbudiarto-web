"use client"
import Image from "next/image";
import { GlowingEffect } from "../ui/glowing-effect";
export default function SkillSection() {

  return (
    <section className='py-8 md:py-16 lg:py-24 relative bg-gradient-to-r from-transparent via-white/5 to-transparent'>
      <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
        <Image className='z-0 opacity-20 blur object-cover' fill alt='ETH' src={'/images/skills/bg-buble.png'} />
      </div>
      <div className="container">
        <div className='mb-5 text-center'>
          <h2 className='text-3xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-myprimary-light via-myprimary-superlight to-myprimary inline-block text-transparent bg-clip-text'>
            Tools
          </h2>
          <p className="capitalize">
            tools and frameworks that I usually use in software development
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <SkillItem name="TailwindCSS" desc="Rapidly build modern websites without ever leaving your HTML." image="/images/skills/tailwind.png" />
          <SkillItem name="ReactJS" desc="The library for web and native user interfaces" image="/images/skills/react.png" />
          <SkillItem name="NextJS" desc="The React Framework for the Web" image="/images/skills/next.png" />
          <SkillItem name="VueJS" desc="The Progressive JavaScript Framework" image="/images/skills/vue.png" />
          <SkillItem name="NuxtJS" desc="The Intuitive Vue Framework" image="/images/skills/nuxt.png" />
          <SkillItem name="NestJS" desc="A progressive Node.js framework for building efficient, reliable and scalable server-side applications." image="/images/skills/nest.png" />
          <SkillItem name="ExpressJS" desc="Fast, unopinionated, minimalist web framework for Node.js" image="/images/skills/express.png" />
          <SkillItem name="Laravel" desc="Build and ship software with tools crafted for productivity" image="/images/skills/laravel.png" />
          <SkillItem name="CodeIgniter" desc="The small framework with powerful features" image="/images/skills/ci.png" />
          <SkillItem name="MYSQL" desc="A relational database management system using structured tables for data storage." image="/images/skills/mysql.png" />
          <SkillItem name="MongoDB" desc="A NoSQL database using flexible JSON-like documents for scalable storage. " image="/images/skills/mongo.png" />
          <SkillItem name="Github" desc="A platform for version control, collaboration, and code hosting using Git." image="/images/skills/github.png" />
        </div>
      </div>
    </section>
  )
}

const SkillItem = ({ image, name, desc }: { image: string, name: string, desc: string }) => {
  return (

    <div className="relative border border-myprimary-light/10 p-4 md:py-7 rounded-lg bg-gradient-to-tr from-myprimary/30 via-myprimary-superlight/5 to-white/20 backdrop-blur">
      <GlowingEffect
        blur={0}
        borderWidth={1}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative w-16 md:w-20 mx-auto border-2 border-myprimary-light/30 aspect-square bg-white rounded-full">
        <Image className='z-0 h-full w-full object-contain p-3' width={100} height={100} alt='nextJs' src={image} />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl text-center">{name}</h2>
        <p className="text-xs md:text-sm text-center line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  )
}
