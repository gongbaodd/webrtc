<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = `
animation: ants 12s linear infinite;
padding: 1em;
border: 1px solid transparent;
background: linear-gradient(white, white) padding-box,
	        repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
  `;
</script>

<style global>
  @keyframes ants {
    to {
      background-position: 100% 100%;
    }
  }
</style>

<Border style={BORDER_STYLE} />
