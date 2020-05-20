<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "border: 1em solid transparent;",
    `background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, red 0, red 12.5%, white 0, white 25%, 
	              #58a 0, #58a 37.5%, white 0, white 50%) 0 / 6em 6em;`,
  ].join("");
</script>

<Border style={BORDER_STYLE} />
