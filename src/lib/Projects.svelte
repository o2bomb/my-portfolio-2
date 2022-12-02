<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";

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

    const target = document.getElementById("cards");
    observer.observe(target);
  });
</script>

<section id="cards" class="c-Projects">
  <div class="header-container">
    <h2 class="oswald-medium" class:animate={animateCards}>Projects</h2>
  </div>
  <div class="container">
    <div class="card">
      <Card class="card" initRotX={-20} initRotY={20} animate={animateCards}>
        <div class="aspect" />
        <img
          src="https://pbs.twimg.com/media/FRGuSJ3VIAAzOAD?format=jpg&name=large"
          alt="demon woman"
        />
      </Card>
    </div>
    <div class="card">
      <Card class="card" initRotX={-5} initRotY={-10} animate={animateCards}>
        <div class="aspect" />
        <img
          src="https://pbs.twimg.com/media/FKtEAIZXEAgXd_n?format=jpg&name=large"
          alt="robot"
        />
      </Card>
    </div>
    <div class="card">
      <Card class="card" initRotX={15} initRotY={20} animate={animateCards}>
        <div class="aspect" />
        <img
          src="https://pbs.twimg.com/media/FfLVrPJUAAEaE8L?format=jpg&name=large"
          alt="woman with elephants"
        />
      </Card>
    </div>
    <div class="card">
      <Card class="card" initRotX={10} initRotY={-20} animate={animateCards}>
        <div class="aspect" />
        <img
          src="https://pbs.twimg.com/media/FGj1QqpUYAEDfe4?format=jpg&name=4096x4096"
          alt="despair"
        />
      </Card>
    </div>
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

  .card {
    width: fit-content;
  }
  .card:nth-child(1) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * 0),
      calc(max(100vw - 400px, 0px) * -0.08)
    );
  }
  .card:nth-child(2) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * 0),
      calc(max(100vw - 400px, 0px) * -0.08)
    );
  }
  .card:nth-child(3) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * 0),
      calc(max(100vw - 400px, 0px) * 0.08)
    );
  }
  .card:nth-child(4) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * 0),
      calc(max(100vw - 400px, 0px) * 0.08)
    );
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .aspect {
    width: calc(min(var(--card-width), 100vw));
    padding-bottom: 56.25%;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 6rem;
    }

    .container {
      grid-template-columns: repeat(2, minmax(calc(min(20rem, 100vw)), 1fr));
    }
    .aspect {
      width: calc(min(20rem, 100vw));
      padding-bottom: 56.25%;
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
    .card {
      transform: none !important;
    }

    .aspect {
      width: calc(min(30rem, 100vw));
      padding-bottom: 56.25%;
    }
  }
</style>
