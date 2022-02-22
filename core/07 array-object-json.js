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

// Print out particular value from an entry in an array of objects
console.log(todos[2].text) // should return meeting with boss

// Convert string to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);