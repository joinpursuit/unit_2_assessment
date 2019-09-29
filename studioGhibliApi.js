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
    textInput = document.querySelector('#textField').value
    let newReview = document.createElement('li')
    newReview.innerHTML = ` ${opt}: ${textInput}`
    list.appendChild(newReview)
    // textInput.innerText = '';
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
    ghibliArray.filter(el => {
        if (opt.value === el.id) {
            return creatingCard(el)
        }
    })
}

const getContainer = () => document.querySelector('#container')

const emptySubContainer = () => {
    container = getContainer();
    container.textContent = ''
}

const creatingCard = (elem) => {
    container = getContainer();
    movie = document.createElement('h3')
    let year = document.createElement('p')
    let blurb = document.createElement('p')
    movie.innerText = elem.title
    year.innerText = elem.release_date
    blurb.innerText = elem.description
    container.append(movie, year, blurb)
}