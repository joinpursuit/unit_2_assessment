let movieData;

let options = [];

document.addEventListener('DOMContentLoaded', async () => {
    await getAllMovieTitle();
    await makeMovieOptions(movieData);
    console.log(movieData);

    document.querySelector('#movie-select').onchange = () => {
        const currentOption = document.querySelector('#movie-select').value;
        console.log(currentOption);
        console.dir(document.querySelector('#movie-select'));
        const movie = selectedMovieData(movieData, currentOption);
        console.log(movie)
        displaySelectedMovie(movie);
    }

    document.querySelector('input[type="submit"]').addEventListener('click', event => {
        event.preventDefault();
        addReview();
    })

})

const getAllMovieTitle = async () => {
    let url = `https://ghibliapi.herokuapp.com/films`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            movieData = data;
        })
}

const makeMovieOptions = (moviesArr) => {
    moviesArr.forEach(ele => {
        let option = document.createElement('option');
        option.value = ele.title;
        option.innerText = ele.title;
        document.querySelector('#movie-select').appendChild(option);

    })
}

const selectedMovieData = (movieData, title) => {
    for (let i = 0; i < movieData.length; i++) {
        if (movieData[i].title == title) {
            document.querySelector('input[type="text"]').focus();
            return movieData[i];
        }
    }
}

const displaySelectedMovie = (movieObj) => {
    const movieDetailDiv = document.querySelector('#movie-details');

    movieDetailDiv.innerHTML = '';

    const h3 = document.createElement('h3');
    const pYear =  document.createElement('p');
    const pDescription = document.createElement('p');

    h3.innerText = movieObj.title;
    pYear.innerText = movieObj.release_date;
    pDescription.innerText = movieObj.description;

    movieDetailDiv.appendChild(h3);
    movieDetailDiv.appendChild(pYear);
    movieDetailDiv.appendChild(pDescription);
}

const addReview = () => {
    const inputText = document.querySelector('input[type="text"]');
    const text = inputText.value;

    if (text.length === 0) {
        window.alert('Review cannot be empty!');
        return;
    }

    console.log(text);
    inputText.value = '';

    const li = document.createElement('li');
    li.innerText = text;

    document.querySelector('ul').appendChild(li);

}