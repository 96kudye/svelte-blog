<script lang="ts">
  import type { Article } from '../microcms';
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Tag from './Tag.svelte';
  import { formatDate, toUnix } from '$lib/dayjs';
  export let data: Article[];
</script>

<div class="paper-container">
  {#each data as content}
    <a href="/article/{toUnix(content.publishedAt)}" class="link_article">
      <Paper>
        <Title>{content.title}</Title>
        <Subtitle>{formatDate(content.publishedAt)}</Subtitle>
        {#if content.tags}
          <Content>
            {#each content.tags as tag}
              <Tag data={tag} />
            {/each}
          </Content>
        {/if}
      </Paper>
    </a>
  {/each}
</div>

<style>
  .link_article {
    display: block;
    margin-bottom: 15px;
  }
  .paper-container .link_article {
    color: inherit;
    text-decoration: none;
  }
  .paper-container {
    width: 100%;
  }
  @media screen and (min-width: 720px) {
    .paper-container {
      width: 700px;
    }
  }
</style>
