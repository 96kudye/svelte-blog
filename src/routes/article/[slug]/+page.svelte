<script lang="ts">
  import { AppContent } from '@smui/drawer';
  import type { PageData } from './$types';
  import { formatDatetime } from '$lib/dayjs';
  import Tag from '$lib/components/Tag.svelte';
  import ToC from '$lib/components/ToC.svelte';
  import { tocFromHtml, prepareHtmls } from '$lib/html';
  export let data: PageData;
  const html = prepareHtmls(data.htmls);
  const toc = tocFromHtml(html);
</script>

<svelte:head>
  <meta name="og:url" content="https://blog.congenial-spirits.com/article/{data.id}" />
  <meta name="og:title" content={data.title} />
  <meta name="og:type" content="article" />
  <meta name="twitter:title" content={data.title} />
  <title>{data.title} | Silent Foreign Perspective</title>
</svelte:head>

{#if data.toc_visible && toc.length}
  <ToC data={toc} />
{/if}

<AppContent>
  <section>
    <h1 class="title">{data.title}</h1>
    <div class="article_properties">
      {#if data.tags}
        <h4 class="article_property">
          Tags:
          {#each data.tags as tag}
            <Tag data={tag} />
          {/each}
        </h4>
      {/if}
      <h4 class="article_property">
        Published at {formatDatetime(data.publishedAt)}
        {#if data.revised_visible}
          (Revised at {formatDatetime(data.revisedAt)})
        {/if}
      </h4>
    </div>
    <div class="article_container">
      {@html html}
    </div>
  </section>
</AppContent>

<style>
  section {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
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
  .article_properties {
    margin-top: 30px;
  }
  .article_property {
    margin: 0;
    height: 36px;
  }
  .title {
    margin-bottom: 0;
  }
</style>
