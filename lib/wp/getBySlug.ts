// lib/wp/getBySlug.ts
import { axiosClient } from '@/lib/axiosClient';
import { WPPost } from '@/types/post';

export async function getBySlug(slug: string): Promise<WPPost> {
  const response = await axiosClient({
    url: 'posts?_embed',
    params: { slug },
  });

  return response.data?.[0];
}
