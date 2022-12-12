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
    <NewProjectCard
        href="/projects/xsyn"
        name="XSYN"
        imageSrc="/my work/xsyn/1.png"
        imageAlt="XSYN"
        {onEnterFocus}
        {onLeaveFocus}
    />
    <NewProjectCard
        href="/projects/supremacy"
        name="Supremacy: Battle Arena"
        imageSrc="/my work/supremacy/2.png"
        imageAlt="Supremacy: Battle Arena"
        {onEnterFocus}
        {onLeaveFocus}
    />
    <NewProjectCard
        href="/projects/weareninja"
        name="We Are Ninja"
        imageSrc="/my work/weareninja/1.png"
        imageAlt=""
        {onEnterFocus}
        {onLeaveFocus}
    />
    <NewProjectCard
        href="/projects/art"
        name="Art Showcase 2020"
        imageSrc="/my work/art/1.png"
        imageAlt=""
        {onEnterFocus}
        {onLeaveFocus}
    />
    <div class="heading-container">
        <h2 class:animate class:show={showHeading}>Projects</h2>
    </div>
</section>

<style>
    .c-NewProjects {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .heading-container {
        overflow-y: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2 {
        text-transform: uppercase;
        font: var(--font-oswald-medium);
        font-size: 6rem;
        opacity: 0;
        transition: opacity 0.4s;
        pointer-events: none;
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
</style>
