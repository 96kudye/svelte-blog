import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { toISO8601 } from "./dayjs";
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
  revised_visible: boolean;
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
export type TagResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Tag[];
};
export type Tag = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  route: string;
};

export const getArticleList = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({
    endpoint: "articles",
    queries
  }).catch(() => { error(404, '404'); });
};

/** @deprecated */
export const getArticle = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  }).catch(() => { error(404, '404'); });
};

export const getArticleByUnixtime = async (
  unixtime: number
) => {
  return await client.get<BlogResponse>({
    endpoint: "articles",
    queries: {
      limit: 1,
      filters: `publishedAt[begins_with]${toISO8601(unixtime).slice(0, -5)}`
    },
  }).then(result => result.contents[0]).catch(() => { error(404, '404'); });
};

/** @deprecated */
export const getTag = async (contentId: string) => {
  return await client.getListDetail<Tag>({
    endpoint: "tags",
    contentId,
  }).catch(() => { error(404, '404'); });
};

export const getTagByRoute = async (
  route: string
) => {
  return await client.get<TagResponse>({
    endpoint: "tags",
    queries: {
      limit: 1,
      filters: `route[equals]${route}`
    },
  }).then(result => result.contents[0]).catch(() => { error(404, '404'); });
};