<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  import Pager from '$lib/components/Pager.svelte';
  export let data: PageData;
  const currentPage = data.page;
  const maxPage = Math.floor(data.articles.totalCount / 10) + 1;
  console.log(maxPage);
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com/tag/{data.tag.route}" />
  <meta name="twitter:title" content="Tag: {data.tag.name} | Silent Foreign Perspective" />
  <title>Tag: {data.tag.name} (Page : {currentPage}) | Silent Foreign Perspective</title>
</svelte:head>

<section>
  <h4>Tag: {data.tag.name}</h4>
  <ArticleList data={data.articles.contents} />
</section>

<footer>
  <Pager {currentPage} {maxPage} parentPath="/tag/{data.tag.route}" />
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
