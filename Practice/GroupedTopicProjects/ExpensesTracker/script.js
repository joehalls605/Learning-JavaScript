// Topics practiced:
// 1. Arrow functions
// 2. Higher-order functions
// 3. Anonymous functions (function expressions)
// 4. IIFE (Immediately Invoked Function Expressions)

// Defining an array to hold the expenses
let expenses = [];

// Function to add an expense to the array
const addExpense = () => {
    const amount = prompt("Enter expense amount");
    if (amount !== null && amount !== "") { // Changed '&' to '&&'
        expenses.push(parseFloat(amount));
        renderExpenses();
    }
};

// Function to delete the last expense from the array
const deleteExpense = () => {
    expenses.pop();
    renderExpenses();
};

// Function to calculate the total of all expenses
const calculateExpenses = () => { // Renamed from 'totalExpenses' to 'calculateExpenses'
    const total = expenses.reduce((acc, expense) => acc + expense, 0);
    alert(`Total expenses: £${total.toFixed(2)}`);
};

// Function to render the expenses in the UI
const renderExpenses = () => {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.textContent = `Expense ${index + 1}: £${expense.toFixed(2)}`; // fixed to two decimal places
        expenseList.appendChild(li);
    });
};

// Set event listeners for buttons
document.getElementById('addExpenseBtn').addEventListener("click", addExpense);
document.getElementById('deleteExpenseBtn').addEventListener('click', deleteExpense);
document.getElementById('totalExpensesBtn').addEventListener('click', calculateExpenses); // Changed to 'calculateExpenses'

// Immediately Invoked Function Expression (IIFE) to initialize the UI with some initial expenses
(() => {
    addExpense();
    addExpense();
})();
