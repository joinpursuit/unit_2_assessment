// adding an event listener to load content automatically when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("page loaded:")
    fetchFilms()
    // SelectMovie()
})

//retrieving the data from the api to the js code
const fetchFilms = () => {
    let filmRequest = new XMLHttpRequest() 
    filmRequest.onreadystatechange = function () {
        if (this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response)
            console.log("parsedResponse", parsedResponse)
            // renderfilmList(parsedResponse.message)
            console.log("State", this.readyState, this.response)
        }
    }
    filmRequest.open("GET", "https://ghibliapi.herokuapp.com/films/")
    filmRequest.send()
    console.log(filmRequest)
}
    









//get the api to the js code
//create a function to select a film with the select box
    //with each selection the title year and description should show up
    //replace each selection every time a new selection is clicked
//the form to be able to write a review of film
    //the title is bold in li
    // the review is not bold

