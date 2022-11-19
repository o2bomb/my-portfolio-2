<script lang="typescript">
  import { onMount } from "svelte";

  export { className as class };
  export { animate };
  let className: string | undefined;
  let animate: boolean;

  let el: HTMLDivElement;
  let currRotX = 0;
  let currRotY = 0;
  let targetRotX = 0;
  let targetRotY = 0;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.offsetX - el.offsetWidth / 2) / (el.offsetWidth / 2);
      const normY = (e.offsetY - el.offsetHeight / 2) / (el.offsetHeight / 2);

      const maxDeg = 10;
      targetRotX = maxDeg * -normY;
      targetRotY = maxDeg * normX;
    };
    el.addEventListener("mousemove", handleMouseMove);

    let frameId: number;
    let prevTime = 0;
    let desiredElapsed = 1000 / 60; // desired interval is 60fps
    const frame: FrameRequestCallback = (time) => {
      frameId = requestAnimationFrame(frame);
      const elapsed = time - prevTime;
      if (elapsed < desiredElapsed) return;

      currRotX = lerp(currRotX, targetRotX, 0.1);
      currRotY = lerp(currRotY, targetRotY, 0.1);
      prevTime = time;
    };
    frameId = requestAnimationFrame(frame);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
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
  style="--rotate-x:{currRotX}deg; --rotate-y:{currRotY}deg"
  class="c-Card {className || ''}"
>
  <div class="wrap">
    <div class="fancy-border" />
    <div class="content expand" class:animate>
      <slot />
      <div class="effect reveal" class:animate />
    </div>
    <div class="effect flash" class:animate />
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

  .fancy-border {
    overflow: hidden;
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
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

  .flash {
    background-color: white;
    opacity: 0;
  }
  .flash.animate {
    animation: flash 0.9s 0.3s forwards;
  }

  .reveal {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .reveal.animate {
    animation: reveal 0.15s 0.3s forwards;
  }

  @keyframes expand {
    0% {
      clip-path: inset(50% 0% 50% 0%);
    }
    100% {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @keyframes reveal {
    0% {
      background-color: rgba(0, 0, 0, 0.8);
    }
    100% {
      background-color: transparent;
    }
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
</style>
