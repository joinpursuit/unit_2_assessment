document.addEventListener("DOMContentLoaded", () => {
  
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(response => {
      getFilms(response)
    })

  let select = document.querySelector("select")
  select.addEventListener("change", (e) => {
  
    let list = document.querySelector("ul");
 
    let words = document.querySelector("#words")
    let submit = document.querySelector("#sub")
    if (!e.target.value){
      list.innerHTML = ""
      words.style.display = "none"
      submit.style.display = "none"
    }else{
      list.innerHTML = ""
      words.style.display = "inline"
      submit.style.display = "inline"
      let i = 0;
      while(i < listOfReviews[e.target.value].length){
      list.appendChild(listOfReviews[e.target.value][i])
      i++;}
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
let listOfReviews = {}

function getFilms(film) {
  let select = document.querySelector("select")
  for (let i of film) {
    let option = document.createElement("option")
    option.innerText = i.title;
    select.appendChild(option)
    arrjson.push(i.id)
    listOfReviews[i.title] = [];
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
    listOfReviews[t.innerText].push(review);
    let i = 0;
    while(i < listOfReviews[t.innerText].length){
    list.appendChild(listOfReviews[t.innerText][i])
    i++;
    }
  }
  words.value = ""
}