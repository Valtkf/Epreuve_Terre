//Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu
//Exemple : 11 40 34 = 34
// 2 1 3 = 2

//Récupérer les chiffres depeuis les arguments de la igne de commande
const chiffre1 = parseFloat(process.argv[2].replace(',', '.'));
const chiffre2 = parseFloat(process.argv[3].replace(',', '.'));
const chiffre3 = parseFloat(process.argv[4].replace(',', '.'));

// Vérifier si des chiffres identiques ont été entrés
if (chiffre1 === chiffre2 || chiffre1 === chiffre3 || chiffre2 === chiffre3) {
  console.log("Erreur : Des chiffres identiques ont été entrés. Veuillez entrer trois chiffres distincts.");
} else if (isNaN(chiffre1) || isNaN(chiffre2) || isNaN(chiffre3)) {
  console.log("Erreur : Les chiffres entrés ne sont pas valides. Veuillez entrer des chiffres.");
} else if (!Number.isInteger(chiffre1) || !Number.isInteger(chiffre2) || !Number.isInteger(chiffre3)) {
  console.log("Erreur : Les chiffres entrés ne sont pas valides. Veuillez entrer des entiers.");
} else {
  // Vérifier quel est le chiffre du milieu
  if ((chiffre1 < chiffre2 && chiffre1 > chiffre3) || (chiffre1 > chiffre2 && chiffre1 < chiffre3)) {
    // chiffre1 est le chiffre du milieu
    console.log(chiffre1);
  } else if ((chiffre2 < chiffre1 && chiffre2 > chiffre3) || (chiffre2 > chiffre1 && chiffre2 < chiffre3)) {
    // chiffre2 est le chiffre du milieu
    console.log(chiffre2);
  } else {
    // chiffre3 est le chiffre du milieu
    console.log(chiffre3);
  }
}
