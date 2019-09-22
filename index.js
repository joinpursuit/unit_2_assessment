document.addEventListener("DOMContentLoaded", () => {
    setupBtnListeners()
    fetchFilmsForSelectBox()
})

const setupBtnListeners = () => {
    const submitReview = document.querySelector("#formy-mcformface")
    submitReview.addEventListener("submit", postReview)
}

const postReview = () => {
    console.log("gotcha")
}

document.addEventListener("submit", (event) => {
    event.preventDefault()
}) 

const fetchFilmsForSelectBox = () => {
    const url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(response => response.json())
        .then(films => {
            let select = document.querySelector("#select-box")
            for(film of films) {
                select.options[select.options.length] = new Option(film.title, film.id)
            }
        })
}

const selectFilm = () => {
    let filmId = document.querySelector("#select-box").value;
    let url = "https://ghibliapi.herokuapp.com/films/" + filmId;
    fetch(url)
        .then(response => response.json())
        .then(film => {
            let container = document.querySelector("#micro-container")
            let title = document.createElement("h3")
            title.innerText = film.title
            let date = document.createElement("p")
            date.innerText = film.release_date
            let description = document.createElement("p")
            description.innerText = film.description
            container.appendChild(title)
            container.appendChild(date)
            container.appendChild(description)
        })
}
