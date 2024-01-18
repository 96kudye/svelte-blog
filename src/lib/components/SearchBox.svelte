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
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  #search {
    width: 100%;
  }
  @media screen and (min-width: 720px) {
    #search {
      width: 700px;
    }
  }
  :root {
    --pagefind-ui-primary: #d505ff;
  }
</style>