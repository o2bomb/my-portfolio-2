<script lang="ts">
    import { onMount } from "svelte";
    import ExperienceItem from "./ExperienceItem.svelte";

    let animateItems = false;
    onMount(() => {
        let observer = new IntersectionObserver(
            (entry) => {
                if (entry.length === 0) return;
                if (!entry[0].isIntersecting) return;
                animateItems = true;
            },
            {
                threshold: 0.2,
            },
        );

        const target = document.getElementById("experience");
        observer.observe(target);
    });
</script>

<section id="experience" class="c-Experience">
    <div class="header-container">
        <h2 class="oswald-medium" class:animate={animateItems}>Experience</h2>
    </div>
    <ExperienceItem animate={animateItems} />
    <ExperienceItem animate={animateItems} />
    <ExperienceItem animate={animateItems} />
    <ExperienceItem animate={animateItems} />
</section>

<style>
    .c-Experience {
        display: flex;
        flex-direction: column;
        background-color: #e4e4e7;
        color: #18181b;
    }

    .header-container {
        overflow-y: hidden;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }

    h2 {
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
        padding: 2rem;
        padding-bottom: 0;
        transform: translateY(100%);
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
