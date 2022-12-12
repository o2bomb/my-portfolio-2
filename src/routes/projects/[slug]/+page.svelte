<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types";
    import { PROJECT_DATA } from "./+page";

    export let data: PageData;

    $: project = data.project;

    const goToProject = (projectId: string) => {
        goto(projectId);
        refetch(projectId);
        showProjectNav = false;
    };
    const refetch = (projectId: string) => {
        project = PROJECT_DATA[projectId];
    };

    const PROJECT_NAV_BUTTON_WIDTH = "30px";
    let showProjectNav = false;
</script>

<svelte:head>
    <title>Projects — {project.title}</title>
    <meta name="description" content="Projects — {project.title}" />
</svelte:head>

<div
    class="container"
    style="--gallery-background: url('{project.gallery[0]
        .src}');--project-nav-button-width:{PROJECT_NAV_BUTTON_WIDTH};"
>
    <div class="gallery">
        <a class="home" href="/#projects">Go Back</a>
        <img src={project.gallery[0].src} alt="Preview" />
    </div>
    <div class="blurb">
        <div class="blurb-content">
            <h1 class="title">{project.title}</h1>
            {#if project.company}
                <p class="company">@{project.company}</p>
            {/if}
            <div class="description">
                {@html project.description}
            </div>
        </div>
        <div class="prev-next">
            <button
                class="prev"
                on:click={() => {
                    if (!project.prev) return;
                    goToProject(project.prev);
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
                    goToProject(project.next);
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
    <div class="project-nav" class:open={showProjectNav}>
        <button class="control" on:click={() => (showProjectNav = !showProjectNav)}
            >{showProjectNav ? "Close" : "View all projects"}</button
        >
        <div class="content">
            {#each Object.values(PROJECT_DATA) as { id, title, gallery }}
                <button class="card" on:click={() => goToProject(id)}>
                    <p>{title}</p>
                    <img src={gallery[0].src} />
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        overflow: hidden;
        position: relative;
        display: flex;
        height: 100vh;

        --project-nav-width: min(500px, 30vw);
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
        filter: blur(20px) grayscale(70%) brightness(30%);
    }
    .gallery img {
        position: relative;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .home {
        z-index: 1;
        position: absolute;
        top: 2rem;
        right: 2rem;
        font: var(--font-oswald-regular);
        font-size: 1.6rem;
        text-transform: uppercase;
        color: #e4e4e7;
    }

    .blurb {
        position: relative;
        flex-basis: var(--project-nav-width);
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-right: var(--project-nav-button-width);
        background-color: #e4e4e7;
        color: #18181b;
        box-shadow: -0.4px 0px 0.5px rgb(0, 0, 0, 0.4), -5.7px 0.1px 6.4px -0.8px rgb(0, 0, 0, 0.4),
            -16.9px 0.3px 19px -1.7px rgb(0, 0, 0, 0.4),
            -43.7px 0.9px 49.2px -2.5px rgb(0, 0, 0, 0.4);
    }

    .blurb-content {
        overflow-y: auto;
        flex: 1;
        padding: 2rem;
    }
    /* :global() is needed to style dynamically rendered html */
    .blurb-content :global(.description > *:not(:last-child)) {
        margin-bottom: 1rem;
    }

    h1 {
        margin-bottom: 0.5rem;
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
    }

    .company {
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .blurb-content :global(.description ul) {
        list-style: none;
    }
    .blurb-content :global(.description li) {
        padding-left: 0.7rem;
        background-image: linear-gradient(to bottom, #18181b, #18181b);
        background-position: 2px 4px;
        background-size: 3px 1rem;
        background-repeat: no-repeat;
    }

    .prev-next {
        display: flex;
        margin-top: auto;
        border-top: 1px solid #d4d4d8;
    }
    .prev-next button {
        z-index: 0;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 6rem;
        width: 50%;
        padding: 2rem;
        font: var(--font-oswald-medium);
        font-size: 1.6rem;
        text-transform: uppercase;
    }
    .prev-next button:enabled {
        transition: color 0.6s cubic-bezier(0.83, 0, 0.17, 1);
    }
    .prev-next button:disabled {
        color: #d4d4d8;
    }
    .prev-next button:enabled:hover {
        color: #e4e4e7;
    }
    .prev-next button:enabled::after {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        background-color: #18181b;
        transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1);
    }
    .prev-next button:active::after {
        background-color: #27272a;
    }
    .prev-next button:enabled:hover::after {
        transform: translateY(0);
    }
    .next {
        border-left: 1px solid #d4d4d8;
    }
    .sub {
        font: var(--font-oswald-regular);
        font-size: 1rem;
    }

    .project-nav {
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        transform: translateX(var(--project-nav-width));
        height: 100%;
        width: calc(var(--project-nav-width) + var(--project-nav-button-width));
        transition: transform 0.3s, box-shadow 0.6s;
        background-color: #18181b;
        color: #e4e4e7;
    }
    .project-nav.open {
        transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s;
        transform: translateX(0);
    }

    .project-nav .control {
        position: absolute;
        top: 0;
        left: var(--project-nav-button-width);
        transform-origin: top left;
        transform: rotate(90deg);
        height: var(--project-nav-button-width);
        width: 100vh;
        background-color: #18181b;
        transition: all 0.3s;
        text-transform: uppercase;
        font: var(--font-oswald-medium);
        font-size: 1rem;
        letter-spacing: 2px;
    }
    .project-nav.open .control {
        color: black;
        background-color: #ef4444;
    }

    .project-nav .content {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin-left: var(--project-nav-button-width);
        padding: 2rem;
        transform: translateX(2rem) scale(0.8);
        transition: transform 1s 0.1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .project-nav.open .content {
        transform: translateX(0) scale(1);
    }
    .project-nav .content .card {
        width: 100%;
        text-align: left;
        text-transform: uppercase;
    }
    .project-nav .content .card:not(:last-child) {
        margin-bottom: 1rem;
    }
    .project-nav .content .card p {
        margin-bottom: 0.5rem;
        font: var(--font-oswald-medium);
        font-size: 1rem;
    }
    .project-nav .content .card img {
        width: 100%;
    }

    @media (max-width: 1000px) {
        .container {
            flex-direction: column;
        }

        .gallery {
            max-height: min(400px, 50vh);
        }

        .home {
            right: calc(2rem + var(--project-nav-button-width));
        }

        .blurb {
            flex: 1;
            min-height: 0;
        }

        .project-nav {
            transform: translateX(100%);
            width: 100%;
            max-width: 400px;
        }
        .project-nav .control {
            left: 0;
        }
        .project-nav.open .control {
            transform: translateX(var(--project-nav-button-width)) rotate(90deg);
        }
    }
</style>
