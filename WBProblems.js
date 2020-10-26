"use strict";

// Reverse a string

function reverseAString() {
    let userInput = getUserInput("Enter a string to be reversed: ");
    let reversedUserInput = reverseInput(userInput);
    document.getElementById("reverseAString").innerHTML = reversedUserInput;
    //console.log(reversedUserInput);
}

function getUserInput(userPrompt) {
    let userInput = prompt(userPrompt);
    return userInput;
}

function reverseInput(userInput) {
    let reversedUserInput = "";
    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedUserInput += userInput[i];
    }
    return reversedUserInput;
}

// Capitalize Letter

function capitalizeFirstLetterOfEachWord() {
    let userInput = getUserInput("Enter a string to be capitalized");
    let capitalizedUserInput = capitalizeEachWord(userInput);
    document.getElementById("capitalizeLetter").innerHTML = capitalizedUserInput;
    //console.log(capitalizedUserInput);
}

function capitalizeEachWord(userInput) {
    let capitalizedInput = "";
    for (let i = 0; i < userInput.length; i++) {
        if(i === 0 || userInput[i-1] === " ") {
            capitalizedInput += capitalizeLetter(userInput[i]);
        }
        else{
            capitalizedInput += userInput[i];
        }
    }
    return capitalizedInput;
}

function capitalizeLetter(letter) {
    let capitalLetter = letter.toUpperCase();
    return capitalLetter;
}

//Compress a string of characters

function compressStringOfCharacters() {
    let userInput = getUserInput("Enter a series of letters, occasionally repeating: ")
    let compressedUserInput = compressString(userInput);
    document.getElementById("compressAStringOfCharacters").innerHTML = compressedUserInput;
    //console.log(compressedUserInput);
}

function compressString(userInput) {
    let compressedInput = "";
    let count = 1;
    for (let i = 0; i < userInput.length; i++) {
        if (i === userInput.length - 1) {
            if (userInput[i] === userInput[i-1]) {
                compressedInput += count;
                compressedInput += userInput[i];
            }
            else {
                compressedInput += userInput[i];
            }
        }
        else if (userInput[i] === userInput[i+1]) {
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

function checkPalindrome() {
    let userInput = getUserInput("Enter a word or phrase to check if it is a palindrome: ");
    let condensedUserInput = parseUserInput(userInput);
    let isPalindrome = verifyPalindrome(condensedUserInput);
    document.getElementById("palindrome").innerHTML = "\"" + userInput + "\"" + palindromeMessage(isPalindrome);
}

function parseUserInput(userInput) {
    let userInputOnlyLetters = discardSpecialCharacters(userInput);
    let userInputOnlyLettersLowerCase = userInputOnlyLetters.toLowerCase();
    return userInputOnlyLettersLowerCase;
}

function discardSpecialCharacters(userInput) {
    let letters = /^[A-Za-z]+$/;
    let inputLettersOnly = "";
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].match(letters)) {
            inputLettersOnly += userInput[i];
        }
    }
    return inputLettersOnly;
}

function verifyPalindrome(condensedUserInput) {
    let isPalindrome = false;
    for (let i = 0; i < condensedUserInput.length / 2; i++) {
        if (condensedUserInput[i] !== condensedUserInput[condensedUserInput.length - i - 1]){
            return isPalindrome;
        }
    }
    isPalindrome = true;
    return isPalindrome;
}

function palindromeMessage(isPalindrome) {
    let message;
    if(isPalindrome) {
        message = " is a palindrome";
    }
    else {
        message = " is not a palindrome";
    }
    return message;
}

// Happy Numbers

function checkHappyNumber() {
    let userInput = getUserInput("Enter a number to check if it is a Happy Number: ");
    let currentNumber = userInput;
    for (let i = 0; i < 1000; i++) {
        if (parseInt(currentNumber) !== 1) {
            let sumOfSquares = getSumOfSquares(currentNumber);
            currentNumber = String(sumOfSquares);
        }
        else {
            document.getElementById("happyNumbers").innerHTML = userInput + " is a happy number!";
            return;
        }
    }
    document.getElementById("happyNumbers").innerHTML = "After 1000 iterations, " + userInput + " has not been proven to be a happy number.";
}

function getSumOfSquares(currentNumber) {
    let sumOfIntegers = 0;
    for (let i = 0; i < currentNumber.length; i++) {
        sumOfIntegers += Math.pow(parseInt(currentNumber[i]), 2);
    }
    return sumOfIntegers;
}

// Prime Numbers

function printPrimeNumbers() {
    let primeNumbers = "";
    for (let i = 1; i < 101; i++) {
        if (numberIsPrime(i)) {
            primeNumbers += i + ", ";
        }
    }
    primeNumbers = primeNumbers.slice(0, primeNumbers.length - 2);
    document.getElementById("primeNumbers").innerHTML = primeNumbers;
}

function numberIsPrime(number) {
    let isPrime = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return isPrime;
        }
    }
    isPrime = true;
    return isPrime;
}

// Fibonacci

function printFibonacciSequence() {
    let userInput = getUserInput("Enter how many Fibonacci numbers you would like: ")
    let numberToLeft = 0;
    let numberTwoToLeft = 0;
    let newNumber = 1;
    let fibonacciNumbers = "";
    for (let i = 1; i <= userInput; i++) {
        numberTwoToLeft = numberToLeft;
        numberToLeft = newNumber;
        newNumber = numberTwoToLeft + numberToLeft;
        fibonacciNumbers += newNumber + ", ";
    }
    fibonacciNumbers = fibonacciNumbers.slice(0, fibonacciNumbers.length - 2);
    document.getElementById("fibonacci").innerHTML = "The first " + userInput + " numbers of the Fibonacci Sequence are: " + fibonacciNumbers;
}