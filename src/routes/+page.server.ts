import { getArticleList } from "$lib/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return await getArticleList();
};

export const prerender = true;