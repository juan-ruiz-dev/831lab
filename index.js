// console.log('hello world')
let message = document.querySelector('#message')



const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector('input') 
    const movieTitle = document.createElement("li") 
    const movie = document.createElement("span")
    const list = document.querySelector('ul')
    
    movieTitle.textContent = inputField.value
    list.appendChild(movie)
    movie.appendChild(movieTitle).addEventListener('click', crossOffMovie)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    inputField.value = '';
}


const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}
document.querySelector('form').addEventListener('submit', addMovie)

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    }else {
        message.textContent = 'Movie added back!'
    }
}