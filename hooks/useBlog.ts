import { axiosClient } from '@/lib/axiosClient'
import { WPPost } from '@/types/post';
import { useQuery } from '@tanstack/react-query'

const getData = async (): Promise<WPPost[]> => {
  const response = await axiosClient({
    method: 'GET',
    url: `posts`,
    params: {
      _fields: 'id,title,excerpt,_links,_embedded,slug',
      orderby: 'date',
      offset:4,
      _embed:''
    }
  })
  return response.data;
}

const useBlog = () => {
  return useQuery({
    queryKey: ['get_posts'],
    queryFn: () => getData(),
  })
}

export { useBlog, getData }