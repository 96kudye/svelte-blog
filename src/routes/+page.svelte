<script lang="ts">
  import type { PageData } from './$types';
  import ArticleList from '$lib/ArticleList.svelte';
  export let data: PageData;
</script>

<svelte:head>
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
