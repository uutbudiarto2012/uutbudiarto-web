import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function WelcomeTools() {
  const tools = [
    {
      name: "Javascript",
      designation: "The library for web and native user interfaces",
      image: "/images/skills/js.png",
    },
    {
      name: "Typescript",
      designation: "The React Framework for the Web",
      image: "/images/skills/ts.png",
    },
    {
      name: "Node",
      designation: "The React Framework for the Web",
      image: "/images/skills/node.png",
    },
    {
      name: "PHP",
      designation: "The React Framework for the Web",
      image: "/images/skills/php.png",
    },
    {
      name: "ReactJS",
      designation: "The library for web and native user interfaces",
      image: "/images/skills/react.png",
    },
    {
      name: "NextJS",
      designation: "The React Framework for the Web",
      image: "/images/skills/next.png",
    },
    {
      name: "VueJS",
      designation: "The Progressive JavaScript Framework",
      image: "/images/skills/vue.png",
    },
    {
      name: "NuxtJS",
      designation: "The Intuitive Vue Framework",
      image: "/images/skills/nuxt.png",
    },
    {
      name: "TailwindCSS",
      designation: "Rapidly build modern websites without ever leaving your HTML.",
      image: "/images/skills/tailwind.png"
    },
    {
      name: "MySql",
      designation: "The library for web and native user interfaces",
      image: "/images/skills/mysql.png",
    },
    {
      name: "MongoDB",
      designation: "The React Framework for the Web",
      image: "/images/skills/mongo.png",
    },
    {
      name: "NestJS",
      designation: "The library for web and native user interfaces",
      image: "/images/skills/nest.png",
    },
    {
      name: "ExpressJS",
      designation: "The React Framework for the Web",
      image: "/images/skills/express.png",
    },
    {
      name: "Laravel",
      designation: "The React Framework for the Web",
      image: "/images/skills/laravel.png",
    },
    {
      name: "Codeigniter",
      designation: "The React Framework for the Web",
      image: "/images/skills/ci.png",
    },
  ];
  return (
    <div>
      <div className='text-center md:text-lg capitalize mb-4'>
        tools that I usually use
      </div>
      <Marquee pauseOnHover>
        {tools.map((item, index) => <ToolItem image={item.image} name={item.name} key={index} />)}
      </Marquee>
    </div>
  )
}

const ToolItem = ({ image, name }: { image: string, name: string }) => {
  return (
    <div className='h-12 w-12 md:h-20 md:w-20 bg-gradient-to-tr from-myprimary/90 to-myprimary-light/20 relative mx-3 md:mx-4 rounded-lg overflow-hidden border border-myprimary-light/30'>
      <Image
        height={100}
        width={100}
        src={image}
        alt={name}
        className="h-full w-full object-contain p-1 rounded-lg z-10 relative"
      />
      <div className="absolute left-0 right-0 bottom-0 top-0 z-0 flex items-center justify-center">
        <div className='h-10 w-10 bg-white blur-md'></div>
      </div>
    </div>
  )
}
