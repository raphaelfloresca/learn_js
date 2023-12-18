// 1. EXAMINING THE DOCUMENT OBJECT //

// Examine the document object
// console.dir(document)

// Show domain of page
// console.log(document.domain)

// Show full URL of page
// console.log(document.URL)

// Show title of page
// console.log(document.title)

// Change page title like so
// document.title = 123

// Show doctype of page
// console.log(document.doctype)

// Show contents of head tag
// console.log(document.head)

// Show contents of body tag
// console.log(document.body)

// Show every single tag as an entry in an HTML collection array
// console.log(document.all)

// You can change a tag by calling its index in the HTML collection, but this is not best practice. If new elements are added, the wrong element will be selected
// document.all[10].textContent = "Hello"

// Return the first form on the page (lists out all forms as an HTML collection)
// console.log(document.forms[0])

// Return all links in an HTML collection
// console.log(document.links)

// Return all images in an HTML collection
// console.log(document.images)

// 2. GET ELEMENT BY ID //

// Get element with the id header-title
// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle)

// textContent returns all elements including styling - should see elements with style set to hidden
// console.log(headerTitle.textContent)

// innerText ignores styling - cannot see hidden elements
// console.log(headerTitle.innerText)

// You can change the text of a tag with textContent or innerText
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye'

// innerHTML allows new HTML to be inserted inside an element
// headerTitle.innerHTML = '<h3>Hello</h3>'

// You can add CSS styles with the style method
// const header = document.getElementById('main-header')
// header.style.borderBottom = 'solid 3px #000'

// 3. GET ELEMENTS BY CLASSNAME //

// Get all elements which have this class
// const items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])

// Change individual items
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// This will return an error
// items.style.backgroundColor = '#f4f4f4'

// You can loop through each element to change all elements in the selected items
// Array.from(items).forEach(item => {
//     item.style.backgroundColor = '#f4f4f4'
// })

// 3. GET ELEMENTS BY TAG NAME //
// const li = document.getElementsByTagName('li')

// You can loop through each element to change all li items, this targest all li items, even those not included in the list-group-item class
// Array.from(li).forEach(item => {
//     item.style.backgroundColor = '#f4f4f4'
// })

// 4. QUERY SELECTOR //
// Get the first item which matches the CSS selector - in this case, the main-header id
// const header = document.querySelector('#main-header')

// // Change style of query selector
// header.style.borderBottom = 'solid 4px #ccc'

// // Get first input item and change its value
// const input = document.querySelector('input')
// input.value = 'Hello, world!'

// // Select specific type of input
// const submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// // Select first list group item
// const item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// // Select last group item
// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// // Select 2nd list group item
// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'

// 5. QUERY SELECTOR ALL //

// // Returns all elements with a title class
// const titles = document.querySelectorAll('.title')

// // Returns a NodeList - you can run array methods on this
// console.log(titles)

// // titles[0].textContent = 'Hello

// // Select all odd and even elements
// const odd = document.querySelectorAll('li:nth-child(odd)')
// const even = document.querySelectorAll('li:nth-child(even)')

// // Change background colors of odd and even elements
// even.forEach(item => item.style.backgroundColor = "#f4f4f4")
// odd.forEach(item => item.style.backgroundColor = "#d3d3d3")

// 6. TRAVERSING THE DOM //

// const itemList = document.querySelector('#items')

// Parent node

// // Print parent node
// console.log(itemList.parentNode)

// // Change background colour of parent node
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// // Print parent node of parent node
// console.log(itemList.parentNode.parentNode)

// // Can be chained all the way up
// console.log(itemList.parentNode.parentNode.parentNode)

// Note: parentElement can be used in place of parentNode

// // Child nodes returns the children of a node, but if there are line breaks, these are returned as text nodes in the NodeList.
// console.log(itemList.childNodes)

// // Use children instead - this returns an HTMLCollection
// console.log(itemList.children)

// // Query out the first element in the children and modify it
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// // Don't use firstChild as this has the same problem as using childNodes
// console.log(itemList.firstChild)

// // Use firstElementChild instead
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

// // Also use lastElementChild instead of lastChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'

// // nextSibling and nextElementSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// // previousSibling and previousElementSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)

// 7. CREATING ELEMENTS //

// // Create a div
// const newDiv = document.createElement('div')

// // Add class
// newDiv.className = 'hello'

// // Add id
// newDiv.id = 'hello1'

// // Add attr
// newDiv.setAttribute('title', 'Hello Div')

// // Create text node
// const newDivText = document.createTextNode('Hello world')

// // Add text to div
// newDiv.appendChild(newDivText)

// // Select the container where you want to insert a new element
// const container = document.querySelector('header .container')

// // Select the header before which you want to insert a new element
// const h1 = document.querySelector('header h1')

// console.log(newDiv)

// // Change font size
// newDiv.style.fontSize = '30px'

// // Insert new font size
// container.insertBefore(newDiv, h1)

const button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick(e) {
    console.log('Button clicked')
    document.getElementById('header-title').textContent = 'Changed'
    document.querySelector('#main').style.backgroundColor = '#f4f4f4'
}