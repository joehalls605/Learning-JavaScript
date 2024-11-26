// Transform an Array
function transformArray(){
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map(num => num * 2);
    const doubledV2 = numbers.map(function(num){
        const output = num * 2;
        return output;
    })
    document.getElementById('array-result').innerText = `Original: ${numbers.join(', ')}\nDoubled: ${doubled.join(', ')}`;
}

// Transform object keys
function transformObject() {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ];
    const transformed = people.map(person => ({
      ...person, // this copies all properties of person into a new object
      nameUpper: person.name.toUpperCase() // nameUpper property is added to the copied object, it is the uppercase version of name
    }));
    document.getElementById('object-result').innerText = JSON.stringify(transformed, null, 2);
    // after processing the objects, stringify converts the transformed array into a JSON format
    // null and 2 arguments format the output to include line breaks and readability.
  }

// Add Conditional Logic

function conditionalTransform(){
    const numbers = [10, 15, 20, 25, 30];
    const conditional = numbers.map(num => {
        if(num % 2 === 0){
            return `${num} is even`;
        }
        else{
            return `${num} is odd`;
        }
    })
    document.getElementById('conditional-result').innerText = `Result:\n${conditional.join('\n')}`;
}

