import { createClient, type MicroCMSQueries, type MicroCMSImage } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
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
  content: string;
  tags?: Tag[];
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
  return await client.get<BlogResponse>({ endpoint: "articles", queries });
};

export const getArticle = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  });
};

export const getTag = async (contentId: string) => {
  return await client.getListDetail<Tag>({
    endpoint: "tags",
    contentId,
  });
};