/*Decided to retry the examine in a non stress enviornment 
// for me and I feel I am already working towards a better solutiion here.*/

document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("#films");
    select.addEventListener('change', () => {
        //console.log(select.value);
        pickmovie()
    })

    const createOption = (choice, index) => {
        let option = document.createElement('option');
        option.setAttribute("id", `${choice}`/*`${index}`*/)
        option.innerText = choice;
        select.add(option)
    } 
     
    //printList()
    let tests = document.querySelectorAll("#movie");
    
const pickmovie = (element) => {
let someChoice = document.querySelectorAll('select');
console.log(someChoice)
// for(let choice of someChoice){
    for (i = 0; i < someChoice.length; i++){
    var choices = {
       someChoice: `${someChoice.selectedindex}`
    }
}
console.log(choices)
let div = document.querySelector('div')
let choiceIndex = someChoice.index;
// div.appendChild.choiceIndex
// div.innerHTML = someChoice[choiceIndex]

}

// pickmovie()





const printList = (movies) => {
        let div = document.querySelector('div')
        for (let item of movies) {
             let items = document.createElement('p');
             items.innerText = item.innerText
            console.log("test:   ", items)
              div.appendChild(items)
        }
    }
    const getMovie = () => {
        let movieLink = 'https://ghibliapi.herokuapp.com/films';
        axios.get(movieLink).then((response) => {
            try {
                let movieList = response.data;
                //let para = document.querySelector('div');
                // var select = document.querySelector('#films')
                let blank = document.createElement('option');
                blank.innerText = 'Select a Movie';
                select.add(blank);
                console.dir(select);
                var movies = [];
                //create an object for the each movie to make it easier to click when selected from drop down menu
                for (i = 0; i < movieList.length; i++) {
                    let movie = {
                        name: `${movieList[i].title}`,
                        year: `${movieList[i].release_date}`,
                        info: `${movieList[i].description}`
                    }
                    // var name = document.createElement('h3');
                    // name.setAttribute('class', `${i}`)
                    // name.innerHTML = movieList[i].title
                    // // para.appendChild(name)
                    // var year = document.createElement('p');
                    // year.setAttribute('class', `${i}`)
                    // year.innerHTML = movieList[i].release_date
                    // // para.appendChild(year)
                    // var info = document.createElement('p');
                    // info.setAttribute('class', `${i}`)
                    // info.innerHTML = movieList[i].description
                    // // para.appendChild(info)
                    movies.push(movie);

                createOption(`${movieList[i].title}`, `${i}`)
                    // let option = document.createElement('option');
                    // option.text = movieList[i].title
                    // select.add(option);   
                }
                // printList(movie)
                movies.unshift('');
                console.log(movies)
    
            } catch (err) {
                console.log('oops, there was an error. please try again', err);
            }
            

    
    })
}
    getMovie()
})