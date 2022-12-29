<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  export let data: PageData;
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com/tag/{data.tag.id}" />
  <meta name="twitter:title" content="Tag: {data.tag.name} | Silent Foreign Perspective" />
  <title>Tag: {data.tag.name} | Silent Foreign Perspective</title>
</svelte:head>

<section>
  <h4>Tag: {data.tag.name}</h4>
  <ArticleList data={data.articles.contents} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
