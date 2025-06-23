// .bind() in JavaScript
// ---------------------

/*
The .bind() method allows you to permanently set the value of `this` in a function.
Useful when a method is passed around and loses its original context.
*/

// Example 1: Using bind() with the 'alex' object
const alex = {
    name: 'Alex',
    teach: function () {
        console.log(this.name + ' is teaching!');
    }
};

alex.teach(); // ✅ Alex is teaching!

const teachFunction = alex.teach;
teachFunction(); // ❌ undefined is teaching! - `this` is lost

const boundTeach = alex.teach.bind(alex);
boundTeach(); // ✅ Alex is teaching! - context restored

// ---------------------------------------------

// Example 2: Using bind() with the 'joe' object
const joe = {
    name: 'Joe',
    coding: function () {
        console.log(this.name + ' is coding');
    }
};

joe.coding(); // ✅ Joe is coding

const codeFn = joe.coding;
codeFn(); // ❌ undefined is coding - lost context

const boundCode = joe.coding.bind(joe);
boundCode(); // ✅ Joe is coding

// ---------------------------------------------

// Example 3: Using bind() with the 'phil' object
const phil = {
    name: 'Phil',
    walking: function () {
        console.log("I'm Phil, I'm walking");
    }
};

phil.walking(); // ✅ I'm Phil, I'm walking

const walkFn = phil.walking;
walkFn(); // ❌ I'm undefined, I'm walking - lost `this`

const boundWalk = phil.walking.bind(phil);
boundWalk(); // ✅ I'm Phil, I'm walking

// practice

const bruce = {
    name: "Bruce",
    speak: function(){
        console.log("My name is" + this.name);
    }
}

bruce.speak(); //  My name is Bruce

const bruceSpeak = bruce.speak;
bruceSpeak(); // my name is undefined
// because `this` is now undefined — it lost its original context (`bruce`)

const boundSpeak = bruce.speak.bind(bruce);
boundSpeak();