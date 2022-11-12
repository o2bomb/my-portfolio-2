<script lang="typescript">
</script>

<div class="c-Card">
  <div class="fancy-border" />
  <div class="content">
    <slot />
    <div class="effect reveal" />
  </div>
  <div class="effect flash" />
</div>

<style>
  .c-Card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  .content {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    animation: expand 0.5s;
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
    animation: flash 0.9s 0.3s;
  }

  .reveal {
    background-color: rgba(0, 0, 0, 0.8);
    animation: reveal 0.15s 0.3s forwards;
  }

  @keyframes expand {
    0% {
      clip-path: inset(50% 0 50% 0);
    }
    100% {
      clip-path: inset(0);
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
