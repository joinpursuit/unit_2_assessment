document.addEventListener('DOMContentLoaded', () => {

    const selector = document.querySelector('#select-movie')
    const form = document.querySelector('#form')
    const randoButton = document.querySelector('#randomize-movie')
   
   grabMovies()

    selector.addEventListener('change', () => {
        changeMovieContent()
        displayMovieContent(selector.selectedIndex - 1)
    }) 

    form.addEventListener('submit', postReview)

    randoButton.addEventListener('click',() => {
        changeMovieContent()
        let newIndex = randomizeMovie()
        displayMovieContent(newIndex)
        selector.selectedIndex = newIndex + 1
    })
})

const mainURL = "https://ghibliapi.herokuapp.com/films"

const grabMovies = async () => {
    const movieRequest = await axios.get(mainURL)
    const movieInfo = movieRequest.data
    console.log(movieInfo)
    createMovieOptions(movieInfo)
}

const createMovieOptions = (movies) => {
    movies.map(renderList)
}

const renderList = (element, index) => {

    const option = document.createElement('option')
    option.text = element.title
    option.id = index 
    document.querySelector('#select-movie').add(option)
}

const changeMovieContent = () => { 
     mainDiv = document.querySelector('#maincontent') 
    mainDiv.innerHTML = ''
}
 
const displayMovieContent = async (optionId) => {

    const movieRequestB = await axios.get(mainURL)
    const movieInfoB = movieRequestB.data[optionId]
    
    const mainDiv = document.querySelector('#maincontent')
    const movieDiv = document.createElement('div')
    movieDiv.id = 'movie-div'

    const createHeading = document.createElement('h3')
    const createYearReleased = document.createElement('p')
    const createSummary = document.createElement('p')     
    
    createHeading.innerText = movieInfoB.title
    createYearReleased.innerText = movieInfoB.release_date
    createSummary.innerText = movieInfoB.description

    movieDiv.appendChild(createHeading)
    movieDiv.appendChild(createYearReleased)
    movieDiv.appendChild(createSummary)
    
    mainDiv.appendChild(movieDiv)
 }

const randomizeMovie = () => {
    let randomIndex = Math.floor(Math.random() * 20)
    return randomIndex
}

const postReview = () => {
    event.preventDefault()

    const selector = document.querySelector('#select-movie')
    listValue = selector.options[selector.selectedIndex -1].text
    selector.style.fontweight = listValue

    const reviewsList = document.querySelector('#reviews')
    const reviewInput = document.querySelector('#write-review')
    const reviewPost = document.createElement('li')

    reviewPost.innerText = selector.value + ': ' + reviewInput.value
    reviewsList.appendChild(reviewPost)
     reviewInput.value = ''
   
}











