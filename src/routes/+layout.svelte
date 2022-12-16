<script>
    import { navigating, page } from "$app/stores";
    import Nav from "$lib/components/Sidebar/Nav.svelte";
    import "../global.css";
    import "../reset.css";

    let showSidebar = false;

    $: {
        if ($navigating === null) showSidebar = false;
        if ($page.url.hash) showSidebar = false;
    }
</script>

<header>
    <!-- <NavButton
        onclick={() => {
            showSidebar = !showSidebar;
        }}
        open={showSidebar}
    /> -->
    <Nav open={showSidebar} />
</header>
<main class:sidebar={showSidebar}>
    <slot />
</main>

<style>
    main {
        flex: 1;
    }
</style>
