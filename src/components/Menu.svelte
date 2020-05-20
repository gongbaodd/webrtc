<script>
  import { onMount } from "svelte";

  const HOME = "home";

  export let items = [];
  export let selected = HOME;

  let Menu = [
    {
      title: "home",
      path: ".",
    },
  ];
  $: Menu = [...Menu, ...items];

  let selectedTitle = selected;
  $: selectedTitle = selected || HOME;
</script>

<style>
  .menu {
    @apply w-64;
    @apply m-auto;
  }

  .menu > ul > li {
    @apply p-2;
    @apply rounded;
    @apply bg-white;
    @apply mt-2;
    @apply text-gray-500;
    @apply flex;
    @apply shadow-none;

    @apply transition-shadow;
    @apply duration-200;
    @apply ease-in-out;
  }

  .menu > ul > li:hover {
    @apply shadow-xl;
    @apply text-gray-700;
  }

  .menu > ul > li > a {
    @apply flex-1;
  }

  .selected {
    @apply font-bold;
  }
</style>

<div class="menu">
  <ul>
    {#each Menu as item}
      {#if selectedTitle !== item.title}
        <li>
          <a href={item.path} rel="prefetch">{item.title}</a>
        </li>
      {:else}
        <li class="selected">
          <a href={item.path}>{item.title}</a>
        </li>
      {/if}
    {/each}
  </ul>
</div>
