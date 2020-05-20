<script>
  import { onMount } from "svelte";
  export let style;
  let stylecontent;

  onMount(() => {
    stylecontent = style;
  });
</script>

<style>
  .border {
    @apply flex;
    @apply items-center;
    @apply h-full;
    @apply border-0;
    @apply overflow-hidden;
  }

  textarea {
    @apply m-auto;
    @apply bg-white;
    @apply w-64;
    @apply rounded;
    resize: none;
  }

  textarea:focus {
    outline: none;
  }
</style>

<div class="border">
  <textarea
    class="block"
    style={stylecontent}
    rows="5"
    bind:value={stylecontent} />
</div>
