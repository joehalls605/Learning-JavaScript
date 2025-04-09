const generateGreeting = (name) => {
    return `Hello ${name}`;
}
generateGreeting("Joe");

const checkAgeCategory = (age) => {
    if(age <= 12){
        return "You are a child";
    }
    else if(age >= 13 && age <= 17){
        return "You are a teenager";
    }
    else{
        return "You are an adult";
    }
}
checkAgeCategory(10);