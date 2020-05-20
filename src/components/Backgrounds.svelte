<script>
  export let bgStyle = "";

  let style = `
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: -1;
`;
  $: style = style + bgStyle;
</script>

<style>
  .border {
    @apply flex;
    @apply items-center;
    @apply h-full;
    @apply border-0;
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

<div class="bg" {style} />

<div class="border">
  <textarea class="block" rows="5" bind:value={bgStyle} />
</div>
