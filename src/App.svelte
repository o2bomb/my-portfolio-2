<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./lib/Card.svelte";
  import Sidebar from "./lib/Sidebar/Sidebar.svelte";

  let showSidebar = false;
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

<Sidebar open={showSidebar} unmountOnExit />
<!-- <SidebarButton
  onclick={() => {
    showSidebar = !showSidebar;
  }}
  open={showSidebar}
/> -->
<main class="flex-1">
  <section class="flex items-center justify-center min-h-screen">
    <h1 class="oswald-medium uppercase">Bobby Jones</h1>
  </section>
  <section id="cards" class="relative min-h-screen">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 h-screen w-[100vh] border-2 border-solid border-[#ebad5088]"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[50deg] h-[80vh] w-[80vh] border-2 border-solid border-[#ebad5066]"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[55deg] h-[60vh] w-[60vh] border-2 border-solid border-[#ebad5044]"
    />
    <Card animate={animateCards} class="!absolute top-[10%] left-[20%]">
      <img
        src="https://pbs.twimg.com/media/FRGuSJ3VIAAzOAD?format=jpg&name=large"
        alt="demon woman"
        class="w-full max-w-[300px]"
      />
    </Card>
    <Card animate={animateCards} class="!absolute top-[40%] right-[40%]">
      <img
        src="https://pbs.twimg.com/media/FKtEAIZXEAgXd_n?format=jpg&name=large"
        alt="robot"
        class="w-full max-w-[250px]"
      />
    </Card>
    <Card animate={animateCards} class="!absolute bottom-[10%] left-[10%]">
      <img
        src="https://pbs.twimg.com/media/Fb16NExXwAYt1wI?format=jpg&name=4096x4096"
        alt="flying kites"
        class="w-full max-w-[600px]"
      />
    </Card>
    <Card animate={animateCards} class="!absolute bottom-[20%] right-[10%]">
      <img
        src="https://pbs.twimg.com/media/FGj1QqpUYAEDfe4?format=jpg&name=4096x4096"
        alt="despair"
        class="w-full max-w-[350px]"
      />
    </Card>
  </section>
</main>

<style>
  .card:nth-of-type(1) {
    position: absolute;
    top: 10%;
    left: 30%;
  }
</style>
