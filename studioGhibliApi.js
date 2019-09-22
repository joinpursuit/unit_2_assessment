let select
let container
let movieArray = []
let opt;
document.addEventListener('DOMContentLoaded', () => {
    // let form = document.querySelector('form')

    console.log('hello');
    getMovieTitle()
    let form = document.querySelector('form')
    form.addEventListener('submit', (event)=>{
        submitReview(event);
    })
})

const getApiData = async () => {
    const movies = await axios.get('https://ghibliapi.herokuapp.com/films')
    console.log(movies.data);
    // pushToArray(movies.data)
    // creatingCard(movies.data)
    return movies.data
}

const submitReview = (event) =>{

    event.preventDefault()
    // replaceSelection();
let list = document.querySelector('ul')
let noInput = document.querySelector('p')
let textInput = document.querySelector('#textField').value
let newReview = document.createElement('li')
if(textInput === ''){
    noInput.innerText =`Please enter a valid review`
    newReview.innerText=''
} else{
    noInput.innerText =''
    newReview.innerText = `${textInput}`;
    list.appendChild(newReview)
    }
    document.querySelector('#textField').value =''
}

const pullFromHtml = async () => {
    return select = document.querySelector('select')
}

const getMovieTitle = async () => {
    select = await pullFromHtml();
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
    select = await pullFromHtml();
    select.addEventListener('change', () => {
replaceSelection()
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
}

const getContainer = () => {
    return container = document.querySelector('#container')
}

const replaceSelection = async () => {
    let container = getContainer();
    // container.innerHTML = ''
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

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