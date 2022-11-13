<script lang="ts">
  import Card from "./lib/Card.svelte";
  import Sidebar from "./lib/Sidebar.svelte";

  let showSidebar = true;
</script>

<main class="flex-1">
  <div class="flex items-center space-x-4">
    <Card>
      <img
        src="https://pbs.twimg.com/media/FRGuSJ3VIAAzOAD?format=jpg&name=large"
        alt="demon woman"
        style="width: 100%; max-width: 300px;"
      />
    </Card>
    <Card>
      <img
        src="https://pbs.twimg.com/media/FKtEAIZXEAgXd_n?format=jpg&name=large"
        alt="robot"
        style="width: 100%; max-width: 500px;"
      />
    </Card>
    <Card>
      <img
        src="https://pbs.twimg.com/media/Fb16NExXwAYt1wI?format=jpg&name=4096x4096"
        alt="flying kites"
        style="width: 100%; max-width: 600px;"
      />
    </Card>
    <Card>
      <img
        src="https://pbs.twimg.com/media/FGj1QqpUYAEDfe4?format=jpg&name=4096x4096"
        alt="despair"
        style="width: 100%; max-width: 300px;"
      />
    </Card>
  </div>
  <button
    on:click={(e) => {
      showSidebar = !showSidebar;
    }}>{showSidebar ? "Close" : "Show"} sidebar</button
  >

  <div id="tan" style="transform: translate(50px, 1rem);">bruh bruh bruh</div>
</main>
<Sidebar open={showSidebar} />

<style>
</style>
