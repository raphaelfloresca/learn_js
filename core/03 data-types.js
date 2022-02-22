// primitive datatypes are directly assigned to memory
// types: String, Numbers, Boolean, null, undefined, Symbol (not very common)

const name = 'John' // semi-colon not mandatory, but generally used by most people
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // this return undefined

console.log(typeof name); // should print string
console.log(typeof age); // should print number
console.log(typeof rating); // should print number, no diferent if int or float etc
console.log(typeof isCool); // should print boolean
console.log(typeof x); // returns object, but this is because of an idiosyncracy in the first implementation of JS
console.log(typeof y); // returns undefined
console.log(typeof z); // returns undefined