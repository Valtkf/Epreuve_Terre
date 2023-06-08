Créez  un programme qui affiche la racine carrée d'un entier positif.
Attention : il faudra gérer les potentielles erreurs d'arguments

function carreParfait(n) {
    let i = 1;
    let carre = 1;


while (carre <= n) {
    if (carre === n) {
        return i;
    }

    i++;
    carre = i * i;
}

  return null;
}

const nombre = parseInt(process.argv[2]);

if (isNaN(nombre)) {
    console.log ("erreur");
    process.exit();
} 
const resultat = carreParfait(nombre);
if (resultat === null) {
    console.log (`Il n'y a pas carré parfait pour ${nombre}.`);
} else {
    console.log(`Le carré parfait de ${nombre} est ${resultat}.`);
}
