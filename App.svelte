<script>
  import Form from "./Form.svelte";
</script>

<main>
  <h2>Movies</h2>
  <Form />
</main>

<style>
  :global(body) {
    --bg: rgb(11, 75, 61);
    --second-bg: rgb(25, 150, 123);
    --white: rgb(255, 255, 255);
    background-color: var(--bg);
    color: var(--white);
    font-family: sans-serif;
    text-align: center;
    box-sizing: border-box;
  }
</style>