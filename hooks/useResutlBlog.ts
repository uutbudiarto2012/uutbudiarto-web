import { axiosClient } from '@/lib/axiosClient';
import { WPPost } from '@/types/post';
import { useQuery } from '@tanstack/react-query';

const getData = async (params?: any): Promise<WPPost[]> => {
  const response = await axiosClient({
    method: 'GET',
    url: `posts`,
    params: {
      _fields: 'id,title,excerpt,_links,_embedded,slug',
      orderby: 'date',
      _embed: '',
      ...params
    }
  })
  return response.data;
}

const useResultBlog = (params?:any) => {
  return useQuery({
    queryKey: ['get_result_posts', params],
    queryFn: () => getData(params),
  })
}

export { getData, useResultBlog };

