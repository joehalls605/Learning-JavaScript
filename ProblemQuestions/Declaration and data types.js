const person = {
    name:"Alice",
    age:25,
    favouriteFoods: ["pizza", "sushi", "ice cream"],
    hasDrivingLicense: true
};

for(const key in person){
    console.log(key + ":" + person[key]);
}

function typeTransformer(){
    let num = 42;
    let str = "123";
    let bool = true;
    const numAsString = String(num);
    const strAsNumber = Number(str);
    const boolAsString = String(bool)

    return {
        numAsString,
        strAsNumber,
        boolAsString
    };
}
typeTransformer();

function checkTypes(){
    let a = "5" + 3;
    let b = "10" - 2;
    let c = true + 1
    let d = false + "7";

    return {
        a: { value: a, type: typeof a },
        b: { value: b, type: typeof b },
        c: { value: c, type: typeof c },
        d: { value: d, type: typeof d }
    }
}


function calculateTotalPrice() {
    let basePrice = 100;
    const taxRate = 0.1; // 10%
    const total = basePrice * (1 + taxRate);

    return total;
}

calculateTotalPrice();
