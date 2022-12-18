<script lang="ts">
    export let onclick: () => void;
    export let open: boolean;
</script>

<button id="nav-button" class="c-SidebarButton show" on:click={onclick} class:open>
    <span class="line top" aria-hidden="true" />
    <span class="line middle" aria-hidden="true" />
    <span class="line bottom" aria-hidden="true" />
    <span class="visually-hidden">Navigation</span>
</button>

<style>
    .c-SidebarButton {
        z-index: 100;
        position: fixed;
        top: 2rem;
        left: 2rem;
        transform: translate(calc(-100% - 2rem), 0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 40px;
        width: 40px;
        mix-blend-mode: difference;
        transition: transform 0.3s;
    }

    .c-SidebarButton.show {
        transform: translate(0, 0);
    }

    .c-SidebarButton .line {
        height: 3px;
        width: 100%;
        background-color: white;
        transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    .c-SidebarButton .top {
        transform-origin: left center;
        margin-bottom: 0.5rem;
    }
    .c-SidebarButton .middle {
        transform-origin: left center;
        margin-bottom: 0.5rem;
    }
    .c-SidebarButton .bottom {
        transform-origin: left center;
    }

    .c-SidebarButton.open .top {
        transform: rotate(45deg) scale(0.8);
    }
    .c-SidebarButton.open .middle {
        transform: scaleX(0);
    }
    .c-SidebarButton.open .bottom {
        transform: rotate(-45deg) scale(0.8);
    }

    .visually-hidden:not(:focus):not(:active) {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
</style>
