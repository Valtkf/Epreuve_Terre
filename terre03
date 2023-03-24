//L'aphabet à partir de ...
//créer un programme qui affiche l'alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d'un retour  à la ligne

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let lettre = process.argv[2];

if (lettre === undefined) {
    console.log("Veuillez rentrer une lettre.");
} else if (lettre.length !== 1 || !alphabet.includes(lettre.toLowerCase())) {
    console.log("Veuillez spécifier une seule lettre de l'alphabet.");
} else {
    let indexlettre = alphabet.indexOf(lettre.toLowerCase());
    for(let i = indexlettre; i < alphabet.length; i++) {
        console.log(alphabet[i]);
    }
}
