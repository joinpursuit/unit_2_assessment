// document.addEventListener('submit', (event) => {
//     event.preventDefault();
let x = {};

document.addEventListener('DOMContentLoaded', () => {
  
    // console.log('DOM Has Loaded')
//    selectButton();
    fetchMovie();

})


const selectButton = (arr) => {
    let select = document.querySelector("#filmTitle")
    
    
    for(let i = 0;  i <= arr.length - 1; i++) { 
        let newSelect = document.createElement("option");
        newSelect.value = "title"
        if(newSelect.value){
            newSelect.text  = arr[i].title;
        }
            
        // let title = arr[i].title
        // newSelect.options = title;

        // console.log(arr)
        console.log(newSelect);
        // console.log(title);
        
    select.appendChild(newSelect);
    
    }
    select.addEventListener("click", movieProperties)
    
    

}

function fetchMovie() {
    fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) =>{
        // console.log(response)
        return response.json();
    })
    .then(data => {
        // for(let i = 0; i < title.length; i++){
            // title.innerText= data[i].title
            // console.log(title)
            selectButton(data)
            // movieProperties(data)
        // }
        // console.log(data);
       
    })
    // .catch(err => {
    //     console.log("err: " + err)
    // })
}

const movieProperties = (arr) => {
    let container = document.querySelector("#innerContainer")
    let movieTitle = document.querySelector("#title")
    let movieYear = document.querySelector("#year")
    let movieDescription = document.querySelector("#description")

        console.log(arr)
    // for(let i = 0; i <= arr.length -1; i++){

        movieTitle.innerText = arr.title
        console.log(movieTitle)

        movieYear.innerText = arr.release_date
        console.log(movieYear)

        movieDescription.innerText = arr.description 
        console.log(movieDescription) 

    container.appendChild(movieTitle) 
    container.appendChild(movieYear)
    container.appendChild(movieDescription)
// }
            
    
}

// })