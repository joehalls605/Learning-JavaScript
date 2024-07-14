function calculate(a, b, operation, callback){
    let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    default:
      return callback('Invalid operation', null);
  }
  callback(null, result);
}

// Callback function to handle the result
function handleResult(err, result) {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log('Result:', result);
  }

  // Usage examples
calculate(10, 5, 'add', handleResult);
calculate(20, 4, 'divide', handleResult);
calculate(15, 3, 'multiply', handleResult);
calculate(8, 2, 'subtract', handleResult);
calculate(5, 0, 'divide', handleResult); // Division by zero error