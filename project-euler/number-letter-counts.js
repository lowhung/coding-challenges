/*
*
* If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
* If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
*
* NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115
* (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*
* one + two + three + four + five + six + seven + eight + nine + ten = n3 + 3 + 5 + 4 + 4 + 3 + 5 + 5 + 3
* */
const _ = require('lodash');
const converter = require('number-into-words');

function processWord(numberAsWord) {
    let processedWord = numberAsWord.split(' ').join('');

    processedWord = processedWord.split('-').filter(split => {
        return split !== '-';
    }).join('');

    processedWord = processedWord.split('.').filter(split => {
        return split !== '.';
    }).join('');


    return processedWord ? processedWord.length : 0;
}

function numberLetterCounts(number = 0) {
    let count = 0;
    if (!number) return count;
    while (number !== 0) {
        const numberAsWord = converter.internationalConversion(number, {characterCase: 'lowercase'});
        const processedWordLength = processWord(numberAsWord);
        console.log('processedWordLength', processedWordLength);
        count += processedWordLength;
        number--;
    }
    return count;
}

console.log(numberLetterCounts(1000));