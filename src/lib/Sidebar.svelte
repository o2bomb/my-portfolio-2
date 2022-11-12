<script lang="typescript">
  export let open = true;
</script>

<div class="c-Sidebar" class:open>
  <div class="content">
    <a>Link one</a>
    <a>Link two</a>
    <a>Link three</a>
    <a>Link four</a>
  </div>
</div>

<style>
  .c-Sidebar {
    overflow-x: hidden;
    align-self: stretch;
    flex-basis: 300px;
    background-color: #1f1f1f;
    transition: flex-basis 1s;
  }

  .open {
    flex-basis: 0;
  }

  .content {
    width: calc(min(300px, 100vw));
  }
</style>
