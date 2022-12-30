import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  htmls: HTML[];
  tags?: Tag[];
  toc_visible: boolean;
};
export type HTML = {
  fieldId: 'rich' | 'plane';
  rich?: string;
  plane?: string;
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Article[];
};
export type Tag = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export const getArticleList = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({
    endpoint: "articles",
    queries
  }).catch(() => { throw error(404, '404') });
};

export const getArticle = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  }).catch(() => { throw error(404, '404') });
};

export const getTag = async (contentId: string) => {
  return await client.getListDetail<Tag>({
    endpoint: "tags",
    contentId,
  }).catch(() => { throw error(404, '404') });
};