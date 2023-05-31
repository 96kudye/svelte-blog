import { getArticleList, getTagByRoute } from "$lib/microcms";
import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const tag = await getTagByRoute(params.slug)
  if (parseInt(params.page) === 1) {
    throw redirect(308, `/tag/${tag.route}`);
  }
  return {
    tag: tag,
    articles: await getArticleList({
      filters: `tags[contains]${tag.id}`,
      limit: 10,
      offset: (parseInt(params.page) - 1) * 10
    }),
    page: parseInt(params.page)
  };
};