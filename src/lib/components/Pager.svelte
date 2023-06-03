<script lang="ts">
  import { Svg } from '@smui/common';
  import Button, { Group, Label, Icon } from '@smui/button';
  import { mdiPageFirst, mdiChevronLeft, mdiChevronRight, mdiPageLast } from '@mdi/js';
  export let currentPage: number;
  export let maxPage: number;
  export let parentPath: string = '';

  const leftDisabled = currentPage <= 1;
  const rightDisabled = currentPage >= maxPage;
  const firstTarget = leftDisabled ? undefined : `${parentPath}/page/1`;
  const prevTarget = leftDisabled ? undefined : `${parentPath}/page/${currentPage - 1}`;
  const nextTarget = rightDisabled ? undefined : `${parentPath}/page/${currentPage + 1}`;
  const lastTarget = rightDisabled ? undefined : `${parentPath}/page/${maxPage}`;
</script>

<footer class="pager">
  <Group variant="outlined">
    <Button variant="outlined" href={firstTarget} disabled={leftDisabled}>
      <Icon component={Svg} style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={mdiPageFirst} />
      </Icon>
    </Button>
    <Button variant="outlined" href={prevTarget} disabled={leftDisabled}>
      <Icon component={Svg} style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={mdiChevronLeft} />
      </Icon>
    </Button>
    <Button variant="unelevated">
      <Label style="margin: 0 auto;">
        {currentPage}
      </Label>
    </Button>
    <Button variant="outlined" href={nextTarget} disabled={rightDisabled}>
      <Icon component={Svg} style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={mdiChevronRight} />
      </Icon>
    </Button>
    <Button variant="outlined" href={lastTarget} disabled={rightDisabled}>
      <Icon component={Svg} style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={mdiPageLast} />
      </Icon>
    </Button>
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
