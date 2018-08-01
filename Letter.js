function Letter(stringValue) {
    this.stringValue = stringValue;
    this.hasLetterBeenGuessedYet = false;
    this.displayProperties = function() {
        console.log(this);
    }
};

Letter.prototype.underlyingCharacter = function() {
    //console.log("function underlyingCharacter has started");
    if (this.hasLetterBeenGuessedYet === true) {
        //console.log(this.stringValue);
        return this.stringValue;
        // return this.stringValue;
    } else if (this.hasLetterBeenGuessedYet === false) {
        //console.log("_");
        return "_";
        // return "_";
    }
};

// This function will check if the input is a character in the alphabet.
// It will incorporate seamlessly with your own code, and make it safer
// in the process. 

function testForLetter(character) {
    const alphabet = 
    ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", 
     "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n",
     "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u",
     "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"
    ];

    if (alphabet.includes(character)) {
        return true;
    } else {
        return false;
    }
};

// Wrap your code in this if-else statement. The idea is to pass your function's
// argument through the testForLetter function. 

Letter.prototype.updateBoolean = function(character) {
    console.log("function updateBoolean has started");
        if ((character.toLowerCase() === this.stringValue.toLowerCase()) && (this.hasLetterBeenGuessedYet === true)) {
            console.log("argument equals string value, and boolean value is true. Letter has already been guessed");
            this.hasLetterBeenGuessedYet = true;
            console.log(this);
        } else if ((character.toLowerCase() !== this.stringValue.toLowerCase()) && (this.hasLetterBeenGuessedYet === true)) {
            console.log("argument does not equal string value, but boolean value is true. Letter has already been guessed");
            this.hasLetterBeenGuessedYet = true;
            console.log(this);
        } else if ((character.toLowerCase() === this.stringValue.toLowerCase()) && (this.hasLetterBeenGuessedYet === false)) {
            console.log("argument equals string value, but boolean value is false. Letter has been guessed");
            this.hasLetterBeenGuessedYet = true;
            console.log(this);
        } else if ((character.toLowerCase() !== this.stringValue.toLowerCase()) && (this.hasLetterBeenGuessedYet === false)) {
            console.log("argument does not equal string value, and boolean value is false. Letter has NOT been guessed");
            this.hasLetterBeenGuessedYet = false;
            console.log(this);
        }
        this.underlyingCharacter();
};

// var letterJ = new Letter("j", false);

// // letterJ.displayProperties();

// // console.log(letterJ);

// letterJ.updateBoolean("j");

// letterJ.updateBoolean("l");

module.exports = Letter;

