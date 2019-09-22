
document.addEventListener('DOMContentLoaded', () => {
    // let form = document.querySelector('form');
    // form.addEventListener('submit', () => {
    //     event.preventDefault();})
    getMovie();
    formListener();
    sendReview()

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
                movies.push(movie);
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
            //     var option = document.createElement('option');
            //     option.text = movieList[i].title
            //     // console.log(option)
            //     select.add(option);
            // }


        } catch (err) {
            console.log('oops, there was an error. please try again', err);
        }
    })

}

const printInfo = () => {
    let change = document.querySelector('select');
    change.addEventListener("onchange", () => {
        switch(number){
            case 0:

        }
    })
})




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
    form.addEventListener("onsubmit", function event() {
        event.preventDefault(sendReveiw)
    });
    
}

const sendReview = () => {
    let reviewInput = document.querySelector('input');
    let reviewList = document.querySelector('#reviewList');
    let newReview = document.createElement('li')
    newReview.innerHTML = reviewInput.value;


    console.log(newReview)

    console.log(reviewList)
    //   document.getElementById('review').value = '' // clears the textbox after button is submitted

}




// })