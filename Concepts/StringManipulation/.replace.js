// .replace is used to replace the first match of the old text with the new text

let text = "I like cats";
let newText = text.replace("cats", "dogs");
console.log(newText);

// ES2021 + replaceAll replaces all occurrences of old text.
let cars = "BMW ford BMW mercedes";
let noBMW = cars.replaceAll("BMW", "");
console.log(noBMW);