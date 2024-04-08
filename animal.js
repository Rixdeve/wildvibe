fetch("animal.json")
    .then((response) => response.json())
    .then((data) => {
        if (!localStorage.getItem("animalData")){
        localStorage.setItem("animalData", JSON.stringify(data));}
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("animalData"));

document.getElementById("eleHead").innerHTML = data.indigenous_animals[0].name;
document.getElementById("elePara").innerHTML = data.indigenous_animals[0].description;
document.getElementById("sloHead").innerHTML = data.indigenous_animals[1].name;
document.getElementById("sloPara").innerHTML = data.indigenous_animals[1].description;
document.getElementById("lizHead").innerHTML = data.indigenous_animals[2].name;
document.getElementById("lizPara").innerHTML = data.indigenous_animals[2].description;
document.getElementById("monHead").innerHTML = data.indigenous_animals[3].name;
document.getElementById("monPara").innerHTML = data.indigenous_animals[3].description;