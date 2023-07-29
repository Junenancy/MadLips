// Get references to input fields
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Variable to display mad lib
const madlibDisplay = document.querySelector(".mad-lib");

// Variable for the form
const form = document.querySelector("form");

// Variable for the mad lib story
const storyTemplate = `My friend and I started a club! we meet everyday by the <b>{adj1}</b> <b>{noun1}</b>. Our club has some special rules. If you want to join, you have to wear a <b>{adj2}</b> <b>{clothing}</b> on your <b>{bodyPart}</b>. You are not allowed to <b>{verb1}</b> during meetings, and you can only eat <b>{food}<b/> for your meals. If you are interested in joining, let me know `;

// Event listener for form submission
form.addEventListener("submit", function (event){
    event.preventDefault();
    
    // Check each field to make sure it's filled out
    if (adj1.value == "") {
        alert(`${adj1.name} must be filled out!`);
        adj1.focus();
    } else if (noun1.value == "") {
        alert(`${noun1.name} must be filled out!`);
        noun1.focus();
    } else if (adj2.value == "") {
        alert(`${adj2.name} must be filled out!`);
        adj2.focus();
    } else if (clothing.value == "") {
        alert(`${clothing.name} must be filled out!`);
        clothing.focus();
    } else if (bodyPart.value == "") {
        alert(`${bodyPart.name} must be filled out!`);
        bodyPart.focus();
    } else if (verb1.value == "") {
        alert(`${verb1.name} must be filled out!`);
        verb1.focus();
    } else if (food.value == "") {
        alert(`${food.name} must be filled out!`);
        food.focus();
    } else {
        // If all fields are filled out, display the mad lib
        madlibStoryDisplay();
    }
});

// Function to display mad lib
function madlibStoryDisplay() {
    let story = storyTemplate
    .replace("{adj1}", adj1.value)
    .replace("{noun1}", noun1.value)
    .replace("{adj2}", adj2.value)
    .replace("{clothing}", clothing.value)
    .replace("{bodyPart}", bodyPart.value)
    .replace("{verb1}", verb1.value)
    .replace("{food}", food.value);

    // Display the story in the madlibDisplay element
    madlibDisplay.innerHTML = story;
}
