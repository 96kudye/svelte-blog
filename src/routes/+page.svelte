<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  import Pager from '$lib/components/Pager.svelte';
  export let data: PageData;
  const currentPage = 1;
  const maxPage = Math.ceil(data.totalCount / 10);
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com" />
  <meta name="og:title" content="Silent Foreign Perspective" />
  <meta name="og:type" content="blog" />
  <meta name="twitter:title" content="Silent Foreign Perspective" />
  <title>Silent Foreign Perspective</title>
</svelte:head>

<ArticleList data={data.contents} />
<Pager {currentPage} {maxPage} />
