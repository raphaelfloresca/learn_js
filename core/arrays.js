// Old way of making an array using an array constructor, not used very often anymore
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// More common way
const fruits = ['apples', 'oranges', 'pears', 10, true]; // can put different data types in an array, don't need to set array length at start either
console.log(fruits);

// Accessing specific entries in an array
console.log(fruits[1]); 

// New values can be appended to an array defined as a const, but the entire array itself cannot be redefined
fruits[5] = 'grapes'; 
console.log(fruits);

// Appends entry to end of array
fruits.push('mangos');

// Appends entry to start of array
fruits.unshift('strawberries');
console.log(fruits)

// Removes last item from array
fruits.pop()
console.log(fruits)

// Check if something is an array
console.log(Array.isArray(fruits)); 
console.log(Array.isArray('hello'));

// Find index of array entry
console.log(fruits.indexOf('oranges'));