<script>
    import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
    import SidebarButton from "$lib/components/Sidebar/SidebarButton.svelte";
    import "../global.css";
    import "../reset.css";

    let showSidebar = false;
</script>

<div class="app">
    <SidebarButton
        onclick={() => {
            showSidebar = !showSidebar;
        }}
        open={showSidebar}
    />
    <Sidebar open={showSidebar} />

    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        overflow-x: hidden;
        position: relative;
        display: flex;
        min-height: 100vh;
    }

    main {
        flex: 1;
    }
</style>
