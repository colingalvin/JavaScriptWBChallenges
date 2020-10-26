"use strict";

// Reverse a string

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

