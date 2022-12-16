<script lang="ts">
    import SkillsMarqueeContent from "./SkillsMarqueeContent.svelte";
</script>

<section id="skills" class="c-Skills">
    <div class="marquee top">
        <hgroup class="marquee-inner">
            <h2>Skills</h2>
            &nbsp;
            <SkillsMarqueeContent minusOne={true} />
        </hgroup>
    </div>
    <div class="content" />
    <div class="marquee bottom" aria-hidden="true">
        <div class="marquee-inner">
            <SkillsMarqueeContent />
        </div>
    </div>
</section>

<style>
    .c-Skills {
        position: relative;
        width: 100%;
        min-height: 100vh;
    }

    .marquee {
        overflow: hidden;
        width: 100%;
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

    .content {
        padding: 2rem;
    }
</style>
