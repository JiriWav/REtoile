<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(async () => {
    const p5 = await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
      script.onload = () => resolve(window.p5);
      script.onerror = reject;
      document.body.appendChild(script);
    });

    const sketch = (p) => {
      let circles = [];

      const colors = [
        p.color(205, 195, 170), 
        p.color(200, 185, 160), 
        p.color(195, 175, 145), 
        p.color(185, 165, 135), 
        p.color(175, 155, 125), 
        p.color(165, 145, 115), 
        p.color(155, 135, 105)
      ];

      class Circle {
        constructor(x, y, r, color) {
          this.x = x;
          this.y = y;
          this.r = r;
          this.color = color;
          this.xSpeed = p.random(-1, 1);
          this.ySpeed = p.random(-1, 1);
        }

        display() {
          p.noStroke();
          p.fill(this.color);
          p.ellipse(this.x, this.y, this.r);
        }

        move() {
          this.x += this.xSpeed;
          this.y += this.ySpeed;

          if (this.x < -this.r) {
            this.x = p.width + this.r;
          } else if (this.x > p.width + this.r) {
            this.x = -this.r;
          }

          if (this.y < -this.r) {
            this.y = p.height + this.r;
          } else if (this.y > p.height + this.r) {
            this.y = -this.r;
          }
        }
      }

      p.setup = () => {
        p.createCanvas(window.innerWidth + 30, window.innerHeight + 30).parent(canvas);
        for (let i = 0; i < 38; i++) {
          let r = p.random(p.width / 12, p.width / 3);
          let x = p.random(r, p.width - r);
          let y = p.random(r, p.height - r);
          let color = colors[i % colors.length];
          circles.push(new Circle(x, y, r, color));
        }
      };

      p.draw = () => {
        p.background(210, 200, 180);
        circles.forEach((circle) => {
          circle.move();
          circle.display();
        });
      };

      window.addEventListener('resize', () => {
        p.resizeCanvas(window.innerWidth + 30, window.innerHeight + 30);
      });
    };

    new p5(sketch);
  });
</script>

<main>
  <header>
    <h1>Jiri</h1>
  </header>

  <div id="glass-intro">
    <h2>Saison 1</h2>
    <p>Défi : finir un projet par jour pendant 7 jours</p>
  </div>

  <!-- Ajout du canevas ici -->
  <div id="canevas" bind:this={canvas}></div>

  <div class="glass">
    <a class="projet" href="#">
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
    font-family: 'Expletus Sans', sans-serif;
    position: relative;
    background-size: cover;
    z-index: -14;
    overflow-y: auto; /* Permettre le défilement */
  }

  #canevas {
    position: fixed; /* Fixe le canevas en arrière-plan */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -15;
    filter: blur(45px);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrer horizontalement les éléments dans main */
    justify-content: flex-start; /* Aligner en haut */
    min-height: 100vh; /* S'assurer que main occupe toute la hauteur de la page */
    padding: 20px;
  }

  header {
    font-family: 'SUSE', sans-serif;
    z-index: 0;
    margin-bottom: 40px; /* Espacement entre le header et le premier rectangle */
  }

  .glass {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 20px 40px;
    width: 500px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    margin-bottom: 30px; /* Espacement entre les rectangles */
    text-align: center; /* Centrer le texte */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .glass:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  h1 {
    font-size: 86px;
    font-family: 'SUSE', sans-serif;
    color: #424242;
    z-index: 2;
  }

  h2 {
    font-family: 'SUSE', sans-serif;
    color: #f2f2f2;
    z-index: 2;
    text-align: center;
  }

  p {
    font-family: 'Expletus Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #f2f2f2;
    text-align: center;
  }

  #glass-intro h2, #glass-intro p, .glass h2, .glass p {
    color: #110627;
  }
</style>
