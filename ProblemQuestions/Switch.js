const day = "Monday";

switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend");
        break;
    default:
        console.log("Invalid day!");
}

function getFruitColour(typeOfFruit){
    switch(typeOfFruit){
        case "Apple":
            console.log("The colour is red");
            break;
        case "Pear":
            console.log("The colour is a green yellow");
            break;
            case "Grape":
            console.log("The colour is purple");
            break;
        default:
            console.log("colour is unknown");
    }
}
getFruitColour("Grape");