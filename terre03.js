const myAlphabet = () => { 
    
    const AZ = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let goodLetter = false;
const letter = process.argv;
letter.splice(0,2);


if (
    letter.length === 0 ||
    letter.length > 1 ||
    letter[0].length > 1 ||
    !isNaN(letter[0])
)
{
    return "Ceci n'est pas une lettre. Essayez à nouveau.";
}

let text = "";

AZ.forEach((element) => {
    if (element == letter [0].toLowerCase()){
        goodLetter = true;
    }

    if (goodLetter) {
        text = text + element;
    }

});

return text ;
};

console.log(myAlphabet());
