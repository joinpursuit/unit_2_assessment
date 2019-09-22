document.addEventListener("DOMContentLoaded", () => {
  // console.log("just checking on things so far");
  submitButtonForReviews();
})

const submitButtonForReviews = () => {
  //pull our button and say when clicked perform submitting function
  const submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", submittingReviewsToPage);
}

const submittingReviewsToPage = () => {

}
