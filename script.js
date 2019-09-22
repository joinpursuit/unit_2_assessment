const loadMovieInfo = (name) => {
    if (!name) { //This is runs when selected option is blank
        document.querySelector('#movie_info').innerHTML = `<h3>To begin select a movie</h3>`;
        document.querySelector('form').style.display = 'none';
        return; //Prevents the rest of function from running
    }
    let filmObj = filmsObject[name];
    let title = document.createElement('h3');
    let year = document.createElement('p');
    let description = document.createElement('p');
    let filmArr = [title, year, description];
    
    title.innerText = filmObj.title;
    year.innerText = filmObj.release_date;
    description.innerText = filmObj.description;
    filmArr = [title, year, description];
    document.querySelector('form').style.display = 'block';
    document.querySelector('#movie_info').innerText = '';
    filmArr.forEach(item => document.querySelector('#movie_info').appendChild(item));
}

const addReview = () => {
    let review = document.createElement('li');
    review.innerHTML = `<strong>${document.querySelector('h3').innerText}:</strong> ${document.querySelector('input').value}`;
    document.querySelector('input').value = '';
    document.querySelector('ul').appendChild(review);
}

const createFilmOption = (name) => {
    let option = document.createElement('option');
    option.innerText = name;
    console.log(option.inn);
    
    document.querySelector('select').appendChild(option);
}

let filmsObject = {}; //Global variable used in loadMovieInfo 
const fetchMovies = async () => {
    let films = await axios.get(`https://ghibliapi.herokuapp.com/films`);
    films.data.forEach(film => createFilmOption(film.title));
    films.data.forEach(film => filmsObject[film.title] = film);
}

fetchMovies();