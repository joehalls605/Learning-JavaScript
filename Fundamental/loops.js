
//LOOPS

for(let i = 1; i<= 5; i++){
    console.log(i);
}

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

fruits.forEach(
    function (fruit) {
    console.log(fruit);
});

fruits.forEach(fruit => console.log(fruit));
