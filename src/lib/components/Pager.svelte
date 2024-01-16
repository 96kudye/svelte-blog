<script lang="ts">
  import Button, { Group, Label, Icon } from '@smui/button';
  import { mdiPageFirst, mdiChevronLeft, mdiChevronRight, mdiPageLast } from '@mdi/js';
  export let currentPage: number;
  export let maxPage: number;
  export let parentPath: string = '';

  $: leftDisabled = currentPage <= 1;
  $: rightDisabled = currentPage >= maxPage;
  $: firstTarget = leftDisabled ? undefined : `${parentPath}/page/1`;
  $: prevTarget = leftDisabled ? undefined : `${parentPath}/page/${currentPage - 1}`;
  $: nextTarget = rightDisabled ? undefined : `${parentPath}/page/${currentPage + 1}`;
  $: lastTarget = rightDisabled ? undefined : `${parentPath}/page/${maxPage}`;

  // SMUIの実装上、disabledで上手く消えてくれないのでifで無理やり反応させている
</script>

<footer class="pager">
  <Group variant="outlined">
    {#if leftDisabled}
      <Button variant="outlined" disabled>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiPageFirst} />
        </Icon>
      </Button>
      <Button variant="outlined" disabled>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiChevronLeft} />
        </Icon>
      </Button>
    {:else}
      <Button variant="outlined" href={firstTarget}>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiPageFirst} />
        </Icon>
      </Button>
      <Button variant="outlined" href={prevTarget}>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiChevronLeft} />
        </Icon>
      </Button>
    {/if}
    <Button variant="unelevated">
      <Label style="margin: 0 auto;">
        {currentPage}
      </Label>
    </Button>
    {#if rightDisabled}
      <Button variant="outlined" disabled>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiChevronRight} />
        </Icon>
      </Button>
      <Button variant="outlined" disabled>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiPageLast} />
        </Icon>
      </Button>
    {:else}
      <Button variant="outlined" href={nextTarget}>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiChevronRight} />
        </Icon>
      </Button>
      <Button variant="outlined" href={lastTarget}>
        <Icon tag="svg" style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiPageLast} />
        </Icon>
      </Button>
    {/if}
  </Group>
</footer>

<style>
  footer.pager {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
</style>
