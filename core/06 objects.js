const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main Street',
        city: 'Boston',
        state: 'MA'
    }
}

// Print entire object
console.log(person);

// Print particular key-value pair in object
console.log(person.firstName, person.lastName); // different logs can be seperated with commas

// Print particular entry of an array which is the value of a key-value pair
console.log(person.hobbies[1]); // should return movies

// Print value of an object within an object
console.log(person.address.city); // should return Boston

// Destructuring pulls out key-value pairs from an object and puts them in variables
const { firstName, lastName, address: { city } } = person; // You can destructure objects within objects like so
console.log(firstName); // Should return John
console.log(city); // Should return Boston

// Add new key-value pair to object
person.email = 'john@gmail.com'
console.log(person);
