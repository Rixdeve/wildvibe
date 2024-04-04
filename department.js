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

//
document.getElementById("depHead").innerHTML = data.department_info.name;