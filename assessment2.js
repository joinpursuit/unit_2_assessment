
document.addEventListener('DOMContentLoaded', () => {
    // let form = document.querySelector('form');
    // form.addEventListener('submit', () => {
    //     event.preventDefault();})
    getMovie();
    formListener();
    // sendReview()
   

})


const getMovie = () => {
    let movieLink = 'https://ghibliapi.herokuapp.com/films';

    axios.get(movieLink).then((response) => {
        try {
            let movieList = response.data;
            let para = document.querySelector('div');

            var select = document.querySelector('#films')
            let blank = document.createElement('option');
            blank.innerText = 'Select a Movie';
            select.add(blank);
            console.dir(select)
            var movies = []
            //creaste an object for the each movie to make it easier to click when selected from drop down menu
            for (i = 0; i < movieList.length; i++) {
                let movie = {
                    name: `${movieList[i].title}`,
                    year: `${movieList[i].release_date}`,
                    info: `${movieList[i].description}`
                }
                var name = document.createElement('h3');
                name.setAttribute('class', `${i}`)
                name.innerHTML = movieList[i].title
                para.appendChild(name)
                var year = document.createElement('p');
                year.setAttribute('class', `${i}`)
                year.innerHTML = movieList[i].release_date
                para.appendChild(year)
                var info = document.createElement('p');
                info.setAttribute('class', `${i}`)
                info.innerHTML = movieList[i].description
                para.appendChild(info)

                movies.push(movie);
                
                var option = document.createElement('option');
                option.text = movieList[i].title
                select.add(option);
                
            }
            
            console.log(movies)


            // {
            //     var name = document.createElement('h3');
            //     name.setAttribute('class', `${i}`)
            //     var year = document.createElement('p');
            //     year.setAttribute('class', `${i}`)
            //     var info = document.createElement('p');
            //     info.setAttribute('class', `${i}`)
            //     // console.log(i)
            //     // console.log(name.innerText = movieList[i].title);
            //     // console.log(year.innerHTML = movieList[i].release_date);
            //     // console.log(info.innerHTML = movieList[i].description);
            //   var option = document.createElement('option');
            //  option.text = movieList[i].title
            //     // console.log(option)
            //     select.add(option);
            // }

        } catch (err) {
            console.log('oops, there was an error. please try again', err);
        }
    })


}

const printInfo = () => {
    let changeFilm = document.querySelector('films');
changeFilm.addEventListener('change', (event) => {
    let result = document.querySelector('.1')
    console.log(result)
})
} 

//         switch (movies) {
//             case movies[0]: console.log('1');
//                 break;

//             case movies[1]: console.log('2');
//                 break;

//             default:
//                 console.log('ehh')

//         }
//     })
// }




// const addReview = () => {
// let reviewList = document.querySelector('ul');

//   let reviewText = document.getElementById('review').value.trim()
//   if (reviewText) {
//     let newReview = document.createElement('li')
//     newReview.innerText = reviewText
//     console.log(newReview)
//     reviewList.appendChild(newReview)
//     document.getElementById('review').value = '' // clears the textbox after button is submitted
//   } else {
//    console.log('Error. The list cannot be empty');
//   }
// }


const formListener = () => {
    let form = document.querySelector('form');
    form.addEventListener("submit", event => {
        event.preventDefault()
    });
    sendReview()

}

const sendReview = () => {
    let reviewInput = document.querySelector('#review').value;
    let reviewList = document.querySelector('#review-list');
    if(reviewInput){
        let newReview = document.createElement('li')
    newReview.innerText = reviewInput.value;
    reviewList.appendChild(newReview)
    //document.getElementById('review').value = ''

}
}



// })