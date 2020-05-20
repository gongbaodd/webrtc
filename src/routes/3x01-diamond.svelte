<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = `
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
`;
</script>

<Border style={BORDER_STYLE} />
