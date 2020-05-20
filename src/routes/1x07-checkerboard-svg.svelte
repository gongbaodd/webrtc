<script>
  import Backgrounds from "../components/Backgrounds.svelte";

  let bgStyle = `
background: hsla(0, 0%, 100%, .5) url('data:image/svg+xml,\
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
            <rect x="50" width="50" height="50" />\
            <rect y="50" width="50" height="50" />\
            </svg>');
background-size: 50px 50px;
  `;
</script>

<Backgrounds {bgStyle} />
