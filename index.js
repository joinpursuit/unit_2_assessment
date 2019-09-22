document.addEventListener("DOMContentLoaded", () => {

let button = document.querySelector("button");
button.addEventListener("click", addReview);

})

let url = "https://ghibliapi.herokuapp.com/films";


axios.get(url)
    .then((response) => {
        let dropDown = document.getElementById("dropMenu");
        let movies = response.data;
        console.log(movies)
        for (let i of movies) {
            let option = document.createElement("option");
            option.text = i.title;
            option.id = i.release_date;
            option.value = i.description;
            dropDown.add(option);         
        }
  
    })
    .catch((err) => {
        console.log("Oops, there's an error");
    })

    
function switchMovies(movies) {
        let dropDown = document.getElementById("dropMenu");
        let selected = dropDown.selectedIndex;
        // console.log()


        let filmInfo = document.getElementById("filmInfo");
        filmInfo.innerHTML = "";
    
        let filmTitle = document.createElement("h3");
        filmTitle.innerText = dropDown[selected].text;
        filmInfo.appendChild(filmTitle);
    
        let releaseDate = document.createElement("p");
        releaseDate.innerText = dropDown[selected].id;
        filmInfo.appendChild(releaseDate);
    
        let descrip = document.createElement("p");
        descrip.innerText = dropDown[selected].value;
        filmInfo.appendChild(descrip);
    }

function addReview(event) {
    event.preventDefault();
    let box = document.getElementById("textbox");
    let review = box.value;

    let dropDown = document.getElementById("dropMenu");
    let selected = dropDown.selectedIndex;

    let bottom = document.getElementById("bottom");
    let reviewItem = document.createElement("li");
    reviewItem.innerHTML = `<b>${dropDown[selected].text}: </b> ${review}`;
    bottom.appendChild(reviewItem);

    // console.log(review)
    

    
}