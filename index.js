document.addEventListener('DOMContentLoaded', () => {
    getMovie()
})

document.addEventListener('submit', () => {
    event.preventDefault()
    review()
})

const getMovie = () => {
    axios.get('https://ghibliapi.herokuapp.com/films').then(response => {
        let data = response.data
        console.log(data);
        addAllMovies(data)
    })
}

const addAllMovies = (data) => {
    let select = document.querySelector('select')
    for (let i = 0; i < data.length; i++) {
        let new_option = document.createElement('option')
        new_option.innerText = data[i].title
        new_option.id = data[i].id
        select.appendChild(new_option)
    }
}

const getInfo = () => {
    let select = document.querySelector('select')
    let number = select.selectedIndex
    let selected = select[number]
    if (number !== 0) {
        axios.get('https://ghibliapi.herokuapp.com/films/' + selected.id)
            .then(response => {
                let data = response.data
                console.log(data);
                postInfo(data)
            })
    }
}

const postInfo = (data) => {
    let title = document.querySelector('h3')
    title.innerText = data.title
    let year = document.getElementById('year')
    let director = document.getElementById('director')
    let description = document.getElementById('description')
    year.innerText = (`Title: ${data.release_date}`)
    director.innerText = (`Director: ${data.director}`)
    description.innerText = (`Description: ${data.description}`)
}

const review = () =>{
    let review_paragraph = document.createElement('p')
    let form = document.querySelector('form')
    let movie = document.querySelector('h3')
    let input = document.querySelector('input')
    console.log(input.value);
    review_paragraph.innerText = (`${movie.innerText}: ${input.value}`)
    if(movie.innerText && input.value){
    form.appendChild(review_paragraph)
    removeExtraChild()
    }
}

const removeExtraChild = () =>{
    let form = document.querySelector('form')
    console.log(form.children);
    if(form.children.length >= 8){
        let last = form.children[2]
        form.removeChild(last)
    }
}