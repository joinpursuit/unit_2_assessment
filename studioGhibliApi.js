let container;
let select;
let opt;
let ghibliArray;
let movieReviewArr = [];


document.addEventListener('DOMContentLoaded', () => {
    getMovieTitle()
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        submitReview(event);
    })
    let select = document.querySelector('select')
    select.addEventListener('change', () => {
        setupSelectListener()
    })

})

const getApiData = async () => {
    const {
        data
    } = await axios.get('https://ghibliapi.herokuapp.com/films')
    console.log(data);
    return data
}

const submitReview = (event) => {
    event.preventDefault()
    disableButton()
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

const disableButton = () => {
    let button = document.querySelector('button')
    opt = getSelectedMovie(select);
    if (opt.value === 'null') {
        button.disabled = true
    }
}

const getMovieTitle = async () => {
    select = document.querySelector('select')
    ghibliArray = await getApiData();
    for (let i = 0; i < ghibliArray.length; i++) {
        let options = document.createElement('option')
        options.value = ghibliArray[i].id;
        options.innerText = ghibliArray[i].title;
        select.appendChild(options)
    }
}

const getSelectedMovie = select => select.options[select.selectedIndex]

const setupSelectListener = () => {
    emptySubContainer()
    opt = getSelectedMovie(select);
    console.log(opt);
    for (let i = 0; i < ghibliArray.length; i++) {
        if (opt.value === ghibliArray[i].id) {
            creatingCard(ghibliArray[i])
        }
    }
}

const getContainer = () => document.querySelector('#container')

const emptySubContainer = () => {
    container = getContainer();
    container.textContent = ''
}

const creatingCard = (ghibliArray) => {
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