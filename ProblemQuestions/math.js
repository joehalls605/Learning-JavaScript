function luckyNumberGame(){
    const randomNumber = ((Math.random() * 100) + 1);
    let roundedNumber = 0;
    if(randomNumber < 50){
        roundedNumber = Math.ceil(randomNumber);
    }
    else if(randomNumber >= 50){
        roundedNumber = Math.floor(randomNumber);
    }
    const squareRoot = Math.round(Math.sqrt(roundedNumber) * 100) / 100;
    return {
        originalNumber: randomNumber,
        roundedNumber: roundedNumber,
        squareRoot: squareRoot,
        maxVs75: Math.max(roundedNumber, 75)
    }
}
console.log(luckyNumberGame());


function diceDuel(){
    let player1Roll = Math.ceil(Math.random() * 6);
    let player2Roll = Math.ceil(Math.random() * 6);

    let winner = "";
    if(player1Roll > player2Roll){
        winner = "Player 1";
    }
    else if(player2Roll > player1Roll){
        winner = "Player 2";
    }
    else{
        winner = "Tie";
    }

    /*
    The line above generates a random decimal number between 0 (inclusive) and 1 (exclusive).
    Math.random() * 6 gives a number from 0 up to but not including 6.
    Math.floor() rounds down to the nearest whole number
    + 1 shifts the result from 0-5 to 1-6 which matches the dice.
     */
    return{
        player1Roll,
        player2Roll,
        winner,
        difference: Math.abs(player1Roll - player2Roll)
    };
}
console.log(diceDuel);

function iceCreamMachine(){
    const randomNumber = Math.round((Math.random() * 100) + 1);
    let scoops = Math.ceil(Math.random() * 3);
    const scoopsNeeded = Math.round(((randomNumber * scoops) / scoops) * 100) / 100

    return{
        customers: randomNumber,
        averageScoops: scoopsNeeded,
        maxScoopsVs300: Math.max(scoopsNeeded, 300),
        scoopRoot: Math.sqrt(scoopsNeeded)

    }
}
console.log(iceCreamMachine());

// FIXED VERSION BELOW:

function iceCreamMachine() {
    const customers = Math.round(Math.random() * 100); // 0 to 100
    let totalScoops = 0;

    // Each customer gets between 1 and 3 scoops
    for (let i = 0; i < customers; i++) {
        totalScoops += Math.ceil(Math.random() * 3);
    }

    const averageScoops = customers === 0 ? 0 : Math.round((totalScoops / customers) * 100) / 100;
    const scoopRoot = Math.round(Math.sqrt(totalScoops) * 100) / 100;

    return {
        customers: customers,
        averageScoops: averageScoops,
        maxScoopsVs300: Math.max(totalScoops, 300),
        scoopRoot: scoopRoot
    };
}

console.log(iceCreamMachine());












