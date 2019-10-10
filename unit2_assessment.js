document.addEventListener("DOMContentLoaded", () => {

    let films = null;
    let movieYear = null;
    let movieDescription = null;
    //array of movie objects
    let filmList = [];

    let selectBox = document.getElementById("mySelect");
    getMovieInformation()



    selectBox.addEventListener("change", (e) => {
        filmList.forEach(movie => {
            if (e.target.value === movie.title) {
                films = movie.title;
                movieYear = movie.release_date;
                movieDescription = movie.description;
                document.querySelector("#films").innerText = films;
                document.querySelector("#movieYear").innerText = movieYear;
                document.querySelector("#movieDescription").innerText = movieDescription;
            } else if (e.target.value === "---Select a movie----") {
                films = "---Select a movie----";
                document.querySelector("#films").innerText = "";
                document.querySelector("#movieYear").innerText = "";
                document.querySelector("#movieDescription").innerText = "";
            }
        })



    })
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("ok")
        WriteReview()
    })

    function WriteReview() {
        let ulList = document.querySelector("ul")
        let liList = document.createElement("li")
        let bold = document.createElement("strong")
        bold.innerText = films


        let input = document.querySelector("#writeCom")
        let comments = input.value
        if (comments !== "" && films !== "---Select a movie----") {
            let textNode = document.createTextNode(" : " + comments)
            liList.appendChild(bold);
            liList.appendChild(textNode);


            ulList.appendChild(liList)
            input.value = ""
        } else {
            input.value = ""
        }




    }



    function getMovieInformation() {
        const url = "https://ghibliapi.herokuapp.com/films"
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(filmsData => {

                filmList = filmsData
                // getPopulation(filmList)
                let selectBox = document.getElementById("mySelect");
                for (let film of filmsData) {
                    let option = document.createElement("option")
                    option.innerText = film.title
                    selectBox.appendChild(option)
                }

            })
            .catch(err => { // if promise is not met it will return a error as a response 
                console.log("err:", err)
            })

    }

    // function getPopulation(movies) {
    //     movies.forEach(film => {
    //             let option = document.createElement("option")
    //             option.innerText = film.title
    //             selectBox.appendChild(option);
    //             document.querySelector('mySelect')
    //             })




})
// getMovieInformation();

// function getSelectedOption(array) {
//     let selectBox = document.querySelector("mySelect");
//     let newOption = document.createElement("option");
//     selectBox.value = array[i].films

//     selectBox.appendChild(newOption);
//     div.appendChild(selectBox);

//     for (let i = 0; i < array.length; i++) {
//         newOptionValue = document.createTextNode();
//         newOption.innerText = selectBox.value
//         // let filmSelection = [];
//         // for (let i = 0; i < array.length; i++) {
//         //     let optionValue = document.createElement("option")
//         //     optionValue = array[i].films


//         //     for (let i = 0; i < array.length; i++) {
//         //         let optionValue = document.createElement("option")
//         //         document.createTextNode("films")
//         //         optionValue = array[i].films

//         //     }
//     }
// }



// function getLetter() {
//     for (let i = 100; i > 90; i--) {
//         console.log("its working")
//         let option = document.createElement("option")
//         option.innerText = "no";
//         selectBox.appendChild(option)





// let body = document.querySelector("body")
// let box = document.createElement("div")
// body.appendChild(box)
// box.setAttribute("id", "age")