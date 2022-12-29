<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/components/ArticleList.svelte';
  export let data: PageData;
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com" />
  <meta name="og:title" content="Silent Foreign Perspective" />
  <meta name="og:type" content="blog" />
  <meta name="twitter:title" content="Silent Foreign Perspective" />
  <title>Silent Foreign Perspective</title>
</svelte:head>

<section>
  <ArticleList data={data.contents} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
