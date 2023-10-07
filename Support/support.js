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

  // --------------------------------------------------------------------------------------------


// Get references to elements
const fileUploadLabel = document.querySelector('.fileupload-label');
const attachementsList = document.querySelector('.attachements-list');
const fileUploadInput = document.getElementById('fileUpload');
const attachementCounter = document.querySelector('.attachement-counter'); // Add this line to get the counter element

// Function to update the attachment counter
function updateAttachmentCounter() {
    const attachments = document.querySelectorAll('.attachement-li');
    const attachmentCount = attachments.length;

    // Update the counter text
    attachementCounter.textContent = attachmentCount;

    // Conditionally add or remove the 'handle-fileupload-label' class based on the attachment count
    if (attachmentCount > 0) {
        fileUploadLabel.classList.add('handle-fileupload-label');
    } else {
        fileUploadLabel.classList.remove('handle-fileupload-label');
        fileUploadLabel.textContent = 'Choose files to attach'
    }
}

// Function to handle file selection and attachment creation
function handleFileSelection() {
    const files = fileUploadInput.files;

    // Change the text of 'fileupload-label' to 'Add Attachments'
    fileUploadLabel.textContent = 'Add Attachments';

    // Loop through selected files and create a list item for each
    for (const file of files) {
        const li = document.createElement('li');
        li.classList.add('attachement-li');

        const fileIcon = document.createElement("i")
        fileIcon.className = "fa-solid fa-file"

        const attachementName = document.createElement('p');
        attachementName.classList.add('attachement-name');
        attachementName.textContent = file.name;

        const attachementSize = document.createElement('p');
        attachementSize.classList.add('attachement-size');
        attachementSize.textContent = `${(file.size / 1024).toFixed(2)} KB`;

        const deleteAttachement = document.createElement('div');
        deleteAttachement.classList.add('delete-attachement');
        deleteAttachement.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        // Handle click on 'delete-attachement' to remove the attachment
        deleteAttachement.addEventListener('click', () => {
            li.remove();
            updateAttachmentCounter(); // Update the counter when an attachment is deleted
        });
        li.appendChild(fileIcon)
        li.appendChild(attachementName);
        li.appendChild(attachementSize);
        li.appendChild(deleteAttachement);

        attachementsList.appendChild(li);
    }

    // Clear the file input to allow selecting the same file again
    fileUploadInput.value = null;

    // Update the attachment counter after adding attachments
    updateAttachmentCounter();
}

// Handle change event on file input
fileUploadInput.addEventListener('change', handleFileSelection);

// Handle click on 'fileUploadInput' itself (hidden input)
fileUploadInput.addEventListener('click', (event) => {
    // Prevent propagation of the click event to avoid opening the file dialog twice
    event.stopPropagation();
});








