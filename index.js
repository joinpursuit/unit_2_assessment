document.addEventListener("DOMContentLoaded", () => {

  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(filmsArr => {
      getFilms(filmsArr)
    })

  let select = document.querySelector("select")
  select.addEventListener("change", (e) => {

    let list = document.querySelector("ul");

    let words = document.querySelector("#words")
    let submit = document.querySelector("#sub")
    if (!e.target.value) {
      list.innerHTML = ""
      words.style.display = "none"
      submit.style.display = "none"
    } else {
      list.innerHTML = ""
      words.style.display = "inline"
      submit.style.display = "inline"
      let i = 0;
      while (i < listOfReviews[e.target.value].length) {
        list.appendChild(listOfReviews[e.target.value][i])
        i++;
      }
    }
    words.value = ""
    let info = document.querySelector("#info")
    fetch(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
      .then(response => response.json())
      .then(response => {
        while (info.firstChild) {
          info.removeChild(info.firstChild);
        }
        let title = document.createElement("h3")
        let releaseYear = document.createElement("p")
        let description = document.createElement("p")
        title.innerText = response.title;
        releaseYear.innerText = response.release_date
        description.innerText = response.description

        if (!e.target.value) {

          title.innerText = "";
          releaseYear.innerText = ""
          description.innerText = ""
        }
        info.appendChild(title)
        info.appendChild(releaseYear)
        info.appendChild(description)
      })

  })

  let submit = document.querySelector("#sub")
  submit.addEventListener("click", (e) => {
    e.preventDefault()
    postReview()
  })

})

let filmsObj = {};

let listOfReviews = {}

function getFilms(films) {
  let select = document.querySelector("select")
  for (let film of films) {
    let option = document.createElement("option")
    option.innerText = film.title;
    option.value = film.id;
    select.appendChild(option)
    listOfReviews[film.id] = [];
    filmsObj[film.id] = film;
  }
}



function postReview() {
  let words = document.querySelector("#words")
  let list = document.querySelector("ul")
  let filmid = document.querySelector("select").value
  let bold = document.createElement("b");
  bold.innerText = filmsObj[filmid].title;
  let review = document.createElement("li")
  review.appendChild(bold)
  let text = document.createTextNode(`: ${words.value}`)
  review.appendChild(text);
  console.log()
  if (filmid && words.value) {
    listOfReviews[filmid].push(review);
    let i = 0;
    while (i < listOfReviews[filmid].length) {
      list.appendChild(listOfReviews[filmid][i])
      i++;
    }
  }
  words.value = ""
}


function rand() {
  let select = document.querySelector("select");
  let index = Math.floor(Math.random() * 19 + 1)
  var event = new Event('change');
  select.selectedIndex = index
  select.dispatchEvent(event);
}