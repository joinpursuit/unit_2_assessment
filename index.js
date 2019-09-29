document.addEventListener('DOMContentLoaded', () => {
  getMovieNames()
})

const getMovieNames = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(movies => {
    for(i = 0; i < movies.length; i ++) {
      let list = document.querySelector('select')
      let movie = document.createElement('option')
      movie.text = movies[i].title

      list.appendChild(movie)
    }
  })
}

const displayMovieInfo = () => {
  let info = document.getElementById('movie')
  info.innerText = ''

  let list = document.querySelector('select')
  let name = list.value

  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(movies => {
    for(i = 0; i < movies.length; i++) {
      if(movies[i].title === name) {
        let info = document.getElementById('movie')
        let title = document.createElement('h3')
        let year = document.createElement('p')
        let description = document.createElement('p')
        title.innerText = movies[i].title
        year.innerText = movies[i].release_date
        description.innerText = movies[i].description

        info.appendChild(title)
        info.appendChild(year)
        info.appendChild(description)
      }
    }
  })
}

const displayRandomMovie = () => {
  let info = document.getElementById('movie')
  info.innerText = ''

  let list = document.querySelector('select')
  list.options.selectedIndex = Math.ceil(Math.random() * 20)

  displayMovieInfo()
}

const addReview = () => {
  let title = document.querySelector('h3')
  let reviews = document.querySelector('ul')
  let review = document.createElement('li')
  let input = document.createElement('p')

  review.innerText = title.innerText + ': '
  review.style.fontWeight = 'bold'

  reviews.appendChild(review)

  let textbox = document.getElementById('textbox')
  let span = document.createElement('span')
  let reviewer = document.getElementById('reviewer')
  let span2 = document.createElement('span')

  span.innerText = textbox.value
  span.style.fontWeight = 'normal'

  review.appendChild(span)

  span2.innerText = ' by ' + reviewer.value
  span2.style.fontStyle = 'italic'

  span.appendChild(span2)

  let init = {
    method: 'POST',
    body: title.innerText + ': ' + textbox.value + ' by ' + reviewer.value
  }

  fetch('https://github.com/Pursuit-Core-6-2/film-reviews-api', init)

  textbox.value = ''
  reviewer.value = ''
}
