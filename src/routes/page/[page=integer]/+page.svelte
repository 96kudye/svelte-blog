<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  import Pager from '$lib/components/Pager.svelte';
  export let data: PageData;
  const currentPage = data.page;
  const maxPage = Math.floor(data.articles.totalCount / 10) + 1;
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.compage/{currentPage}" />
  <meta name="og:title" content="Page : {currentPage} | Silent Foreign Perspective" />
  <meta name="og:type" content="blog" />
  <meta name="twitter:title" content="Silent Foreign Perspective" />
  <title>Page : {currentPage} | Silent Foreign Perspective</title>
</svelte:head>

<section>
  <ArticleList data={data.articles.contents} />
</section>

<footer>
  <Pager {currentPage} {maxPage} />
</footer>

<style>
  section,
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer {
    margin-top: 40px;
  }
</style>
