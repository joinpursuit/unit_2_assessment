document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = () => {
    let url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(allData => { // allData is all the films with all their properties and values.
            buildSelect(allData)
            let select = document.querySelector('select')
            select.addEventListener("change", () => {
                displaySelectedFilm(allData, titleBox.value)
            })
            let review = document.querySelector('form')
            console.log("review")
            review.addEventListener('submit', (event) => {
                event.preventDefault();
                let reviewText = document.querySelector("#text-input")
                reviewSection(reviewText.value)
                reviewText.value = ""

            })
        })
        .catch(error => {
            console.log("there is an error", error)
        })
}

const buildSelect = (allData) => {
    let selectBox = document.querySelector("#titleBox") // grab the select tag by id.
    for (let i = 0; i < allData.length; i++) { // loop through as many movies as there are.
        let filmOptions = document.createElement("option") // create an option tag.
        filmOptions.innerText = (allData[i].title)
        filmOptions.value = i // make the value of the option tag the same as i (index).

        selectBox.appendChild(filmOptions)
    }
}

const displaySelectedFilm = (allData, index) => {
    let infoSection = document.querySelector("#infoSection") // the empty div that holds the 

    while (infoSection.firstChild) {
        infoSection.removeChild(infoSection.firstChild)
    }
    // This can also be used instead of the while statement 
    // b/c it also clears the browser before anything is added 
    // to it.
    // infoSection.innerHTML = ""; 

    let selectBox = document.querySelector("#titleBox") //grab the select tag by id.
    let titleName = selectBox.value; //making the title in the selectbox the same as the name of the title on the page.
    let filmTitle = document.createElement("h3") // create an h3 tag for the title.
    let releaseYr = document.createElement('p') // create a p tag for the release date. 
    let filmDes = document.createElement("p") // create another p tag for the description.
    filmDes.classList.add('description') // give the the p tag for the description a class to differentiate btwn the two p tags.
    if (titleName !== "") { // states that if a title name is picked then apply the following.
        filmTitle.innerText = allData[index].title
        releaseYr.innerText = allData[index].release_date
        filmDes.innerText = allData[index].description
        infoSection.appendChild(filmTitle)
        infoSection.appendChild(releaseYr)
        infoSection.appendChild(filmDes)
    }

}

const reviewSection = (review) => {
    let parentNode = document.querySelector("ul") // grab the unordered list by its tag.
    let title = document.querySelector("h3") // grab the heading that was created above by its tag.
    let childNode = document.createElement("li") // create a list 
    let span = document.createElement("span") // create a span tag 
    let strong = document.createElement("strong") // create a strong tag
    
    if (title) {
        span.innerText = `: ${review}` // the span.innerText displays the review. 
        strong.innerText = title.innerText // the strong.innerText displays the title of the movie in bold letters.
        console.log("childNode")
        childNode.appendChild(strong)
        childNode.appendChild(span)
        parentNode.appendChild(childNode)
    }
}

const removeForm = () => {
    let form = document.querySelector(".form")
    form.getElementsByClassName.display = "none" 

}
