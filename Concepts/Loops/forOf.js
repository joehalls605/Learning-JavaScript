/* for of loop gives you the actual values.
* Best used for arrays, strings, and iterables
* */

const arr = [10,20,30];

for(const value of arr){
    console.log(value) // 10, 20, 30
}

const stri = "";

for(const char of stri){
    console.log(char);
}

const numbers = [1,2,3,4,5,6,6];
for(const value of numbers){
 console.log(value);
}
