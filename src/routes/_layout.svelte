<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("posts.json");
    const { posts } = await res.json();

    return { posts };
  }
</script>

<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Menu from "../components/Menu.svelte";
  import { onMount } from "svelte";

  export let posts = [];
  export let segment;

  let items = [];

  onMount(() => {
    items = posts.map(file => ({ title: file, path: file }));
  });
</script>

<style>
  .content {
    @apply h-64;
  }
</style>

<Tailwindcss />

<main>
  <section class="content">
    <slot />
  </section>
  <Menu {items} selected={segment} />
</main>
