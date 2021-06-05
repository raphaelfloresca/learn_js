// Structure of function definition
function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5, 4);
addNums(); // Returns NaN - not a number because values not passed in

// Default values for parameters
function addNumsDefault(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

addNumsDefault();

// Functions should generally return a value
function addNumsReturn(num1 = 1, num2 = 2) {
    return num1 + num2
}

console.log(addNumsReturn(5, 5));