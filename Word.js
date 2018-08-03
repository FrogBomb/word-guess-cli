var Letter = require("./Letter.js");

function Word() {
    this.wordArray = [];
    this.stringifiedArray = [];
    this.makeArray = function(string) {
        //console.log("makeArray has been called");
        var array = string.split("");
        //console.log(array);
        for (var i = 0; i < array.length; i++) {
            var newLetter = new Letter(array[i]);
            this.wordArray.push(newLetter);
        }
        // console.log(this.wordArray);
        this.arrayToString();
    }
    this.arrayToString = function() {
        //console.log("arrayToString has been called");
        var arrayOfStringValues = [];
        for (var i = 0; i < this.wordArray.length; i++) {
            arrayOfStringValues.push(this.wordArray[i].underlyingCharacter());
        }
        this.stringifiedArray = arrayOfStringValues.join("");
        console.log("The word is:" + this.stringifiedArray);
    }
    this.showWholeWord = function() {
        var arrayForWord = [];
        for (var i = 0; i < this.wordArray.length; i++) {
            arrayForWord.push(this.wordArray[i].stringValue);
        }
        var theWholeWord = arrayForWord.join("");
        return theWholeWord;
    }
    this.guessLetter = function(character) {
        // console.log("guessLetter has been called");
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i].updateBoolean(character);
        }
        this.arrayToString();
        // console.log("RANGER DANGER The word is: " + this.arrayToString());
        // console.log(this.wordArray);
    }
};

// var beetles = new Word();

// beetles.makeArray("beetles");

// beetles.arrayToString();

// beetles.guessLetter("z");

// beetles.guessLetter("b");

// beetles.guessLetter("t");

// beetles.guessLetter("l");

// beetles.guessLetter("s");

// beetles.guessLetter("e");


module.exports = Word;
