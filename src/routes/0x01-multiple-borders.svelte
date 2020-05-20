<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "background: yellowgreen;",
    "box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink, 0 2px 5px 15px rgba(0,0,0,.6);",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
