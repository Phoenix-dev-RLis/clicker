// Variables
var coins_du_joueur = 0;
var coins_par_secondes = 0;
var coins_par_clic = 1; // Définissons une valeur initiale

function formatNumber(num) {
    return num.toLocaleString('fr-FR'); // Formatage pour le français
}

// Fonction pour mettre à jour l'affichage avec un texte personnalisé
function mettreAJourAffichage() {
    document.getElementById("coins_du_joueur").innerText = "coins : "+formatNumber(coins_du_joueur);
    document.getElementById("coins_par_secondes").innerText = "coins/s : "+formatNumber(coins_par_secondes) ;
    document.getElementById("coins_par_clic").innerText = "coins/clic : "+formatNumber(coins_par_clic) ;
}

// Appeler la fonction pour mettre à jour l'affichage dès le début
mettreAJourAffichage();

// Mettre à jour le nombre de coins du joueur toutes les secondes
setInterval(() => {
    coins_du_joueur += coins_par_secondes;
    mettreAJourAffichage();
}, 1000);