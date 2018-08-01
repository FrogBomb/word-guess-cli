var Word = require("./Word.js");

var inquirer = require('inquirer');

var counter = 16;

emitter.setMaxListeners(100);

var possibleWords = [
"else",  	
"instanceof",  	
"super",  
"enum",  	
"int", 	
"switch",  
"export",  	
"interface",	
"synchronized",  
"extends",  	
"let",  	
"this",  
"false",  	
"long",  	
"throw",  
"final",  	
"native",  
"throws",  
"finally",  	
"new",  	
"transient",  
"float",  	
"null", 
"true",  
"for", 	
"package",  	
"try",  
"function",  	
"private",  	
"typeof",  
"debugger",  	
"goto",  	
"protected",  	
"var",  
"default",  	
"if",  	
"public",  	
"void",  
"delete",  	
"implements",  	
"return",  	
"volatile",  
"do",  	
"import",  	
"short",  	
"while",
"double",  	
"in",  	
"static",  	
"with", 
"abstract",
"boolean",
"break",
"byte",
"case",
"catch",
"char",
"class",
"const",
"continue"
];

var theWord;

function chooseAWord(possibleWords) {
    var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    theWord = new Word();
    theWord.makeArray(chosenWord);
};

function gameIntro() {
    intro();
    instructions();
};

function intro() {
    console.log("======================");
    console.log("***WELCOME TO THE JAVASCRIPT GUESSING GAME***");
    console.log("Every possible word in this game is one of the official JavaScript reserved words");
    console.log(" ");
    console.log("A reserved word is a word with special meaning in a programming");
    console.log("language. Using them for variable names can confuse the program.");
    console.log("JavaScript has 63 reserved words.")
}

function instructions() {
    console.log("======================");
    console.log("INSTRUCTIONS:");
    console.log("- Try to guess the word by typing one letter at a time.");
    console.log("- You get 16 incorrect guesses per round.");
    console.log("* When you are ready to begin, use command 'node index.js begin'");
    console.log("* To guess a letter in the game, type '*letter*'");
    console.log("* To quit the game at any time, type Ctrl + c or Command + c");
    // console.log("* For a list of commands, type 'node index.js commands'");
    console.log("* To repeat these instructions, use command 'node index.js instructions'");
    console.log("======================");
}

function runGame() {
    if (counter > 0) {
        console.log("Guesses left: " + counter);
        inquirer.prompt([
            {
                name: "guess",
                message: "Your letter guess:"
            }
        ]).then(function(answers) {
            // console.log(theWord.wordArray[0].hasLetterBeenGuessedYet);
            theWord.guessLetter(answers.guess);
            var lettersLeftToGuess = theWord.wordArray.length;
            for (var i = 0; i < theWord.wordArray.length; i++) {
                if (theWord.wordArray[i].hasLetterBeenGuessedYet === true) {
                    lettersLeftToGuess--;
                    if (lettersLeftToGuess > 0) {
                        runGame();
                    } else if (lettersLeftToGuess === 0) {
                        console.log("======================");
                        console.log("YOU WON!");
                        console.log("You correctly guessed the reserve word.");
                        console.log("======================");
                    }
                }
            }
        });
    } else {
        console.log("======================");
        console.log("You have no remaining guesses.");
        console.log("GAME OVER");
        console.log("======================");
    }
};

function gameLogic(input) {
    if (input === undefined) {
        gameIntro();
    } else if (input === "instructions") {
        instructions();
    } else if (input === "begin") {
        chooseAWord(possibleWords);
        console.log("A " + theWord.wordArray.length + "-letter JavaScript reserved word. Good luck!");
        runGame();
    }
};

gameLogic(process.argv[2]);
