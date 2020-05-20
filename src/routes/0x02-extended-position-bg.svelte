<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "background: url(code-pirate.svg) no-repeat bottom #58a;",
    "background-position: right 20px bottom 10px;",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
