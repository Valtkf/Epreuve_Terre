Créez un programme qui affiche le résultat d'une puissance.
L'exposant ne pourra pas être négatif
Attention : il faut aussi gérer les potentielles erreurs d'arguments

let base = process.argv[2];
let exposant = process.argv[3];
let resultat;

if (exposant<0) {
    console.log("L'exposant ne doit pas être négatif.");
} else if (isNaN(base) || isNaN(exposant)) {
    console.log("erreur");
} else{
    resultat = Math.pow(base,exposant);
    console.log("le resultat est " + resultat);
}
