<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "box-shadow: 0 0 0 .4em #655;",
    "outline: .6em solid #655;",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
