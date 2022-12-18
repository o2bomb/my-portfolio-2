<script lang="ts">
    import { onMount } from "svelte";
    import NewProjectCard from "./NewProjectCard.svelte";

    let showHeading = true;
    const onEnterFocus = () => (showHeading = false);
    const onLeaveFocus = () => (showHeading = true);

    let animate = false;
    onMount(() => {
        let observer = new IntersectionObserver(
            (entry) => {
                if (entry.length === 0) return;
                if (!entry[0].isIntersecting) return;
                animate = true;
            },
            {
                threshold: 0.3,
            },
        );

        const target = document.getElementById("projects");
        observer.observe(target);
    });
</script>

<section id="projects" class="c-NewProjects">
    <div class="heading-container">
        <h2 class:animate class:show={showHeading}>Projects</h2>
    </div>
    <NewProjectCard
        href="/projects/xsyn"
        name="XSYN"
        imageSrc="/my work/xsyn/xsyn1.webp"
        imageAlt="XSYN"
        {onEnterFocus}
        {onLeaveFocus}
        {animate}
    />
    <NewProjectCard
        href="/projects/supremacy"
        name="Supremacy: Battle Arena"
        imageSrc="/my work/supremacy/supremacy1.webp"
        imageAlt="Supremacy: Battle Arena"
        {onEnterFocus}
        {onLeaveFocus}
        {animate}
    />
    <NewProjectCard
        href="/projects/weareninja"
        name="We Are Ninja"
        imageSrc="/my work/weareninja/weareninja1.webp"
        imageAlt=""
        {onEnterFocus}
        {onLeaveFocus}
        {animate}
    />
    <NewProjectCard
        href="/projects/art"
        name="Art Showcase 2020"
        imageSrc="/my work/art/art1.webp"
        imageAlt=""
        {onEnterFocus}
        {onLeaveFocus}
        {animate}
    />
</section>

<style>
    .c-NewProjects {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #e4e4e7;
        color: #18181b;
    }

    .heading-container {
        overflow-y: hidden;
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2 {
        text-transform: uppercase;
        font: var(--font-oswald-medium);
        font-size: 6rem;
        opacity: 0.1;
        transition: opacity 0.4s;
        pointer-events: none;
        color: #e4e4e7;
        transform: translateY(100%);
    }
    h2.show {
        opacity: 1;
    }
    h2.animate {
        animation: slide-up 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
    }
    @keyframes slide-up {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @media (max-width: 700px), (hover: none) {
        .heading-container {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
        }
        h2 {
            font-size: 3rem;
            pointer-events: unset;
            opacity: 1;
            color: #18181b;
            padding: 0 2rem;
            padding-bottom: 1rem;
        }
    }
</style>
