document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContent is loaded")
    selectTitle()
    // displaySelectedFilm(film)                                                                                                                                                                                      select", selectTitle)
    // let reviewInput = document.querySelector("#text-input")
    // let form = document.querySelector("form")
    // form.addEventListener("submit", (event) => {
    //       let textInput = document.querySelector("#text-input")
    //textInput.innerText = ""
    let inputBtn = document.querySelector("#btn-input")
    inputBtn.addEventListener("submit", (reviewSection))
    //event.preventDefault()
    //   if (textInput.innerText = "") {
    //      form.appendChild(textInput)
    // })

    // console.log("review box", reviewInput)
    // reviewInput.addEventListener("click",  {

    // })
})

const selectTitle = () => {
    let url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(film  => {
            console.log(film)
            displaySelectedFilm(film)
        })
        .catch(error => {
            console.log("there is an error", error)
        })
    //console.log("is it the right url?", url)
}

const displaySelectedFilm = (film) => {
    let selectBox = document.querySelector(".title-box")
    let firstDiv = document.querySelector(".select")
    //let newSelectBox = document.createElement("select")
    let infoSection = document.querySelector(".info-section")
    let newInfoSection = document.createElement("div")

    for (let i = 0; i < film.length; i++) {
        let filmOptions = document.createElement("option")
        filmOptions.innerText = (film[i].title)
        selectBox.appendChild(filmOptions)
        //    let filmTitle = document.createElement("h3")
        //    filmTitle.innerText = film[i].title
        //    let releaseYr = document.createElement('p')
        //    releaseYr.innerText = film[i].release_date
        //    let filmDes = document.createElement("p")
        //    filmDes.classList.add('description')
        //    filmDes.innerText = film[i].description
        //    console.log('description', filmDes)
        //    console.log('year', releaseYr.innerText)
        //if (filmOptions.hasAttribute(filmDes.innerText))  {
            //let selectBox = document.querySelector(".title-box")
            //let newSelectBox = document.createElement("select")
            
            // selectBox.addEventListener("click", toggleInfo)

           
            console.log(filmOptions.innerText)



            let filmTitle = document.createElement("h3")
            filmTitle.innerText = film[i].title
            let releaseYr = document.createElement('p')
            releaseYr.innerText = film[i].release_date
            let filmDes = document.createElement("p")
            filmDes.classList.add('description')
            filmDes.innerText = film[i].description
            console.log('description', filmDes)
            console.log('year', releaseYr.innerText)


            
            newInfoSection.appendChild(filmTitle)
            newInfoSection.appendChild(releaseYr)
            newInfoSection.appendChild(filmDes)
            console.log(firstDiv.nextElementSibling);
            //console.log('')
        //} else {
            //firstDiv.html
        //}
    }

    infoSection.parentNode.replaceChild(newInfoSection, infoSection)
}

const reviewSection = () => {

    let parentNode = document.querySelector("ul")
    let childNode = document.createElement("li").innerText
    let form = document.querySelector("form")
    console.log(form)
    childNode.innerText = form.value
    parentNode.appendChild(childNode)



}

// const toggleInfo = (filmOptions) => {

//     firstDiv.target.nextElementSibling.classList.toggle("info-section")
// }