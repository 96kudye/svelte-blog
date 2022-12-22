import { getTag, getArticleList } from "$lib/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return {
    tag: await getTag(params.slug),
    articles: await getArticleList({ filters: `tags[contains]${params.slug}` })
  };
};

export const prerender = true;