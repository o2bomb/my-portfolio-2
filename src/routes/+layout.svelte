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
    <Sidebar />

    <main class:sidebar={showSidebar}>
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
        z-index: 1;
        flex: 1;
        margin-left: 0;
        background-color: #18181b;
        transition: margin-left 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    }

    main.sidebar {
        margin-left: 300px;
    }
</style>
