import { getTag, getArticleList, getTagByRoute } from "$lib/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const tag = await getTagByRoute(params.slug)
  return {
    tag: tag,
    articles: await getArticleList({ filters: `tags[contains]${tag.id}` })
  };
};