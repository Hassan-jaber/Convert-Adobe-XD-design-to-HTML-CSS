let myCoursesContent = document.querySelector(".my-courses-content")
let noCoursesSection = document.querySelector(".no-courses")


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





// remove no-courses element when add any courses or any html element
    if(myCoursesContent.children.length === 1){
        noCoursesSection.style.display = "flex"
    }


    let navbar_toggler = document.querySelector(".navbar-toggler")
    let nav_container = document.querySelector(".nav_container")
    navbar_toggler.addEventListener(("click"),_=>{
      nav_container.classList.toggle("nav-container-bg")
    })



    // ---------------

    const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    // innerCircle.style.backgroundColor = `${progressBar.getAttribute(
    //   "data-inner-circle-color"
    // )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});


let closeAlert = document.querySelector(".close")
let alertPop = document.querySelector(".alert")
closeAlert.addEventListener(("click"),_=>{
alertPop.style.display="none"
})