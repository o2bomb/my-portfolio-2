<script lang="typescript">
  import { sineOut } from "svelte/easing";
  import type { EasingFunction, TransitionConfig } from "svelte/transition";
  import SidebarContent from "./SidebarContent.svelte";

  export let open = true;
  export let unmountOnExit = false;

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

{#if unmountOnExit}
  {#if open}
    <div class="c-Sidebar" transition:navbarSlide>
      <div class="content">
        <SidebarContent />
      </div>
    </div>
  {/if}
{:else}
  <div class="c-Sidebar transition" class:open>
    <div class="content">
      <SidebarContent />
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

  .transition {
    flex-basis: 0;
    transition: flex-basis 0.5s ease-out;
  }

  .open {
    flex-basis: 300px;
  }
</style>
