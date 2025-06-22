function createCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}

const counter = createCounter();
counter();
counter();