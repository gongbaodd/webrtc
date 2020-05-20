<style>
  .wrapper {
    display: flex;
    height: 100%;
  }

  .block {
    @apply relative;
    @apply h-6;
    @apply inline-block;
    @apply m-auto;
    @apply p-2;
    @apply box-content;
  }

  .block::before {
    content: " ";
    @apply absolute;
    @apply inset-0;
    @apply bg-white;

    @apply transform;
    @apply skew-x-12;

    z-index: -1;
  }
</style>

<div class="wrapper">
  <div class="block">content</div>
</div>
