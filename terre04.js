let num = (process.argv[2]);
if (isNaN(num)) {
    console.log("Tu ne me la mettra pas à l'envers!");
} if (num % 2 === 0) {
      console.log(`Le nombre ${num} est pair.`);
} if (num % 2 === 1) {
      console.log(`Le nombre ${num} est impair.`);
}      

