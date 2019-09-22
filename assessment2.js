
document.addEventListener('DOMContentLoaded', () => {

    let list = document.querySelector('#films');
    list.addEventListener('onchange', getMovie);

})


const getMovie =  () => {
    let movieLink = 'https://ghibliapi.herokuapp.com/films';

   axios.get(movieLink).then((response) => {
        try {
            let movieList = response.data;
            console.log(movieList.title)
           let info = document.querySelector('div');
           let name = document.createElement('h3');
           let year = document.createElement('p');
           let description = document.createElement('p');
        for(i = 0; i < movieList.length; i++) {
            console.log(i)
            console.log(name.innerText = movieList[i].title);
            console.log(year.innerHTML = movieList[i].release_date);
            console.log(description.innerHTML = movieList[i].description);
            
            info.appendChild(name);
            info.appendChild(year);
            info.appendChild(description)
}






       
            // if (!data) {
            //     console.log(movieList)
            // }
        } catch (err) {
            console.log('oops, there was an error. please try again', err);
        }
    })
}
getMovie()