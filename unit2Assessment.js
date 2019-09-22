document.addEventListener("DOMContentLoaded", () => {
  getReadyToFetch();
  whenMovieIsClicked();
  whenSubmitButtonIsClicked();
})

//CLEAR THE SPACE FUNCTION
const clearMovieDescriptionSpace = () => {
  //this says inner html is empty when this is called
  //using variable to hold that we want the specific movie description section
  const movieDescriptionSpace = document.querySelector("#selectedMovieInfoSection");
  movieDescriptionSpace.innerHTML = "";
}

//Following Pokemon example, function to set main space anticipating the fetch
const getReadyToFetch = () => {
  clearMovieDescriptionSpace();
  fetchMovieInfo();
}

//FETCH
function fetchMovieInfo() {
  let url ="https://ghibliapi.herokuapp.com/films";

  fetch(url)
    //our Ghibli movies come back as an array of objects
    .then(response => response.json())
    .then(movies => {

      for (let i = 0; i < movies.length; i++) {

      let movieTitle = movies[i].title

      let dropdownBox = document.querySelector("#dropdownBox");
      let newOptionLine = document.createElement("option");
          newOptionLine.innerText = movieTitle;
          dropdownBox.appendChild(newOptionLine);
      }
      whenMovieIsClicked();
    }
  }


//____________________
//ABOUT THE SELECT BOX DROPDOWN
//the movies should be options in our select box dropdown
  //for each movie, add a new option to our select box
  //ex of option: <option value="books">Books</option>
  //option's inner text? should be the movie's title
  //how do we have the first option in select have a blank inner text?
//____________________

//This first dropdown line always exists
let firstDropdownOption = document.getElementById("#firstOption");
firstDropdownOption.innerText = "";

const whenMovieIsClicked = () => {
  newOptionLine.addEventListener("click", addMovieDescriptionToPage);
}

//____________________
//ABOUT THE EMPTY DIV
//the div is empty at the start (no html, no text)
//on user selecting a movie, that movie[i]'s info is put into the empty div
  //adds i guess an h2 for movie title, p tag for year, p tag for description
//on user selecting another movie, you clear the last film's info first
  //then add the newly selected film's info to the page (CLEAR THE SPACE)
//____________________

const addMovieDescriptionToPage = () => {
  for (let j = 0; j < movies.length; j++) {
    let movieYear = movies[i].release_date;
    let movieDescription = movies[i].description;

    let currentTitle = document.createElement("h2");
    let currentReleaseDate = document.createElement("p");
    let currentDescription = document.createElement("p");

    currentTitle.innerText = movieTitle;
    currentReleaseDate.innerText = movieYear;
    currentDescription.innerText = movieDescription;

    let movieArea = document.getElementById("#selectedMovieInfoSection");
    movieArea.appendChild(currentTitle);
    movieArea.appendChild(currentReleaseDate);
    movieArea.appendChild(currentDescription);
  }
}

//BEYOND POST FETCH
//USER ADDS REVIEW BASED ON MOVIE
const whenSubmitButtonIsClicked = () => {
  //pull our button and say when clicked perform submitting function
  const submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", addUserReviewToList);
}

const addUserReviewToList = () => {
  //this line says pull the ul using its id
  //and set it to a variable so we can reference it
  //should the userReviewsList container be in here or outside a function?
  let userReviewsList = document.querySelector("#reviewsListContainer");

  //create a new li
  let newReview = document.createElement("li");
  //add an li to the review list ul
  userReviewsList.appendChild(newReview);

  //li's innerText should have the text entered in my input text box
  newReview.innerText = userReviewEntry.innerText;
}
