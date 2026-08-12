function startPrediction() {
  const userId = document.getElementById('user-id').value;
  const btn = document.getElementById('predict-btn');
  const status = document.getElementById('status');
  const multiplierDisplay = document.getElementById('multiplier');

  if (!userId) {
    alert("Veuillez d'abord entrer votre ID Joueur Bet261.");
    return;
  }

  // Désactivation temporaire du bouton pendant la simulation
  btn.disabled = true;
  status.innerText = "Connexion aux serveurs Bet261...";
  multiplierDisplay.innerText = "---";

  // Phase 1 de chargement
  setTimeout(() => {
    status.innerText = "Analyse des algorithmes Aviator...";
  }, 1500);

  // Phase 2 : Affichage de la valeur générée aléatoirement (après 3 secondes)
  setTimeout(() => {
    const randomMultiplier = (Math.random() * (4.5 - 1.15) + 1.15).toFixed(2);
    multiplierDisplay.innerText = randomMultiplier + "x";
    status.innerText = "Signal établi avec succès";
    btn.disabled = false;
  }, 3000);
}
