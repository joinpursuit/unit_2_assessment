// Joseph P. Pasaoa
// Unit 2 Assessment: Studio Ghibli Review App
//

/*  TODO
    - revealing module pattern attempt for practice ofc
    - All reviews page (add as final obj to masterData?)
    - After All reviews page implemented, dynamic toggle of reviews title display
    - refactoring
    - easter egg hani
*/



let masterDataObj = {};

/* FUNCTIONS on DOMLoaded -- begin -- */
document.addEventListener("DOMContentLoaded", async () => {
  let masterDataObj = await setThePage(); /* RETRIEVE API DATA AND PROCESS TO VAR masterDataObj */
  // console.log('made postDOML: ', masterDataObj); // SAVED FOR DEBUGGING DATA

  let filmSelect = document.querySelector('#filmselect');
  filmSelect.addEventListener('change', () => {
      dressCurrentFilm(masterDataObj, filmSelect.value);
      resetFocus();
  });
  document.querySelector('#reviewform').addEventListener('submit', (e) => {
      processReview(e);
  })
  
});
/* FUNCTIONS on DOMLoaded -- end == */



const handleError = (functionName, error) => {
  console.log(`${functionName} ERROR: `, error);
}

const genRandom = (max) => { /* MIN: 1 inclusive, MAX inclusive */
  return Math.floor(Math.random() * max) + 1;
}

const resetFocus = () => {
  document.querySelector('#filmselect').blur();
  document.querySelector('#newreview').blur();
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
    for (let filmObj of response.data) {
      masterDataObj[filmObj.id] = {
        title: filmObj.title,
        year: filmObj.release_date,
        desc: filmObj.description,
        userReviews: []
      }
    }
    return masterDataObj;
  } catch {
    handleError(getGhibliData.name);
  }
}

const populateSelect = (mDataObj) => {
  let filmSelect = document.querySelector('#filmselect');
  
  for (let filmObjKey in mDataObj) {
    let makingOpt = document.createElement('option');
      makingOpt.value = filmObjKey;
      makingOpt.innerText = mDataObj[filmObjKey].title;
    filmSelect.appendChild(makingOpt);
  }
}

const dressCurrentFilm = (mDataObj, indexID) => {
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
  document.querySelector('h3').innerText = mDataObj[indexID].title;
  document.querySelector('#year').innerText = mDataObj[indexID].year;
  document.querySelector('#description').innerText = mDataObj[indexID].desc;

  document.querySelector('#currentFilmID').value = indexID;

  // Persistent Reviews Sys //
  let reviewsList = document.querySelector('#reviewslist');
  clearStage(reviewsList);
  for (let savedReview of mDataObj[indexID].userReviews) {
    printReview(savedReview);
  }

  resetInput();
  resetFocus();
}

const setThePage = async () => {
  try {
    let masterDataObj = await getGhibliData(); /* masterDataObj IS OUR CUSTOM OBJECT OF FILM OBJECTS BY IDS */

    // addSampleRevs(masterDataObj); /* DE-COMMENT IN TO ACTIVATE SAMPLE REVIEWS */

    populateSelect(masterDataObj);
    let selectedId = Object.keys(masterDataObj)[genRandom(Object.keys(masterDataObj).length)];
    dressCurrentFilm(masterDataObj, selectedId);
    
    return masterDataObj;
  } catch {
    handleError('setThePage');
  }
}



/* REVIEWS SYS FUNCTIONS */
const printReview = (entryStr) => {
  let reviewsList = document.querySelector('#reviewslist');
  let titleReviewed = document.querySelector('h3').innerText;

  let makingLI = document.createElement('li');
  let makingStrong = document.createElement('STRONG');
  let makingText = document.createTextNode(entryStr);

  makingStrong.innerText = `${titleReviewed} ✔︎ `;

  makingLI.appendChild(makingStrong);
  makingLI.appendChild(makingText);
  reviewsList.appendChild(makingLI);
}

const processReview = (e) => {
  e.preventDefault();

  let entry = newreview.value.trim();
  
  if (!entry) { // checks against empty inputs
    document.querySelector('#formerrors').innerHTML = "input error: please try again";
    resetInput();
  } else {
    document.querySelector('#formerrors').innerHTML = "";
    printReview(entry);
    masterDataObj[e.target[1].value].userReviews.push(entry); /* PUSHES REVIEW INTO MASTERDATAOBJ */
    resetInput();
    resetFocus();
  }
}
