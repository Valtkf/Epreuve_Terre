Créez un programme qui affiche si un nombre est premier ou pas

function estPremier(n) 
{
   
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0 || n < 1) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2){
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const nombre = Number.parseFloat(process.argv[2].replace("," , "."));

if (isNaN(nombre)) {
    console.log("Il faut entrer un nombre !")
} else if (!Number.isInteger(nombre)) {
    console.log("Le nombre doit être entier !");
} else if (estPremier(nombre)) {
    console.log(`${nombre} est premier`);
} else {
    console.log(`${nombre} n'est pas premier`);
}
