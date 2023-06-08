function divide(a, b) {
    let result = Math.floor(a / b);
    let remainder = a % b;
    if (a < b) {
        console.log ("erreur");
      } if (a > b || a == b) {
    console.log(`${a} divisé par ${b} est égal à ${result} avec un reste de ${remainder}.`);
      }
  }
  
  divide(10, 2);
