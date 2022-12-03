<script lang="ts">
  import Button from "./lib/components/Button.svelte";
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
  <section id="hero">
    <!-- <MyThree /> -->
    <h1 class="oswald-medium">Bobby Jones</h1>
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
  #hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  #hero > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  h1 {
    text-transform: uppercase;
  }

  h1,
  p {
    /* mix-blend-mode: difference; */
  }
</style>
