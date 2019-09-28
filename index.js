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

    const selectElement = document.querySelector('#select');

    selectElement.addEventListener('change', (event) => {
        const result = document.querySelector('#main');
        const value =  event.target.value;
        cleanMain()
        getOneFilm(value)
        
    })

})

const getFilm = () => {
    
    const url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(response => response.json())
        .then(films => {
                console.log(films);
                console.log();
                
            for (let i = 0; i < films.length; i++) {
                let title = films[i].title
                let filmId = films[i].id
                displayTitleOption(title, filmId)

                

            }

        })
}

const getOneFilm = (value) => {
       
    const url = `https://ghibliapi.herokuapp.com/films/${value}`
    fetch(url)
    .then(response => response.json())
    .then(film => {
        displayMovieInfo(film)


})
}


const displayTitleOption = (title, filmId) => {
    const select = document.getElementById('select')
    const option = document.createElement('option')
    option.classList.add("option")
    option.appendChild(document.createTextNode('Text'));
    option.value = filmId;
    select.appendChild(option);
    option.innerHTML = title
    
}

const displayMovieInfo = (film) => {
    
    const main = document.getElementById('main')
    const titles = document.createElement('h2')
    titles.innerText = film.title;
    main.appendChild(titles)

    let year = document.createElement("h3")
    year.innerText = film.release_date
    main.appendChild(year)

    let para = document.createElement("p")
    para.innerText = film.description
    main.appendChild(para)
}

const cleanMain = () => {
    const main = document.getElementById("main")
    main.innerHTML = ""
}



