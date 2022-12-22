<script lang="ts">
  import type { PageData } from './$types';
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Button, { Label } from '@smui/button';
  import { formatTime } from '$lib/dayjs';
  export let data: PageData;
</script>

<svelte:head>
  <title>Silent Foreign Perspective</title>
</svelte:head>

<section>
  <div class="paper-container">
    {#each data.contents as content}
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
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
