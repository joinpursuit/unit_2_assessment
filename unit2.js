
//1. Setup the button for the DOM to listen
document.addEventListener('DOMContentLoaded', () => {
    setupFormListener();
})
//2. Setup for the form listener
const setupFormListener = () => {
    //console.log("it's listening")
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })
}

//3. upload film title to the menu selection options
const createFilmList = () => {
    const url = "https://ghibliapi.herokuapp.com/films/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let filmMenu = document.querySelector('#movie-titles')

            let startOption = document.createElement('option')
            startOption.text = "Choose a Movie"

            filmMenu.add(startOption);
            filmMenu.selectedIndex = 0;

            let movieName;
            for (let i = 0; i <= data.length; i++) {
                movieName = document.createElement('option');
                movieName.innerText = data[i].title;
                filmMenu.add(movieName);
            }
            selectedMovie();
            showMovieInfo(value);
        })
        .catch(err => {
            console.log('Error Alert', err)
        })
}
createFilmList()

//4. Chosen movie

const selectedMovie = () => {
    let pickedMovie = querySelector('#movie-titles').value
    return pickedMovie;
} 

//5. display the selected movie content

const showMovieInfo = (film) => {

    const movieInfoArea = document.querySelector('#movie-content')

    const movieTitle = document.createElement('h3')
    movieTitle.innerText = film.title;

    const movieReleaseYear = document.createElement('p')
    movieReleaseYear.innerText = film.release_date

    const movieDescription = document.createElement('p')
    movieDescription.innerText = film.movieDescription

    movieInfoArea.append(movieTitle)
    movieInfoArea.append(movieReleaseYear)
    movieInfoArea.append(movieDescription)

    showMovieInfo(movieName)
}

//5. store review as a list
const movieReviewList = (film) => {
    let reviewInput = document.querySelector('#review-input')
    let filmReviewLi = document.createElement('li')
    filmReviewLi.innerText = film.title + " " + reviewInput.nodeValue
    reviewInput.appendChild(filmReviewLi)
}