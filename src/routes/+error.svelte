<script>
  import { page } from '$app/stores';
</script>

<section class="error">
  <h1>{$page.error?.message}</h1>
</section>

<style>
  .error {
    text-align: center;
    margin: 60px;
  }
</style>
