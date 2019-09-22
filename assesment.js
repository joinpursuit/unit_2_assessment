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
        console.log(pick[0])
        let selection = document.querySelector("select");
        
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
        let pick = data
        console.log(pick[0])
        let selection = document.querySelector("select");
        let form = document.querySelector("form")
        
        selection.addEventListener('change',()=>{
            let num = selection.selectedIndex
            let title = document.querySelector("#title")
            let releaseDate = document.querySelector("#release_year")
            let description = document.querySelector("#description")
            title.innerText = pick[num].title;
            releaseDate.innerText = pick[num].release_date;
            description.innerText = pick[num].description;
            // console.log(num)
        })
        
        form.addEventListener("submit",(event) =>{
            event.preventDefault();
            updateData()
            
            
        })
    })
}

function updateData(){
    // let sumbit = document.querySelector('#reviewSub')
    let review = document.querySelector('#review')
    let textBox = document.querySelector("#textBox");
    let reviewText = document.createElement("li")
    reviewText.innerText = textBox.value;
    review.appendChild(reviewText);
    console.log("we did this")
}        

function wipeReview(){
    let review = document.querySelector('#review')
    if(review.hasChildNodes){
        review.removeChild()
    }
  
}
        
