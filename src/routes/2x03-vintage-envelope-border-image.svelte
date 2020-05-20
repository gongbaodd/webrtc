<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = `
padding: 1em;
border: 16px solid transparent;
border-image: 16 repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em,
	              #58a 0, #58a 3em, transparent 0, transparent 4em);
  `;
</script>

<Border style={BORDER_STYLE} />
