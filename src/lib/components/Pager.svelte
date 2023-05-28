<script lang="ts">
  import { Svg } from '@smui/common';
  import SegmentedButton, { Segment, Label, Icon } from '@smui/segmented-button';
  import { mdiPageFirst, mdiChevronLeft, mdiChevronRight, mdiPageLast } from '@mdi/js';
  export let currentPage: number;
  export let maxPage: number;

  type PagerButton = {
    name: string;
    disabled: boolean;
    icon?: string;
    label?: number;
    target?: number;
  };

  const segments: PagerButton[] = [
    {
      name: 'First',
      icon: mdiPageFirst,
      disabled: currentPage === 1,
      target: 1
    },
    {
      name: 'Prev',
      icon: mdiChevronLeft,
      disabled: currentPage === 1,
      target: currentPage - 1
    },
    {
      name: 'Current',
      label: currentPage,
      disabled: true
    },
    {
      name: 'Next',
      icon: mdiChevronRight,
      disabled: currentPage === maxPage,
      target: currentPage + 1
    },
    {
      name: 'Last',
      icon: mdiPageLast,
      disabled: currentPage === maxPage,
      target: maxPage
    }
  ];
  let selected = [segments[2]];
</script>

<SegmentedButton {segments} let:segment bind:selected>
  {#if !segment.disabled}
    <a href="/page/{segment.target}">
      <Segment {segment} title={segment.name} disabled={segment.disabled}>
        <Icon component={Svg} style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={segment.icon} />
        </Icon>
      </Segment>
    </a>
  {:else}
    <Segment {segment} title={segment.name} disabled={segment.disabled}>
      {#if segment.name !== 'Current'}
        <Icon component={Svg} style="width: 1em; height: auto; margin: 0 auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={segment.icon} />
        </Icon>
      {:else}
        <Label style="margin: 0 auto;">
          {segment.label}
        </Label>
      {/if}
    </Segment>
  {/if}
</SegmentedButton>
