import { axiosClient } from '@/lib/axiosClient';
import { WPCategory } from '@/types/category';
import { useQuery } from '@tanstack/react-query';

const getData = async (): Promise<WPCategory[]> => {
  const response = await axiosClient({
    method: 'GET',
    url: `categories`,
  })
  return response.data;
}

const useBlogCategory = () => {
  return useQuery({
    queryKey: ['get_posts_category'],
    queryFn: () => getData(),
  })
}

export { getData, useBlogCategory };

