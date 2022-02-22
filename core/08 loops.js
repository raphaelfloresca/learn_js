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

// For loop
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// For loop through array
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// For-of loop, more readable way to loop through array
for (let todo of todos) {
    console.log(todo.id);
}
