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

const obj2 = {a: 4, b: 6, c: 12};
for(const i in obj2){
    console.log(i); // a, b, c
    console.log(obj2[i]); // 4
}

const obj3 = {
    name: "Joseph",
    age: 55
}
for(const i in obj3){
    console.log(i);
    console.log(obj3[i]);
}