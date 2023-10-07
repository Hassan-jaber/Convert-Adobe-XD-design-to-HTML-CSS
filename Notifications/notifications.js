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

/******************************************************/
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
/*****************************************************/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
  }
  );
  /*****************************************************/

  //create a Placeholder for textarea element
let textareaElement = document.querySelector("textarea")
let textareaPlaceholder = document.querySelector(".textarea-placeholder")

textareaElement.addEventListener("click",_=>{
    textareaPlaceholder.style.display = "none"
    textareaElement.addEventListener(('blur'),_=>{
        if (textareaElement.value.trim() !== "") {
            textareaPlaceholder.style.display = "none"
        } else  {
            textareaPlaceholder.style.display = "flex"
        }
    })
})

/*********************************************************/

// create sidbar

const barsElement = document.querySelector('.bars');
const sidebarElement = document.querySelector('.list-of-chats');
const barsIcon = barsElement.querySelector('.fa-bars');
const userInfo = document.querySelectorAll('.user-info');
const searchContainer = document.querySelector(".search-container")
barsElement.addEventListener('click', () => {
    sidebarElement.classList.toggle('expanded');
    barsIcon.classList.toggle('fa-xmark');
    barsIcon.classList.toggle('fa-bars');
    searchContainer.style.display = sidebarElement.classList.contains('expanded') ? 'block' : 'none';
    // Toggle the display property of p elements
    userInfo.forEach((userInfo) => {
      userInfo.style.display = sidebarElement.classList.contains('expanded') ? 'flex' : 'none';
    });
});


/*********************************************************/

// Select the chat-content element
var chatContent = document.querySelector('.chat-content');

// Check if it contains elements with the classes "sender" or "receiver"
var senderElements = chatContent.querySelectorAll('.sender');
var receiverElements = chatContent.querySelectorAll('.receiver');

// If there are no sender or receiver elements, display the "no-chats" element
if (senderElements.length === 0 && receiverElements.length === 0) {
  var noChatsElement = chatContent.querySelector('.no-chats');
  if (noChatsElement) {
    noChatsElement.style.display = 'flex';
  }
}

