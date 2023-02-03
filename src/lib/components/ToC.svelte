<script lang="ts">
  import Drawer, { Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  import Fab, { Icon } from '@smui/fab';
  import { Svg } from '@smui/common';
  import { mdiTableOfContents } from '@mdi/js';
  import type { ToC } from '../html';
  import MediaQuery from '$lib/MediaQuery.svelte';
  export let data: ToC[];
  let open = false;
  const breakpoint = 1600;
  const scrollTo = (id: string) => {
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTop = () => window.scroll({ top: 0, behavior: 'smooth' });
</script>

<MediaQuery query="(min-width: {breakpoint + 1}px)" let:matches>
  {#if matches}
    <div class="drawer-container permanent">
      <Drawer>
        <Content>
          <List>
            <Item
              on:click={() => {
                open = false;
                scrollTop();
              }}
            >
              <Text class="tow_h1">TOP</Text>
            </Item>
            {#each data as row}
              <Item
                on:click={() => {
                  open = false;
                  scrollTo(row.id);
                }}
              >
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
            <Item
              on:click={() => {
                open = false;
                scrollTop();
              }}
            >
              <Text class="tow_h1">TOP</Text>
            </Item>
            {#each data as row}
              <Item
                on:click={() => {
                  open = false;
                  scrollTo(row.id);
                }}
              >
                <Text class={row.style}>{row.text}</Text>
              </Item>
            {/each}
          </List>
        </Content>
      </Drawer>
    </div>
    <div class="toc_button">
      <Fab color="primary" on:click={() => (open = !open)}>
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
    position: fixed;
    top: 0;
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
    bottom: 0;
    right: 0;
    margin: 20px;
    z-index: 10;
  }
</style>
