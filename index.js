const baseURL = "https://ghibliapi.herokuapp.com/films"

document.addEventListener("DOMContentLoaded", async () => {
    let allMoviesData = await onlineRequest(baseURL);
    let selectedMovie;

    addMoviesTitlesToSelections (allMoviesData);

    let form = document.querySelector("form");
    form.style.visibility = "hidden";

    let selectMenu = document.querySelector("#selectBox");
    selectMenu.addEventListener("change", async () => {
        if (selectMenu.value === "") {
            selectedMovie = null;
            form.style.visibility = "hidden";
        } else {
            let movieURL = `${baseURL}/${selectMenu.value}`;
            selectedMovie = await onlineRequest(movieURL);
            console.log(selectedMovie)
            form.style.visibility = "visible";
        }

        addMovieToDOM(selectedMovie);

    }) // END OF EVENT LISTNER FOR SELECTION

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

const onlineRequest = async (url) => {
    let onlineResponse = await axios.get(url)
                                    .catch (error => {
                                        console.log(error)
                                    })
    return onlineResponse.data;
}

const addMoviesTitlesToSelections = (fullMoviesInfo) => {
    let selectMenu = document.querySelector("#selectBox");
    
    for (let movie of fullMoviesInfo) {
        let newOption = document.createElement("option");
        newOption.value = movie.id;
        newOption.innerText = movie.title;
        selectMenu.appendChild(newOption);
    }
}

const addMovieToDOM = (movie) => {
    let title = document.querySelector("#title");
    let year = document.querySelector("#year");
    let description = document.querySelector("#description");
    
    if (movie) {
        title.innerText = movie.title;
        year.innerText = movie.release_date;
        description.innerText = movie.description;

    } else {
        title.innerText = "";
        year.innerText = "";
        description.innerText = "";
    }
}