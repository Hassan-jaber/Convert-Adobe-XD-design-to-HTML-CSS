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

// =========================================================================================

const box = document.getElementById('box');
const previewBox = document.getElementById('preview-box');
let isResizing = false;
let startX, startY, startWidth, startHeight;

box.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(box).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(box).height, 10);

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
});

function resize(e) {
    if (!isResizing) return;

    const width = startWidth + (e.clientX - startX);
    const height = startHeight + (e.clientY - startY);
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;

   if(width >= 145){
    previewBox.style.backgroundSize = `${(590 * width) / 145 }px`;
   }
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resize);
}

// ------------------------------


const customFileUpload = document.querySelector('.custom-file-upload');
const fileInput = document.getElementById('fileToUpload');
const editImg = document.querySelector('.edit-img');
const uploadedImage = document.getElementById('uploadedImage');
const dropBox = document.querySelector(".drop-box")
const resizableBox = document.querySelectorAll(".resizable-box")
const cancelButton = document.querySelector(".cancel-button")


fileInput.addEventListener('change', function () {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        uploadedImage.src = objectURL;
        resizableBox.forEach((el)=>{
          el.style.backgroundImage = `url(${objectURL})`
        })
        // Display the edit-img
        editImg.style.display = 'block';
        dropBox.style.display='none'
        cancelButton.addEventListener(("click"),_=>{
          editImg.style.display = 'none';
          dropBox.style.display = 'flex';
        })
    }
});







    
        

