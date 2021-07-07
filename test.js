document.addEventListener('DOMContentLoaded', () => {
    fetchMovie();
   
    formListener()


})



const selectButton = (arr) => {
    let newDiv = document.querySelector('#selectButton')
    
    let select = document.querySelector("select")
    select.id = "select"

    for(let i = 0;  i <= arr.length - 1; i++) { 

        let newSelect = document.createElement("option");
        newSelect.value = arr[i].id
        newSelect.innerText  = arr[i].title;
        
        // console.log(arr)
        console.log(newSelect);
        // console.log(title);

    newDiv.appendChild(select)
    select.appendChild(newSelect);
    
    }
    select.addEventListener('change', createMovieProperties)

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

const createMovieProperties =() => {
    let innerContainer = document.querySelector('#innerContainer')

    let movieTitle = document.createElement('h3')
    movieTitle.id = "title"
    // let title = document.querySelector("#title")
    
    let movieYear = document.createElement('p')
    movieYear.id = "year"
    // let year = document.querySelector("#year")
    
    let movieDescription = document.createElement('p')
    movieDescription.id = "description"
    // let description = document.querySelector("#description")

    innerContainer.append(movieTitle, movieYear, movieDescription) 

    
    fetchMovieProperties()
}

const fetchMovieProperties = () => {
    let select = document.querySelector("#select")
    let id = select.value

    let movieTitle = document.querySelector('#title')
    let movieYear = document.querySelector('#year')
    let movieDescription = document.querySelector("#description")

     fetch("https://ghibliapi.herokuapp.com/films/" + id )

            .then((response) =>{
                return response.json();
                // console.log(response)
            })
            .then(data => {
                console.log(data.title)
                movieTitle.innerText = data.title
                // console.log(movieTitle)
                
                movieYear.innerText = data.release_date
                // console.log(movieYear)
        
                movieDescription.innerText = data.description 
                // console.log(movieDescription) 
            
            })
            }


            
 const formListener = () => {
     let form = document.querySelector('#form')
     form.addEventListener('submit', (event) => {
    event.preventDefault();
    movieComment();
 })
}

const movieComment = () => {
    let form = document.querySelector('#formContainer')
    let movieTitle = document.querySelector("h3").innerText
    let input = document.querySelector("#review")

    let commentList = document.createElement("ul")
    commentList.id = "submittedReview"
    
        
        form.appendChild(commentList)

    if(movieTitle && input){
        let review = document.createElement("li")
        review.innerHTML = `<b>${movieTitle}:</b> ${input.value}`
        commentList.appendChild(review)
        input.value = ""
        input.placeholder = "submit review"
        }


    // console.log(review)
    // console.log(commentList)
    
}
