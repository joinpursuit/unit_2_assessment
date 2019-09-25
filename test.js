
let x = {};

document.addEventListener('DOMContentLoaded', () => {
  
    // console.log('DOM Has Loaded')
//    selectButton();
    fetchMovie();
    // document.addEventListener('submit', (event) => {
    // event.preventDefault();

})


const selectButton = (arr) => {
    let select = document.querySelector("#filmTitle")
    
    
    for(let i = 0;  i <= arr.length - 1; i++) { 

        let newSelect = document.createElement("option");
        newSelect.value = arr[i].id
        newSelect.innerText  = arr[i].title;
        
        // console.log(arr)
        // console.log(newSelect);
        // console.log(title);
        
    select.appendChild(newSelect);
    }
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
        // }
        // console.log(data);
        //  movieComment(data)
    })
    .catch(err => {
        console.log("err: " + err)
    })
}

const movieProperties = () => {
    let select = document.querySelector("select")
    let container = document.querySelector("#innerContainer")
    let movieTitle = document.querySelector("#title")
    let movieYear = document.querySelector("#year")
    let movieDescription = document.querySelector("#description")
    let id = select.value

            fetch("https://ghibliapi.herokuapp.com/films/" + id )

            .then((response) =>{
                return response.json();
                // console.log(response)
            })
            .then(data => {
                
                movieTitle.innerText = data.title
                // console.log(movieTitle)
                
                movieYear.innerText = data.release_date
                // console.log(movieYear)
        
                movieDescription.innerText = data.description 
                // console.log(movieDescription) 
        
            container.appendChild(movieTitle) 
            container.appendChild(movieYear)
            container.appendChild(movieDescription)
            })
            }
            
 
const movieComment = (str) => {
    let input = document.querySelector("#review")
    let commentList = document.querySelector("#submittedReview")


    input.addEventListener('submit', )
        // let list_item = document.createElement("li")
        // commentList.appendChild(list_item)
        // console.log(list_item)
    
}