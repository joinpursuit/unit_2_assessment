let container;
let select;
let opt;
let ghibliArray;
let movieReviewArr = [];
let list = document.querySelector('ul')

document.addEventListener('DOMContentLoaded', () => {
    getMovieTitle()
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        submitReview(event);
    })


})

function test() {
    let button = document.querySelector('button')
    opt = getSelectedMovie(select);
    if (opt.value === 'null') {
        button.disabled = true
    }
}
const getApiData = async () => {
    const {
        data
    } = await axios.get('https://ghibliapi.herokuapp.com/films')
    console.log(data);
    return data
}

const submitReview = (event) => {
    event.preventDefault()
    test()
    opt = getSelectedMovie(select).text.bold()
    let list = document.querySelector('ul')
    let noInput = document.querySelector('#error')
    let textInput = document.querySelector('#textField').value
    let newReview = document.createElement('li')
    if (textInput === '') {
        noInput.innerText = `Please enter a valid review`
        newReview.innerText = ''
    } else {
        noInput.innerText = ''
        newReview.innerHTML = ` ${opt}: ${textInput}`
        list.appendChild(newReview)
    }
    document.querySelector('#textField').value = ''
}

const pullFromHtml = () => {
    return select = document.querySelector('select')
}

const getMovieTitle = async () => {
    select = await pullFromHtml();
    ghibliArray = await getApiData();
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
    return option
}

const getMovieInfo = async (param) => {
    select = await pullFromHtml();
    select.addEventListener('change', () => {
        replaceSelection()
        opt = getSelectedMovie(select);
        console.log(opt);
        for (let i = 0; i < param.length; i++) {
            if (opt.text === param[i].title) {
                creatingCard(param[i])
            }
        }
    })
}

const getContainer = () => {
    return container = document.querySelector('#container')
}
const replaceSelection = () => {
    container = getContainer();
    container.innerHTML = ''
}

const creatingCard = async (ghibliArray) => {
    container = getContainer();
    const movieContainer = document.createElement('div')
    movieContainer.id = 'movieTicket'
    movie = document.createElement('h3')
    let year = document.createElement('p')
    let blurb = document.createElement('p')
    movie.innerText = ghibliArray.title
    year.innerText = ghibliArray.release_date
    blurb.innerText = ghibliArray.description
    movieContainer.append(movie, year, blurb)
    container.appendChild(movieContainer)
}