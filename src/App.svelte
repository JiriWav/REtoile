<script>
  import { onMount } from 'svelte';

  let title = "Welcome to Our Beautiful Home Page";
  let subtitle = "Explore the wonders of our website";
  let features = [
    { icon: '🚀', text: 'Fast and responsive' },
    { icon: '🎨', text: 'Beautifully designed' },
    { icon: '🛠️', text: 'Easy to customize' },
  ];

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 500);
  });
</script>

<main class:loaded={isLoaded}>
  <header>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>

  <section class="features">
    {#each features as feature}
      <div class="feature">
        <span class="icon">{feature.icon}</span>
        <p>{feature.text}</p>
      </div>
    {/each}
  </section>

  <footer>
    <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
  </footer>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  main.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  header {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }

  .features {
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
  }

  .feature {
    flex-basis: 30%;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  footer {
    border-top: 1px solid #eee;
    padding-top: 1rem;
    font-size: 0.9rem;
    color: #999;
  }
</style>
