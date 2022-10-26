// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.newRole = Manager;
    }
}
// const Shape = require('./shape');

// class Rectangle extends Shape {
//   constructor(sideA, sideB) {
//     const area = sideA * sideB;
//     const perimeter = sideA * 2 + sideB * 2;

//     super(area, perimeter);
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
// }

// const rectangle = new Rectangle(12, 9);
// rectangle.printInfo();
