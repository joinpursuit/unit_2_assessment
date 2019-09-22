document.addEventListener('DOMContentLoaded', () => {
// console.log("dom")
setupDroplist();
fetchMovieList()
})
// add list to drop list
const setupDroplist = ()=>{
  const getMovieList = document.querySelector('#droplist')
  getMovieList.addEventListener('click', fetchMovieList)
  console.log( "click")
}

const fetchMovieList =()=>{
  console.log("fetch was called")
  fetchAllTitles();
  // selectedTitle();
  // fetchYear();
  // fetchDescription();
}

const fetchAllTitles=(film)=>{
  
  const films =` https://ghibliapi.herokuapp.com/films`
  // console.log(url)
  fetch(films)
  .then(response => response.json())
  .then(films => {
    // console.log(films)
    for (let i = 0; i< films.length; i++) {
     let titleFilms = films[i].title
    let options = document.createElement('option');
    options.value = titleFilms;
    options.innerText = titleFilms;
    let select =document.querySelector('#droplist')
    select.appendChild(options)
   
    }
  })
  const selectedTitle=(select)=>{
  
    let option;
      for (let i = 0; i< titleFilms.length; i++) {
       option = select[i]
      if(option.selected === true){
        return option
        console.log(option)
      }
      }
      return option

    }


  // .catch(err => {
  //   console.log("err: ", err);
 }




