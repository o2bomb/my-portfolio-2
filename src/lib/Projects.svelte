<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";

  let animateCards = false;

  onMount(() => {
    let observer = new IntersectionObserver(
      (entry) => {
        if (entry.length === 0) return;
        if (!entry[0].isIntersecting) return;
        animateCards = true;
      },
      {
        threshold: 0.7,
      }
    );

    const target = document.getElementById("cards");
    observer.observe(target);
  });
</script>

<section id="cards" class=".c-Projects relative min-h-screen">
  <div
    class="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 h-screen w-[100vh] border-2 border-solid border-[#ebad5088]"
  />
  <div
    class="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[50deg] h-[80vh] w-[80vh] border-2 border-solid border-[#ebad5066]"
  />
  <div
    class="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[55deg] h-[60vh] w-[60vh] border-2 border-solid border-[#ebad5044]"
  />
  <Card
    initRotX={-20}
    initRotY={20}
    animate={animateCards}
    class="!absolute top-[10%] left-[20%]"
  >
    <img
      src="https://pbs.twimg.com/media/FRGuSJ3VIAAzOAD?format=jpg&name=large"
      alt="demon woman"
      class="w-full max-w-[300px]"
    />
  </Card>
  <Card
    initRotX={-5}
    initRotY={-10}
    animate={animateCards}
    class="!absolute top-[20%] right-[35%]"
  >
    <img
      src="https://pbs.twimg.com/media/FKtEAIZXEAgXd_n?format=jpg&name=large"
      alt="robot"
      class="w-full max-w-[250px]"
    />
  </Card>
  <Card
    initRotX={15}
    initRotY={20}
    animate={animateCards}
    class="!absolute bottom-[10%] left-[10%]"
  >
    <img
      src="https://pbs.twimg.com/media/Fb16NExXwAYt1wI?format=jpg&name=4096x4096"
      alt="flying kites"
      class="w-full max-w-[600px]"
    />
  </Card>
  <Card
    initRotX={-10}
    initRotY={-20}
    animate={animateCards}
    class="!absolute bottom-[20%] right-[10%]"
  >
    <img
      src="https://pbs.twimg.com/media/FGj1QqpUYAEDfe4?format=jpg&name=4096x4096"
      alt="despair"
      class="w-full max-w-[350px]"
    />
  </Card>
</section>

<style>
  .c-Projects {
  }
</style>
