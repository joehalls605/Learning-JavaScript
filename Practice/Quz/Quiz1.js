/*
JavaScript Assessment
*/

// 1.1
var x = 1;
let y = 2;
const z = 0;

// 1.2
let string = "dsasd";
let number = 0;
let bool = true;

// 1.3
var numberToConvert = 123;
const stringNumber = String(numberToConvert);

// 1.4

var myVar = "true";
var myVarToBoolean = Boolean(myVar);

// 1.5

function Person(name, age, isStudent){
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
}

// 1.6

const total = (5*2) + 3;

// 2.1
const calculation = (5 - 2) * 3 - 8;

// 2.2

var a = 12;
var b = 13;
const comparison = a !== b; // returns false

// 2.3

const outcome = a || b;

// 2.4;

var c = a+=b;

// 3.1

var x = 8;
if(x < 0){
    console.log("I'm more than 0");
}
if(x == 0){
    console.log("I'm more equal to 0");
}
else{
    console.log("I'm less than 0");
}

// 3.2

const gradeResult = 83;
var grade;

if(gradeResult >= 90){
    grade = "A";
}
else if(gradeResult >= 80){
    grade = "B"
}
else if(gradeResult >= 70) {
    grade = "C"
}
else if(gradeResult >= 50){
    grade = "D"
}
else{
    grade = "F";
}

// 3.3

switch(dayName){
    case day == 0:
        dayName == "Monday";
        break;
    case day == 1:
        dayName == "Tuesday";
        break;
    case day == 2:
        dayName == "Wednesday";
        break;
    case day == 3:
        dayName == "Thursday";
        break;
    case day == 4:
        dayName == "Friday";
        break;
    case day == 5:
        dayName == "Saturday"
    default:
        dayName == "Sunday";
}

// 3.4

var isOdd = number ? 3 : 4; // wrong?

// 4
for(let i = 0; i < 6; i++){
    print([i]);
}

var f = 0;
while(f < 6){
    f++;
    print(f);
}

do{
    f++;
    print(f);
}
while(f < 6);

// 4.2

//  dont know.

// 5.1

const name = "Joseph"
function greet(name){
    print("Hello" + name +"!");
}

// 5.2
function sum(x, y){
    var sum = x + y;
    return sum;
}

// 5.3
function outputTrue(x){
    if(x % == 0)
}

// 6.1
const square = (num) =>{
    return num * num;
}

// 6.2

const numbers = [1,2,3,4,5];
function summedArgs(...numbers){

}

// 6.3

/* To pratice more:
Conditionals explain
Switches
Ternary operator
for loop
break and continue
rest operator
modulus operator
implicit conversion
object literal
*/


