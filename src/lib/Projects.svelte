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
        threshold: 0.7,
      }
    );

    const target = document.getElementById("cards");
    observer.observe(target);
  });
</script>

<section id="cards" class="c-Projects">
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
      <Card class="card" initRotX={-10} initRotY={-20} animate={animateCards}>
        <div class="aspect" />
        <img
          src="https://pbs.twimg.com/media/FGj1QqpUYAEDfe4?format=jpg&name=4096x4096"
          alt="despair"
        />
      </Card>
    </div>
    <!-- <div class="card">
      <Card class="card" initRotX={-10} initRotY={-20} animate={animateCards}>
        <div class="aspect" />
        <img
          src="https://pbs.twimg.com/media/FKbdq1LWYAcX11l?format=jpg&name=4096x4096"
          alt="woman"
        />
      </Card>
    </div> -->
  </div>
</section>

<style>
  .c-Projects {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  .container {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(min(30rem, 100vw)), 1fr)
    );
    justify-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1400px;
  }

  .card:nth-child(1) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * -0.1),
      calc(max(100vw - 400px, 0px) * 0)
    );
  }
  .card:nth-child(2) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * -0.1),
      calc(max(100vw - 400px, 0px) * 0.01)
    );
  }
  .card:nth-child(3) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * 0),
      calc(max(100vw - 400px, 0px) * 0.03)
    );
  }
  .card:nth-child(4) {
    transform: translate(
      calc(max(100vw - 400px, 0px) * 0),
      calc(max(100vw - 400px, 0px) * 0.02)
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
    width: calc(min(30rem, 100vw));
    padding-bottom: 56.25%;
  }
</style>
