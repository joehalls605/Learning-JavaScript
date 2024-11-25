/*
This code is a simple and efficient way to shuffle an array using the Fisher-Yates (Knuth) Shuffle algorithm.
*/

array = [1,2,3,4,53,31,6,7]

for(let i = array.length - 1; i > 0; i--){

}
/*
let i = array.length - 1: Start with the last element of the array (i is the index of the last item).

i > 0; i--: Loop backwards through the array, stopping when i reaches 1 (since we're comparing i with indices before it).
*/

const j = Math.floor(Math.random() * (i + 1));  // Pick a random index from 0 to i

/*
let i = array.length - 1: Start with the last element of the array (i is the index of the last item).

i > 0; i--: Loop backwards through the array, stopping when i reaches 1 (since we're comparing i with indices before it).

Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive).
Math.random() * (i + 1): Scales this random number to be between 0 and i (inclusive). (i + 1) is used because Math.random() can never reach 1, so this ensures the maximum value of j can be i.

Math.floor(...): Rounds down to the nearest whole number, giving you a random index j between 0 and i (inclusive).
*/

[array[i], array[j]] = [array[j], array[i]];    // Swap elements

return array;  // Return the shuffled array


/* full code: */
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  // Pick a random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];    // Swap elements
}
return array;  // Return the shuffled array