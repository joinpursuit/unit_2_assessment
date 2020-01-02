/*Decided to retry the exam in a non stress enviornment 
// for me and I feel I am already working towards a better solutiion here.*/

document.addEventListener("DOMContentLoaded", () => {
    let movies = [];
    let para = document.querySelector('div');
    let movieTitle = '';
    movieTitle.className = 'movie-title';


    let select = document.querySelector("#films");
    select.addEventListener('change', () => {
        para.innerText = '';
        printList(select.value);;;
        movieTitle = select.value;;;
    })

    let form = document.querySelector("form");
    form.addEventListener('submit', (event) => {

        event.preventDefault();
        makeReview(movieTitle);;;
    })


    const createOption = (choice, index) => {
        let option = document.createElement('option');
        option.setAttribute("id", `${choice}`/*`${index}`*/);;;
        option.innerText = choice;
        select.add(option);;;

    }

    const makeReview = (movieTitle) => {
        let inputBox = document.querySelector('#review').value;;;
        inputBox.className = 'review-text';;;
        let reviewUL = document.querySelector('#review-list');;;
        console.log(inputBox);;;
        console.log(movieTitle, inputBox);;;
        let reviewLI = document.createElement('li');
        reviewLI.innerText = `${movieTitle}: ${inputBox}`;;;
        reviewUL.append(reviewLI);;;
    }


    let tests = document.querySelectorAll("#movie");

    const printList = (movie) => {
        let movieTitles = [];
        let index = 0;
        let para = document.querySelector('div');

        for (let i = 0; i < movies.length; i++) {
            movieTitles.push(movies[i].name);;
        }

        if (movieTitles.includes(movie)) {
            index = movieTitles.indexOf(movie);;
        }

        var name = document.createElement('h3');
        name.setAttribute('class', `${index}`);;
        name.innerHTML = movies[index].name;;
        para.appendChild(name);;
        var year = document.createElement('p');
        year.setAttribute('class', `${index}`);;
        year.innerHTML = movies[index].year;;
        para.appendChild(year);;
        var info = document.createElement('p');
        info.setAttribute('class', `${index}`);;
        info.innerHTML = movies[index].info;;
        para.appendChild(info);;
    }


    const getMovie = (selected) => {
        let selectedMovie = selected
        let movieLink = 'https://ghibliapi.herokuapp.com/films';
        axios.get(movieLink).then((response) => {
            try {
                let movieList = response.data;
                let select = document.querySelector('#films');
                let blank = document.createElement('option');
                blank.innerText = 'Select a Movie';
                blank.setAttribute('selected', 'true');
                blank.setAttribute('disabled', 'disabled');
                select.add(blank);

                //create an object for the each movie to make it easier to click when selected from drop down menu
                for (i = 0; i < movieList.length; i++) {
                    let movie = {
                        name: `${movieList[i].title}`,
                        year: `${movieList[i].release_date}`,
                        info: `${movieList[i].description}`
                    }
                    movies.push(movie)
                    createOption(`${movieList[i].title}`, `${i}`);
                }
                movies.unshift('');
            } catch (err) {
                console.log('oops, there was an error. please try again', err);
            }

        })
    }
    getMovie();

})



