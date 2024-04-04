//idex.html page
//fetch JSON data
fetch("introduction.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        // document.getElementById("maini").innerHTML= data.main.Intro;
        localStorage.setItem("introData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("introData"));

//
document.getElementById("maduruhead").innerHTML = data.national_parks.Maduruoya.name;
document.getElementById("madurup").innerHTML = data.national_parks.Maduruoya.description;
document.getElementById("washead").innerHTML = data.national_parks.Wasgamuwa.name;
document.getElementById("waspara").innerHTML = data.national_parks.Wasgamuwa.description;
document.getElementById("udahead").innerHTML = data.national_parks.Wasgamuwa.name;
document.getElementById("udapara").innerHTML = data.national_parks.Udawalawa.description;
document.getElementById("horhead").innerHTML = data.national_parks.Hortainplains.name;
document.getElementById("horpara").innerHTML = data.national_parks.Hortainplains.description;
document.getElementById("horpara").innerHTML = data.national_parks.Hortainplains.description;

