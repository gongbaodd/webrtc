<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "border: 1em solid transparent;",
    `border-image: 33.334% url('data:image/svg+xml,<svg xmlns="http:%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="30"> \
	                      <circle cx="5" cy="5" r="5" fill="%23ab4"%2F><circle cx="15" cy="5" r="5" fill=" %23655"%2F> \
	                      <circle cx="25" cy="5" r="5" fill="%23e07"%2F><circle cx="5" cy="15" r="5" fill=" %23655"%2F> \
	                      <circle cx="15" cy="15" r="5" fill="hsl(15, 25%, 75%)"%2F> \
	                      <circle cx="25" cy="15" r="5" fill=" %23655"%2F><circle cx="5" cy="25" r="5" fill="%23fb3"%2F> \
	                      <circle cx="15" cy="25" r="5" fill=" %23655"%2F><circle cx="25" cy="25" r="5" fill="%2358a"%2F><%2Fsvg>');
    padding: 1em;`,
    "border-image-repeat: round;",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
