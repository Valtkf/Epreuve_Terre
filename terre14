// Créer un programme qui détermine si une liste d'entiers est triée ou pas

function estTrie(liste) {
    for (let i = 0; i < liste.length - 1; i++) {
      if (liste[i] > liste[i + 1]) {
        return false; // Si un élément est supérieur à l'élément suivant, la liste n'est pas triée
      }
    }
    return true; // Tous les éléments ont été parcourus sans violation de l'ordre, donc la liste est triée
  }
  
  // Récupérer les arguments passés en ligne de commande, à partir de l'indice 2 (indice 0 : chemin du programme, indice 1 : nom du programme)
  const argumentsListe = process.argv.slice(2);
  
  // Convertir les arguments en nombres entiers avec vérification d'erreur
  const liste = argumentsListe.map((arg) => {
    if (!/^\d+$/.test(arg)) {
      console.error(`Erreur : "${arg}" n'est pas un nombre entier valide.`);
      // Ajoutez ici la logique supplémentaire pour gérer l'erreur si nécessaire
    }
    return parseInt(arg);
  });
  
  // Vérifier si la liste est triée si aucune erreur n'est survenue
  if (liste.every((nombre) => Number.isInteger(nombre))) {
    const estListeTrie = estTrie(liste);
    console.log(estListeTrie ? "La liste est triée." : "La liste n'est pas triée.");
  }
