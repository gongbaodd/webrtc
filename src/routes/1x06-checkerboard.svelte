<script>
  import Backgrounds from "../components/Backgrounds.svelte";

  let bgStyle = `
background-image: 
    linear-gradient(45deg, hsla(0, 0%, 100%, .5) 25%, transparent 0, transparent 75%, hsla(0, 0%, 100%, .5) 0),
    linear-gradient(45deg, hsla(0, 0%, 100%, .5) 25%, transparent 0, transparent 75%, hsla(0, 0%, 100%, .5) 0);
background-position: 0 0, 25px 25px;
background-size: 50px 50px;
  `;
</script>

<Backgrounds {bgStyle} />
