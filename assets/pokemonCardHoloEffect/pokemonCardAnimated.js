/*

  using 
    - an animated gif of sparkles.
    - an animated gradient as a holo effect.
    - color-dodge mix blend mode
  
*/
const $cards = $(".card");
const $style = $(".hover");
let animationId;

$cards.on("pointermove", function(e) {
  e.preventDefault();
  
  // Bestimme die Position relativ zur Karte
  const pos = [e.offsetX || e.clientX - $(this).offset().left, e.offsetY || e.clientY - $(this).offset().top];
  const $card = $(this);
  
  // Maße der Karte
  const width = $card.width();
  const height = $card.height();
  
  // Berechnungen für die Maus- bzw. Touch-Positionen
  const l = pos[0];
  const t = pos[1];
  const px = Math.abs(Math.floor(100 / width * l) - 100);
  const py = Math.abs(Math.floor(100 / height * t) - 100);
  const pa = (50 - px) + (50 - py);
  
  const lp = (50 + (px - 50) / 1.5);
  const tp = (50 + (py - 50) / 1.5);
  const px_spark = (50 + (px - 50) / 7);
  const py_spark = (50 + (py - 50) / 7);
  const p_opc = 20 + (Math.abs(pa) * 1.5);
  const ty = ((tp - 50) / 2) * -1;
  const tx = ((lp - 50) / 1.5) * 0.5;

  // CSS Variablen für die Karte setzen
  $card.css({
    '--grad-pos-x': `${lp}%`,
    '--grad-pos-y': `${tp}%`,
    '--spark-pos-x': `${px_spark}%`,
    '--spark-pos-y': `${py_spark}%`,
    '--spark-opacity': p_opc / 100,
    'transform': `rotateX(${ty}deg) rotateY(${tx}deg)`
  });

  // Verwende requestAnimationFrame für flüssige Animationen
  cancelAnimationFrame(animationId);
  animationId = requestAnimationFrame(() => {
    const newStyle = `
      .card:hover:before {
        background-position: var(--grad-pos-x) var(--grad-pos-y);
      }
      .card:hover:after {
        background-position: var(--spark-pos-x) var(--spark-pos-y);
        opacity: var(--spark-opacity);
      }
    `;
    $style.html(newStyle);
  });
}).on("pointerout pointercancel", function() {
  // Entferne die Stile und setze die Animation zurück
  const $card = $(this);
  $style.html("");
  $card.removeAttr("style");
  setTimeout(() => {
    $card.addClass("animated");
  }, 2500);
});
