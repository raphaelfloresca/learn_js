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

// forEach - for each entry in array, do this
todos.forEach(function(todo) {
    console.log(todo.text);
})

// map - take an array, apply a function to each entry and return a new array
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText); // Should just return a new array with just the text

// filter - return only the entries of an array which satisfy some condition
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) { // This takes the array returned by filter and maps the desired parts of its entries to a new array
    return todo.text;
})

console.log(todoCompleted);