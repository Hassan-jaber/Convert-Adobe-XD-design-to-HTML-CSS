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

//---------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------

const modalBody = document.getElementById('modal-body');
const imageUpload = document.getElementById('imageUpload');
const ulImages = document.querySelector('.show-uploaded-imgs ul');
const customFileUpload = document.querySelector('.custom-file-upload');
const uploadBtn = document.querySelector('.my-upload-btn');
const numOfPhotos = document.querySelector('.num-of-Photos');
const photosCounter = document.querySelector('.Photos-counter');
const dropImgs = document.querySelector('.drop-imgs');
const imgPreviewed = document.querySelector('.img-previewed');
const photosBtns = document.querySelector('.photos-btns');
const addPhotosBtn = document.querySelector('.add-photos-btn');
const hero = document.querySelector('.hero');
const listCopiedImages = document.querySelector('.list-of-copied-images');

let uploadedImageCount = 0;

// Function to create a list item with the specified classes and a delete button
function createListItem(file) {
    const li = document.createElement('li');
    li.className = 'col-lg-2 col-md-3 col-sm-6 img-previewed';

    // Create the delete button div and icon
    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete-img';
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-times'; // FontAwesome X icon
    deleteDiv.appendChild(deleteIcon);

    // Add click event to delete the current li and update image count
    deleteDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from propagating
        ulImages.removeChild(li);
        uploadedImageCount--;
        updateImageCount();
    });

    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    li.appendChild(deleteDiv);
    li.appendChild(img);

    // Create circular checkbox input
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.className = 'circular-checkbox';
    checkboxInput.addEventListener('change', (e) => {
        if (e.target.checked) {
            li.style.backgroundColor = '#BA9950';
        } else {
            li.style.backgroundColor = ''; // Reset background color
        }
    });
    li.appendChild(checkboxInput);

    uploadedImageCount++;
    updateImageCount();

    return li;
}

function updateImageCount() {
    photosCounter.textContent = uploadedImageCount;
    if (uploadedImageCount > 0) {
        numOfPhotos.style.display = 'block';
        customFileUpload.style.display = 'none'; // Hide the custom file upload
        dropImgs.style.display = 'none'; // Hide the drop-imgs element
        modalBody.style.backgroundColor = '#FFFFFF'; // Set background color to white
        addPhotoListItem.style.display = 'flex';
        addPhotoListItem.style.justifyContent = 'center';
        addPhotoListItem.style.alignItems = 'center';
        uploadBtn.setAttribute("data-bs-dismiss", "modal")
    } else {
        numOfPhotos.style.display = 'none';
        customFileUpload.style.display = 'flex'; // Show the custom file upload
        uploadBtn.style.display = 'none';
        addPhotoListItem.style.display = 'none';
        dropImgs.style.display = 'block';
        modalBody.style.backgroundColor = '#F7F7F7';
    }
}

// Function to reset the file input
function resetFileInput() {
    imageUpload.value = ''; // Clear the selected file
}

// Function to handle file input change event
function handleFileInputChange() {
    const file = imageUpload.files[0];
    if (file && file.type.startsWith('image/')) {
        const listItem = createListItem(file);
        ulImages.appendChild(listItem);

        // Hide the custom file upload and show the upload button
        customFileUpload.style.display = 'none';
        uploadBtn.style.display = 'flex';
    }
}

// Prevent the image from being copied when dragged
ulImages.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// Listen for file drop events
modalBody.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const listItem = createListItem(file);
        ulImages.appendChild(listItem);

        // Hide the custom file upload and show the upload button
        customFileUpload.style.display = 'none';
        uploadBtn.style.display = 'flex';
    }
});

// Prevent default behavior on dragover to enable drop
modalBody.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Trigger file input when custom file upload is clicked
customFileUpload.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default click behavior
    resetFileInput(); // Reset the file input
    imageUpload.click(); // Trigger file input click event
});

// Listen for file input change event
imageUpload.addEventListener('change', handleFileInputChange);

// Create a special list item to add photos from device
const addPhotoListItem = document.createElement('li');
addPhotoListItem.className = 'col-lg-2 col-md-3 col-sm-6 first-li';
const addPhotoImg = document.createElement('img');
addPhotoImg.src = '../images/icons/add-photo.svg';
addPhotoListItem.appendChild(addPhotoImg);
ulImages.appendChild(addPhotoListItem);

// Add click event to the special list item for adding photos
addPhotoListItem.addEventListener('click', (e) => {
    e.preventDefault();
    resetFileInput(); // Reset the file input
    imageUpload.click(); // Trigger file input click event
});

// Click event listener for the "my-upload-btn" element
uploadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    photosBtns.style.display = 'block'; // Show photos buttons
    addPhotosBtn.style.display = 'flex'; // Show add photos button
    hero.style.display = 'none';
    // Copy all li elements from ".show-uploaded-imgs ul" to ".list-of-copied-images"
    const copiedImages = ulImages.querySelectorAll('li');
    const listOfCopiedImages = document.querySelector('.list-of-copied-images');

    copiedImages.forEach((li) => {
        const copiedLi = li.cloneNode(true); // Clone the li element
        listOfCopiedImages.appendChild(copiedLi); // Append the cloned li to ".list-of-copied-images"

        // Additional actions for the copied li
        copiedLi.classList.remove('first-li');
        copiedLi.classList.add("first-li-copied")
        const deleteButton = copiedLi.querySelector('.delete-img');
        if (deleteButton) {
            copiedLi.removeChild(deleteButton);
        }
    });

    // Additional actions
    photosBtns.style.display = 'block';
    addPhotosBtn.style.display = 'flex';
});

// Click event listener for the "first-li-copied" and "add-photos-btn" elements
listCopiedImages.addEventListener('click', (e) => {
  if (e.target.classList.contains('first-li-copied') || e.target.classList.contains('add-photos-btn')) {
      resetFileInput();
      imageUpload.click(); // Trigger file input click event

      // Listen for file input change event
      imageUpload.addEventListener('change', (event) => {
          const file = event.target.files[0];
          if (file && file.type.startsWith('image/')) {
              const listItem = createListItem(file);
              listCopiedImages.appendChild(listItem);
          }
      });
  }
});






