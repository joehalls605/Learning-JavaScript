/*
  JavaScript Topics Covered:
  - Declaration and manipulation of arrays
  - Array methods (push, pop, shift, unshift, slice)
  - Object-Oriented Programming:
    - Classes (Product and ShoppingCart)
    - Declaration and manipulation of properties
    - Constructor method (constructor function)
    - Instance methods (getTotalPrice)
    - Static methods (calculateTax)
  - Functional Programming:
    - Array methods (map, filter, reduce)
*/


class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice(){
        return this.price * this.quantity;
    }
}

class ShoppingCart{
    constructor(){
        this.items = [];
    }

    addItem(product){
        this.items.push(product);
    }

    removeLastItem(){
        this.items.pop();
    }

    getTotalPrice(){
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    filterItemsByPrice(threshold){
        return this.item.filter(item => item.price >= threshold);
    }

    static calculateTax(totalPrice, taxRate){
        return totalPrice * (taxRate / 100);
    }
}

// Setting up cart object 
const cart = new ShoppingCart();

cart.addItem(new Product("Laptop", 1000, 1));
cart.addItem(new Product("Mouse", 150, 2));
cart.addItem(new Product("keyboard", 80, 1));

// Removing the last added product
cart.removeLastItem();


// Getting total price
const totalPrice = cart.getTotalPrice();

// Filtering items based on price
const filteredItems = cart.filterItemsByPrice(50);

// Calculating tax
const taxRate = 10;
const taxAmount = ShoppingCart.calculateTax(totalPrice, taxRate);

