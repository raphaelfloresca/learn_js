const name = 'John';
const age = 30;

// Concatenation (old way of doing things)
console.log('My name is ' + name + ' and I am ' + age);

// Template string (new way)
const hello = `My name is ${name} and I am ${30}`;
console.log(hello);

// String methods
const s = 'Hello World';

// returns the length attribute of s

console.log(s.length); 

// returns s in uppercase
console.log(s.toUpperCase()); 

// takes a substring and returns it to uppercase
console.log(s.substring(0, 5).toUpperCase());

// splits a string into an array
console.log(s.split('')); // '' splits by letter

const tagList = 'technology, computers, it, code';
console.log(tagList.split(', ')); // splits by ', '