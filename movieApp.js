document.addEventListener("DOMContentLoaded", ()=>{
    //will invoke the call for movies to populate dropdown menu
    loadFilmTitles();
    
    // adds submit event listener to form and prevents refresh and calls userreview function
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        userReview();
    })
})

const filmsAPI = 'https://ghibliapi.herokuapp.com/films/';

const loadFilmTitles =  async () => {
    //selects the select dropdown menu and creates options
    let dropdown = document.querySelector('select');
    let defaultOption = document.createElement('option');
    
    // first option will be empty and adds the default option to the list
    defaultOption.innerText = ' ';
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    
    // getting movie info from API
    await axios
        .get(filmsAPI)
        .then((response)=>{
            let films = response.data;
            
            //When selecting an option on dropdown, event listener will change the info displayed to user
            dropdown.addEventListener('change', displayFilmInfo);

            //loop will populate the dropdown 
            for (let i = 0; i < films.length; i++ ){
                let option = document.createElement('option'); // creates option
                option.innerText = films[i].title; // adds titles to movie options
                option.value = `${films[i].release_date}\n\n${films[i].description}`; //movie value will be year and description
                dropdown.add(option)
            }
        })
        .catch((error)=>{
            console.log('error 404');
        })
}


//function will display the requested info 
const displayFilmInfo = (event) =>{
    const movieInfo = document.querySelector("#movie-info");
    const filmInfo = document.createElement('div');
    const filmTitle = document.createElement('h3');
    const filmYearAndDescription = document.createElement('p');
    let option = event.target.selectedOptions[0] // .selectedOptions[0] is the option that was chosen on dropdown

    movieInfo.innerHTML = ''; // will clear the div of previous info
    filmInfo.id = option.innerText; //names div after movie
    filmTitle.innerText = option.innerText;
    filmYearAndDescription.innerText = option.value;

    //appends requested info to div for movie
    filmInfo.appendChild(filmTitle);
    filmInfo.appendChild(filmYearAndDescription);
    movieInfo.appendChild(filmInfo);
}

//function to save and print user reviews 
const userReview = () =>{
    const inputBox = document.querySelector('input'); 
    const reviewList = document.querySelector('ul');
    const submission = document.createElement('li') //creates li for every movie review
    let title = document.querySelector('h3').innerText; // puts the movie title in 

    if(inputBox.value) {
        submission.innerText = `${title}: ${inputBox.value}`; // puts movie title and user review in one li
        reviewList.appendChild(submission);
    }
}
