<script>
    import Button from "$lib/components/Button.svelte";
    import Experience from "$lib/components/Experience/Experience.svelte";
    import Projects from "$lib/components/Projects/Projects.svelte";
</script>

<svelte:head>
    <title>Yong 'Felix' Tan</title>
    <meta name="description" content="Yong 'Felix' Tan — Software Engineer" />
</svelte:head>

<section id="hero">
    <!-- <MyThree /> -->
    <h1 class="oswald-medium cut-in">Bobby Jones</h1>
    <p>Lorem ipsum asdlfk jasdfkl jlasdkj asdlfk jdlfkads ladksjf dasf.</p>
    <div>
        <Button>Projects</Button>
        <Button>Experience</Button>
        <Button>Skills</Button>
        <Button>About</Button>
    </div>
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

    h1,
    p {
        /* mix-blend-mode: difference; */
    }
</style>
