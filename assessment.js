document.addEventListener('DOMContentLoaded', () => {
   getMovies() //call function that will list movies in the drop down right when the page is loaded
   listenToFormEvent() //call function that has event listener for the form 
})


const getMovies = () => {
    let url = "https://ghibliapi.herokuapp.com/films"
    fetch(url) //gets films from end point 
    .then(response => response.json()) //returns an array with objects as elements
    .then(dataArr => listMoviesAsOption(dataArr)) // calls function that will add movies to drop down menu
}


const listMoviesAsOption = (data) => {
   for (let i = 0; i < data.length; i++){ // loops through array filled with movie objects
       sel = document.querySelector('.movies') // set variable for select tag
       let opt = document.createElement('option') // create a new option tag
       let movie = data[i] //set variable for each of the movie objects 
       let movieTitle = movie.title //set variable that gets title key in movie object
       let movieReleaseYear = movie.release_date //set variable that gets release_date key in movie object
       let movieDescription = movie.description //set variable that gets description key in movie object

       opt.value = `${movieReleaseYear} 

       ${movieDescription}` //sets option value equal to the movie description and release year
       opt.innerHTML = movieTitle //sets option text to movie title 
       sel.appendChild(opt) //adds new options to drop down menu
   }
   sel.addEventListener('change', displayMovieInfo) //event listener for when user selects a movie
   // calls function that will show user information about that movie
}


const displayMovieInfo = (option) => {
    clearMovieInfo(); //calls function that will remove previous movie info so new movie info is displayed
    let selectedOption = sel.options[sel.selectedIndex] //set variable for specific movie the user selected
    let title = selectedOption.innerHTML //set variable for the title of the specific movie the user selected 
    let description = selectedOption.value // set variable for the description of the specific movie user selected
    
    let movieDiv = document.querySelector("#movieInfo") //set variable for div that will display movie info

    let newTitle = document.createElement("h3") //create new heading 
    newTitle.innerText = title //make new heading the title of the movie 
    
    
    let newDescription = document.createElement("p") //create new paragraph that will display movie description
    newDescription.innerText = description //set paragraph innertext equal to the movies description

    movieDiv.appendChild(newTitle) //add movie title to movie div 
    movieDiv.appendChild(newDescription) //add movie description to movie div

}

const clearMovieInfo = () => { // function that will remove previous movie info when user selects a new movie 
 let movieDiv = document.querySelector("#movieInfo")
 movieDiv.innerHTML = "";
}

const listenToFormEvent = () => { //function that will listen for form submit event & call function that will add users review to the page 
 let form = document.querySelector("form")
 form.addEventListener("submit", (event) => {
    event.preventDefault();
    displayUserReview();

 })
}

const displayUserReview = () => { 
    let inputBox = document.querySelector("#inputBox") //set variable for input box
    let userInput = inputBox.value //set variable that will get value of what user entered into input box
    
    let movieReviews = document.querySelector("#movieReviews") //sets variable for ul that will display users review
    let newReview = document.createElement("li") //set variable for new list item 

    let currentMovie = document.querySelector('h3').innerText//grabs the title of the movie that the user selected
    newReview.innerText = `${currentMovie}: ${userInput}.` //sets inner text of list item we created to the title of the movie and what user entered into inputbox
    movieReviews.appendChild(newReview) // adds new list item to unordered list which will be displayed on the page

    inputBox.value = ''; //empties input box after user has hit submit
}

