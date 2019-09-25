const baseURL = "https://ghibliapi.herokuapp.com/films"

document.addEventListener("DOMContentLoaded", async () => {
    let allMoviesData = await onlineRequest(baseURL);
    let selectedMovie;
    let specificReviewsSelected = false;

    addMoviesTitlesToSelections(allMoviesData);

    let form = document.querySelector("form");
    form.style.visibility = "hidden";
    
    let reviewContainer = document.querySelector("#reviewContainer");
    reviewContainer.style.visibility = "hidden";

    let reviewUl = document.querySelector("#reviews");
    
    let specificReviewUl = document.querySelector("#specificReviews");
    specificReviewUl.style.display = "none";

    let selectMenu = document.querySelector("#selectBox");
    selectMenu.addEventListener("change", async () => {
        console.log(specificReviewsSelected)
        if (selectMenu.value === "") {
            selectedMovie = null;
            form.style.visibility = "hidden";
            reviewContainer.style.visibility = "hidden";
        } else {                                                 // I HAD TO SWITCH THE selectedMenu.value FROM HOLDING THE MOVIE ID TO THE INDEX OF THE MOVIE
            // let movieURL = `${baseURL}/${selectMenu.value}`;  THIS IS HOW TO MAKE A NEW NETWORK REQUEST TO HAVE ALL INFORMATIONS RELATIVE TO THE SELECTED MOVIE
            // selectedMovie = await onlineRequest(movieURL);    BUT I FOUND A BETTER WAY TO GET THESE INFORMATIONS 
            selectedMovie = allMoviesData[selectMenu.value];
            form.style.visibility = "visible";
            reviewContainer.style.visibility = "visible";

            manageDisplayOfReviews(specificReviewsSelected, specificReviewUl, reviewUl, selectedMovie);
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
            let boldText = document.createElement("strong");
            boldText.innerText = `${title}: `;
            newReview.appendChild(boldText);
            let newSpan = document.createElement("span");
            newSpan.innerText = reviewInput.value;
            newReview.appendChild(newSpan);
            reviewsContainer.appendChild(newReview);
            
            addReviewToSelectedMovie(selectedMovie, reviewInput.value);
            reviewInput.value = "";

            if (specificReviewsSelected) {
                addSpecificReviewsToDom(specificReviewUl, selectedMovie)
            }
        }
    }) // END OF EVENT LISTNER FOR FORM

    let checkbox = document.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            specificReviewsSelected = true;
        } else {
            specificReviewsSelected = false;
        }

        manageDisplayOfReviews(specificReviewsSelected, specificReviewUl, reviewUl, selectedMovie);
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
    
    for (let i = 0; i < fullMoviesInfo.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = i;
        newOption.innerText = fullMoviesInfo[i].title;
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

const addReviewToSelectedMovie = (movie, review) => {
    if (!movie.reviews) {
        movie.reviews = [];
    }
    movie.reviews.push(review);
}

const manageDisplayOfReviews = (spReview, spReviewParent, mixedReviews, movie) => {
    if (spReview) {
        spReviewParent.style.display = "block";
        mixedReviews.style.display = "none";
        addSpecificReviewsToDom(spReviewParent, movie);
    } else {
        spReviewParent.style.display = "none";
        mixedReviews.style.display = "block";
    }
}

const addSpecificReviewsToDom = (parent, movie) => {
    parent.innerText = "Reviews :";

    if (movie.reviews) {
        for (let review of movie.reviews) {
            let newLi = document.createElement("li");
            newLi.innerText = review;
            parent.appendChild(newLi)
        }
    }
}