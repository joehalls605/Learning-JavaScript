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


// ANSWER GIVEN.

function reverseWords(str){
    // Step 1: Trim the string to remove leading and trailing spaces
    // Step 2: Split the string by spaces and filter out empty strings (to remove extra spaces)
    // Step 3: Reverse the array manually using a loop
    // Step 4: Join the words back into a single string

    let words = str.trim().split(/\s+/); // Splitting by multiple spaces using regex
    let reversedStr = "";

    for(let i = words.length - 1; i >= 0; i--){
        reversedStr += words[i] (i > 0 ? " " : "");
    }
    return reversedStr;
}


// NON STRING QUESTION BUT I ANSWERED.

function removeDuplicates(nums){
    const newArray =[];
    for(let i=0; i < nums.length; i++){
        if(!newArray.includes(nums[i])){
            newArray.push(nums[i]);
        }
    }
    return newArray;
}
removeDuplicates([2,3,4,4,4,5,6]);

//

function capitaliseWords(str){
    return str
        .trim() // Remove extra spaces from the start and end
        .split(/\s+/) // Splits the string into words, ignoring multiple spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalise first letter, lowercase rest
        .join(""); // Joins words back into a single string
}

capitaliseWords("hello world");

// Reverse words

function reverseWords(str){
   // 1. Trim to remove leading and trailing spaces, and split it into an array of words.
    let words = str.trim().split(" ");
    // 2. Remove empty strings from the array
    words = words.filter(word => word !== "");

    // 3. Reverse the order of the words using a loop
    let reversedWords = [];
    for(let i = words.length - 1; i >=0; i--){
        reversedWords.push(words[i]);
    }
    return reversedWords.join(" ");
}

reverseWords("Hello World");

//

function countVowels(str){
    const vowels = "aeiou";
    let count = 0;
    for(let i=0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
countVowels("Homer");

//

function findLongestWord(str){
    // Step 1 - split the string into an array of words
    let words = str.split(" ");
    // Step 2 - initialise a variable to keep track of the longest word
    let longestWord = "";

    // Step 3 - Loop through the words - I use for of, without needing to manage the index manually
    for(let word of words){
        // If the current word is longer than the longest word, update longest word
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    // Step 4 - Return the longest word found
    return longestWord;

}
findLongestWord("The fox jumps over the lazy dog");


//

function toTitleCase(str){
    let words = str.split(" ");
    words = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1); // slice(1) gets the rest of the word.
    })
    return words.join(" ");
}
toTitleCase("Good morning mr jones");
















