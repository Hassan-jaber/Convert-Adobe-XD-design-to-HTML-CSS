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

//create a Placeholder for textarea element
let textareaElement = document.querySelector("textarea")
let textareaPlaceholder = document.querySelector(".textarea-placeholder")

textareaElement.addEventListener("click",_=>{
    textareaPlaceholder.style.display = "none"
    textareaElement.addEventListener(('blur'),_=>{
        if (textareaElement.value.trim() !== "") {
            textareaPlaceholder.style.display = "none"
        } else  {
            textareaPlaceholder.style.display = "block"
        }
    })
})

//-------------------------------------------------------------------------------------------------
// Initialize a variable to keep track of selected items.
let selectedItems = 0;

// Create an object to store the selected checkboxes.
const selectedCheckboxes = {};

// Get a reference to the "invite-list-btn" button.
const inviteListButton = document.querySelector('.invite-list-btn');

// Get a reference to the "unselect-btn" button.
const unselectButton = document.querySelector('.unselect-btn');

// Function to update the button's disabled state based on the selected item count.
function updateButtonState() {
  if (selectedItems >= 1) {
    inviteListButton.setAttribute('data-bs-dismiss', 'modal');
  } else {
    inviteListButton.removeAttribute('data-bs-dismiss');
  }
}

// Add a click event listener to elements with class 'form-check-input'.
document.querySelectorAll('.form-check-input').forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    // Check if the checkbox is checked.
    if (checkbox.checked) {
      // Clone the parent 'checkbox-container' div element.
      const checkboxContainer = checkbox.closest('.checkbox-container');
      const clone = checkboxContainer.cloneNode(true);

      // Find and remove the 'input' element with class 'form-check-input' from the clone.
      const inputElement = clone.querySelector('.form-check-input');
      inputElement.parentNode && inputElement.parentNode.removeChild(inputElement);

      // Add a click event listener to the delete icon in the cloned item to remove it when clicked.
      clone.addEventListener('click', function (event) {
        if (event.target.classList.contains('fa-xmark')) {
          // Remove the cloned 'checkbox-container' element from the 'selected-list'.
          clone.parentNode && clone.parentNode.removeChild(clone);

          // Deselect the original checkbox.
          checkbox.checked = false;

          // Decrement the selectedItems count.
          selectedItems--;

          // Update the number of selected items.
          updateSelectedCount();

          // Remove the checkbox from the selectedCheckboxes object.
          delete selectedCheckboxes[checkbox.id];

          // Update the button's disabled state.
          updateButtonState();
        }
      });

      // Append the cloned 'checkbox-container' to the 'selected-list'.
      document.querySelector('.selected-list').appendChild(clone);

      // Increment the selectedItems count.
      selectedItems++;

      // Update the number of selected items.
      updateSelectedCount();

      // Add the checkbox to the selectedCheckboxes object.
      selectedCheckboxes[checkbox.id] = checkbox;

      // Add the name of the input ID as an additional class to the cloned 'checkbox-container'.
      clone.classList.add(checkbox.id);

      // Add a delete icon to the cloned item.
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-solid fa-xmark';
      clone.appendChild(deleteIcon);
    } else {
      // If the checkbox is unchecked, find and remove the corresponding item from the 'selected-list'.
      const selectedList = document.querySelector('.selected-list');
      const clonedCheckboxContainers = selectedList.querySelectorAll(`.${checkbox.id}`);
      clonedCheckboxContainers.forEach(function (clonedCheckboxContainer) {
        selectedList.removeChild(clonedCheckboxContainer);

        // Decrement the selectedItems count.
        selectedItems--;

        // Update the number of selected items.
        updateSelectedCount();

        // Remove the checkbox from the selectedCheckboxes object.
        delete selectedCheckboxes[checkbox.id];
      });

      // Update the button's disabled state.
      updateButtonState();
    }
  });
});

// Function to update the number of selected items.
function updateSelectedCount() {
  updateButtonState();
  const numOfSelected = document.querySelectorAll('.num-of-Selected');
  numOfSelected.forEach((el) => {
    el.textContent = selectedItems;
  });
}

// Add a click event listener to elements with class 'invite-list-btn'.
inviteListButton.addEventListener('click', function () {
  if (selectedItems >= 1) {
    // Show the alert-section for a short duration.
    const alertSection = document.querySelector('.alert-section');
    alertSection.style.display = 'flex';

    setTimeout(function () {
      alertSection.style.display = 'none';

      // Unselect all checkboxes in the "select-invites-list" after 1 second.
      document.querySelectorAll('.select-invites-list .form-check-input').forEach(function (checkbox) {
        checkbox.checked = false;
      });

      // Clear the 'selected-list'.
      const selectedList = document.querySelector('.selected-list');
      selectedList.innerHTML = '';

      // Reset the selected items count.
      selectedItems = 0;

      // Update the number of selected items.
      updateSelectedCount();

      // Update the button's disabled state.
      updateButtonState();
    }, 1000); // Hide after 1 second
  }
});

// Add a click event listener to the "unselect-btn" button.
unselectButton.addEventListener('click', function unselectButtonClick() {
  // Unselect all checkboxes in the "select-invites-list".
  document.querySelectorAll('.select-invites-list .form-check-input').forEach(function (checkbox) {
    checkbox.checked = false;
  });

  // Clear the 'selected-list'.
  const selectedList = document.querySelector('.selected-list');
  selectedList.innerHTML = '';

  // Reset the selected items count.
  selectedItems = 0;

  // Update the number of selected items.
  updateSelectedCount();

  // Update the button's disabled state.
  updateButtonState();
});


//---------------------------------------------------------------


    // Function to get URL parameters
    function getUrlParameter(name) {
      name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Check if the 'openModal' parameter is present in the URL
  var openModalParam = getUrlParameter('openModal');

  if (openModalParam === 'true') {
      // Open the modal using Bootstrap modal methods
      var modal = new bootstrap.Modal(document.getElementById('create-group'));
      modal.show();

      // Handle the custom button click without closing the modal
      document.getElementById('invite-members-btn-1').addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default behavior (closing the modal)
        
      });
  }
// --------------------------------------------------------------------------------------

const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
            // Display the selected image in the preview
            imagePreview.src = event.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(selectedFile);
    } else {
        // Clear the preview if no file is selected
        imagePreview.src = '#';
    }
});

//-----------------------------------------------------------------------------------------------

// Get references to the HTML elements
const personalPhotoInput = document.getElementById('personalPhoto');
const personalPhotoPreview = document.getElementById('personal-photo');

// Add an event listener to the input for file selection
personalPhotoInput.addEventListener('change', function () {
    const selectedFile = personalPhotoInput.files[0];

    if (selectedFile) {
        // Create a FileReader to read the selected image
        const reader = new FileReader();

        reader.onload = function (event) {
            // Set the selected image as the source of the preview image
            personalPhotoPreview.src = event.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(selectedFile);
    } else {
        // Clear the preview image if no file is selected
        personalPhotoPreview.src = '../images/personal-photo.png';
    }
});


// ----------------------------------------------------------------------------------------------

let inviteMembersBtn = document.querySelector(".invite-members-btn-1")
let inviteMembersSection = document.querySelector(".invite-members-section")
let assignAdminBtn = document.querySelectorAll(".assign-admin-btn")
inviteMembersBtn.addEventListener(("click"),_=>{
  inviteMembersBtn.style.display="none"
  inviteMembersSection.style.display="block"
})

assignAdminBtn.forEach((el)=>{
  el.addEventListener(('click'),_=>{
    el.textContent = "Assigned as Admin"
    el.classList.add("assign-admin-btn-active")
  })
})

function updateListItemCount() {
  const membersList = document.querySelector('.members-list');
  const numOfInvite = document.querySelector(".num-of-Invite");
  
  if (membersList && numOfInvite) {
      const listItemCount = membersList.querySelectorAll('li').length;
      numOfInvite.textContent = listItemCount;
  }
}

// Function to remove a single list item when clicking on 'fa-xmark'
const xmarkElements = document.querySelectorAll('.fa-xmark');
xmarkElements.forEach((xmarkElement) => {
  xmarkElement.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from propagating further
      const liElement = this.closest('li');
      if (liElement) {
          liElement.remove();
          updateListItemCount(); // Update the count after removal
      }
  });
});

// Function to remove all list items when clicking on 'remove-all-members-btn'
const removeAllButton = document.querySelector('.remove-all-members-btn');
removeAllButton.addEventListener('click', function () {
  const membersList = document.querySelector('.members-list');
  if (membersList) {
      membersList.innerHTML = ''; // Removes all list items
      updateListItemCount(); // Update the count after removal
  }
});

// Initial count
updateListItemCount();
