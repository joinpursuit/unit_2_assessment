document.addEventListener('DOMContentLoaded', () => {

    const selector = document.querySelector('#select-movie')
    const form = document.querySelector('#form')
    const mainDiv = document.querySelector('#maincontent')
   
    const grabMovies = async () => {
        const movieRequest = await axios.get(mainURL)
        const movieInfo = movieRequest.data
        console.log(movieInfo)
        createMovieOptions(movieInfo)
    }
   /*
   
   const movieData = grabMovies()
   createMovieOptions(movieData)
   */
   grabMovies()

    selector.addEventListener('change', () => {
       if (mainDiv.innerHTML === '') {
           displayMovieContent(selector.selectedIndex - 1)
       } else if (mainDiv.innerHTML !== '') {
           mainDiv.innerHTML = ''
           displayMovieContent(selector.selectedIndex - 1)
       }
    }) 

    form.addEventListener('submit', postReview)
    
})

const mainURL = "https://ghibliapi.herokuapp.com/films"

// const createMovieOptions = (movies) => {
//     const selector = document.querySelector('#select-movie')
//     // let index = 1
//     for (let i = 0; i < movies.length; i++){
//         const option = document.createElement('option')
//         option.text = movies[i].title
//         option.id = i
//         selector.add(option)
//         // index++
//     }
// }

const createMovieOptions = (movies) => {
    movies.map(renderList)
    // let index = 1
    // for (let i = 0; i < movies.length; i++){
  
    //     index++
    // }
}

const renderList = (element, index) => {

    const option = document.createElement('option')
    option.text = element.title
    option.id = index
    document.querySelector('#select-movie').add(option)
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



const postReview = () => {
    event.preventDefault()

    const selector = document.querySelector('#select-movie')
    const reviewsList = document.querySelector('#reviews')
    const reviewInput = document.querySelector('#write-review')
    const reviewPost = document.createElement('li')
    const formInput = reviewInput.value

    reviewPost.innerText = selector.value + ': ' + formInput
    reviewsList.appendChild(reviewPost)
    console.log(formInput.innerText)
     reviewInput.value = ''
   
}











