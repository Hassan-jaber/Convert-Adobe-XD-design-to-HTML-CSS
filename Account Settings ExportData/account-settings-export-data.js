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

// ---------------------------------------------------
// create sidbar

        const barsElement = document.querySelector('.bars');
        const sidebarElement = document.querySelector('.sidbar');
        const barsIcon = barsElement.querySelector('.fa-bars');
        const pElements = document.querySelectorAll('.sidbar ul li a p');

        barsElement.addEventListener('click', () => {
            sidebarElement.classList.toggle('expanded');
            barsIcon.classList.toggle('fa-xmark');
            barsIcon.classList.toggle('fa-bars');

            // Toggle the display property of p elements
            pElements.forEach((pElement) => {
              pElement.style.display = sidebarElement.classList.contains('expanded') ? 'block' : 'none';
            });
        });