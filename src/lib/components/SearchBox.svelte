<svelte:head>
  <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
  <script src="/pagefind/pagefind-ui.js" on:load={() => {
    new PagefindUI({
      element: '#search',
      translations: {
        clear_search: "×",
      },
    });}}></script>
</svelte:head>

<div class="search_container">
  <div id="search" />
</div>

<style>
  .search_container {
    justify-content: center;
    margin: 50px;
  }
  #search {
    width: 100%;
  }
  @media screen and (min-width: 720px) {
    #search {
      width: 700px;
    }
  }
</style>