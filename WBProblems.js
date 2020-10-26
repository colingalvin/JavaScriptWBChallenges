"use strict";

// Reverse a string

function reverseAString(){
    let userInput = getUserInput("Enter a string to be reversed: ");
    let reversedUserInput = reverseInput(userInput);
    document.getElementById("reverseAString").innerHTML = reversedUserInput;
    //console.log(reversedUserInput);
}

function getUserInput(userPrompt){
    let userInput = prompt(userPrompt);
    return userInput;
}

function reverseInput(userInput){
    let reversedUserInput = "";
    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedUserInput += userInput[i];
    }
    return reversedUserInput;
}

// Capitalize Letter

function capitalizeFirstLetterOfEachWord(){
    let userInput = getUserInput("Enter a string to be capitalized");
    let capitalizedUserInput = capitalizeEachWord(userInput);
    document.getElementById("capitalizeLetter").innerHTML = capitalizedUserInput;
    //console.log(capitalizedUserInput);
}

function capitalizeEachWord(userInput){
    let capitalizedInput = "";
    for (let i = 0; i < userInput.length; i++){
        if(i === 0 || userInput[i-1] === " "){
            capitalizedInput += capitalizeLetter(userInput[i]);
        }
        else{
            capitalizedInput += userInput[i];
        }
    }
    return capitalizedInput;
}

function capitalizeLetter(letter){
    let capitalLetter = letter.toUpperCase();
    return capitalLetter;
}

//Compress a string of characters

function compressStringOfCharacters(){
    let userInput = getUserInput("Enter a series of letters, occasionally repeating: ")
    let compressedUserInput = compressString(userInput);
    document.getElementById("compressAStringOfCharacters").innerHTML = compressedUserInput;
    //console.log(compressedUserInput);
}

function compressString(userInput){
    let compressedInput = "";
    let count = 1;
    for (let i = 0; i < userInput.length; i++){
        if (i === userInput.length - 1){
            if (userInput[i] === userInput[i-1]){
                compressedInput += count;
                compressedInput += userInput[i];
            }
            else {
                compressedInput += userInput[i];
            }
        }
        else if (userInput[i] === userInput[i+1]){
            count++;
        }
        else {
            if(count === 1)
            {
                compressedInput += userInput[i];
            }
            else {
                compressedInput += count;
                compressedInput += userInput[i];
                count = 1;
            }
        }
    }
    return compressedInput;
}

// Palindrome

function checkPalindrome(){
    let userInput = getUserInput("Enter a word or phrase to check if it is a palindrome: ");
    let condensedUserInput = parseUserInput(userInput);
    let isPalindrome = verifyPalindrome(condensedUserInput);
    document.getElementById("palindrome").innerHTML = "\"" + userInput + "\"" + palindromeMessage(isPalindrome);
}

function parseUserInput(userInput){
    let userInputOnlyLetters = discardSpecialCharacters(userInput);
    let userInputOnlyLettersLowerCase = userInputOnlyLetters.toLowerCase();
    return userInputOnlyLettersLowerCase;
}

function discardSpecialCharacters(userInput){
    let letters = /^[A-Za-z]+$/;
    let inputLettersOnly = "";
    for (let i = 0; i < userInput.length; i++){
        if (userInput[i].match(letters)){
            inputLettersOnly += userInput[i];
        }
    }
    return inputLettersOnly;
}

function verifyPalindrome(condensedUserInput){
    let isPalindrome = false;
    for (let i = 0; i < condensedUserInput.length / 2; i++){
        if (condensedUserInput[i] !== condensedUserInput[condensedUserInput.length - i - 1]){
            return isPalindrome;
        }
    }
    isPalindrome = true;
    return isPalindrome;
}

function palindromeMessage(isPalindrome){
    let message;
    if(isPalindrome){
        message = " is a palindrome";
    }
    else{
        message = " is not a palindrome";
    }
    return message;
}



