<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./components/ProjectCard.svelte";

  let animateCards = false;

  onMount(() => {
    let observer = new IntersectionObserver(
      (entry) => {
        if (entry.length === 0) return;
        if (!entry[0].isIntersecting) return;
        animateCards = true;
      },
      {
        threshold: 0.5,
      }
    );

    const target = document.getElementById("projects");
    observer.observe(target);
  });
</script>

<section id="projects" class="c-Projects">
  <div class="header-container">
    <h2 class="oswald-medium" class:animate={animateCards}>Projects</h2>
  </div>
  <div class="container">
    <Card
      imageSrc="my work/xsyn/1.png"
      imageAlt=""
      offsetYFactor={-0.08}
      initRotX={-20}
      initRotY={20}
      animate={animateCards}
    />
    <Card
      imageSrc="my work/supremacy/2.png"
      imageAlt=""
      offsetYFactor={-0.08}
      initRotX={-5}
      initRotY={-10}
      animate={animateCards}
    />
    <Card
      imageSrc="my work/weareninja/1.png"
      imageAlt=""
      offsetYFactor={0.08}
      initRotX={15}
      initRotY={20}
      animate={animateCards}
    />
    <Card
      imageSrc="my work/art/1.png"
      imageAlt=""
      offsetYFactor={0.08}
      initRotX={10}
      initRotY={-20}
      animate={animateCards}
    />
  </div>
</section>

<style>
  .c-Projects {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    --card-width: 30rem;
  }

  .header-container {
    overflow-y: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h2 {
    font: var(--font-oswald-bold);
    font-size: 10rem;
    text-transform: uppercase;
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

  .container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(
      2,
      minmax(calc(min(var(--card-width), 100vw)), 1fr)
    );
    justify-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1400px;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 6rem;
    }

    .container {
      grid-template-columns: repeat(2, minmax(calc(min(20rem, 100vw)), 1fr));
    }
  }

  @media (max-width: 700px) {
    .header-container {
      position: unset;
      transform: none;
    }
    h2 {
      font: var(--font-oswald-medium);
      font-size: 3rem;
      text-transform: uppercase;
      padding: 2rem;
      transform: translateY(100%);
    }

    .container {
      display: flex;
      flex-direction: column;
      width: auto;
    }
  }
</style>
