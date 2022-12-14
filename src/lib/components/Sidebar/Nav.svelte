<script lang="ts">
    export let open = false;

    let countChanged = 0;
    $: {
        if (open) {
        }
        countChanged++;
    }
</script>

<div class="wrap" class:open class:close={!open && countChanged > 1}>
    <div class="c-Sidebar">
        <nav class="content">
            <a href="/">Home</a>
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/#skills">Skills</a>
        </nav>
    </div>
</div>

<style>
    .wrap {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
        clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
    }
    .wrap.close {
        animation: cut-out 1s 0.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        -webkit-clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
        clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
    }
    @keyframes cut-out {
        0% {
            -webkit-clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
            clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
        }
        100% {
            -webkit-clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
            clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
        }
    }
    .wrap.open {
        animation: cut-in 1s cubic-bezier(0.22, 1, 0.36, 1);
        -webkit-clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
        clip-path: polygon(100% 100%, 100% -100%, -100% 100%);
    }
    @keyframes cut-in {
        0% {
            -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
        }
        100% {
            -webkit-clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
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
        color: #e4e4e7;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.1s ease-out;
    }
    .wrap.open .content {
        opacity: 1;
        transition: opacity 0.5s 0.5s ease-out;
    }

    a {
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
    }
    a:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
