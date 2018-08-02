var Word = require("./Word.js");

var inquirer = require('inquirer');

var counter = 16;

const possibleWords = [
"abstract", 
"boolean", 
"break", 
"byte", 
"case", 
"catch", 
"char", 
"class",
"const", 
"continue", 
"debugger", 
"default", 
"delete", 
"do", 
"double", 
"else", 
"enum", 
"export", 
"extends", 
"false", 
"final", 
"finally", 
"float", 
"for", 
"function", 
"goto", 
"if", 
"implements", 
"import", 
"in", 
"instanceof", 
"int", 
"interface", 
"let", 
"long", 
"native", 
"new", 
"null", 
"package", 
"private", 
"protected", 
"public", 
"return", 
"short", 
"static", 
"super", 
"switch", 
"synchronized", 
"this", 
"throw", 
"throws", 
"transient", 
"true", 
"try", 
"typeof", 
"var", 
"void", 
"volatile", 
"while", 
"with"
];

function showWordArray() {
    var allTheWords = possibleWords.join("     ");
    console.log(allTheWords);
}

const funFactsArray = [
"'The human brain weighs six pounds!' This fun fact is from the 1996 film Jerry Maguire, released the same year as the first ECMAScript specification.",
"JavaScript and Java originally had the same set of reserved words. This is one of the few things the two languages share.",
"The language COBOL has over 300 reserved words."
];

function randomFact() {
    console.log("FUN FACT: " + funFactsArray[Math.floor(Math.random() * funFactsArray.length + 1)]);
};

function playAgain() {
    inquirer.prompt([
        {
            name: "yesOrNo",
            message: "Play again? y/n: "
        }
    ]).then(function(answers) {
        if (answers.yesOrNo === "y") {
            gameSetup();
        } else if (answers.yesOrNo === "n") {
            
        } else if ((answers.yesOrNo !== "y") && (answers.yesOrNo !== "n")) {
            console.log("Please enter 'y' or 'n'.");
            playAgain();
        }
    });
};

function gameOver() {
    console.log("======================");
    // console.log("The word was " + theWord.stringifiedArray);
    console.log("You have no remaining guesses.");
    console.log("The word was: " + theWord.showWholeWord());
    console.log("GAME OVER");
    randomFact();
    console.log("======================");
    playAgain();
};

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
    console.log("* For a list of commands, type 'node index.js commands'");
    console.log("* To repeat these instructions, use command 'node index.js instructions'");
    console.log("======================");
}

function commands() {
    console.log("======================");
    console.log("COMMANDS:");
    console.log("");
    console.log("Access these commands when launching the game with node.");
    console.log("");
    console.log("* BEGIN A GAME: 'node index.js begin'");
    console.log("* COMMANDS: 'node index.js commands'");
    console.log("* QUIT: Ctrl + c or Command + c");
    console.log("* INSTRUCTIONS: 'node index.js instructions'");
    console.log("* FUN FACTS: 'node index.js fun-facts'");
    console.log("* SHOW WORDS: 'node index.js show-words");
    console.log("======================");
}

function runGame() {
    if (counter > 0) {
        console.log("Guesses left: " + counter);
        // console.log("The word is:" + theWord.stringifiedArray);
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
                }
            }
            if (theWord.stringifiedArray.includes(answers.guess) === true) {

            } else if (theWord.stringifiedArray.includes(answers.guess) === false) {
                console.log("Sorry, the word does NOT include that letter");
                counter--;
            }
            if (lettersLeftToGuess > 0) {
                // console.log("Guesses left: " + counter);
                runGame();
            } else if (lettersLeftToGuess === 0) {
                console.log("======================");
                console.log("YOU WON! The word was: " + theWord.showWholeWord());
                // console.log("The word is: " + theWord.stringifiedArray);
                console.log("You correctly guessed the reserved word.");
                randomFact();
                console.log("======================");
                playAgain();
            }
        });
    } else {
        gameOver();
    }
};

function gameSetup() {
    chooseAWord(possibleWords);
    counter = 16;
    // console.log("The word is: " + theWord.wordArray);
    console.log("A " + theWord.wordArray.length + "-letter JavaScript reserved word. Good luck!");
    runGame();
};

function gameLogic(input) {
    if (input === undefined) {
        gameIntro();
    } else if (input === "instructions") {
        instructions();
    } else if (input === "commands") {
        commands();
    } else if (input === "fun-facts") {
        randomFact();
    } else if (input === "show-words") {
        showWordArray();
    } else if (input === "begin") {
        gameSetup();
    } else {
        console.log("Not a valid command.");
        commands();
    }
};

gameLogic(process.argv[2]);
