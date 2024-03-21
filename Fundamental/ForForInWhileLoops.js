//LOOPS


// FOR
for(let i = 1; i<= 5; i++){
    console.log(i);
}

for(let i= 0; i <=5; i++){
    const x = 1;
}

for(let u = 0; u > 5; u++){

}

let j = 1;

// WHILE
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;

//DO WHILE
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

//SWITCH

let dayofTheWeek = 3;

// case = 1
// dayoftheweek = 1;

switch(dayofTheWeek){
    case 1: 
    console.log("It's monday");
    break;
    case 2:
    console.log("It's tuesday")
    case 3:
    console.log("It's wednesday"); 
    default:
        console.log("Invalid day of trhe week")
}