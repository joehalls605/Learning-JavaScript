/* for in loop gives you the keys or indexes
* Best used for objects */

const obj = {a: 1, b: 2};
for(const key in obj){
    console.log(key); // "a", "b"
    console.log(obj[key]); // 1, 2
}

const array = [10,20,30];

for(const i in array){
    console.log(i); // 0, 1, 2
    console.log(array[i]); // 10, 20, 30
}