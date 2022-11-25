<script lang="ts">
  import ExperienceItem from "./components/ExperienceItem.svelte";
</script>

<section class="c-Experience">
  <h2 class="oswald-medium">Experience</h2>
  <ExperienceItem />
  <ExperienceItem />
  <ExperienceItem />
  <ExperienceItem />
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
