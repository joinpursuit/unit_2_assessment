document.addEventListener("DOMContentLoaded", () => {
  
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(response => {
      getFilms(response)
    })

  let select = document.querySelector("select")
  select.addEventListener("change", (e) => {
    let words = document.querySelector("#words")
    let submit = document.querySelector("#sub")
    if (!e.target.value){
      words.style.display = "none"
      submit.style.display = "none"
    }else{
      words.style.display = "inline"
      submit.style.display = "inline"
    }
    words.value = ""
    let info = document.querySelector("#info")
    let index = arrjson[e.target.selectedIndex]
    fetch(`https://ghibliapi.herokuapp.com/films/${index}`)
      .then(response => response.json())
      .then(response => {
        while (info.firstChild) {
          info.removeChild(info.firstChild);
        }
        let title = document.createElement("h3")
        let releaseYear = document.createElement("p")
        let description = document.createElement("p")
        title.innerText = response.title;
        releaseYear.innerText = response.release_dateb
        description.innerText = response.description
        if (index === null) {
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

let arrjson = [null];

function getFilms(film) {
  let select = document.querySelector("select")
  for (let i of film) {
    let option = document.createElement("option")
    option.innerText = i.title;
    select.appendChild(option)
    arrjson.push(i.id)
  }
}



function postReview() {
  let words = document.querySelector("#words")
  let list = document.querySelector("ul")
  let t = document.querySelector("h3")
  let bold = document.createElement("b");
  bold.innerText = t.innerText;
  let review = document.createElement("li")
  review.appendChild(bold)
  let text = document.createTextNode(`: ${words.value}`)
  review.appendChild(text);

  if (t.innerText && words.value) {
    list.appendChild(review)
  }
  words.value = ""
}