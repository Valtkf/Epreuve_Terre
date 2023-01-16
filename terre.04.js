const myNumber = () => {
    
    const Number = process.argv;
    Number.splice(0, 2);
  
    if (Number.length != 1 || isNaN(Number[0])) {
      return "Tu ne me la mettras pas à l'envers";
    }
  
    if (Number % 2 == 0) {
      return "pair";
    } else {
      return "impair";
    }

    
  };
  
  console.log(myNumber());
