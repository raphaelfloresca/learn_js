const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
]

// This function takes 1 second to run
function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

// This function takes two seconds to run
// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }

// This function returns a Promise. Once the function resolves, then the then function is called
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false

            if (!error) {
                resolve()
            } else {
                reject('Error: something went wrong')
            }
        }, 2000)
    })
}

// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err))

// Async / await
// async function init() {

//     // Wait for this function to finish
//     await createPost({ title: 'Post Three', body: 'This is post three' })

//     // Before calling this other function
//     getPosts()
// }
 
// // Call this function
// init()

// Async / await/ fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()

    console.log(data)
}

fetchUsers()

// Promise.all takes an array of promises, avoids using .then() all the time
// const promise1 = Promise.resolve('Hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye'))
// const promise4 = fetch(
//     'https://jsonplaceholder.typicode.com/users'
// )
//     .then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values =>
//         console.log(values))