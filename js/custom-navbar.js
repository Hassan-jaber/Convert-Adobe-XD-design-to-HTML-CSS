// -------------------

// Get all elements with class name "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each nav-link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {
    // Remove "active" class from all nav-links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add "active" class to the clicked nav-link
    this.classList.add('active');
  });
});


// Get the .dropdown-item elements
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Get the #selected-lang element
const selectedLangElement = document.getElementById('selected-lang');

// Add a click event listener to each .dropdown-item element
dropdownItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the language code from the data-lang attribute
    const langCode = this.getAttribute('data-lang');

    // Update the content of the #selected-lang element
    selectedLangElement.textContent = langCode;

    // Loop through the dropdown items to reset styles
    dropdownItems.forEach(item => {
      item.style.fontWeight = 'normal'; // Reset font-weight
      item.style.opacity = 1; // Reset opacity
    });

    // Apply styles to the clicked item
    if (langCode === 'EN') {
      this.style.fontWeight = 'bold';
      dropdownItems[1].style.opacity = 0.5; // Set Arabic opacity to 0.5
    } else if (langCode === 'AR') {
      this.style.fontWeight = 'bold';
      dropdownItems[0].style.opacity = 0.5; // Set English opacity to 0.5
    }
  });
});
// ------------------

let navbar_toggler = document.querySelector(".navbar-toggler")
let nav_container = document.querySelector(".nav_container")
navbar_toggler.addEventListener(("click"),_=>{
  nav_container.classList.toggle("nav-container-bg")
})