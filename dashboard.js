// let currentUser = localStorage.getItem("currentUser");

// // Check if currentUser exists
// if (currentUser) {
//     document.getElementById("logUser").textContent = "Welcome back " + currentUser;
// } else {
//     console.log("No user found in local storage.");
// }

// const clearLocalStorageBtn = document.getElementsByClassName('del');

// clearLocalStorageBtn.addEventListener('click', function() {

//   localStorage.clear();
    
//   alert('Local storage cleared successfully!');
// });



function openPopup() {
    const popup = window.open('', 'popupWindow', 'width=700,height=500');

    popup.document.write('<html><head><title>Editor</title><link rel="stylesheet" href="dashboard.css"></head><body>');
    popup.document.write('<div id="popupContent" class="popup-content">');
    popup.document.write('<h2 class="popup-title">Edit Pages</h2>');
    popup.document.write('<p class="popup-text">Select Page </p>');
    popup.document.write('<div class="controls">');
    popup.document.write('<label for="pageSelect">Select a page:</label>');
    popup.document.write('<select id="pageSelect" class="page-select">');
    popup.document.write('<option value="home">Home Page</option>');
    popup.document.write('<option value="introduction">Introduction Page</option>');
    popup.document.write('<option value="department">Department Page</option>');
    popup.document.write('<option value="animal">Animal Page</option>');
    popup.document.write('<option value="yala">Yala Page</option>');
    popup.document.write('<option value="wilpattu">Wilpattu Page</option>');
    popup.document.write('<option value="leopards">Leopards Page</option>');
    popup.document.write('</select>');
    popup.document.write('<button id="selectBtn" class="button select-btn">Select Page</button>');
    popup.document.write('<button id="editBtn" class="button edit-btn">Edit Page</button>');
    popup.document.write('<button id="closeBtn" class="button close-btn">Close</button>');
    popup.document.write('</div>');
    popup.document.write('<textarea id="pageContent" class="page-content" placeholder="Local Storage Data goes here."></textarea>');
    popup.document.write('</div>');
    popup.document.write('<script src="dashboard.js"></script>');
    popup.document.write('</body></html>');


    // Attach event listener to the "Edit" button
    popup.document.querySelectorAll('.edit-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Replace this with your edit functionality
            var pageContent = popup.document.querySelector('.page-content').value;
            alert('Edit functionality goes here! Page content: ' + pageContent);
        });
    });

    // Attach event listener to the "Close" button
    popup.document.querySelectorAll('.close-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            popup.close(); // Close the popup window
        });
    });
}

// Attach event listeners to all buttons with class "openPopupBtn"
document.querySelectorAll('.openPopupBtn').forEach(function(button) {
    button.addEventListener('click', openPopup);
});



