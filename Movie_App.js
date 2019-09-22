document.addEventListener("DOMContentLoaded", () => {
    fillSelectTag();
    getIds();

    window.addEventListener("load", start, false);

    let form1 = document.querySelector('#form')
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        let review = document.querySelector('#review');
        // let newItem = document.querySelector('#new_item');

        let reviewLocation = document.querySelector('#submited-reviews');
        let newReview = document.createElement("li");

        let bold = document.createElement("B");
        let title = document.createTextNode(currentMovie());

        let userReview = document.createTextNode(": " + review.value);
        
        bold.appendChild(title);

        newReview.appendChild(bold);
        newReview.appendChild(userReview);

        reviewLocation.appendChild(newReview);
        console.log("booyah")
        //It took me forever to figure this out >.< Look at my pain!
        // reviewLocation.appendChild(bold);
        // boldWords.appendChild(bold)
        // thisTitle.fontWeight = "bold";
        // newReview.innerText = ": " + review.value;
    })

})

function fillSelectTag () {
    //I will pull the 20 movies from the api and put them in my select tag
    fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => {
        // console.log(response.json());
        return response.json();
    })
    .then(movies => {
        for (let movie of movies) {
            let movieSelection = document.querySelector('#select-movie');
            let newMovie = document.createElement("option");

            newMovie.innerText = movie.title;

            movieSelection.appendChild(newMovie);
        }
    })
}

function start() {
    document.querySelector("#select-movie").addEventListener("change", getIds, false);
}

function currentMovie () {
    return document.querySelector('#select-movie').value;
}


function getIds () {
    //option selection is triggered
    fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => {
        // console.log(response.json());
        return response.json();
    })
    .then(movies => {
        for (let movie of movies) {
            // let movieSelection = document.querySelector('#select-movie');
            // let newMovie = document.createElement("option");

            if(movie.title === currentMovie()) {
                // fetchMovie(movie.id);
                printInfo(movie.title, movie.release_date, movie.description);
                break;
            }
            // movieSelection.appendChild(newMovie);
        }
    })
}

function printInfo (title, date, description) {
    let currentTitle = document.querySelector('#movie-title');
    let currentDate = document.querySelector('#release-date');
    let currentDescription = document.querySelector('#description');

    let newTitle = document.createElement('h3')
    let newDate = document.createElement('p')
    let newDescription = document.createElement('p')


    newTitle.innerText = title;
    newTitle.id = "movie-title";
    newDate.innerText = date;
    newDate.id = "release-date";
    newDescription.innerText = description;
    newDescription.id = "description";


    currentTitle.parentNode.replaceChild(newTitle, currentTitle);
    currentDate.parentNode.replaceChild(newDate, currentDate)
    currentDescription.parentNode.replaceChild(newDescription, currentDescription)
}

// function fetchMovie (id) {
//     //I will pull the 20 movies from the api and put them in my select tag
//     fetch("https://ghibliapi.herokuapp.com/films/" + id)
//     .then((response) => {
//         // console.log(response.json());
//         return response.json();
//     })
//     .then(movies => {
//         for (let movie of movies) {
//             let movieSelection = document.querySelector('#select-movie');
//             let newMovie = document.createElement("option");

//             newMovie.innerText = movie.title;

//             movieSelection.appendChild(newMovie);
//         }
//     })
// }

