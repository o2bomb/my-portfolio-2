<script>
    import Button from "$lib/components/Button.svelte";
    import Experience from "$lib/components/Experience/Experience.svelte";
    import NewProjects from "$lib/components/Projects/NewProjects.svelte";
</script>

<svelte:head>
    <title>Yong 'Felix' Tan</title>
    <meta name="description" content="Yong 'Felix' Tan — Software Engineer" />
</svelte:head>

<section id="hero">
    <!-- <MyThree /> -->
    <h1 class="oswald-medium cut-in">Yong "Felix" TAN</h1>
    <div class="description cut-in">
        <p>
            I am currently part of the core development team working on the Supremacy Battle Arena
            at Ninja Syndicate, working as a frontend/full stack developer. I love all things
            frontend, and I am always looking for ways to grow as a web developer.
        </p>
        <p>I am a collaborator, an eager learner and a career-driven individual.</p>
    </div>
    <div class="actions">
        <div class="wrap">
            <Button sectionId="projects">Projects</Button>
            <Button sectionId="experience">Experience</Button>
            <!-- <Button sectionId="skills">Skills</Button> -->
        </div>
    </div>
</section>
<NewProjects />
<Experience />

<style>
    #hero {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        background-color: #e4e4e7;
        color: #18181b;
    }

    #hero > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    h1 {
        font: var(--font-oswald-bold);
    }

    .description {
        max-width: 800px;
        text-align: center;
        animation-delay: 0.5s;
    }
    .description > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    .actions {
        overflow-y: hidden;
    }
    .actions .wrap {
        transform: translateY(100%);
    }
    .actions .wrap {
        animation: slide-up 1s 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
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
