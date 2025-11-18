<!-- Musique immonde -->
<audio autoplay loop>
  <source src="https://www.myinstants.com/media/sounds/trololol.swf.mp3">
</audio>

<script>
  /* Pop-up agressif */
  setInterval(() => {
    alert("🧨 Pourquoi tu es encore là ?");
  }, 5000);

  /* Background qui change sans consentement */
  setInterval(() => {
    document.body.style.background =
      `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  }, 100);

  /* Traînée arc-en-ciel */
  document.addEventListener("mousemove", e => {
    const d = document.createElement("div");
    d.style.position = "fixed";
    d.style.left = e.pageX + "px";
    d.style.top = e.pageY + "px";
    d.style.width = "20px";
    d.style.height = "20px";
    d.style.borderRadius = "50%";
    d.style.background = `hsl(${Math.random()*360},100%,50%)`;
    d.style.pointerEvents = "none";
    d.style.transition = "0.5s";
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 500);
  });

const arrows = document.querySelectorAll('.arrow');
arrows.forEach((arrow, i) => {
  const speed = Math.random() * 3 + 1; // vitesse aléatoire
  arrow.style.animation = `spin ${speed}s linear infinite`;
});

</script>

