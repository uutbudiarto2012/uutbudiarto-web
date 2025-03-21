export type TWork = {
  title: string
  description: string
  image: string
  stack: string[]
  url?: string
  imageRight?:boolean
}
export const works: TWork[] = [
  {
    title: "Subsuface Database Management System",
    description: "SIDMS  is a system for managing and monitoring subsurface data, and visualizing it in the form of plots or charts to make it easier to read.",
    image: "/images/works/all/sidms.png",
    stack: ["Mysql", "Laravel", "NodeJS", "NextJS"]
  },
  {
    title: "Website Supreme Energy",
    description: "A company profile website with a modern design. It includes a CMS to manage users, news, careers and others.",
    image: "/images/works/all/supreme-website.png",
    stack: ["Mysql", "CodeIgniter"],
    url:"https://supreme-energy.com"
  },
  {
    title: "LMS - Atlaz Belajar Bahasa",
    description: "Hiatlaz.com is an educational platform offering CEFR-based English textbooks integrated with a comprehensive online learning system for effective language mastery.",
    image: "/images/works/all/atlaz-lms.png",
    stack: ["Mysql","MongoDB", "Express","NextJS"],
    url:"https://hiatlaz.com"
  },
  {
    title: "Website - PT Astro Inovasi Teknologi",
    description: "PT Astro Inovasi Teknologi provides innovative audio-visual and video conferencing solutions, enhancing collaboration and communication for businesses.",
    image: "/images/works/all/aititeam.png",
    stack: ["Mysql", "Laravel"],
    url: "https://aititeam.co.id"
  },
  {
    title: "Website - ANSA Purwokerto",
    description: "Ansa Homeschooling Purwokerto provides personalized and innovative learning, fostering students` potential through a flexible and high-quality education system.",
    image: "/images/works/all/ansa.png",
    stack: ["Mysql", "NestJS","NuxtJS"],
    url:"https://ansapwt.sch.id"
  },
  {
    title: "Bellspool - Bellscoin Explorer",
    description: "Displays essential mining data like Mining Cost, Hashrate, Current Price, Supply, and Market Cap. Perfect for miners and traders alike.",
    image: "/images/works/all/bellspool.png",
    stack: ["NuxtJS", "ExporessJS"],
    url: "https://bellspool.io"
  },
  {
    title: "Crcpool - Craftcoin Explorer",
    description: "CraftCoin, launched in 2013, pioneered the integration of cryptocurrency with Minecraft gaming. Originally designed using Litecoin's Scrypt technology, it allowed players to earn tokens through gameplay",
    image: "/images/works/all/crcpool.png",
    stack: ["NuxtJS", "ExporessJS"],
    url:"https://crcpool.blockraid.io"
  },
  {
    title: "Junkpool - Junkcoin Explorer",
    description: "Displays essential mining data like Mining Cost, Hashrate, Current Price, Supply, and Market Cap. Perfect for miners and traders alike.",
    image: "/images/works/all/junkpool.png",
    stack: ["NuxtJS", "ExporessJS"],
    url:"https://junkpool.blockraid.io"
  },
  {
    title: "Website - Blockraid Team Website",
    description: "Blockraid is a collective of passionate individuals developing innovative products for the crypto space, including NFT minting services.",
    image: "/images/works/all/blockraid.png",
    stack: ["NextJS", "ExporessJS"],
    url: "https://blockraid.io"
  },
  {
    title: "WOW - Wow Token Website [On Dev]",
    description: "Wow Token Platform, the first-ever cryptocurrency generated directly from tweets on X",
    image: "/images/works/all/wow.png",
    stack: ["NextJS", "NodeJS","ethersJS","Web3JS"],
    url: "https://wow-virid.vercel.app"
  }
];