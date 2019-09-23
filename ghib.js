// adding an event listener to load content automatically when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // console.log("page loaded:")

    fetchFilms()
    selectFilm()
})

//retrieving the data from the api to the js code
const fetchFilms = () => {
    let filmRequest = new XMLHttpRequest()
    filmRequest.onreadystatechange = function () {
        if (this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response)
            console.log("parsedResponse:", parsedResponse)
            // renderfilmList(parsedResponse.message)
            // console.log("State", this.readyState, this.response)
        }
    }
    filmRequest.open("GET", "https://ghibliapi.herokuapp.com/films/")
    filmRequest.send()
    // console.log(filmRequest)

    // retrieving only the title,release year and description
}


//create a function to choose a film with the select box
const selectFilm = (films) => {
        // create option element to choose selection
        let titles = document.createElement("option")
        titles.innerText = parsedResponse[films].title
        document.body.select.appendChild(titles)


    //with each selection the title year and description should show up
    //replace each selection every time a new selection is clicked


    //the form to be able to write a review of film
    form.addEventListener("submit",(event) =>{
    event.preventDefault();
})
}





// let hTag3 = document.body.querySelector("h3")
// if(img === null){
//     let dogImg = document.createElement("img")
//     dogImg.src = url
//     document.body.appendChild(dogImg)
// }else{
//     let newImg = document.createElement('img')
//     newImg.src = url;
//     img.parentNode.replaceChild(newImg,imgA);
// }






//the title is bold in li
// the review is not bold