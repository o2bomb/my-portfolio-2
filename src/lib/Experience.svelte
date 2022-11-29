<script lang="ts">
  import { onMount } from "svelte";
  import ExperienceItem from "./components/ExperienceItem.svelte";

  let animateItems = false;
  onMount(() => {
    let observer = new IntersectionObserver(
      (entry) => {
        if (entry.length === 0) return;
        if (!entry[0].isIntersecting) return;
        animateItems = true;
      },
      {
        threshold: 0.2,
      }
    );

    const target = document.getElementById("experience");
    observer.observe(target);
  });
</script>

<section id="experience" class="c-Experience">
  <h2 class="oswald-medium">Experience</h2>
  <ExperienceItem animate={animateItems} />
  <ExperienceItem animate={animateItems} />
  <ExperienceItem animate={animateItems} />
  <ExperienceItem animate={animateItems} />
</section>

<style>
  .c-Experience {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #e4e4e7;
    color: #18181b;
  }

  h2 {
    font: var(--font-oswald-medium);
    font-size: 3rem;
    text-transform: uppercase;
    padding: 2rem;
    padding-bottom: 0;
  }
</style>
