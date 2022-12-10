<script>
    import Experience from "$lib/components/Experience/Experience.svelte";
    import Projects from "$lib/components/Projects/Projects.svelte";
</script>

<svelte:head>
    <title>Yong 'Felix' Tan</title>
    <meta name="description" content="Yong 'Felix' Tan — Software Engineer" />
</svelte:head>

<section id="hero">
    <!-- <MyThree /> -->
    <h1 class="oswald-medium cut-in">Yong "Felix" Tan</h1>
    <div class="description cut-in">
        <p>
            I am currently part of the core development team working on the Supremacy Battle Arena
            at Ninja Syndicate, working as a frontend/full stack developer. I love all things
            frontend, and I am always looking for ways to grow as a web developer.
        </p>
        <p>I am a collaborator, an eager learner and a career-driven individual.</p>
    </div>
    <!-- <div>
        <Button>Projects</Button>
        <Button>Experience</Button>
        <Button>Skills</Button>
    </div> -->
</section>
<Projects />
<Experience />

<style>
    #hero {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    #hero > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    h1 {
        text-transform: uppercase;
    }

    .description {
        max-width: 800px;
        text-align: center;
        animation-delay: 0.5s;
    }
    .description > *:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
