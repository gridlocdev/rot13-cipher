// Write a cipher that converts a string to the ROT13 equivalent. This is 13 places up on the alphabet.

import fs = require('fs')

var inputString: string = fs.readFileSync('./input-text.txt', "utf-8")

var outputString: string = ""

const alphabetArray: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

for (var i: number = 0; i < inputString.length; i++) {
    const outputLetterIndex: number = (alphabetArray.indexOf(inputString[i].toLowerCase()) + 13) % 26

    const outputLetter: string = alphabetArray[outputLetterIndex]
    outputString += outputLetter
}

console.log(outputString)
