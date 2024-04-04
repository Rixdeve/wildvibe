  // Get the elements by their ID
  var popupLink = document.getElementById("popup-link");
  var popupWindow = document.getElementById("popup-window");
  var closeButton = document.getElementById("close-button");
  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });



/*
============================================
CODE FOR HOME PAGE START HERE
============================================
*/

// Fetch JSON data

// fetch("index.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Store JSON data in localStorage
//     localStorage.setItem("homeData", JSON.stringify(data));
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const data = JSON.parse(localStorage.getItem("homeData"));

// //rendering the text data
// document.getElementById("data.homeslide.h2").innerHTML = data.homeslide[0].h2;
// document.getElementById("data.wrap_text.p").innerHTML = data.wrap_text[0].p;
// document.getElementById("data.wildcontainer.introhead.h2").innerHTML = data.wildcontainer.introhead[0].h2;
// document.getElementById("data.wildpara.p").innerHTML = data.wildpara[0].p;
// document.getElementById("data.section_one_home.botanhead.h2").innerHTML = data.section_one_home.botanhead[0].h2;



// localStorage.setItem("homeData", JSON.stringify(data));





//idex.html page
//fetch JSON data
fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        // document.getElementById("maini").innerHTML= data.main.Intro;
        localStorage.setItem("homeData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("homeData"));



document.getElementById("data.homeslide.h2").innerHTML = data.homeslide.h2;
document.getElementById("data.wrap_text.p").innerHTML = data.wrapper.wrap_text.p;
document.getElementById("data.wildcontainer.introhead.h2").innerHTML = data.wildcontainer.introhead.h2;
document.getElementById("data.wildpara.p").innerHTML = data.wildcontainer.wildpara.p;
document.getElementById("data.section_one_home.botanhead.h2").innerHTML = data.section_one_home.botanhead.h2;
document.getElementById("data.section_one_home.botancontainer.botanpara.p").innerHTML = data.section_one_home.botancontainer.botanpara.p;
document.getElementById("data.section_one_home.botancontainer.botanpara.p").innerHTML = data.section_one_home.botancontainer.botanpara.p;
document.getElementById("data.section_two_home.birdhead.h2").innerHTML = data.section_two_home.birdhead.h2;
document.getElementById("data.section_two_home.birdcontainer.birdpara.p").innerHTML = data.section_two_home.birdcontainer.birdpara.p;
document.getElementById("data.section_three_home.safarihead.h2").innerHTML = data.section_three_home.safarihead.h2;
document.getElementById("data.section_three_home.safaricontainer.safaripara.p").innerHTML = data.section_three_home.safaricontainer.safaripara.p;
document.getElementById("data.listcontainer.list_head.h2").innerHTML = data.listcontainer.list_head.h2;

document.getElementById("data.listcontainer.list.ol.li[0]").innerHTML = data.listcontainer.list.ol.li[0];

document.getElementById("data.listcontainer.list.ol.li[1]").innerHTML = data.listcontainer.list.ol.li[1];

document.getElementById("data.listcontainer.list.ol.li[2]").innerHTML = data.listcontainer.list.ol.li[2];

document.getElementById("data.listcontainer.list.ol.li[3]").innerHTML = data.listcontainer.list.ol.li[3];

document.getElementById("data.listcontainer.list.ol.li[4]").innerHTML = data.listcontainer.list.ol.li[4];

document.getElementById("data.listcontainer.list.ol.li[5]").innerHTML = data.listcontainer.list.ol.li[5];

document.getElementById("listdes0").innerHTML = data.listcontainer.list.ol.ul[0].li;

document.getElementById("listdes1").innerHTML = data.listcontainer.list.ol.ul[0].li;

document.getElementById("listdes2").innerHTML = data.listcontainer.list.ol.ul[0].li;

document.getElementById("listdes3").innerHTML = data.listcontainer.list.ol.ul[3].li;

document.getElementById("listdes4").innerHTML = data.listcontainer.list.ol.ul[4].li;

document.getElementById("listdes5").innerHTML = data.listcontainer.list.ol.ul[5].li;






