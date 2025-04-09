const nums = [2, 5, 8, 3, 10, 21, 12, 15, 39];

function processNumbers(nums){
    const filtered = nums.filter(num => num >= 5);
    return doubled = filtered.map(num => num * 2);
}
processNumbers(nums);

// Chained version

function processNumbers(nums){
    return nums.filter(num => num >= 5).map(num => num * 2);
}
processNumbers(nums);


function processArray(nums){

    // Step 1: Check if the array includes any number greater than 100
    if(!nums.includes(num => num > num > 100)){
        console.log("No large number detected");
        return 0;
    }

    // Step 2: Filter out numbers less than 10
    const filtered = nums.filter(num => num >= 10);

    // Step 3: Slice the first 5 elements
    const sliced = filtered.slice(0,5);

    // Step 4:
    const squared = sliced.map(num => num * num);

    // Step 5:
    const sum = squared.reduce((sum, current) => sum + current, 0);

    return sum;
}
processArray(nums);