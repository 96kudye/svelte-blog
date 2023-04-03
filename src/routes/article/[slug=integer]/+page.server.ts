import { getArticleByUnixtime } from "$lib/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return await getArticleByUnixtime(params.slug as unknown as number);
};