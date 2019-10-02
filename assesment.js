//1. Fetch request to populate select box with film titles 
//  *Network request to get all films
//  *Populate the select with options
//2. Listen for when the user selects a movie in the selector. 
//Listen for change on Select
//3. Fetch film details to display title, release year & descriptions.
//4. Listen for when the user submits a review.

document.addEventListener("DOMContentLoaded",() =>{
    console.log("page loaded");
    fetchMovies()
    SelectMovie()

})

function fetchMovies(){
    const url = "https://ghibliapi.herokuapp.com/films"
    // axios.get(url).then((response)=>{
    //     response.data
    //     })
    
    fetch(url).then(response =>{
        return response.json() 
        //console.log(response)
    })
    .then(data => {
        let pick = data
        
        //change your tags as needed
        //this variable gets the select tag from the dom
        let selection = document.querySelector("select");
        const emptySelection = document.createElement('option');
        emptySelection.innerText = "----Select a Film ----";
        emptySelection.selected = true;
        emptySelection.disabled = true;
        selection.add(emptySelection);
        
        // this loop goes through the movies 
        for(movie in pick){
            let title = document.createElement("option");
            title.value = pick[movie].title;
            title.innerText = pick[movie].title;
            selection.appendChild(title);
        }
    })
}



function SelectMovie(){
    
    const url = "https://ghibliapi.herokuapp.com/films"   
    fetch(url).then(response =>{
        return response.json() 
    })
    .then(data => {
        HandleMovieSelection(data)
        
        let form = document.querySelector("form")
        form.addEventListener("submit",(event) =>{
            event.preventDefault();
            updateData()
        })
    })
}

function HandleMovieSelection(data){
    let pick = data
    let selection = document.querySelector("select");
        
    selection.addEventListener('change',()=>{
        let num = selection.selectedIndex
        let title = document.querySelector("#title")
        let releaseDate = document.querySelector("#release_year")
        let description = document.querySelector("#description")
        title.innerText = pick[num].title;
        releaseDate.innerText = pick[num].release_date;
        description.innerText = pick[num].description;
    })
}

function updateData(){
    let review = document.querySelector('#review')
    let textBox = document.querySelector("#textBox");
    let reviewText = document.createElement("li")
    reviewText.innerText = textBox.value;
    review.appendChild(reviewText);
}        

// function wipeReview(){
//     let review = document.querySelector('#review')
//     if(review.hasChildNodes){
//         review.removeChild()
//     }
  
// }
        
