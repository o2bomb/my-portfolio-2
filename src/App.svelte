<script lang="ts">
  import Sidebar from "./lib/Sidebar.svelte";

  let showSidebar = true;
</script>

<main class="flex-1">
  <button
    on:click={(e) => {
      showSidebar = !showSidebar;
    }}>{showSidebar ? "Close" : "Show"} sidebar</button
  >
</main>
<Sidebar open={showSidebar} unmountOnExit />

<style>
</style>
