<script lang="ts">
  import { AppContent } from '@smui/drawer';
  import type { PageData } from './$types';
  import { formatTime } from '$lib/dayjs';
  import { prepareHtml } from '$lib/prepareHtml';
  import { tocFromHtml } from '$lib/tocFromHtml';
  import Tag from '$lib/components/Tag.svelte';
  import ToC from '$lib/components/ToC.svelte';
  export let data: PageData;
  const html = prepareHtml(data.content);
  const toc = tocFromHtml(data.content);
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com/article/{data.id}" />
  <meta name="og:title" content={data.title} />
  <meta name="og:type" content="article" />
  <meta name="twitter:title" content={data.title} />
  <title>{data.title} | Silent Foreign Perspective</title>
</svelte:head>

<ToC data={toc} />

<AppContent class="app-content">
  <section>
    <h1 class="title">{data.title}</h1>
    <h4>
      {#if data.tags}
        Tags:
        {#each data.tags as tag}
          <Tag data={tag} />
        {/each}
      {/if}
      <br />
      Published at {formatTime(data.publishedAt)}
    </h4>
    <div class="article_container">
      {@html html}
    </div>
  </section>
</AppContent>

<style>
  .app-content {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

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
