<script lang="ts">
  import ImageCard from "./lib/ImageCard.svelte";
</script>

<main>
  <div class="spaced">
    <!-- <ImageCard
      src="https://pbs.twimg.com/media/FRGuSJ3VIAAzOAD?format=jpg&name=large"
      alt="demon woman"
    />
    <ImageCard
      src="https://pbs.twimg.com/media/FKtEAIZXEAgXd_n?format=jpg&name=large"
      alt="robot"
    /> -->
    <ImageCard
      src="https://pbs.twimg.com/media/Fb16NExXwAYt1wI?format=jpg&name=4096x4096"
      alt="flying kites"
      width="600px"
    />
    <ImageCard
      src="https://pbs.twimg.com/media/FGj1QqpUYAEDfe4?format=jpg&name=4096x4096"
      alt="despair"
      width="300px"
      height="600px"
    />
  </div>
</main>

<style>
  .spaced > :global(*:not(:last-child)) {
    margin-bottom: 1rem;
  }
</style>
