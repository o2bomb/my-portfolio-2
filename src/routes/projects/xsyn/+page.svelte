<script>
</script>

<svelte:head>
    <title>Projects — XSYN</title>
    <meta name="description" content="Projects — XSYN" />
</svelte:head>

<div class="container">
    <div class="gallery">
        <img src="/my work/xsyn/1.png" alt="Preview" />
    </div>
    <div class="blurb">
        <h1>XSYN</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nesciunt. Aliquid
            nihil ab commodi expedita doloribus omnis, impedit labore veniam, non minus, ex optio
            aspernatur vitae! Facilis consequatur provident perspiciatis.
        </p>
    </div>
</div>

<style>
    .container {
        position: relative;
        display: flex;
        height: 100%;
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
        background: url("/my work/xsyn/1.png");
        filter: blur(20px) grayscale(70%);
    }
    .gallery img {
        position: relative;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .blurb {
        position: relative;
        flex-basis: 400px;
        padding: 2rem;
        background-color: #e4e4e7;
        color: #18181b;
        box-shadow: -0.4px 0px 0.5px rgb(0, 0, 0, 0.4), -5.7px 0.1px 6.4px -0.8px rgb(0, 0, 0, 0.4),
            -16.9px 0.3px 19px -1.7px rgb(0, 0, 0, 0.4),
            -43.7px 0.9px 49.2px -2.5px rgb(0, 0, 0, 0.4);
    }

    h1 {
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
    }
</style>
