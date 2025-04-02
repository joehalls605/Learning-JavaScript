/* Write a function reverseString(str) that takes a string as an input and returns the string in reverse order.*/

function reverseString(string){
    return string.split("").reverse().join(""); // splits into an array of characters, then reverses the array, then joins back into a string without spaces.
}
reverseString("Joseph");

/* Write a function countVowels(str) that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.*/

function countVowels(){
    let count = 0;
    const vowels = "aeiouAEIOU";

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

/* Write a function removeDuplicateChars(str) that takes a string as input and returns a new string with all duplicate characters removed, while preserving the original order of characters. */

function removeDuplicateChars(str){
    const charactersSeen = [];
    for(let i = 0; i < str.length; i++){
        if(!charactersSeen.includes(str[i])){
            charactersSeen.push(str[i]);
        }
    }
    return charactersSeen.join("");
}
removeDuplicateChars("programming");

