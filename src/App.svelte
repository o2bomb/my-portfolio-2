<script lang="ts">
  import Card from "./lib/Card.svelte";
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
    <Card>
      <h1 class="oswald-bold underline">Hello There</h1>
      <p class="worksans-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        distinctio deleniti quisquam voluptatibus ipsum? Aspernatur ut, ullam
        consequuntur at non aliquam eligendi cumque delectus, maiores suscipit
        quasi magni natus quo?
      </p>
    </Card>
  </div>
</main>

<style>
  .spaced > :global(*:not(:last-child)) {
    margin-bottom: 1rem;
  }
</style>
