<script lang="ts">
  import type { Article } from './$types';
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Button, { Label } from '@smui/button';
  import { formatTime } from '$lib/dayjs';
  export let data: Article[];
</script>

<div class="paper-container">
  {#each data as content}
    <a href="/article/{content.id}" class="link_article">
      <Paper>
        <Title>{content.title}</Title>
        <Subtitle>{formatTime(content.publishedAt)}</Subtitle>
        {#if content.tags}
          <Content>
            {#each content.tags as tag}
              <a href="/tag/{tag.id}">
                <Button><Label>{tag.name}</Label></Button>
              </a>
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
