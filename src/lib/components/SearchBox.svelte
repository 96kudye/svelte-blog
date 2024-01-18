<svelte:head>
  <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
  <script src="/pagefind/pagefind-ui.js"></script>
  <script>
    if (document.readyState !== 'loading') {
      console.log('document is already ready, just execute code here');
      new PagefindUI({ element: '#search' });
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        new PagefindUI({ element: '#search' });
      });
    }
  </script>
</svelte:head>

<div id="search" />
