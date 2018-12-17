// export const letters = [..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя"];
export const letters = [..."абвгд"];
// абвгдеёжзийклмнопрстуфхцчшщъыьэюя
export default (alphabet=letters) => alphabet[Math.floor(Math.random()*alphabet.length)];

