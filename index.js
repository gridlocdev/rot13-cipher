"use strict";
// Write a cipher that converts a string to the ROT13 equivalent. This is 13 places up on the alphabet.
exports.__esModule = true;
var fs = require("fs");
var inputString = fs.readFileSync('./input-text.txt', "utf-8");
var outputString = "";
var alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
for (var i = 0; i < inputString.length; i++) {
    var outputLetterIndex = (alphabetArray.indexOf(inputString[i].toLowerCase()) + 13) % 26;
    var outputLetter = alphabetArray[outputLetterIndex];
    outputString += outputLetter;
}
console.log(outputString);
