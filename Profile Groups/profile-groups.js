
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


// ---------------------------

function openTap(tap, tapname) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tapname).style.display = "block";
  tap.currentTarget.className += " active";
}

// ---------------------------
// Js Code For Display '.empty' div if no content in '.my-connections-list'

let my_groups = document.querySelector("#my-groups .my-groups-list")
let empty = document.querySelector(".empty")

if(my_groups.children.length == 0){
  my_groups.appendChild(empty)
  empty.style.display="flex"
}



// ----------------------------------------------
// Check if the page has a vertical scrollbar
function hasVerticalScrollbar() {
  return document.body.scrollHeight > window.innerHeight;
}

function toggleFooterDisplay() {
  const footer = document.querySelector(".footer");
  if (hasVerticalScrollbar()) {
    footer.style.display = "flex";
  } else {
    footer.style.display = "none";
  }
}

// Check for vertical scrollbar when the page loads
window.addEventListener("load", toggleFooterDisplay);

// Attach click event listeners to elements with the .tablinks class
let tablinksBtns = document.querySelectorAll('.tablinks');
tablinksBtns.forEach((tab) => {
  tab.addEventListener("click", toggleFooterDisplay);
});


//-------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
  // Your code here, including adding event listeners
  var element = document.getElementById('create-group');
  if (element) {
    element.addEventListener('click', function() {      
      // Redirect to the page with the modal content
      window.location.href = '../Profile-Groups-Joined/joined.html?openModal=true';
    });
  }
});

