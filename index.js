document.addEventListener('DOMContentLoaded', () => {
    getFilm()

    let review = document.getElementById("review");
    let list = document.getElementById("list");
    let form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let li = document.createElement("li")
        li.innerText = review.value
        list.appendChild(li);

    })

})




const getFilm = () => {
    const select = document.getElementById('select')
    const option = document.createElement('option')
    option.classList.add("option")
    option.appendChild(document.createTextNode('Text'));
    option.value = 'value';
    select.appendChild(option);

    const url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(response => response.json())
        .then(films => {

            for (let i = 0; i < films.length; i++) {
                let film = films[i].title
                option.innerHTML = films[0].title
                displayMovieInfo(films[i])

            }

        })
}



const displayMovieInfo = (films) => {

    const main = document.getElementById('main')
    const titles = document.createElement('h2')
    titles.innerText = films.title;
    main.appendChild(titles)

    let year = document.createElement("h3")
    year.innerText = films.release_date
    main.appendChild(year)

    let para = document.createElement("p")
    para.innerText = films.description
    main.appendChild(para)



}



