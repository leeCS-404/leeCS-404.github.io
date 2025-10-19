<script>
  import { onMount } from 'svelte';

  const rootEl = typeof document !== 'undefined' ? document.documentElement : null;
  let theme = 'light';

  const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
    </svg>`;

  const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
    </svg>`;

  onMount(() => {
    if (localStorage.theme) {
      theme = localStorage.theme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
    applyTheme();
  });

  function setTheme(newTheme) {
    theme = newTheme;
    localStorage.setItem('theme', theme);
    applyTheme();
  }

  function applyTheme() {
    if (!rootEl) return;
    if (theme === 'dark') {
      rootEl.classList.add('theme-dark');
    } else {
      rootEl.classList.remove('theme-dark');
    }
  }
</script>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.08);
    transform: scale(1.1);
  }

  :global(.theme-dark) button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .active {
    color: var(--primary-color, #2563eb);
  }
</style>

<div class="theme-toggle">
  <button
    class:active={theme === 'light'}
    on:click={() => setTheme('light')}
    aria-label="Switch to light theme"
    title="Light theme"
  >
    {@html sunIcon}
  </button>

  <button
    class:active={theme === 'dark'}
    on:click={() => setTheme('dark')}
    aria-label="Switch to dark theme"
    title="Dark theme"
  >
    {@html moonIcon}
  </button>
</div>
