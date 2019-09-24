const baseURL = "https://ghibliapi.herokuapp.com/films"

document.addEventListener("DOMContentLoaded", async () => {
    let allMoviesData = await getAllMovies();
    let selectedMovie;

    addMoviesTitlesToSelections (allMoviesData);

    let SelecMenu = document.querySelector("#selectBox");
    SelecMenu.addEventListener("change", () => {

        let MoviesList = document.querySelectorAll("option");

        if (MoviesList[0].selected) {
            selectedMovie = null;
            return; // USING THIS TO PREVENT REVIEW WHEN NO SELECTION
        }

        for (let i = 1; i < MoviesList.length; i++) {

            if (MoviesList[i].selected) {
                selectedMovie = MoviesList[i].innerText;
                getInfoAboutMovie(allMoviesData, selectedMovie);
                break;
            }
        }
    }) // END OF EVENT LISTNER FOR SELECTION

    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let title = document.querySelector("#title").innerText;
        let reviewInput = form.querySelector("input[type='text']");
        
        if (selectedMovie && reviewInput.value) {
            let reviewsContainer = document.querySelector("#reviews");

            let newReview = document.createElement("li");
            newReview.innerHTML = `<strong>${title}:</strong> ${reviewInput.value}`;
            reviewsContainer.appendChild(newReview);
            reviewInput.value = "";
        }
    })


}) // DOM CONTENT LOADED

const getAllMovies = async () => {
    let onlineResponse = await axios.get(baseURL)
                                    .catch (error => {
                                        console.log(error)
                                    })
    return onlineResponse.data;
}

const addMoviesTitlesToSelections = (fullMoviesInfo) => {
    let SelecMenu = document.querySelector("#selectBox");
    
    for (let movie of fullMoviesInfo) {
        let newOption = document.createElement("option");
        newOption.value = movie.title;
        newOption.innerText = movie.title;
        SelecMenu.appendChild(newOption);
    }
}

const getInfoAboutMovie = (allFilms, title) => {
    for (let movie of allFilms) {
        if (movie.title === title) {
            addMovieToDOM(movie);
            break;
        }
    }
}

const addMovieToDOM = (movie) => {
    let title = document.querySelector("#title");
    title.innerText = movie.title;

    let year = document.querySelector("#year");
    year.innerText = movie.release_date;

    let description = document.querySelector("#description");
    description.innerText = movie.description;
}