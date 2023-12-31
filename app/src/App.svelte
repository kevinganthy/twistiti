<script lang="ts">
  import Clock from './components/clock.svelte';
</script>

<main>
  <div>
    <Clock />
  </div>
  <ul>
    <li>
      <a href="https://www.twistiti.com/fr/">Twistiti</a>
    </li>
    <li>
      <a href="https://github.com/kevinganthy/twistiti">Github</a>
    </li>
  </ul>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  div {
    margin: auto;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    gap: 3rem;
  }
</style>
