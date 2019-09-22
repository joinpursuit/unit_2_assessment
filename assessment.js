document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#form");
  let movieButton = document.querySelector("#submit");
  let input = document.querySelector("#textbox");
  let movies = document.querySelector(".movie");
  let review = document.querySelector("#review");

  movies.addEventListener("click", () => {
    pickAMovie();
// infoDisplay()
  });

  console.log("DOM Loaded");

  form.addEventListener("submit", () => {
    event.preventDefault();

    let empty = "";
    if (empty !== input.value) {
      console.log(input.value);
      let review = document.querySelector("#review");
      let title = document.createElement("li");
      title.innerText = input.value;
      console.log(title.innerText);
      document.getElementsByClassName("review")[0].appendChild(title);
    }
  });
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

      for (let i = 0; i < data.length; i++) {
        movieList(data[i].title);
  }



      let title = document.createElement("h3");
      document.getElementsByClassName("info")[0].appendChild(title);


      let releaseYear = document.createElement("p");
      document.getElementsByClassName("info")[0].appendChild(releaseYear);

      let description = document.createElement("p");
      document.getElementsByClassName("info")[0].appendChild(description);


      for (let j = 0; j < data.length; j++) {


        if (document.getElementById(`${data[j].title}`).value ===`${data[j].title}`) {
          console.log(`${data[j].title}`);

          title.innerText = data[j].title;
          releaseYear.innerText = data[j].release_date;
         description.innerText = data[j].description;

        }
      }

})


.catch((err)=>{
  console.log("There was an error", err)
})
}

const movieList = list => {
  console.log(list);
  let newOption = document.createElement("option");
  newOption.value = list;
  newOption.id = list;
  newOption.innerText = list;
  newOption.className = "allMovies";

  document.getElementsByClassName("movie")[0].appendChild(newOption);



};





// const infoDisplay = () => {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then(response2 => {
//         return response2.json();
//
//       })
//       .then (data2 => {
//         console.log(data2);
//
// let view = document.getElementById("pickAMovie")
// let user = view.options[view.selectedIndex].text
// console.log(user)
// info()
//  info(data[j].title)
// info(innerText = data[j].release_date)
// info(description.innerText = data[j].description)
//
//     })
//
// }
//
//
//
//
//
// const info = (data) =>{
//
//   let view = document.getElementById("pickAMovie")
//   let user = view.options[view.selectedIndex].text
//
//
//         let title = document.createElement("h3");
//
//         title.innerText = data
//         document.getElementsByClassName("info")[0].appendChild(title);
//
//
//         let releaseYear = document.createElement("p");
//         releaseYear.innerText = data
//         document.getElementsByClassName("info")[0].appendChild(releaseYear);
//
//         let description = document.createElement("p");
//         description.innerText= data
//         document.getElementsByClassName("info")[0].appendChild(description);
//
//
// }
