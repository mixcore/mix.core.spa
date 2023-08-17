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

  const culture = params.lang == '' ? '' : `culture=${params.lang}`;

  const request = await fetch(`${env.MIXCORE_API_URL}/api/v2/rest/common/post-content?${culture}`);
  const response = await request.json();

  // console.log(response);

  return { response };

  throw error(404, 'Not found');
};
