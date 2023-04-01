const radioInputs = document.querySelectorAll('.radio-input');
const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('.js-rating-form');
const thankYouState = document.querySelector(".thank-you-state");
const ratingState = document.querySelector(".rating-state");
const feedbackText = document.querySelector(".feedback-text");

//Enable submit button
radioInputs.forEach(input => {
    input.addEventListener('change', () => {
        submitButton.disabled = false;
    });
});


//Render selected value
function handleSubmit(e) {
  e.preventDefault();
  if (form.rating.value) {
    thankYouState.classList.add("show");
    ratingState.classList.add("hide");
    feedbackText.textContent = `You selected ${form.rating.value} out of 5`;
  }
}

form.addEventListener('submit', handleSubmit);