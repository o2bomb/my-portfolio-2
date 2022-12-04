<script lang="ts">
    import SidebarContent from "./SidebarContent.svelte";

    export let open = false;
</script>

<div class="wrap">
    <div class="c-Sidebar">
        <div class="content">
            <SidebarContent />
        </div>
    </div>
</div>

<style>
    .wrap {
        position: fixed;
        top: 0;
        left: 0;
    }

    .c-Sidebar {
        overflow-x: hidden;
        height: 100vh;
        background-color: #1f1f1f;
    }

    .content {
        width: calc(min(300px, 100vw));
    }
</style>
