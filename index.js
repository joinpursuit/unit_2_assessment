const apiUrl = 'https://ghibliapi.herokuapp.com';
let localMovieReviewStorage = {};

document.addEventListener('DOMContentLoaded', () => {
	seedSelectBox();
	let selectBox = document.querySelector('.movie-titles');
	selectBox.addEventListener('change', getMovieInfo);
	let form = document.querySelector('.user-review');
	form.addEventListener('submit', makeNewReview);
});

async function seedSelectBox(){
	let selectBox = document.querySelector('.movie-titles');
	let movies = await axios.get(`${apiUrl}/films`);
	let defaultOption = document.createElement('option');
	selectBox.appendChild(defaultOption);
	for(let i = 0; i < movies.data.length; i++){
		let option = document.createElement('option');
		option.text = movies.data[i].title;
		localMovieReviewStorage[movies.data[i].title] = [];
		selectBox.appendChild(option);
	}
}

async function getMovieInfo(){
	let descriptionBoard = document.querySelector('.movie-description');
	let child = descriptionBoard.firstElementChild;
	//removes all child elements from the board
	while(child){
		descriptionBoard.removeChild(child);
		child = descriptionBoard.firstElementChild;
	}
	let selectBox = document.querySelector('.movie-titles');
	let movies = await axios.get(`${apiUrl}/films`);
	let selectedMovie = movies.data[selectBox.selectedIndex - 1];
	let title = document.createElement('h3');
	title.classList.add('title')
	title.innerText = selectedMovie.title;
	let releaseYear = document.createElement('strong');
	releaseYear.innerText = selectedMovie.release_date;
	let description = document.createElement('p');
	description.innerText = selectedMovie.description;
	descriptionBoard.appendChild(title);
	descriptionBoard.appendChild(releaseYear);
	descriptionBoard.appendChild(description);
	displayMovieReviews(selectedMovie.title);
}

function makeNewReview(e){
	e.preventDefault();
	let form = document.querySelector('.user-review');
	let review = form.querySelector('input').value;
	localMovieReviewStorage[document.querySelector('.title').innerText].push(review);
	displayMovieReviews(document.querySelector('.title').innerText);
	form.querySelector('input').value = '';
}

function displayMovieReviews(title){
	let reviewBoard = document.querySelector('.user-reviews');
	let child = reviewBoard.firstElementChild;
	while(child){
		reviewBoard.removeChild(child);
		child = reviewBoard.firstElementChild;
	}
	let reviewList = localMovieReviewStorage[title];

	for(let i = 0; i < reviewList.length; i++){
		let temp = document.createElement('li');
		let titleHolder = document.createElement('p');
		let title = document.createElement('strong');
		let review = document.createElement('p');
		title.innerText = `${document.querySelector('.title').innerText}: `;
		review.innerText = reviewList[i];
		temp.classList.add('movie-review');
		titleHolder.appendChild(title);
		temp.appendChild(titleHolder);
		temp.appendChild(review);
		reviewBoard.appendChild(temp);
	};
}