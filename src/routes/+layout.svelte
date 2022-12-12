<script>
    import { navigating, page } from "$app/stores";
    import Nav from "$lib/components/Sidebar/Nav.svelte";
    import NavButton from "$lib/components/Sidebar/NavButton.svelte";
    import "../global.css";
    import "../reset.css";

    let showSidebar = false;

    $: {
        if ($navigating === null) showSidebar = false;
        if ($page.url.hash) showSidebar = false;
    }
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
        position: relative;
        display: flex;
        min-height: 100vh;
    }

    main {
        flex: 1;
    }
</style>
