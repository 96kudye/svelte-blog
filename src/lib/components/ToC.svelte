<script lang="ts">
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  import Fab, { Icon } from '@smui/fab';
  import { Svg } from '@smui/common';
  import { mdiTableOfContents } from '@mdi/js';
  import type { ToC } from '../tocFromHtml';
  import MediaQuery from '$lib/MediaQuery.svelte';
  export let data: ToC;
  const breakpoint = 1600;
  let open = false;
</script>

<MediaQuery query="(min-width: {breakpoint + 1}px)" let:matches>
  {#if matches}
    <div class="drawer-container permanent">
      <Drawer>
        <Content>
          <List>
            {#each data as row}
              <Item href="#{row.id}" on:click={() => (open = false)}>
                <Text class={row.style}>{row.text}</Text>
              </Item>
            {/each}
          </List>
        </Content>
      </Drawer>
    </div>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: {breakpoint}px)" let:matches>
  {#if matches}
    <div class="drawer-container modal">
      <Drawer variant="modal" bind:open>
        <Content>
          <List>
            {#each data as row}
              <Item href="#{row.id}" on:click={() => (open = false)}>
                <Text class={row.style}>{row.text}</Text>
              </Item>
            {/each}
          </List>
        </Content>
      </Drawer>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="toc_button" on:click={() => (open = !open)}>
      <Fab color="primary">
        <Icon component={Svg} viewBox="2 2 20 20">
          <path fill="currentColor" d={mdiTableOfContents} />
        </Icon>
      </Fab>
    </div>
  {/if}
</MediaQuery>

<style>
  .drawer-container {
    /* height: 100%; */
    max-width: 600px;
    overflow: hidden;
    z-index: 5;
  }

  .modal {
    position: absolute;
  }

  .permanent {
    position: fixed;
    top: 130px;
  }

  * :global(svg:focus) {
    outline: 0;
  }

  .toc_button {
    position: fixed;
    top: 0;
    left: 0;
    margin: 20px;
    z-index: 10;
  }
</style>
