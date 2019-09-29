document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  pickAMovie();
  setupFilmSelector();
  text();
});



const pickAMovie = () => {
  console.log("starting");

  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => {
      return response.json();

      // movieList();
    })
    .then(data => {
      console.log(data);
  placeHolder(data)
      for (let i = 0; i < data.length; i++) {
        movieList(data[i].title);
      }

    })

    .catch(err => {
      console.log("There was an error", err);
    });
};


const placeHolder= (data)=>{
  let holderOption = document.createElement("option")
  holderOption.innerText= "Pick a Movie"
  holderOption.id = "placeHolder"
    document.getElementsByClassName("movie")[0].appendChild(holderOption);
}



const movieList = list => {
  let newOption = document.createElement("option")
  newOption.value = list;
  newOption.id = list;
  newOption.innerText = list;
  newOption.className = "allMovies";

  document.getElementsByClassName("movie")[0].appendChild(newOption);
};



const setupFilmSelector = film => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      filmInfo(data);
    });
};



const filmInfo = data => {
  const select = document.querySelector("#pickAMovie");

  select.addEventListener("change", event => {
    // console.log('select was value changed:' event.target.value)

    console.dir(event.target.selectedOptions);
    console.dir(event.target.selectedOptions[0].value);
    let pickTitle = event.target.selectedOptions[0].value;
    // console.log(pickTitle)
    // let pickDescript = event.target.selectedOptions[0].value.
    let h3 = document.querySelector("h3");
    if (!h3) {
      let filmTitle = document.createElement("h3");
      filmTitle.innerText = pickTitle;
      filmTitle.id = "film_title";
      console.log(filmTitle);

      console.log(filmTitle);
      document.getElementsByClassName("info")[0].appendChild(filmTitle);

      for (let i = 0; i < data.length; i++) {
        let releaseYear = document.createElement("p");
        releaseYear.id = "release_Year";
        if (filmTitle.innerText === data[i].title) {
          releaseYear.innerText = data[i].release_date;
          document.getElementsByClassName("info")[0].appendChild(releaseYear);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let description = document.createElement("p");
        description.id = "film_description";
        if (filmTitle.innerText === data[i].title) {
          description.innerText = data[i].description;
          document.getElementsByClassName("info")[0].appendChild(description);
        }
      }
    } else {
      let filmTitle = document.querySelector("#film_title");
      filmTitle.innerText = pickTitle;
      document.getElementsByClassName("info")[0].appendChild(filmTitle);

      for (let i = 0; i < data.length; i++) {
        let releaseYear = document.querySelector("#release_Year");
        if (filmTitle.innerText === data[i].title) {
          releaseYear.innerText = data[i].release_date;
          document.getElementsByClassName("info")[0].appendChild(releaseYear);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let description = document.querySelector("#film_description");
        if (filmTitle.innerText === data[i].title) {
          description.innerText = data[i].description;
          document.getElementsByClassName("info")[0].appendChild(description);
        }
      }
    }
  });
};


const text = () => {
  let form = document.querySelector("#form");
  let movieButton = document.querySelector("#submit");
  let input = document.querySelector("#textbox");
  let movies = document.querySelector(".movie");
  let review = document.querySelector("#review");

  form.addEventListener("submit", () => {
    event.preventDefault();

    let empty = "";
    if (empty !== input.value) {
      console.log(input.value);
      let review = document.querySelector("#review");
      let title = document.createElement("li");
      let filmTitle = document.querySelector("#film_title");
      console.log(filmTitle);
      let fimTitlText = filmTitle.innerText;
      title.innerText = fimTitlText + ": " + input.value;
      document.getElementsByClassName("review")[0].appendChild(title);
    }
  });
};
