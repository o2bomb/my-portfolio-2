<script lang="ts">
    import NewProjectCard from "./NewProjectCard.svelte";

    let showHeading = true;
    const onEnterFocus = () => (showHeading = false);
    const onLeaveFocus = () => (showHeading = true);
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
    <h2 class="cut-in" class:show={showHeading}>Projects</h2>
</section>

<style>
    .c-NewProjects {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
</style>
