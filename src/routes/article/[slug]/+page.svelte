<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title} | Silent Foreign Perspective</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>{data.title}</h1>
  <img src={data.eyecatch?.url} alt="" />
  <div class="article_conatiner">{@html data.content}</div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article_conatiner {
    width: 100%;
  }
</style>
