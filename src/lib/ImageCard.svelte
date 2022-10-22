<script lang="typescript">
  import Card from "./Card.svelte";
  export let src: string;
  export let alt: string;
  export let width = "200px";
  export let height = "300px";
</script>

<Card cardWidth={width} cardHeight={height}>
  <div class="container" style="--width:{width}">
    <img {src} {alt} />
  </div>
</Card>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .container img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--width);
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
</style>
