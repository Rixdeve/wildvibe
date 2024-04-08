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




    popup.document.querySelectorAll('.close-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            popup.close();
        });
    });



    const selectButton = popup.document.getElementById("selectBtn");
    if (selectButton)
     selectButton.addEventListener("click", function (){
        const selectPage = popup.document.querySelector(".page-select").value;
        let content = popup.document.querySelector(".page-content");

        if (selectPage == "home"){
            content.value = localStorage.getItem('homeData');
        }
        if (selectPage == "introduction"){
            content.value = localStorage.getItem('introData');
        }
        if (selectPage == "department"){
            content.value = localStorage.getItem('departmentData');
        }
        if (selectPage == "animal"){
            content.value = localStorage.getItem('animalData');
        }
        if (selectPage == "yala"){
            content.value = localStorage.getItem('yalaData');
        }
        if (selectPage == "wilpattu"){
            content.value = localStorage.getItem('wilpattuData');
        }
        if (selectPage == "leopards"){
            content.value = localStorage.getItem('LeopardData');
        }

     })

     const editButton = popup.document.getElementById("editBtn");

     if (editButton){
        editButton.addEventListener('click', function(){
            const selectPage = popup.document.querySelector(".page-select").value;
            const content = popup.document.querySelector(".page-content").value;

            if (selectPage && content){
                if(selectPage == "home"){
                    localStorage.setItem("homeData", content);
                }
                if(selectPage == "introduction"){
                    localStorage.setItem("introData", content);
                }
                if(selectPage == "department"){
                    localStorage.setItem("departmentData", content);
                }
                if(selectPage == "animal"){
                    localStorage.setItem("animalData", content);
                }
                if(selectPage == "yala"){
                    localStorage.setItem("yalaData", content);
                }
                if(selectPage == "wilpattu"){
                    localStorage.setItem("wilpattuData", content);
                }
                if(selectPage == "leopards"){
                    localStorage.setItem("LeopardData", content);
                }
                
            }
        })
     }
}



document.querySelectorAll('.openPopupBtn').forEach(function(button) {
    button.addEventListener('click', openPopup);
});

function deleteUser() {
    localStorage.removeItem("currentUser");
  }
function deleteHome() {
    localStorage.removeItem("homeData");
  }
function deleteIntro() {
    localStorage.removeItem("introData");
  }
function deleteDepart() {
    localStorage.removeItem("departmentData");
  }
function deleteLeopard() {
    localStorage.removeItem("LeopardData");
  }
function deleteAnim() {
    localStorage.removeItem("animalData");
  }
function deleteYala() {
    localStorage.removeItem("yalaData");
  }
function deleteWilpattu() {
    localStorage.removeItem("wilpattuData");
  }




document.addEventListener('DOMContentLoaded', function () {
    const subscribedEmailsContainer = document.getElementById('subscribedEmailsContainer');

    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];

    subscribedEmailsContainer.innerHTML = '';
    subscribedEmails.forEach(function (email) {
        const emailItem = document.createElement('li');
        emailItem.textContent = email;
        subscribedEmailsContainer.appendChild(emailItem);
    });
});


