<script>
    import Nav from "$lib/components/Sidebar/Nav.svelte";
    import NavButton from "$lib/components/Sidebar/NavButton.svelte";
    import "../global.css";
    import "../reset.css";

    let showSidebar = false;
</script>

<div class="app">
    <NavButton
        onclick={() => {
            showSidebar = !showSidebar;
        }}
        open={showSidebar}
    />
    <Nav open={showSidebar} />

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
        flex: 1;
        background-color: #18181b;
    }
</style>
