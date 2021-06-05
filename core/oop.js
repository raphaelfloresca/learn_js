// // Constructor function
// function Person(firstName, lastName, dob) {
//     // Attributes
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

//     // Methods in the constructor function, these show up in the object when printed to console
//     // this.getBirthYear = () => this.dob.getFullYear();
//     // this.getFullName = () => `${this.firstName} ${this.lastName}`;
// }

// // You can put methods in the prototype so that functions are not in every object instance, use regular function notation
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// CLASSES: synctactic sugar for the above process
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

// Check to see where prototype methods and attributes are stored
console.log(person1);

// Can get particular properties from date object
console.log(person2.dob.getFullYear());

// console.log(person1.getBirthYear());
console.log(person1.getFullName());