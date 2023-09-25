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

// ************* JS CODE TO TAKE A PHOTO *****************

// Get references to the relevant HTML elements
const dropBox = document.querySelector('.drop-box');
const video = document.querySelector('.video');
const captureImageBtn = document.querySelector('.capture-image');
const confirmPhotoBtn = document.querySelector('.confirm-photo');
const circular = document.querySelector('.circular');
const cancelBtn = document.querySelector('.cancel');

let mediaStream;

// Function to open the camera when the "capture-image" button is clicked
captureImageBtn.addEventListener('click', async () => {
  try {
    // Request access to the user's camera
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    
    // Display the video stream in the "drop-box" element
    video.srcObject = mediaStream;
    video.play();

    // Show the "confirm-photo" button and hide the "capture-image" button
    confirmPhotoBtn.style.display = 'block';
    captureImageBtn.style.display = 'none';
  } catch (error) {
    console.error('Error accessing the camera:', error);
  }
});

// Function to capture an image from the video stream and display it
confirmPhotoBtn.addEventListener('click', () => {
  // Create a canvas element to capture the image
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');

  // Draw the current frame from the video onto the canvas
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Stop the video stream
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
  }

  // Set the video stream source to null to prevent the black screen
  video.srcObject = null;

  // Display the captured image in the "circular" element
  circular.style.backgroundImage = `url(${canvas.toDataURL()})`;

  // Hide the "confirm-photo" button and show the "capture-image" button
  // confirmPhotoBtn.style.display = 'none';
  captureImageBtn.style.display = 'block';
});

// Function to cancel and close the camera
cancelBtn.addEventListener('click', () => {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
  }

  // Set the video stream source to null
  video.srcObject = null;

  // Hide the "confirm-photo" button and show the "capture-image" button
  // confirmPhotoBtn.style.display = 'none';
  captureImageBtn.style.display = 'block';
  
  // Clear the image from the "circular" element
  circular.style.backgroundImage = 'none';
});



// -----
