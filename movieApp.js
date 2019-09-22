document.addEventListener("DOMContentLoaded",  async ()=>{
    await loadFilmTitles()
    // await getFilmInfo()
})

const filmsAPI = 'https://ghibliapi.herokuapp.com/films';

//function to get all of the film titles
const loadFilmTitles =  async () => {

// get the select element on the web page and let its initial value be 0 because there is no movie input.
let dropdown = document.getElementById('movie-titles');
dropdown.length = 1; 

// the first dropdown option is blank because no movies have been populated.
let defaultOption = document.createElement('option');
defaultOption.text = ' ';

// adding the blank option to the list
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

    await axios
        .get(filmsAPI)
        .then((response)=>{
            // console.log(response)
            let films = response.data;
            // console.log(films)
            let option;
            for (let i = 0; i < films.length; i++ ){
                //creating the drop down list options 
                option = document.createElement('option');
                option.text = films[i].title;
                option.value = "";
                dropdown.add(option)
                // console.log(option)
                film = films[i]
                // console.log(film)
                if(!option.value === film.value){
                    // displayFilmInfo(film);
                   console.log(film);
                   displayFilmInfo(film)
               }
            }
               
            
              
        
        }).catch((error)=>{
            console.log('Error!')
        })
}

const getFilmInfo = async () =>{

    await axios
    .get(filmsAPI)
    .then((response=>{
        console.log(response)
        let movies = response.data;
        console.log(movies)
        for(let i = 0; i < movies.length; i++){
            // let description = movies[i].description;
            // let year = movies[i].release_date
            // let title = movies[i].title
            if(movies[i])
        }
    })).catch((err)=>{
        console.log('Something is wrong');
    })
    
}

const displayFilmInfo =  (film) =>{
    //create another div to put all the content of the movie & give it the ID of the movie name
    const filmInfo = document.createElement('div');
    filmInfo.id = film.title;

    // creates h3 with movie title
    const filmTitle = document.createElement('h3');
    filmTitle.innerText = film.title;

    // shows the date movie was made 
    const filmYear = document.createElement('p');
    filmYear.innerText = film.release_date;
    
    //creates paragraph with the movie description
    const filmDescription = document.createElement('p');
    filmDescription.innerText = film.description;
    
    //selecting the empty div and prepping to push new div of info in it
    const movieInfo = document.querySelector("#movie-info");

    //appending all the things to the DOM
    filmInfo.appendChild(filmTitle);
    filmInfo.appendChild(filmYear);
    filmInfo.appendChild(filmDescription);
    movieInfo.appendChild(filmInfo);

}



// const userReview = () =>{
//     // clearInfo();
//     let submitBtn = document.querySelector('#submit-review')
//     submitBtn.addEventListener('click', () => {
//         event.preventDefault();

//     })
// }

// const showInput = () => {

//     let inputBox = form.querySelector('#review');
//     console.log(inputBox)
// }


//function to clear the div with film data
// const clearInfo = async (div) =>{
//     let data = document.querySelector('div')
//     data.innerHTML = ' ';
//  }