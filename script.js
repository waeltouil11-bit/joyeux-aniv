const messages = [
  "Raison 1 : Ton sourire illumine mes journées !",
  "Raison 2 : Tu es la personne la plus attentionnée que je connaisse.",
  "Raison 3 : Chaque moment passé avec toi est un cadeau.",
  "Raison 4 : Tu me fais rire comme personne d'autre !",
  "Je t'aime très fort Naëlle, passe une journée extraordinaire !"
];

let currentIndex = 0;

function showSurprise() {
  const surpriseElement = document.getElementById("surpriseText");
  surpriseElement.innerText = messages[currentIndex];
  
  currentIndex = (currentIndex + 1) % messages.length;
}
