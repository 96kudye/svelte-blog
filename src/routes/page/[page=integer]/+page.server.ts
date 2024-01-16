import { getArticleList } from "$lib/microcms";
import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  if (parseInt(params.page) === 1) {
    redirect(308, '/');
  }
  return {
    articles: await getArticleList({ limit: 10, offset: (parseInt(params.page) - 1) * 10 }),
    page: parseInt(params.page)
  };
};