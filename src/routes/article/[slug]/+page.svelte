<script lang="ts">
  import type { PageData } from './$types';
  import { formatTime } from '$lib/dayjs';
  import Button, { Label } from '@smui/button';
  export let data: PageData;
  let html = data.content
    .replaceAll('<blockquote>', '<blockquote><p>')
    .replaceAll('</blockquote>', '</p></blockquote>');
</script>

<svelte:head>
  <title>{data.title} | Silent Foreign Perspective</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1 class="title">{data.title}</h1>
  <h4>
    {#if data.tags}
      Tags:
      {#each data.tags as tag}
        <a href="/tag/{tag.id}" class="link_tag">
          <Button><Label>{tag.name}</Label></Button>
        </a>
      {/each}
    {/if}
    <br />
    Published at {formatTime(data.publishedAt)}
  </h4>
  <div class="article_container">
    {@html html}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article_container {
    width: 92.6%;
  }
  @media screen and (min-width: 1080px) {
    .article_container {
      width: 1000px;
    }
  }
  .title {
    margin-bottom: 0;
  }
</style>
