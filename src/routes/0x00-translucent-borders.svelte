<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "border: 10px solid hsla(0, 0%, 100%, .5);",
    "background-clip: padding-box;",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
