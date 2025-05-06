class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // Instance method
    area(){
        return Math.PI * this.radius **2;
    }

    // Static method
    static compareAreas(circle1, circle2){
        return circle1.area() - circle2.area();
    }
}
const circleOne = new Circle(5);
const circleTwo = new Circle(3);

console.log(circleOne.area);  // instance method: 78.54...
console.log(Circle.compareAreas(circleOne, circleTwo)); // static method: compares without creating a new object