// Strict equality is when both the value and type have to be the same, then it returns true, otherwise it returns false.

console.log(5 === 5); // true
console.log('5' === 5); // false

// Loose equality compares values after type conversion (coercion). Which means js tries to convert the values to the same type before comparing.

console.log(5 == 5); // true
console.log('5' == 5); // true - converts the string to integer

console.log(true == 1); // true is converted to 1
console.log(null == undefined); // true - they are both considered equal