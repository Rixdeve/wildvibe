//idex.html page
//fetch JSON data
fetch("leopard.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        // document.getElementById("maini").innerHTML= data.main.Intro;
        localStorage.setItem("LeopardData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("LeopardData"));

//
document.getElementById("leopardHero").innerHTML = data.leopardslide.title;
document.getElementById("leopardHead").innerHTML = data.leopardsmain.title;
document.getElementById("udaHead").innerHTML = data.leopards_areas[0].title;
document.getElementById("udaPara").innerHTML = data.leopards_areas[0].description;
document.getElementById("horHead").innerHTML = data.leopards_areas[1].title;
document.getElementById("horPara").innerHTML = data.leopards_areas[1].description;
document.getElementById("knuHead").innerHTML = data.leopards_areas[2].title;
document.getElementById("knuPara").innerHTML = data.leopards_areas[2].description;
document.getElementById("thrHead").innerHTML = data.leopardthreats.title;
document.getElementById("defHead").innerHTML = data.leopardthreats.threats[0].type;
document.getElementById("defPara").innerHTML = data.leopardthreats.threats[0].description;
document.getElementById("defHead").innerHTML = data.leopardthreats.threats[0].type;
document.getElementById("condefHead").innerHTML = data.leopardthreats.threats[0].cons;
document.getElementById("condefPara").innerHTML = data.leopardthreats.threats[0].consequences;
document.getElementById("humHead").innerHTML = data.leopardthreats.threats[1].type;
document.getElementById("humPara").innerHTML = data.leopardthreats.threats[1].description;
document.getElementById("conHead").innerHTML = data.leopardthreats.threats[1].cons;
document.getElementById("conPara").innerHTML = data.leopardthreats.threats[1].consequences;
document.getElementById("standHead").innerHTML = data.leopard_conservation.title;
document.getElementById("standPara").innerHTML = data.leopard_conservation.description;






