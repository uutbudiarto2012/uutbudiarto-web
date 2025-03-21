import { Search } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function FormSearchFilter() {
  return (
    <div className=' bg-slate-900/50 py-4'>
      <div className='max-w-3xl mx-auto flex flex-col md:flex-row gap-2 px-3'>
        <Select>
          <SelectTrigger className='border flex w-full md:w-44 items-center border-white/10 bg-myprimary-superlight/5 rounded-lg'>
            <SelectValue placeholder="category" />
          </SelectTrigger>
          <SelectContent className='w-56 bg-slate-900 border-white/20 text-white'>
            <SelectItem value="light">Web Programing</SelectItem>
            <SelectItem value="dark">Web3</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className='flex-1'>
          <div className="border flex items-center pr-2 border-white/10 bg-myprimary-superlight/5 rounded-lg">
            <input type="text" placeholder='search...' className='w-full outline-none bg-transparent px-2 py-[5px]' />
            <Search className='w-4 h-4 shrink-0' />
          </div>
        </div>
      </div>
    </div>
  )
}
