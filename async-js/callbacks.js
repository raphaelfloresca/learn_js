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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

// The callback function is run after createPost is finished 
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts)
