document.addEventListener('DOMContentLoaded', () => {
    console.log('hello');
    getMovieTitle()

})

const getApiData = async () => {
    const movies = await axios.get('https://ghibliapi.herokuapp.com/films')
    console.log(movies);

    return movies.data
}

const getMovieTitle = async () => {
    let select = document.querySelector('select')
    let ghibliArray = await getApiData();

    for (let i = 0; i < ghibliArray.length; i++) {
        let options = document.createElement('option')
        options.value = ghibliArray[i].title;
        options.innerText = ghibliArray[i].title;
        select.appendChild(options)
    }
}