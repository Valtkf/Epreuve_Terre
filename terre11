function convertTo12HourFormat(time) {
  const timeArray = time.split(":"); // Sépare l'heure et les minutes dans un tableau
  let hours = parseInt(timeArray[0], 10); // Récupère l'heure sous forme de nombre entier
  const minutes = timeArray[1]; // Récupère les minutes

  if (isNaN(hours) || isNaN(minutes)) {
    return console.log("Veuillez rentrer une heure valide. ")
  }

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return console.log("Veuillez rentrer une heure valide. ")
  }

  let ampm = "AM"; // Initialise AM par défaut
  if (hours >= 12) {
    // Si l'heure est 12 ou plus tard
    ampm = "PM"; // Change AM en PM
  }
  if (hours > 12) {
    // Si l'heure est après midi
    hours = hours - 12; // Soustrait 12 pour convertir en format 12h
  }
  if (hours === 0) {
    // Si l'heure est minuit
    hours = 12; // Change 0 en 12
  }

  return hours + ":" + minutes + " " + ampm; // Retourne l'heure au format 12h
}

console.log(convertTo12HourFormat(process.argv[2])); // Affiche "3:30 PM"
