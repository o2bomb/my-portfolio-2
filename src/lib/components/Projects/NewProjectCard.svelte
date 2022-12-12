<script lang="ts">
    export { href, name, animate, imageSrc, imageAlt, onEnterFocus, onLeaveFocus };
    let href: string;
    let name: string;
    let animate: boolean;
    let imageSrc: string;
    let imageAlt: string;
    let onEnterFocus: () => void;
    let onLeaveFocus: () => void;
</script>

<a
    class="c-NewProjectCard"
    class:animate
    {href}
    on:mouseenter={onEnterFocus}
    on:mouseleave={onLeaveFocus}
    on:focus={onEnterFocus}
    on:blur={onLeaveFocus}
>
    <img src={imageSrc} alt={imageAlt} />
    <div class="content">
        <div class="wrap">
            <h3>
                {name}
            </h3>
        </div>
    </div>
</a>

<style>
    .c-NewProjectCard {
        overflow: hidden;
        position: relative;
        display: block;
        height: max(100px, 20vh);
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        filter: blur(1px) grayscale(100%) brightness(20%);
        transition: filter 0.4s;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .c-NewProjectCard:hover img,
    .c-NewProjectCard:focus img,
    .c-NewProjectCard:active img {
        filter: blur(1px) grayscale(70%) brightness(50%);
    }

    .content {
        z-index: 1;
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
    }
    .wrap {
        display: flex;
        align-items: center;
        padding: 2rem;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }

    h3 {
        overflow: visible;
        position: relative;
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
        clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
        color: #e4e4e7;
    }
    h3::before {
        display: block;
        content: "Click to view";
        font: var(--font-worksans-regular);
    }
    .c-NewProjectCard:hover h3,
    .c-NewProjectCard:focus h3,
    .c-NewProjectCard:active h3 {
        animation: cut-in 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @media (max-width: 700px), (hover: none) {
        .c-NewProjectCard img {
            filter: blur(1px) grayscale(70%) brightness(50%);
        }

        h3 {
            font-size: 2rem;
        }
        .c-NewProjectCard:hover h3,
        .c-NewProjectCard:focus h3,
        .c-NewProjectCard:active h3 {
            animation: none;
        }
        .c-NewProjectCard.animate h3 {
            animation: cut-in 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
    }
</style>
