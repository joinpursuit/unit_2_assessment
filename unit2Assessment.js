document.addEventListener("DOMContentLoaded", () => {
  // console.log("just checking on things so far");
  //does this submit button function actually go here? check back after fetch
  whenSubmitButtonIsClicked();
  //on load, the fetch should have provided movie info for the select box dropdown

  //on dropdown selection, fetch provides info for items you are adding to main
})

//____________________
//ABOUT THE SELECT BOX DROPDOWN
//we are *FETCHING*: movie title, release year, description
  /*OK so we can fetch by movies or by ID
  if we do by id then
    */
//the movies should be options in our select box dropdown
//the movies array for the select box should be: [""], movie1, movie2, etc] with the default
  //selection blank
//____________________


//____________________
//

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

//FETCH FUNCTION IN PROGRESS
// const fetchMovieInfo = () => {
//   //remove log later
//   console.log("just testing out that this appears in some fashion");
//
//   let url ="https://ghibliapi.herokuapp.com/films";
//
//   fetch(url)
//     //just a reminder, this is going to return an object
//     .then(response => response.json())
//     .then(movies => {
//
//     })
// }
//____________________

//____________________
//ABOUT THE EMPTY DIV
//the div is empty at the start (no html, no text)
//on user selecting a movie, that movie[i]'s info is put into the empty div
  //adds i guess an h2 for movie title, p tag for year, p tag for description
//on user selecting another movie, you clear the last film's info first
  //then add the newly selected film's info to the page (CLEAR THE SPACE)
//____________________


//POST FETCH
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
