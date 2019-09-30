let allMovies; // global variable to don't have to fetch again for the selected movie

document.addEventListener('DOMContentLoaded', () => {

fetchAllTitles();

const droplist = document.querySelector('#droplist')
droplist.addEventListener("change", () => {
    let selectedTitle = droplist.value;
    addMovieInfoToDOM(selectedTitle);
})

let reviewForm = document.querySelector("#reviewForm");
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let reviewTextInput = document.querySelector("#reviewText")
  console.log(reviewTextInput.value)
  if (reviewTextInput.value !== "") {
    addReviewToDOM(reviewTextInput.value)
    reviewTextInput.value = "";
  }
})

})


const fetchAllTitles=()=>{
  
  const url =` https://ghibliapi.herokuapp.com/films`
  // console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(films => {
    // console.log(films)
    allMovies = films;
    let select =document.querySelector('#droplist')
    for (let i = 0; i< films.length; i++) {
      let titleFilms = films[i].title
      let options = document.createElement('option');
      options.value = titleFilms;
      options.innerText = titleFilms;
      select.appendChild(options)
    }
   })
 }

 const addMovieInfoToDOM = (title) => {
   let titleMovie = document.querySelector("#titleMovie");
   let year = document.querySelector("#year");
   let description = document.querySelector("#description");

   if (title === "" && !title) {
    titleMovie.innerText = "";
    year.innerText = "";
    description.innerText = "";
   } else {
     for (let i = 0; i < allMovies.length; i++) {
       if (title === allMovies[i].title) {
         titleMovie.innerText = title;
         year.innerText = allMovies[i].release_date;
         description.innerText = allMovies[i].description;
       }
     }
   }

 }

 const addReviewToDOM = (review) => {
   let title = document.querySelector("#titleMovie").innerText;

   if (title !== "") {
    let ourUl = document.querySelector("#addReview");

    let ourLi = document.createElement("li");
 
    let boldText = document.createElement("strong");
    boldText.innerText = title + ": ";
    ourLi.appendChild(boldText);
 
    let span = document.createElement("span");
    span.innerText = review;
    ourLi.appendChild(span);
 
    ourUl.appendChild(ourLi);
   }

 }




