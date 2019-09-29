// Joseph P. Pasaoa
// Unit 2 Assessment: Studio Ghibli Review App
//

/*  TODO
    - revealing module pattern attempt for practice
    - All reviews page (add as final obj to masterData?)
    - After All reviews page implemented, dynamic toggle of reviews title display
    - refactoring
    - easter egg hani
*/



/* CODE post-DOMLoaded */
document.addEventListener("DOMContentLoaded", async () => {
  let gDataObj = await getGData(); // RETRIEVES API DATA & PROCESSES TO VAR gDataObj, CUSTOMIZED OBJ OF FILM OBJECTS BY IDS
  // console.log('postDOML Data Received: ', gDataObj); // SAVED FOR LOGGING DATA

  setThePage(gDataObj);

  // E.LISTENERS //
  let filmSelect = document.querySelector('#filmselect');
  filmSelect.addEventListener('change', () => {
      dressCurrentFilmStage(gDataObj, filmSelect.value);
      resetFocus();
  });
  document.querySelector('#reviewform').addEventListener('submit', (e) => {
      processReview(gDataObj, e);
  })
});



/* HELPER FUNCTIONS */
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



/* GETS & PROCESSES API DATA */
const getGData = async () => {
  try {
    let response = await axios.get('https://ghibliapi.herokuapp.com/films');
    let outputObj = {}
    for (let filmObj of response.data) {
      outputObj[filmObj.id] = {
        title: filmObj.title,
        year: filmObj.release_date,
        desc: filmObj.description,
        userReviews: []
      }
    }
    return outputObj;
  } catch {
    handleError(getGData.name);
  }
}




const setThePage = (dataObj) => {
  // addSampleRevs(dataObj); /* DE-COMMENT IN TO ACTIVATE SAMPLE REVIEWS */

  createSelectOptions(dataObj);
  let selectedId = Object.keys(dataObj)[genRandom(Object.keys(dataObj).length)];
  dressCurrentFilmStage(dataObj, selectedId);
}

const createSelectOptions = (dataObj) => {
  let filmSelect = document.querySelector('#filmselect');
  
  for (let filmObjKey in dataObj) {
    let makingOpt = document.createElement('option');
      makingOpt.value = filmObjKey;
      makingOpt.innerText = dataObj[filmObjKey].title;
    filmSelect.appendChild(makingOpt);
  }
}

const dressCurrentFilmStage = (dataObj, indexID) => {
  let stage = document.querySelector('#currentfilmstage');

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
  document.querySelector('h3').innerText = dataObj[indexID].title;
  document.querySelector('#year').innerText = dataObj[indexID].year;
  document.querySelector('#description').innerText = dataObj[indexID].desc;

  document.querySelector('#currentFilmID').value = indexID;

  // Persistent Reviews Sys
  let reviewsList = document.querySelector('#reviewslist');
  clearStage(reviewsList);
  for (let savedReview of dataObj[indexID].userReviews) {
    createReview(savedReview);
  }

  resetInput();
  resetFocus();
}




/* REVIEWS SYSTEM FUNCTIONS */
const processReview = (dataObj, e) => {
  e.preventDefault();

  let entry = newreview.value.trim();
  
  if (!entry) { // checks against empty inputs
    document.querySelector('#formerrors').innerHTML = "input error: please try again";
    resetInput();
  } else {
    document.querySelector('#formerrors').innerHTML = "";
    createReview(entry);
    dataObj[e.target[1].value].userReviews.push(entry); // PUSHES REVIEW INTO gDataObj userReviews arrays
    resetInput();
    resetFocus();
  }
}

const createReview = (entryStr) => {
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
