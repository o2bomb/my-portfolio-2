<script lang="ts">
  import { onMount } from "svelte";
  export { className as class, animate, initRotX, initRotY };

  let className: string | undefined;
  let animate: boolean;
  let initRotX = 0;
  let initRotY = 0;

  let el: HTMLDivElement;
  // Rotation
  const maxDeg = 10;
  let currRotX = 0;
  let currRotY = 0;
  let targetRotX = initRotX;
  let targetRotY = initRotY;
  // Glare
  let targetX = 0;
  let targetY = 0;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.offsetX - el.offsetWidth / 2) / (el.offsetWidth / 2);
      const normY = (e.offsetY - el.offsetHeight / 2) / (el.offsetHeight / 2);

      targetRotX = maxDeg * -normY;
      targetRotY = maxDeg * normX;
    };
    el.addEventListener("mousemove", handleMouseMove);

    const handleMouseLeave = () => {
      targetRotX = initRotX;
      targetRotY = initRotY;
    };
    el.addEventListener("mouseleave", handleMouseLeave);

    let frameId: number;
    let prevTime = 0;
    let desiredElapsed = 1000 / 60; // desired interval is 60fps
    const frame: FrameRequestCallback = (time) => {
      frameId = requestAnimationFrame(frame);
      const elapsed = time - prevTime;
      if (elapsed < desiredElapsed) return;

      currRotX = lerp(currRotX, targetRotX, 0.1);
      currRotY = lerp(currRotY, targetRotY, 0.1);
      targetX = ((currRotY + maxDeg) * 100) / (maxDeg * 2);
      targetY = ((-currRotX + maxDeg) * 100) / (maxDeg * 2);
      prevTime = time;
    };
    frameId = requestAnimationFrame(frame);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  });

  // https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support
  const lerp = (start: number, end: number, alpha: number) => {
    return (1 - alpha) * start + alpha * end;
  };
</script>

<div
  bind:this={el}
  style="--rotate-x:{currRotX}deg; --rotate-y:{currRotY}deg; --mouse-x:{targetX}%; --mouse-y:{targetY}%;"
  class="c-Card {className || ''}"
>
  <div class="wrap">
    <div class="fancy-border" />
    <div class="content expand" class:animate>
      <slot />
      <div class="effect reveal" class:animate />
    </div>
    <div class="effect flash" class:animate />
    <div class="effect glare" class:animate />
  </div>
</div>

<style>
  .c-Card {
    transform-style: preserve-3d;
    transform: perspective(100rem);
  }

  .wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
    /* anti-aliasing fix for firefox */
    outline: 1px solid transparent;
  }

  .content {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .expand {
    clip-path: inset(50% 0% 50% 0%);
  }
  .expand.animate {
    animation: expand 0.5s forwards;
  }
  @keyframes expand {
    0% {
      clip-path: inset(50% 0% 50% 0%);
    }
    100% {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  .fancy-border {
    overflow: hidden;
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    /* anti-aliasing fix for firefox */
    outline: 1px solid transparent;
  }

  .fancy-border::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    transform-origin: 0 0;
    transition: transform 0.5s;
    background-color: #ebad50;
  }

  .fancy-border::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    transform-origin: bottom right;
    transition: transform 0.5s;
    background-color: #ebad50;
  }

  .c-Card:hover .fancy-border::before {
    transform: rotate(0);
  }
  .c-Card:hover .fancy-border::after {
    transform: rotate(0);
  }

  .effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .glare {
    background: radial-gradient(
      farthest-corner circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.7) 10%,
      rgba(255, 255, 255, 0.65) 20%,
      rgba(0, 0, 0, 0.5) 90%
    );
    mix-blend-mode: overlay;
    opacity: 0;
  }
  .glare.animate {
    animation: fade-in 0.5s 0.9s forwards;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .flash {
    background-color: white;
    opacity: 0;
  }
  .flash.animate {
    animation: flash 0.9s 0.3s forwards;
  }
  @keyframes flash {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .reveal {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .reveal.animate {
    animation: reveal 0.15s 0.3s forwards;
  }
  @keyframes reveal {
    0% {
      background-color: rgba(0, 0, 0, 0.8);
    }
    100% {
      background-color: transparent;
    }
  }
</style>
