const xString = '10';

// == only matches value
if (xString == 10) {
    console.log('x is 10');
}

// === matches type, generally use this more often
if (xString === 10) {
    console.log('x is 10');
}

// Structure of if-else statement
const x = 4;
// const x = 10
// const x = 20;
const y = 11;

if (x > 5 && y > 10) { // and is represented by &&
    console.log('x is more than 5 and y is more than 10');
} else if (x > 5 || y > 10) { // or is represented by ||
    console.log('x is more than 5 or y is more than 10');
}

// Ternary operator
const xTernary = 10;
const color = xTernary > 10 ? 'red' : 'blue';
console.log(color); // Should return blue

// Switch statement
switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
} // Should return 'Color is blue'