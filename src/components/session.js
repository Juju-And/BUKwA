import getRandomLetter, { letters } from "./getRandomLetter";

const diff = (arr1, arr2) => arr1.filter(value => arr2.indexOf(value) === -1);

export const usedLetters = [];

let lastLetter;

export const setNextRandomLetter = () => {
    lastLetter = getRandomLetter(diff(letters, usedLetters));
    usedLetters.push(lastLetter);
}

export const getRandomNewLetter = () => {
    return lastLetter;
};



export const reset =() =>{
    while(usedLetters.length) {
        usedLetters.pop();
    }
};