<script lang="ts">
  function goBack() {
    if (history.length > 1) {
      history.back();
    } else {
      window.location.href = "/";
    }
  }
</script>

<button on:click={goBack} class="back-button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
  <span>Back</span>
</button>

<style>
  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-radius: 9999px;
    color: var(--text-color);
    font-size: var(--text-sm);
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .back-button:hover {
    opacity: 0.8;
  }

  .back-button svg {
    width: 1em;
    height: 1em;
  }
</style>
