"use strict";

// Reverse a string
/*
function ReverseAString(){
    let userInput = GetUserInput("Enter a string to be reversed: ");
    let reversedUserInput = ReverseInput(userInput);
    console.log(reversedUserInput);
}

function GetUserInput(userPrompt){
    let userInput = prompt(userPrompt);
    return userInput;
}

function ReverseInput(userInput){
    let reversedUserInput = "";
    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedUserInput += userInput[i];
    }
    return reversedUserInput;
}

ReverseAString();
*/

// Capitalize Letter

function CapitalizeFirstLetterOfEachWord(){
    let userInput = GetUserInput("Enter a string to be capitalized");
    let capitalizedUserInput = CapitalizeEachWord(userInput);
    console.log(capitalizedUserInput);
}

function GetUserInput(userPrompt){
    let userInput = prompt(userPrompt);
    return userInput;
}

function CapitalizeEachWord(userInput){
    let capitalizedInput = "";
    for (let i = 0; i < userInput.length; i++){
        if(i === 0 || userInput[i-1] === " "){
            capitalizedInput += CapitalizeLetter(userInput[i]);
        }
        else{
            capitalizedInput += userInput[i];
        }
    }
    return capitalizedInput;
}

function CapitalizeLetter(letter){
    let capitalLetter = letter.toUpperCase();
    return capitalLetter;
}

CapitalizeFirstLetterOfEachWord();