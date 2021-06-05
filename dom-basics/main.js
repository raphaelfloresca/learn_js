// Window is the highest level of the DOM - parent object of the browser
// console.log(window);

// Alert is part of the window object, don't need to reference window object if something is already in window
// window.alert(1);

// Single element selector

// getElementById
// const form = document.getElementById('my-form');
// console.log(form); // Returns the HTML element which matches this ID

// querySelector
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1')); // returns the first thing that matches this query

// Multiple elements

// console.log(document.querySelectorAll('.item')); // returns a NodeList, can use array methods
// console.log(document.getElementsByClassName('item')); // returns an HTML collection, don't use
// console.log(document.getElementsByTagName('li')); // returns an HTML collection, don't use

// Loop through with querySelectorAll
// const items = document.querySelectorAll('.item'); items.forEach((item) => console.log(item));

// Manipulate the DOM
// const ul = document.querySelector('.items');

// ul.remove(); // removes all uls
// ul.lastElementChild.remove(); // removes last ul child element
// ul.firstElementChild.textContent = 'Hello'; // changes first ul child element
// Change second item in list
// ul.children[1].innerText = 'Brad'; // innerText does not include any script or style tags in the inner content;
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>' // Add HTML dynamically

// Change CSS element 
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// Event listener (this is on click, others could include mouseout and hover)
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.className); // Log out the target object on the click event to get hte class name
//     document.querySelector('#my-form').style.background = '#ccc'; // changes the colour of the form background
//     document.querySelector('body').classList.add('bg-dark'); // add class to an HTML element
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })

// Make the form functional

// Get all form and list elements
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Event listner lists to submit event
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // Form validation
    if (nameInput.value === '' || emailInput.value === '') {
        // add error class
        msg.classList.add('error');
        // display text in msg
        msg.innerHTML = 'Please enter all fields';

        // msg will go away after 3 seconds
        setTimeout(() => msg.remove(), 3000)
    } else {
        console.log('success');
        // Create list item
        const li = document.createElement('li');
        // Append text to list item
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // Append li to userList
        userList.appendChild(li);

        // Clear fields when submitted
        nameInput.value = '';
        emailInput.value = '';
    }
}