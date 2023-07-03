<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  import Pager from '$lib/components/Pager.svelte';
  export let data: PageData;
  const currentPage = 1;
  const maxPage = Math.ceil(data.articles.totalCount / 10);
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com/tag/{data.tag.route}" />
  <meta name="twitter:title" content="Tag: {data.tag.name} | Silent Foreign Perspective" />
  <title>Tag: {data.tag.name} | Silent Foreign Perspective</title>
</svelte:head>

<div class="tag">
  <h4>Tag: {data.tag.name}</h4>
</div>

<ArticleList data={data.articles.contents} />
<Pager {currentPage} {maxPage} parentPath="/tags/{data.tag.route}" />

<style>
  .tag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
