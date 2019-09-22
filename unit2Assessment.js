document.addEventListener("DOMContentLoaded", () => {
  // console.log("just checking on things so far");
  //does this submit button function actually go here? check back after fetch
  whenSubmitButtonIsClicked();
})



const whenSubmitButtonIsClicked = () => {
  //pull our button and say when clicked perform submitting function
  const submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", addUserReviewToList);
}

const addUserReviewToList = () => {
  //this line says pull the ul using its id
  //and set it to a variable so we can reference it
  //should the userReviewsList container be in here or outside a function?
  let userReviewsList = document.querySelector("#reviewsListContainer");

  //create a new li
  let newReview = document.createElement("li");
  //add an li to the review list ul
  userReviewsList.appendChild(newReview);

  //li's innerText should have the text entered in my input text box
  newReview.innerText = userReviewEntry.innerText;
}

/*
so



*/
