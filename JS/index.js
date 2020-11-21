document.addEventListener("DOMContentLoaded", () => {
  getMovies();
  enterComment();

  let select = document.querySelector("#select");
  select.addEventListener("change", (event) => {
    let value = event.target.value;
    console.log(value);
    getMovieByID(value);
  });
});

const getMovies = async () => {
  let url = "https://ghibliapi.herokuapp.com/films";
  try {
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
    listMovies(data);
  } catch (err) {
    console.log(err);
  }
};

const listMovies = (data) => {
  let select = document.querySelector("#select");
  for (let i = 0; i < data.length; i++) {
    let option = document.createElement("option");
    option.innerText = data[i].title;
    option.value = data[i].id;
    select.appendChild(option);
  }
};

const getMovieByID = async (value) => {
  let url = `https://ghibliapi.herokuapp.com/films/${value}`;
  try {
    let response = await axios.get(url);
    let data = response.data;
    displayMovie(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const displayMovie = (data) => {
  clear();
  let info = document.querySelector("#info");
  let title = document.createElement("h1");
  let year = document.createElement("h3");
  let description = document.createElement("p");
  title.innerText = data.title;
  year.innerText = data.release_date;
  description.innerText = data.description;
  info.appendChild(title);
  info.appendChild(year);
  info.appendChild(description);
};

const clear = () => {
  let info = document.querySelector("#info");
  info.innerHTML = "";
};

const enterComment = () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = document.querySelector("input");
    let inputVal = input.value;
    let review = document.createElement("li");
    review.innerText = inputVal;
    form.appendChild(review);
    input.value = "";
  });
};

const listenInput = () => {
  let input = document.querySelector("#input");
  input.addEventListener("input", (event) => {
    let inputVal = event.target.value;
    console.log(inputVal);
  });
};
