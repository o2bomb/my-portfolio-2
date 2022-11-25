<script lang="ts">
  import Button from "./lib/components/Button.svelte";
  import Circle from "./lib/components/Circle.svelte";
  import Sidebar from "./lib/components/Sidebar/Sidebar.svelte";
  import Experience from "./lib/Experience.svelte";
  import Projects from "./lib/Projects.svelte";

  let showSidebar = false;
</script>

<Sidebar open={showSidebar} unmountOnExit />
<!-- <SidebarButton
  onclick={() => {
    showSidebar = !showSidebar;
  }}
  open={showSidebar}
/> -->
<main class="flex-1">
  <section
    class="relative flex flex-col space-y-4 items-center justify-center min-h-screen"
  >
    <Circle />
    <h1 class="oswald-medium uppercase">Bobby Jones</h1>
    <p>Lorem ipsum asdlfk jasdfkl jlasdkj asdlfk jdlfkads ladksjf dasf.</p>
    <div>
      <Button>Projects</Button>
      <Button>Experience</Button>
      <Button>Skills</Button>
      <Button>About</Button>
    </div>
  </section>
  <Projects />
  <Experience />
</main>

<style>
  .card:nth-of-type(1) {
    position: absolute;
    top: 10%;
    left: 30%;
  }
</style>
