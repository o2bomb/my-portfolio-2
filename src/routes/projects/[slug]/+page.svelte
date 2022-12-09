<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types";
    import { PROJECT_DATA } from "./+page";

    export let data: PageData;

    $: project = data.project;

    const refetch = (projectId: string) => {
        project = PROJECT_DATA[projectId];
    };
</script>

<svelte:head>
    <title>Projects — {project.title}</title>
    <meta name="description" content="Projects — {project.title}" />
</svelte:head>

<div class="container" style="--gallery-background: url('{project.gallery[0].src}');">
    <div class="gallery">
        <img src={project.gallery[0].src} alt="Preview" />
    </div>
    <div class="blurb">
        <div class="blurb-content">
            <h1>{project.title}</h1>
            <div>
                {@html project.description}
            </div>
        </div>
        <div class="prev-next">
            <button
                class="prev"
                on:click={() => {
                    if (!project.prev) return;
                    goto(project.prev);
                    refetch(project.prev);
                }}
                disabled={!project.prev}
            >
                Previous
                {#if project.prev}
                    <span class="sub">{project.prev}</span>
                {/if}
            </button>
            <button
                class="next"
                on:click={() => {
                    if (!project.next) return;
                    goto(project.next);
                    refetch(project.next);
                }}
                disabled={!project.next}
            >
                Next
                {#if project.next}
                    <span class="sub">{project.next}</span>
                {/if}
            </button>
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        display: flex;
        height: 100vh;
    }

    .gallery {
        flex: 1;
        position: relative;
    }
    .gallery::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--gallery-background);
        filter: blur(20px) grayscale(70%);
    }
    .gallery img {
        position: relative;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .blurb {
        position: relative;
        flex-basis: 400px;
        display: flex;
        flex-direction: column;
        background-color: #e4e4e7;
        color: #18181b;
        box-shadow: -0.4px 0px 0.5px rgb(0, 0, 0, 0.4), -5.7px 0.1px 6.4px -0.8px rgb(0, 0, 0, 0.4),
            -16.9px 0.3px 19px -1.7px rgb(0, 0, 0, 0.4),
            -43.7px 0.9px 49.2px -2.5px rgb(0, 0, 0, 0.4);
    }

    .blurb-content {
        padding: 2rem;
    }

    h1 {
        margin-bottom: 1rem;
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
    }

    .prev-next {
        display: flex;
        margin-top: auto;
        border-top: 1px solid #d4d4d8;
    }
    .prev-next button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        padding: 2rem;
        font: var(--font-oswald-medium);
        font-size: 1.6rem;
        text-transform: uppercase;
    }
    .prev-next button:disabled {
        color: #d4d4d8;
    }
    .next {
        border-left: 1px solid #d4d4d8;
    }
    .sub {
        font: var(--font-oswald-regular);
        font-size: 1rem;
    }
</style>
