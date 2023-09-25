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

let my_Connections = document.querySelector("#my-connections .my-connections-list")
let my_Received_Invitations  = document.querySelector("#received-invitations .my-connections-list")
let my_Sent_invitations = document.querySelector("#sent-invitations .my-connections-list")
let empty = document.querySelector(".empty")

if(my_Connections.children.length == 0){
  my_Connections.appendChild(empty)
  empty.style.display="flex"
}
if(my_Received_Invitations.children.length == 0){
  my_Received_Invitations.appendChild(empty)
  empty.style.display="flex"
}
if(my_Sent_invitations.children.length == 0){
  my_Sent_invitations.appendChild(empty)
  empty.style.display="flex"
}

