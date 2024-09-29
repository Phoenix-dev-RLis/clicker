var dev_mode = true;
var KeyPressed = [];

if (dev_mode == true) {
    document.addEventListener("keydown", (event) => {
        // Empêche l'action par défaut pour la touche "Space"
        if (event.code === "KeyS") {
            event.preventDefault();
            coins_du_joueur = 0;
            coins_par_secondes = 0;
            coins_par_clic = 1;
            mettreAJourAffichage();
        }


        if (event.code === "KeyD") {
            coins_du_joueur += 1000000
            coins_par_secondes += 1000;
            mettreAJourAffichage();
        }
        // Ajoute les touches enfoncées dans le tableau KeyPressed
        if (event.key === "Control" && !KeyPressed.includes("Control")) {
            KeyPressed.push("Control");
        }

        if (event.key === "Space" && !KeyPressed.includes("Space")) {
            KeyPressed.push("Space");
        }

        // Vérifie si Control et Space sont enfoncées
        if (KeyPressed.includes("Control") && KeyPressed.includes("Space")) {
            event.preventDefault();
            coins_du_joueur = 1000000;
            mettreAJourAffichage();
        }
    });

    document.addEventListener("keyup", (event) => {
        // Retire les touches du tableau KeyPressed
        if (event.key === "Control") {
            KeyPressed.splice(KeyPressed.indexOf("Control"), 1);
        }

        if (event.key === "Space") {
            KeyPressed.splice(KeyPressed.indexOf("Space"), 1);
        }
    });
}
