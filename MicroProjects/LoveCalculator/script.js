

const nameOneInput = document.getElementById("name1");
const nameTwoInput = document.getElementById("name2");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", calculateMatch)

function calculateMatch(){
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
printMatchPercentage(n)
}


function printMatchPercentage(n){
   let matchUpdate = document.getElementById("match-update");
   const percentage = "%";
   matchUpdate.textContent = n + percentage;

}