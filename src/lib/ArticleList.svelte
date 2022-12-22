<script lang="ts">
  import type { Blog } from './$types';
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Button, { Label } from '@smui/button';
  import { formatTime } from '$lib/dayjs';
  export let data: Blog[];
</script>

<div class="paper-container">
  {#each data as content}
    <a href="/article/{content.id}" class="link_article">
      <Paper>
        <Title>{content.title}</Title>
        <Subtitle>{formatTime(content.publishedAt)}</Subtitle>
        {#if content.categories}
          <Content>
            {#each content.categories as category}
              <Button>
                <Label>
                  {category.name}
                </Label>
              </Button>
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
