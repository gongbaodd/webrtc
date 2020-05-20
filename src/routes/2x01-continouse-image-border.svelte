<script>
  import Border from "../components/Borders.svelte";

  let BORDER_STYLE = [
    "border: 1em solid transparent;",
    "background: linear-gradient(white, white) padding-box, url(stone-art.jpg) border-box  0 / cover;",
  ].join("");
</script>

<Border style={BORDER_STYLE} />
