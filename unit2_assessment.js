document.addEventListener("DOMContentLoaded", () => {
    let selectBox = document.getElementById("mySelect");

    // selectBox.addEventListener("click", () => {

    getMovieInformation();

    let films = null;
    let movieYear = null;
    let movieDescription = null;
    let filmList = [];

    function getMovieInformation() {
        const url = `https://ghibliapi.herokuapp.com/${films}/`
        fetch(url)
            .then(response => {
                response.json
            })
            .then(filmsData => {
                let films = filmsData.title
                getSelectedOption(movieTitle)

                movieYear = filmsData.release_date;
                movieDescription = filmsData.description;

                document.querySelector("movieTitle").innerText = films;
                document.querySelector("movieYear").innerText = movieYear;
                document.querySelector("movieDescription").innerText = movieDescription;


            })
            .catch(err => { // if promise is not met it will return a error as a response 
                console.log("err:", err)
            })

        function getSelectedOption(array) {
            let selectBox = document.querySelector("mySelect");
            let newOption = document.createElement("option");
            selectBox.value = array[i].films

            selectBox.appendChild(newOption);
            div.appendChild(selectBox);

            for (let i = 0; i < array.length; i++) {
                newOptionValue = document.createTextNode();
                newOption.innerText = selectBox.value
                // let filmSelection = [];
                // for (let i = 0; i < array.length; i++) {
                //     let optionValue = document.createElement("option")
                //     optionValue = array[i].films


                //     for (let i = 0; i < array.length; i++) {
                //         let optionValue = document.createElement("option")
                //         document.createTextNode("films")
                //         optionValue = array[i].films

                //     }
            }
        }
    }


    div.appendChild()
})

/*sorry I had difficulty getting the fetch url to work, manipulating Dom and the rest of the things. 


steps
get api
create a selected drop down box 
connect the value of thr drop box to  the api