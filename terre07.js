//Créez un programme qui affiche le nombre de caractères d'une chîane de cractères passée en argument
// Exemple : "Hello World!" = 12
// Envoyer un mesage d'erreur pour : node terre07.js = erreur 
// Envoyer un mesage d'erreur pour : node terre07.js "Bonjour" "Aurevoir" = erreur
// Envoyer un mesage d'erreur pour : node terre07.js 10 = erreur

if (process.argv.length > 3) {
    console.log("erreur");
    return;
}

const chaine = process.argv[2];

let count = 0;

if (!chaine) {
    console.log("erreur");
    return;
}
if (!isNaN(chaine)) {
    console.log("erreur");
    return;
}
for (let i = 0; chaine[i] != null; i++) {
    count++;
}
console.log("la chaine " + chaine + " contient " + count + " caractères. ");
