<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "background: url(code-pirate.svg) no-repeat bottom right #58a;",
    "background-origin: content-box;",
    "padding: 10px;",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
