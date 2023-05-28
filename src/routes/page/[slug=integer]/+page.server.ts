import { getArticleList } from "$lib/microcms";
import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  if (parseInt(params.slug) === 1) {
    throw redirect(308, '/');
  }
  return await getArticleList({ limit: 10, offset: (parseInt(params.slug) - 1) * 10 })
};