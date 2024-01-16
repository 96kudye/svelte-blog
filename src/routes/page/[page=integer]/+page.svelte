<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  import Pager from '$lib/components/Pager.svelte';
  export let data: PageData;

  $: currentPage = data.page;
  $: maxPage = Math.ceil(data.articles.totalCount / 10);
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com/page/{currentPage}" />
  <meta name="og:title" content="Page : {currentPage} | Silent Foreign Perspective" />
  <meta name="og:type" content="blog" />
  <meta name="twitter:title" content="Silent Foreign Perspective" />
  <title>Page : {currentPage} | Silent Foreign Perspective</title>
</svelte:head>

<ArticleList data={data.articles.contents} />
<Pager {currentPage} {maxPage} />
