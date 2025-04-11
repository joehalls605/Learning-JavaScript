const array = [1,2,2,3];
function removeLastItem(array){
    array.pop();
    return array;
}
removeLastItem(array);

function popUntilEven(array){
    while(array.length > 0){
     const last = array.pop();
     if(last % 2 === 0){
         return last;
     }
    }
    return null;
}
popUntilEven(array);


let guests = ["Alice", "Bob", "Charlie"];

function removeLastGuest(guests){
        guests.pop();
        return guests;
}
removeLastGuest(guests);

const tasks = ["drawing", "writing", "coding"];
function undoLastTask(tasks){
    if(tasks.length > 0){
        const removedTask = tasks.pop();
        return console.log(`Removed task: ${removedTask}`);
    }
    return console.log("No tasks to remove");
}
undoLastTask(tasks);


let openTabs = ["YouTube", "Gmail", "Reddit"];
let recentlyClosed = [];

function closeLastTab(openTabs, recentlyClosed){
    if(openTabs.length >0){
        const closedTab = openTabs.pop();
        recentlyClosed.push(closedTab);
    }
    return {
        open: openTabs,
        closed: recentlyClosed
    }
}
closeLastTab(openTabs, recentlyClosed);