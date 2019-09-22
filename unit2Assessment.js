document.addEventListener("DOMContentLoaded", () => {
  getReadyToFetch();
  whenMovieIsClicked();
  whenSubmitButtonIsClicked();
})

//CLEAR THE SPACE FUNCTION
const clearMovieDescriptionSpace = () => {

  const movieDescriptionSpace = document.querySelector("#selectedMovieInfoSection");
  movieDescriptionSpace.innerHTML = "";
}


const getReadyToFetch = () => {
  clearMovieDescriptionSpace();
  fetchMovieInfo();
}

//FETCH
function fetchMovieInfo() {
  let url ="https://ghibliapi.herokuapp.com/films";
  let dropdownBox = document.querySelector("#dropdownBox");

  fetch(url)
    //our Ghibli movies come back as an array of objects
    .then(response => response.json())
    .then(movies => {


      for (let i = 0; i < movies.length; i++) {
      let movieTitle = movies[i].title

      let newOptionLine = document.createElement("option")
          newOptionLine.innerText = movieTitle
          dropdownBox.appendChild(newOptionLine)
        }

      whenMovieIsClicked(newOptionLine);
    })
  }

  const whenMovieIsClicked = () => {
    form.display = "block";

    newOptionLine.addEventListener("change", (movies) => {
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
    })
  }

//This first dropdown line always exists
let firstDropdownOption = document.getElementById("#firstDropdownOption");
firstDropdownOption = " ";

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
