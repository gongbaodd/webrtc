<script>
  import Backgrounds from "../components/Backgrounds.svelte";

  let bgStyle = `
  background: linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
  background-size: 42.4px 42.4px;
  `;
</script>

<Backgrounds {bgStyle} />
