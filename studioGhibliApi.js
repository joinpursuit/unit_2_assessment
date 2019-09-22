let select
let container
let movieArray = []
document.addEventListener('DOMContentLoaded', () => {

    console.log('hello');
    getMovieTitle()

})

const getApiData = async () => {
    const movies = await axios.get('https://ghibliapi.herokuapp.com/films')
    console.log(movies.data);
    // pushToArray(movies.data)
    // creatingCard(movies.data)
    return movies.data
}

// const pushToArray = async (data) => {
//     for (let i = 0; i < data.length; i++) {
//         movieArray.push(data[i].title)
//     }
//     console.log(movieArray);

// }


const pullFromHtml = async () => {
    return select = document.querySelector('select')
}

const getMovieTitle = async () => {
    let select = await pullFromHtml();
    let ghibliArray = await getApiData();

    for (let i = 0; i < ghibliArray.length; i++) {
        let options = document.createElement('option')
        options.value = ghibliArray[i].title;
        options.innerText = ghibliArray[i].title;
        select.appendChild(options)
    }
    getMovieInfo(ghibliArray)
}
const getSelectedMovie = (select) => {
    let option;
    for (let i = 0; i < select.length; i++) {
        option = select[i]
        if (option.selected === true) {
            break;
        }
    }
    return option;
}

const getMovieInfo = async (param) => {
    let select = await pullFromHtml();
    select.addEventListener('change', () => {

        let opt = getSelectedMovie(select);
        console.log(opt);
        for (let i = 0; i < param.length; i++) {
            if (opt.text === param[i].title) {
                creatingCard(param[i])
            }
        }
        p.innerText = opt.text + ' ' + "hello"
        document.body.appendChild(p)
        console.log(p);
    })

    let p = document.createElement('p')

    // for (let i = 0; i < param.length; i++) {
    //     if (opt.text === param[i].title) {
    //         creatingCard(param)

    //     }
    // }

    // if (opt.text === param[0].title) {
    //     creatingCard(param)
    // }


}

const getContainer = () => {
    return container = document.querySelector('#container')
}

const replaceSelection = async () => {
    let container = getContainer();
    container.innerHTML = ''
}

const creatingCard = async (ghibliArray) => {
    container = getContainer();

    const movieContainer = document.createElement('div')
    let movie = document.createElement('p')
    let year = document.createElement('p')
    let blurb = document.createElement('p')

    let movieContainerArr = [movie, year, blurb]


    movie.innerText = ghibliArray.title
    year.innerText = ghibliArray.release_date
    blurb.innerText = ghibliArray.description


    for (let i = 0; i < movieContainerArr.length; i++) {
        movieContainer.appendChild(movieContainerArr[i])
    }

    container.appendChild(movieContainer)
}