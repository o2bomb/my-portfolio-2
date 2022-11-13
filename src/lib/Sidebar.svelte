<script lang="typescript">
  import { sineOut } from "svelte/easing";
  import type { EasingFunction, TransitionConfig } from "svelte/transition";

  export let open = true;

  interface NavbarSlideParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
  }
  type NavbarSlideFunc = (
    node: Element,
    params?: NavbarSlideParams
  ) => TransitionConfig;
  const navbarSlide: NavbarSlideFunc = (
    node,
    { delay = 0, duration = 500, easing = sineOut }
  ) => {
    const width = node.getBoundingClientRect().width;

    return {
      delay,
      duration,
      css: (t) => `flex-basis: ${width * t}px`,
      easing,
    };
  };
</script>

{#if open}
  <div class="c-Sidebar" transition:navbarSlide>
    <div class="content">
      <a>Link one</a>
      <a>Link two</a>
      <a>Link three</a>
      <a>Link four</a>
    </div>
  </div>
{/if}

<style>
  .c-Sidebar {
    overflow-x: hidden;
    align-self: stretch;
    background-color: #1f1f1f;
  }

  .content {
    width: calc(min(300px, 100vw));
  }
</style>
