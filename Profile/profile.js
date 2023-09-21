// Get references to the elements
const toggleButton = document.querySelector('.dropdown-toggle');
const overlay = document.querySelector('.overlay-bg');

// Function to toggle the overlay
function toggleOverlay() {
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'block';
  }
}

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent the click event from propagating to the document
  toggleOverlay();
});

// Add a click event listener to the document to close the overlay
document.addEventListener('click', function () {
  overlay.style.display = 'none'; // Hide the overlay when anything on the page is clicked
});

// --------------------------------------------------------------------------------------------

//create a Placeholder for textarea element
let textareaElement = document.querySelector("textarea")
let textareaPlaceholder = document.querySelector(".textarea-placeholder")

textareaElement.addEventListener("click",_=>{
    textareaPlaceholder.style.display = "none"
    textareaElement.addEventListener(('blur'),_=>{
        if (textareaElement.value.trim() !== "") {
            textareaPlaceholder.style.display = "none"
        } else  {
            textareaPlaceholder.style.display = "block"
        }
    })
})