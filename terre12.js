//Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.
//Attention : midi et minuit
//il faudra gérer les différentes erreurs d'arguments

function convertir12hEn24h(heure12h) {
  // Extraire les heures, minutes et suffixe de l'heure 12h
  let heures = parseInt(heure12h.substring(0, 2));
  let minutes = parseInt(heure12h.substring(3, 5));
  let suffixe = heure12h.substring(6);

  // Convertir les heures au format 24h
  if (isNaN(heures) || isNaN(minutes)) {
    return console.log("Veuillez rentrer une heure valide. ")
  }
  if (suffixe.toUpperCase() === 'PM') {
    if (heures < 12) {
      heures += 12;
    }
  } else if (suffixe.toUpperCase() === 'AM') {
    if (heures === 12) {
      heures = 0;
    }
  }

  // Formater l'heure au format 24h
  let heure24h = heures.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  
  return heure24h;
}

// Exemples d'heures au format 12h
let heure1 = '12:00 AM';
let heure2 = '04:30 PM';
let heure3 = '08:15 AM';

// Convertir les heures au format 24h et afficher le résultat
console.log(convertir12hEn24h(heure1)); // Affiche "00:00"
