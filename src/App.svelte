<script lang="ts">
  import Sidebar from "./lib/Sidebar/Sidebar.svelte";
  import SidebarButton from "./lib/Sidebar/SidebarButton.svelte";

  let showSidebar = true;
</script>

<Sidebar open={showSidebar} unmountOnExit />
<SidebarButton
  onclick={() => {
    showSidebar = !showSidebar;
  }}
  open={showSidebar}
/>
<main class="flex-1" />

<style>
</style>
