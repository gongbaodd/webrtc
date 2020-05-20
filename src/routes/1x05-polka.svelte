<script>
  import Backgrounds from "../components/Backgrounds.svelte";

  let bgStyle = `
background-image: radial-gradient(hsla(0, 0%, 100%, .5) 20%, transparent 0),
                  radial-gradient(hsla(0, 0%, 100%, .5) 20%, transparent 0);
background-size: 30px 30px;
background-position: 0 0, 15px 15px;
  `;
</script>

<Backgrounds {bgStyle} />
