<script lang="ts">
    export let open = false;

    let countChanged = 0;
    $: {
        if (open) {
        }
        countChanged++;
        console.log(countChanged);
    }
</script>

<div class="wrap" class:open class:close={!open && countChanged > 1}>
    <div class="c-Sidebar">
        <div class="content">
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
    }
    .wrap.close {
        animation: cut-out 1s 0.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
    }
    @keyframes cut-out {
        0% {
            clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
        }
        100% {
            clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
        }
    }
    .wrap.open {
        animation: cut-in 1s cubic-bezier(0.22, 1, 0.36, 1);
        clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
    }
    @keyframes cut-in {
        0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
        }
        100% {
            clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
        }
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
        animation: fade-out 0.1s ease-out forwards;
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .wrap.open .content {
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
