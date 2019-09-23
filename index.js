// Joseph P. Pasaoa
// Unit 2 Assessment: Studio Ghibli Review App
//

/*  TODO
    - persistent array for reviews across titles
    - refactoring
*/



/* FUNCTIONS on DOMLoaded -- begin -- */
document.addEventListener("DOMContentLoaded", async () => {
  let ghibData = await setThePage();

  // console.log('inDOML: ', ghibData); // SAVED FOR DEBUGGING DATA

  let filmSelect = document.querySelector('#filmselect');
  filmSelect.addEventListener('change', () => {
      populateCurrent(ghibData, filmSelect.value);
  });
  document.querySelector('#reviewform').addEventListener('submit', (e) => {
      processReview(e, ghibData);
  })
});
/* FUNCTIONS on DOMLoaded -- end == */



const handleError = (error) => {
  console.log(`HAVE ERROR: `, error);
}

const genRandom = (max) => { /* MIN: 1 inclusive, MAX inclusive */
  return Math.floor(Math.random() * max) + 1;
}

const resetFocus = () => {
  document.querySelector('#filmselect').focus();
}

const resetInput = () => {
  document.querySelector('#newreview').value = '';
  document.querySelector('#newreview').focus();
};

const clearStage = (location) => {
  while (location.firstChild) {
    location.removeChild(location.lastChild);
  }
}

const getGhibliData = async () => {
  try {
    let response = await axios.get('https://ghibliapi.herokuapp.com/films');
    return response.data;
  } catch {
    handleError();
  }
}

const populateSelect = (dataArr) => {
  let filmSelect = document.querySelector('#filmselect');
  for (let i = 0; i < dataArr.length; i++) {
    let makingOpt = document.createElement('option');
      makingOpt.value = i;
      makingOpt.innerText = dataArr[i].title;
    filmSelect.appendChild(makingOpt);
  }
}

const populateCurrent = (dataArr, index) => {
  let stage = document.querySelector('#currentfilm');

  if (stage.childNodes.length < 3) {
    clearStage(stage);

    let makingH3 = document.createElement('h3');
    let makingPYear = document.createElement('p');
    let makingPDes = document.createElement('p');

    makingPYear.id = 'year';
    makingPDes.id = 'description';

    stage.appendChild(makingH3);
    stage.appendChild(makingPYear);
    stage.appendChild(makingPDes);
  }
  document.querySelector('h3').innerText = dataArr[index].title;
  document.querySelector('#year').innerText = dataArr[index].release_date;
  document.querySelector('#description').innerText = dataArr[index].description;

  document.querySelector('#revtitle').value = dataArr[index].title; /* SETUP FOR REVIEW IF SUBMITTED */
}

const setThePage = async () => {
  try {
    let ghibData = await getGhibliData(); /* GHIBDATA IS AN ARRAY OF FILM OBJECTS */

    populateSelect(ghibData);
    populateCurrent(ghibData, genRandom(ghibData.length));

    return ghibData;
  } catch {
    handleError();
  }
}



/* REVIEWS SYS FUNCTIONS */
const addReview = (entryStr, dataArr) => {
  let reviewsList = document.querySelector('#reviewslist');
  let titleReviewed = document.querySelector('#revtitle').value;

  let makingLI = document.createElement('li');
  makingLI.innerHTML = `<strong>${titleReviewed} ✔︎</strong> ${entryStr}`;

  reviewsList.appendChild(makingLI);
}

const processReview = (e, dataArr) => {
  e.preventDefault();

  let entry = newreview.value.trim();
  
  if (!entry) { // checks against empty inputs
    document.querySelector('#formerrors').innerHTML = "input error: please try again";
    resetInput();
  } else {
    document.querySelector('#formerrors').innerHTML = "";
    addReview(entry, dataArr);
    resetInput();
    resetFocus();
  }
}
