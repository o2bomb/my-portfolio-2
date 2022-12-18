<script>
    import Button from "$lib/components/Button.svelte";
    import Experience from "$lib/components/Experience/Experience.svelte";
    import NewProjects from "$lib/components/Projects/NewProjects.svelte";
    import Skills from "$lib/components/Skills/Skills.svelte";
</script>

<svelte:head>
    <title>Yong 'Felix' Tan</title>
    <meta name="description" content="Yong 'Felix' Tan — Software Engineer" />
</svelte:head>

<section id="hero">
    <div class="content">
        <!-- <MyThree /> -->
        <div class="heading">
            <h1 class="cut-in">Yong "Felix" Tan</h1>
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
                <Button sectionId="projects">Projects</Button>
                <Button sectionId="experience">Experience</Button>
                <Button sectionId="skills">Skills</Button>
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
