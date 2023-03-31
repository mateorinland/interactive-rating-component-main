const radioLabels = document.querySelectorAll(".radio-label");
const submitButton = document.querySelector(".submit-button");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const feedbackText = document.querySelector(".feedback-text");

//Selecting radio label
radioLabels.forEach((label) => {
    label.addEventListener("click", function() {
        radioLabels.forEach((whenSelected) => {
            whenSelected.classList.remove("selected");
        });
        label.classList.add("selected");
    });
});

//Rendering selected value
submitButton.addEventListener("click", function () {
    console.log("Button click");
    const selectedLabel = document.querySelector(".selected");
    let selectedValue = selectedLabel.textContent;
    thankYouState.classList.add("show");
    ratingState.classList.add("hide");
    feedbackText.textContent = `You selected ${selectedValue} out of 5`;
  });