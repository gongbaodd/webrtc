<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "background: url(code-pirate.svg) no-repeat bottom right #58a;",
    "background-position: calc(100% - 20px) calc(100% - 10px);",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
