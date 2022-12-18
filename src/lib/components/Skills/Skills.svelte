<script lang="ts">
    import SkillsMarqueeContent from "./SkillsMarqueeContent.svelte";
</script>

<section id="skills" class="c-Skills">
    <div class="marquee top">
        <hgroup class="marquee-inner">
            <h2>Skills</h2>
            <SkillsMarqueeContent minusOne={true} />
        </hgroup>
    </div>
    <div class="content">
        <p>Languages</p>
        <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Go (Golang)</li>
        </ul>
        <p>Frameworks and Technologies</p>
        <ul>
            <li>React</li>
            <li>Docker</li>
            <li>Postgres</li>
            <li>SQL</li>
            <li>Three.js</li>
            <li>Next.js</li>
            <li>Sass / Scss</li>
            <li>MUI</li>
            <li>WebSocket</li>
            <li>REST</li>
            <li>NodeJS</li>
            <li>Prismic (Headless CMS)</li>
        </ul>
        <p>Tools</p>
        <ul>
            <li>Windows</li>
            <li>Linux</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
        </ul>
    </div>
    <div class="marquee bottom" aria-hidden="true">
        <div class="marquee-inner">
            <SkillsMarqueeContent />
        </div>
    </div>
</section>

<style>
    .c-Skills {
        position: relative;
        display: flex;
    }

    .marquee {
        overflow: hidden;
        --offset: 20vw;
        --move-initial: calc(-25% + var(--offset));
        --move-final: calc(-50% + var(--offset));
    }
    .marquee.top {
        position: absolute;
        top: 1rem;
        left: 0;
        right: 0;
    }
    .marquee.bottom {
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
    }

    .marquee-inner {
        display: flex;
        width: fit-content;
        font: var(--font-oswald-medium);
        font-size: 2rem;
        text-transform: uppercase;
        white-space: nowrap;
        transform: translate3d(var(--move-initial), 0, 0);
        animation: marquee 60s linear infinite;
    }
    @keyframes marquee {
        0% {
            transform: translate3d(var(--move-initial), 0, 0);
        }

        100% {
            transform: translate3d(var(--move-final), 0, 0);
        }
    }

    h2 {
        margin-right: 1rem;
    }

    .content {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 10rem 2rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        font: var(--font-worksans-semibold);
        font-size: 3rem;
    }
    li:not(:last-child)::after {
        content: ",";
        margin-right: 1rem;
    }

    ul:not(:last-child) {
        margin-bottom: 1rem;
    }

    @media (max-width: 700px) {
        ul {
            font-size: 2rem;
        }
    }
</style>
