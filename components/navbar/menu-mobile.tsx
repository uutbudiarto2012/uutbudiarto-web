import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiMenu4Fill } from 'react-icons/ri'
import { Button } from '../ui/button'
import Link from "next/link"

export default function MenuMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} className='bg-white text-slate-950 md:hidden'>
          <RiMenu4Fill />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side="bottom" align="end">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'/experience'}>Experience</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'/work'}>Work</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'/gallery'}>Gallery</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'/blog'}>Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'/'}>About</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
