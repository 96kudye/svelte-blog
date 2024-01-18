<svelte:head>
  <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
  <script src="/pagefind/pagefind-ui.js"></script>
  <script>
    window.addEventListener('DOMContentLoaded', (event) => {
      new PagefindUI({ element: '#search' });
    });
  </script>
</svelte:head>

<div id="search" />
