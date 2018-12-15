export const letters = [..."абвгд"];

export default (alphabet=letters) => alphabet[Math.floor(Math.random()*alphabet.length)];