document.addEventListener("DOMContentLoaded", () => {
    getMovieInformation()
    setUpButtonListeners()
})

const setUpButtonListeners = () => {
    const getSubmitButton = document.getElementById("submit-review");
    getSubmitButton.addEventListener("click", submitReview);
    const selectList = document.querySelector("select")
    selectList.addEventListener("change", renderMovieInfo)
}

const cleanMovies = () => {
    const movieArea = document.getElementById("main-container")
    movieArea.innerHTML = "";
}

const renderMovieInfo = () => {
    cleanMovies()
    const url = "https://ghibliapi.herokuapp.com/films/";
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        let selectList = document.querySelector("select");
        let currentSelection = selectList.options[selectList.selectedIndex].text
        console.log(movies)
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].title === currentSelection) {
                let container = document.getElementById("main-container")
                let title = document.createElement("h3")
                title.id = "title"
                movieTitle = movies[i].title
                movieTitle = movieTitle.bold()
                title.innerHTML = movieTitle
                container.appendChild(title)

                let releaseYear = document.createElement("p")
                releaseYear.id = "release-year"
                releaseYear.innerText = "Release Date: " + movies[i].release_date
                container.appendChild(releaseYear)

                let description = document.createElement("p")
                description.id = "description"
                description.innerText = "Description: " + movies[i].description   
                container.appendChild(description)
            }
            
        }

    })
}

const submitReview = () => {
    event.preventDefault()
    let review = document.getElementById("response").value;
    let reviewHolder = document.getElementById("submitted-review");
    
    let selectList = document.querySelector("select");
    let currentSelection = selectList.options[selectList.selectedIndex].text
    currentSelection = currentSelection.bold()
    
    let reviewSubmission = document.createElement("li");
    reviewSubmission.innerHTML = currentSelection + ": " + review

    reviewHolder.appendChild(reviewSubmission);

    console.log("review was submitted")
}

const getMovieInformation = () => {
    let selectList = document.querySelector("select");
    selectList.size = 0;

    let defaultOption = document.createElement("option");
   
    defaultOption.text = "Choose Movie";
    selectList.add(defaultOption);
    // Creates a default value that prompts user to select an option

    const url = "https://ghibliapi.herokuapp.com/films/";
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        let option;
        for (let i = 0; i < movies.length; i++) {
            // console.log(movies[i].title)

            option = document.createElement("option");
            option.text = movies[i].title;
            // adds option to select element
            option.value = [i];
            // assigns a value to each movie option
            selectList.add(option);
            console.log(option.text);

            // Creates an option within the selct tag for each of the movies
        }
    })
}


