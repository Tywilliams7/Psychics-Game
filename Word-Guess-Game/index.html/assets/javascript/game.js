//user and com guesses
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)]
console.log(computerGuess);
var userGuess;
console.log(userGuess);
// var for wins and loss = 0 while chances = 10
    wins = 0;
    losses = 0;
    chances = 10;
    myArray = [];
    alphabetLength = alphabet.length;
// var to display
var   winsText = document.getElementById("wins-text");
var   lossesText = document.getElementById("losses-text");
var   chancesText = document.getElementById("chances-text");
var   userGuessText = document.getElementById("letterGuess");
// Push Function
    function myFunction(userGuess) {
        myArray.push(userGuess);
        document.getElementById("letterGuess").innerHTML = myArray;
    }
// loops if the computer guess and user are same than point wins if not then deincrement chances.
    document.onkeyup = function(event) {
     var userGuess = event.key;

     if (userGuess !== computerGuess){
        chances--;
        myFunction(userGuess);
  
    } 
    else {
        wins++;
    }
  
    if (chances == 0){
        losses++;
    }
//Text content
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
chancesText.textContent = "Guesses Left: " + chances;
userGuessText.textContent = "You chose: " + userGuess;

    }