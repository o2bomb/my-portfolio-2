<script lang="ts">
    export let open = false;
</script>

<div class="wrap" class:open>
    <div class="c-Sidebar">
        <div class={`content ${open ? "open" : "close"}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/sverdle">Sverdle</a>
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #1f1f1f;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .content.open {
        animation: fade-in 0.5s 0.5s ease-out backwards;
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    a {
        font: var(--font-worksans-semibold);
        font-size: 3rem;
    }
    a:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
