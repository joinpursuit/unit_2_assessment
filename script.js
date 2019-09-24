document.addEventListener('DOMContentLoaded', () => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(response => response.json())
        .then(data => data.forEach(film => createFilmOption(film)));

    let reviewForm = document.querySelector('form');
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addReview();
    });

    let movieSelector = document.querySelector('select'); //grabbing the selector
    movieSelector.addEventListener('change', (event) => {
        let selectedMovie = event.target.selectedOptions[0].value; //grabs selected option and checks their inneText
        loadMovieInfo(selectedMovie);
    });
})

const loadMovieInfo = (movie) => {
    let movieInfo = document.querySelector('#movie_info');
    let form = document.querySelector('form');
    movie ? form.style.display = 'block' : form.style.display = 'none';
    movie ? movieInfo.innerHTML = movie : movieInfo.innerHTML = '<h3>To begin select a movie</h3>';
}

const addReview = () => {
    let review = document.createElement('li');
    let movieTitle = document.createElement('strong');

    //using this method prevents malicious input unlike using innerHTML
    movieTitle.innerText = document.querySelector('h3').innerText + ': '; //adding the movietitle to the element
    review.innerText = document.querySelector('input').value;
    review.prepend(movieTitle); //prepend adds element before first child
    document.querySelector('ul').appendChild(review); //appending emtpy review to unordered list
}

const createFilmOption = (film) => {
    let option = document.createElement('option');
    option.innerText = film.title;
    option.value = `<h3>${film.title}</h3><p>${film.release_date}</p><p>${film.description}</p>`
    document.querySelector('select').appendChild(option);
}