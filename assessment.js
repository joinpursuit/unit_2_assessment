document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContent is loaded")
    fetchData()
    // let inputBtn = document.querySelector("#btn-input")
    // inputBtn.addEventListener("submit", (reviewSection))
    
})

const fetchData = () => {
    let url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(allData => {
            console.log(allData)
            buildSelect(allData)
            let select = document.querySelector('select')
            select.addEventListener("change", () => {
                console.log(titleBox.value)
                displaySelectedFilm(allData, titleBox.value)
            })
            let review = document.querySelector('form')
            review.addEventListener('submit', (event) => {
                reviewSection(event)
            })
        })
        .catch(error => {
            console.log("there is an error", error)
        })
    //console.log("is it the right url?", url)
}

const buildSelect = (allData) => {
    let selectBox = document.querySelector("#titleBox")
    for (let i = 0; i < allData.length; i++) {
        let filmOptions = document.createElement("option")
        filmOptions.innerText = (allData[i].title)
        filmOptions.value = i
        selectBox.appendChild(filmOptions)
        console.log("see film!!!!", filmOptions.value)
    }

}

const displaySelectedFilm = (allData, index) => {
    let infoSection = document.querySelector("#infoSection")
    
    while (infoSection.childNodes[0]) {
        infoSection.removeChild(infoSection.firstChild)
    }
    let filmTitle = document.createElement("h3")
    filmTitle.innerText = allData[index].title
    let releaseYr = document.createElement('p')
    releaseYr.innerText = allData[index].release_date
    let filmDes = document.createElement("p")
    filmDes.classList.add('description')
    filmDes.innerText = allData[index].description
    console.log('description', filmDes)
    console.log('year', releaseYr.innerText)
    infoSection.appendChild(filmTitle)
    infoSection.appendChild(releaseYr)
    infoSection.appendChild(filmDes)
}

const reviewSection = (event) => {
    event.preventDefault()
    let parentNode = document.querySelector("ul")
    let childNode = document.createElement("li")
    childNode.innerText = form.value
    if (li.innerText !== "")
    console.log(form.value)
    childNode.innerText = form.value
    parentNode.appendChild(childNode)
}

// const toggleInfo = (filmOptions) => {

//     firstDiv.target.nextElementSibling.classList.toggle("info-section")
// }