<script lang="ts">
  import Clock from './components/clock.svelte';
</script>

<svelte:head>
	<meta name="description" content="A twistiti clock app for parents." />
  <meta name="theme-color" content="#333">
</svelte:head>

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

  a {
    color: white;
  }
</style>
