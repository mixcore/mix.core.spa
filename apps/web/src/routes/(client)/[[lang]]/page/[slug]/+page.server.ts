import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ params }) => {
  // if (params.slug === 'hello-world') {
  //     return {
  //         title: 'Hello world!',
  //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
  //     };
  // }

  const res = await fetch(`${env.MIXCORE_API_URL}/page/${params.slug}`);
  const item = await res.json();

  console.log(item);

  return { item };

  throw error(404, 'Not found');
};
