<script>
  import Backgrounds from "../components/Backgrounds.svelte";

  let bgStyle = `
  background: repeating-linear-gradient(60deg, hsla(0, 0%, 100%, .5), hsla(0, 0%, 100%, .5) 15px, transparent 0, transparent 30px);
  `;
</script>

<Backgrounds {bgStyle} />
