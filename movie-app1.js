document.addEventListener('DOMContentLoaded', () => {
    const selector = document.querySelector('#select-movie')
    const form = document.querySelector('#form')

    selector.addEventListener('change', () => {
       if (mainDiv === '') {
           displayMovieContent(selector.selectedIndex - 1)
       } else {
           displayMovieContent(selector.selectedIndex - 1)
       }
    }) 
    form.addEventListener('submit', postReview)
})

const mainDiv = document.querySelector('#maincontent')
const optionVal = document.querySelector('option')
const mainURL = "https://ghibliapi.herokuapp.com/films"

const grabMovies = async () => {
    const movieRequest = await axios.get(mainURL)
    const movieInfo = movieRequest.data
    console.log(movieInfo)
    createMovieOptions(movieInfo)
}
grabMovies()

const createMovieOptions = (movies) => {
    const selector = document.querySelector('#select-movie')
    let index = 1
    for (let i = 0; i < movies.length; i++){
        const option = document.createElement('option')
        option.text = movies[i].title
        option.id = index
        selector.add(option)
        index++
    }
}

const displayMovieContent = async (optionId) => {

    const movieRequestB = await axios.get(mainURL)
    const movieInfoB = movieRequestB.data[optionId]
    
    const mainDiv = document.querySelector('#maincontent')
    const movieDiv = document.createElement('div')
    const createHeading = document.createElement('h5')
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

//  displayMovieContent(3)


const postReview = () => {
    event.preventDefault()

    const reviewsList = document.querySelector('#reviews')
    const reviewPost = document.createElement('li')
    
    // const formInput = 
}











