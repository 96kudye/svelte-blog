<script lang="ts">
  import type { Tag } from './microcms';
  import Button, { Label } from '@smui/button';
  export let data: Tag;
</script>

<a href="/tag/{data.id}" class="link_tag">
  <Button><Label>{data.name}</Label></Button>
</a>

<style>
  .link_tag {
    color: inherit;
    text-decoration: none;
  }
</style>
