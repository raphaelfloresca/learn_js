// Structure of arrow function
const addNums = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNums(5, 5));

// Note: the following ways are valid ways of writing arrow functions

const addNumsOneLine = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNumsOneLine(5, 5);

const addNumsOneLineReturn = (num1 = 1, num2 = 2) => num1 + num2; // no need for return statement
console.log(addNumsOneLineReturn(5, 5));

const addNumsOneParameter = num1 => num1 + 5 // no need for parentheses if only one parameter
console.log(addNumsOneParameter(5))

// Using arrow functions in todos
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

// Using arrow functions makes using foreach more concise
todos.forEach(todo => console.log(todo.text))