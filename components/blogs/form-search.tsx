'use client'
import { Search } from 'lucide-react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useBlogCategory } from '@/hooks/useBlogCategory'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
export default function FormSearchFilter() {
  const router = useRouter()
  const { data } = useBlogCategory()

  const formSchema = z.object({
    category: z.string().optional(),
    keyword: z.string().min(3),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const queryString = new URLSearchParams(values).toString();
    router.push(`/search?${queryString}`, {
      scroll: true
    })
  }

  return (
    <div className=' bg-slate-900/50 py-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='max-w-3xl mx-auto flex flex-col md:flex-row gap-2 px-3'>
          <div className='flex-1'>
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="border flex items-center pr-2 border-white/10 bg-myprimary-superlight/5 rounded-lg overflow-hidden">
                      <input autoComplete='off' {...field} type="text" placeholder='search...' className='w-full outline-none bg-transparent px-2 py-[5px]' />
                      <Search className='w-4 h-4 shrink-0' />
                    </div>
                  </FormControl>
                  <FormMessage className='text-[11px]' />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className='border flex w-full md:w-44 items-center border-white/10 bg-myprimary-superlight/5 rounded-lg'>
                  <SelectValue placeholder="category" />
                </SelectTrigger>
                <SelectContent className='w-56 bg-slate-900 border-white/20 text-white'>
                  {
                    data?.map(item => (
                      <SelectItem key={item.id} value={`${item.id}`}>{item.name}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            )}
          />
          <Button variant={'primary'} type='submit'>search</Button>
        </form>
      </Form>
    </div>
  )
}
