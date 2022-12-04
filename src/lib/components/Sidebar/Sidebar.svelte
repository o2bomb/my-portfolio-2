<script lang="ts">
    import SidebarContent from "./SidebarContent.svelte";

    export let open = false;
</script>

<div class="wrap" class:open>
    <div class="c-Sidebar">
        <div class="content">
            <SidebarContent />
        </div>
    </div>
</div>

<style>
    .wrap {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
        transition: clip-path 1s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .wrap.open {
        clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
    }

    .c-Sidebar {
        overflow-x: hidden;
        height: 100%;
        background-color: #1f1f1f;
    }

    .content {
        width: calc(min(300px, 100vw));
    }
</style>
