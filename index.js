let middleDiv = document.querySelector("#middleDiv");
let selectList = document.querySelector("#selectList");
let allMoviesData;


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    fetchMovies();
    document.getElementById("selectList").addEventListener("change", function() {
        resultsFromOption(allMoviesData);
    });

    document.getElementById('my-form').onsubmit = function() {
        return isValidForm();
    };
    let form = document.querySelector("#my-form");
    let ul = document.createElement("ul");
    ul.id = "ul";
    form.appendChild(ul);
    })

    
const fetchMovies = () => { //this code is for the MVP
    console.log("fetchMovies started");
    fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(dataObj => {
            console.log("dataObj: ", dataObj);
            allMoviesData = dataObj;
            renderMovies(dataObj);
            // resultsFromOption();
        })
        .catch(err => {
            console.log("err: ", err);
        })
    console.log("fetchMovies finished");
}

const renderMovies = (movies) => {
    let selectList = document.querySelector("#selectList");
    let id = 0;
    for(let i = 0; i < movies.length; i++) {
        let movieOption = document.createElement("option");
        movieOption.value = movies[i].title;
        movieOption.text = movies[i].title;
        movieOption.id = `movie${id}`;
        selectList.appendChild(movieOption);
        id++;
    }
}

const resultsFromOption = (movies) => {
    let movieTitle = document.getElementById("selectList").value;
    for(let i = 0; i < 20; i++) {
        if(movies[i].title === movieTitle) {
            document.getElementById("movieTitle").innerText = "Movie Title: " + movieTitle;
            let releaseTemp = document.getElementById("selectList");
            releaseTemp = movies[i].release_date;
            console.log("releaseTemp: ", releaseTemp);
            let descriptionTemp = movies[i].description;
            document.getElementById("releaseYear").innerText = "Release Year: " + releaseTemp;
            document.getElementById("movieDescription").innerText = "Description: " + descriptionTemp;
        }
    }
}

const addReview = () => {
    // let input = document.getElementById("userInput").value;
    // let listItem = document.createElement("li");
    // listItem.innerText = input;
    // let ul = document.querySelector("ul");
    // ul.appendChild(listItem);

    let movieTitle = document.getElementById("selectList").value;
    for(let i = 0; i < 20; i++) {
        if(allMoviesData[i].title === movieTitle) {
            let input = document.getElementById("userInput").value;
            let listItem = document.createElement("li");
            listItem.innerText = `${allMoviesData[i].title}: ` + input;
            let ul = document.querySelector("ul");
            ul.appendChild(listItem);
        }
    }
}


const isValidForm = () => {
    return false;
}