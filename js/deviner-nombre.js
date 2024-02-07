/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let nbMystere = tireNombre(1, 100);
let nbEssais = 0;
let reponse;
let message;

alert(nbMystere);

do {
    reponse = parseInt(prompt("Entrez un nombre entre 1 et 100:"));
    if (reponse === null) {
        alert("Entrez un nombre, s'il vous plait.");
    }

    if (reponse === nbMystere) {
        alert("Bravo! Vous avez trouvé le nombre mystère en " + nbEssais + " essais.");
        break;
    } else if (reponse< nbMystere) {
        alert ("C'est plus.");
    } else {
        alert ("C'est moins.");
    }
} while (true);
