<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Experience from "$lib/components/Experience/Experience.svelte";
    import MyThree from "$lib/components/MyThree.svelte";
    import NewProjects from "$lib/components/Projects/NewProjects.svelte";
    import Skills from "$lib/components/Skills/Skills.svelte";
    import { Canvas } from "@threlte/core";
    import { onMount } from "svelte";

    // Control whether or not to show NavButton based on hero visibility
    onMount(() => {
        const navButton = document.getElementById("nav-button");
        let observer = new IntersectionObserver(
            (entry) => {
                if (!navButton || entry.length === 0) return;
                if (!entry[0].isIntersecting) {
                    navButton.classList.add("show");
                } else {
                    navButton.classList.remove("show");
                }
            },
            {
                threshold: 0.05,
            },
        );

        const target = document.getElementById("hero");
        observer.observe(target);
    });

    let section: "projects" | "experience" | "skills" | undefined;
</script>

<svelte:head>
    <title>Felix Tan — Software Engineer</title>
    <meta name="description" content="Yong 'Felix' Tan — Software Engineer" />
</svelte:head>

<section id="hero">
    <div class="content">
        <div class="three">
            <Canvas>
                <MyThree shape={section} />
            </Canvas>
        </div>
        <div class="heading cut-in">
            <h1>Yong "Felix" Tan</h1>
            <address>
                <a href="mailto:yong@felixtan.me">yong@felixtan.me</a>
            </address>
        </div>

        <div class="description cut-in">
            <p>
                I am currently part of the core development team working on the Supremacy Battle
                Arena at Ninja Syndicate, working as a frontend/full stack developer. I love all
                things frontend, and I am always looking for ways to grow as a web developer.
            </p>
            <p>I am a collaborator, an eager learner and a career-driven individual.</p>
        </div>
        <div class="actions">
            <div class="wrap">
                <Button
                    sectionId="projects"
                    onEnterFocus={() => {
                        section = "projects";
                    }}
                    onLeaveFocus={() => {
                        section = undefined;
                    }}>Projects</Button
                >
                <Button
                    sectionId="experience"
                    onEnterFocus={() => {
                        section = "experience";
                    }}
                    onLeaveFocus={() => {
                        section = undefined;
                    }}>Experience</Button
                >
                <Button
                    sectionId="skills"
                    onEnterFocus={() => {
                        section = "skills";
                    }}
                    onLeaveFocus={() => {
                        section = undefined;
                    }}>Skills</Button
                >
            </div>
        </div>
    </div>
</section>
<NewProjects />
<Experience />
<Skills />

<style>
    #hero {
        padding: 2rem;
        background-color: #e4e4e7;
        color: #18181b;
    }

    .content {
        z-index: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        min-height: calc(100vh - 4rem);
        padding: 2rem;
        border: 1px solid #18181b;
    }

    .content > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    .three {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        max-width: max(900px, 45vw);
        height: 100%;
    }

    .heading > * {
        display: inline-block;
    }
    h1 {
        font: var(--font-oswald-regular);
    }
    address {
        margin-left: 0.5rem;
        font-style: normal;
    }

    .description {
        max-width: 800px;
        animation-delay: 0.5s;
    }
    .description > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    .actions {
        overflow: hidden;
        display: inline-block;
    }
    .actions .wrap {
        display: flex;
        flex-direction: column;
        width: fit-content;
        transform: translateX(-100%);
    }
    .actions .wrap {
        animation: slide-up 1s 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes slide-up {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    @media (max-width: 700px) {
        .content {
            justify-content: center;
        }
    }

    @media (max-width: 500px) {
        .content {
            padding: 1rem;
        }
    }
</style>
