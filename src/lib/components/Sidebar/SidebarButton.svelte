<script lang="ts">
  export let onclick: () => void;
  export let open: boolean;
</script>

<button class="c-SidebarButton" on:click={onclick} class:open>
  <span class="line top" />
  <span class="line middle" />
  <span class="line bottom" />
</button>

<style>
  .c-SidebarButton {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    width: 40px;
  }

  .c-SidebarButton .line {
    height: 3px;
    width: 100%;
    background-color: white;
    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  .c-SidebarButton .top {
    transform-origin: left center;
    margin-bottom: 0.5rem;
  }
  .c-SidebarButton .middle {
    transform-origin: left center;
    margin-bottom: 0.5rem;
  }
  .c-SidebarButton .bottom {
    transform-origin: left center;
  }

  .c-SidebarButton.open .top {
    transform: rotate(45deg) scale(0.8);
  }
  .c-SidebarButton.open .middle {
    transform: scaleX(0);
  }
  .c-SidebarButton.open .bottom {
    transform: rotate(-45deg) scale(0.8);
  }
</style>
