<script>
  import { onMount } from 'svelte';

  let canvas;

  // Charger dynamiquement p5.js depuis le CDN et initialiser le canevas
  onMount(async () => {
    // Charger p5.js depuis le CDN
    const p5 = await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
      script.onload = () => resolve(window.p5);
      script.onerror = reject;
      document.body.appendChild(script);
    });

    // Fonction de dessin p5.js
    const sketch = (p) => {
      let x = 0;
      p.setup = () => {
        p.createCanvas(400, 400).parent(canvas); // Créer le canevas
      };

      p.draw = () => {
        p.background(220);
        p.fill(255, 0, 0);
        p.ellipse(x, p.height / 2, 50, 50); // Dessiner un cercle
        x = (x + 1) % p.width; // Déplacer le cercle à droite en boucle
      };
    };

    new p5(sketch); // Initialiser p5.js avec le sketch
  });
</script>

<main>
  <header>
    <h1>Jiri</h1>
  </header>

  <div id="glass-intro">
    <h2>Effet verre transparent</h2>
    <p>Ceci est un exemple de texte à l'intérieur d'un rectangle avec un effet de verre transparent.</p>
  </div>

  <!-- Ajout du canevas ici -->
  <div id="canevas" bind:this={canvas}></div> <!-- Ce div contiendra le canevas p5.js -->

  <div class="glass">
    <a class="projet" href="#" >
      <h2>Jour 1</h2>
      <p>Boîtier à visser pour électronique.</p>
    </a>
  </div>
   
  <div class="glass">
    <h2>Jour 2</h2>
    <p>Site web créé avec Svelte et hébergé sur Github Pages.</p>
  </div>

   <div class="glass">
    <a href="#">
      <h2>Jour 3</h2>
      <p></p>
    </a>
  </div>

  <div class="glass">
    <h2>Jour 4</h2>
    <p></p>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400..700;1,400..700&family=SUSE:wght@100..800&display=swap');

  :global(body) {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-family: 'Expletus Sans', sans-serif;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #e5e5cc;
    background-image: radial-gradient(circle, rgba(244, 209, 162, 0.5) 20%, transparent 40%),
                      radial-gradient(circle at 60% 40%, rgba(244, 209, 162, 0.4) 15%, transparent 30%),
                      radial-gradient(circle at 20% 20%, rgba(244, 209, 162, 0.6) 25%, transparent 30%),
                      radial-gradient(circle at 20% 80%, rgba(228, 190, 140, 0.7) 20%, transparent 40%),
                      radial-gradient(circle at 60% 100%, rgba(228, 190, 140, 0.5) 25%, transparent 45%);
    background-size: cover;
    z-index: -1;
  }

  main::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    transform: rotate(180deg) scale(5);
    filter: none;
    z-index: -1;
  }

  header {
    position: relative;
    font-family: 'SUSE', sans-serif;
    z-index: 0;
  }

  nav a {
    margin-right: 15px;
    text-decoration: none;
    color: #5a4b3b;
    font-size: 18px;
    border-radius: 8px;
    padding: 10px;
    background-color: #e7c8a4;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'SUSE', sans-serif;
    z-index: 0;

  }

  nav a:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.4);
    z-index: 0; 
  }


  section {
    margin: 50px;
    padding: 50px 20px;
    filter: blur(5px);
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    background-image: url('https://www.transparenttextures.com/patterns/black-linen.png'), url('https://www.transparenttextures.com/patterns/asfalt-light.png');
    z-index: 0;

  }

  h1 {
    font-family: 'SUSE', sans-serif;
    color: #424242;

  }

  h2 {
    font-family: 'SUSE', sans-serif;
    color: #f2f2f2;
    z-index: 2;
  }

  p {
    font-family: 'Expletus Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #f2f2f2;
    z-index: 0;
  }

  #glass-intro {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 10px 30px;
    width: 500px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    border: 1px solid rgba(255, 255, 255, 0.31);
    margin-bottom: 30px;
    z-index: 0;

  }

  .glass {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 10px 30px;
    width: 500px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    border: 1px solid rgba(255, 255, 255, 0.31);
    margin-bottom: 30px;
    z-index: 0;

  }

  .glass:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  #glass-intro h2, #glass-intro p, .glass h2, .glass p {
    color: #110627;
  }
  
  hr {
    border: 3px solid rgba(255, 255, 255, 0);
    z-index: 0;
  }

  #canevas {
    z-index: -9999; 
  }
</style>
