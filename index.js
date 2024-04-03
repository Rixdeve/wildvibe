fetch("index.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    localStorage.setItem("homeData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const data = JSON.parse(localStorage.getItem("homeData"));

//rendering the text data
document.getElementsByClassName("homeslide").innerHTML = data.homeslide[0].h2;
document.getElementsByClassName("imagelogo").innerHTML = data.wrapper[0].src;
document.getElementsByClassName("wrap_text").innerHTML = data.homeTexts[0].p;
document.getElementsByClassName("introhead").innerHTML = data.wildcontainer[0].h2;

const homeGrid = document.getElementById("homeGrid");

//rendering images for the home page grid
homeGrid.innerHTML = data.homeImages
  .map((image) => {
    return `<img
              class="${image.styles}"
              src="${image.image}"
              alt="${image.alt}"
            />`;
  })
  .join("");