// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
// Get the user's email address - userEmail (string)
// Get the user's level - userlevel (string)
// Get the user's hours of study - userHours (number)
// Validate the user's input
// Check if the user has selected a level - check a level has been entered; check against the allowed levels (conditional statement)
// Check if the user has provided an email address - have they entered an email?; is this valid?; does it have an '@' symbol?
// Check if the user has specified at least one hour of study - must be equal to or greater than 1
// Check if the number of hours requested is within the allowed range - less than or equal to the maximum number for the level
// Calculate the total cost
// Display the total cost to the user
