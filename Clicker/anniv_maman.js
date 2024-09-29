const mot_gentill = ["Je t'aime Maman",
              "Tu es la meilleure Maman du monde !!",
              "Bravo, un batiment de plus !",
              "Tu es la plus belle des mamans",
              "Happy Birthday !!! 🎉",
              "Bonne anniversaire !!",
              "Je t'aime de tout mon cœur.",
              "❤️❤️❤️❤️❤️❤️❤️❤️❤️",

]

function mot_gentil() {
    
const messageAleatoire = mot_gentill[Math.floor(Math.random() * mot_gentill.length)];
    
    // Crée un élément div pour la boîte de dialogue
    const dialogue = document.createElement("div");
    dialogue.style.position = "fixed";
    dialogue.style.top = "50%";
    dialogue.style.left = "50%";
    dialogue.style.transform = "translate(-50%, -50%)";
    dialogue.style.backgroundColor = "rgba(255, 255, 255, 0.8)";;
    dialogue.style.color = "white";
    dialogue.style.padding = "20px";
    dialogue.style.border = "2px solid #333";
    dialogue.style.borderRadius = "10px";
    dialogue.style.zIndex = "1000";
    dialogue.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    dialogue.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"; // Fond arc-en-ciel
    
    // Ajoute le message au dialogue
    const messageElement = document.createElement("p");
    messageElement.innerText = messageAleatoire;
    dialogue.appendChild(messageElement);
    
    // Crée un bouton de fermeture
    const closeButton = document.createElement("button");
    closeButton.innerText = "Fermer";
    closeButton.style.marginTop = "10px";
    closeButton.style.marginTop = "20px";
    closeButton.style.backgroundColor = "#007BFF"; // Couleur de fond
    closeButton.style.color = "white"; // Couleur du texte
    closeButton.style.border = "none"; // Pas de bordure
    closeButton.style.borderRadius = "5px"; // Coins arrondis
    closeButton.style.padding = "10px 20px"; // Espacement interne
    closeButton.style.cursor = "pointer"; // Curseur en main au survol

    // Ajouter un effet au survol
    closeButton.onmouseover = function() {
        closeButton.style.backgroundColor = "#0056b3"; // Changer la couleur au survol
    };
    closeButton.onmouseout = function() {
        closeButton.style.backgroundColor = "#007BFF"; // Rétablir la couleur originale
    };
    closeButton.onclick = function() {
        closeButton.style.transform = "scale(0.9)"; // Réduction temporaire
        setTimeout(() => {
            document.body.removeChild(dialogue);
        }, 150); // Retirer le dialogue après un délai
    };
    
    dialogue.appendChild(closeButton);
    
    // Ajoute la boîte de dialogue au body
    document.body.appendChild(dialogue);
}
