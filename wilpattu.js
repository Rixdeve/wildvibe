fetch("wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        if (!localStorage.getItem("wilpattuData")){
        localStorage.setItem("wilpattuData", JSON.stringify(data));}
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wilpattuData"));

document.getElementById("wilHero").innerHTML = data.Wilpattu_Vibe.heading;
document.getElementById("wilMain").innerHTML = data.wilpattuwa_basic.heading;
document.getElementById("wilMain").innerHTML = data.wilpattuwa_basic.heading;
document.getElementById("wilPara").innerHTML = data.wilpattuwa_basic.description;
document.getElementById("didHead").innerHTML = data.wilpattuwa_histroy.heading;
document.getElementById("didPara").innerHTML = data.wilpattuwa_histroy.fact;
document.getElementById("goHead").innerHTML = data.wilpattuwa_location.heading;
document.getElementById("goPara").innerHTML = data.wilpattuwa_location.description;
document.getElementById("seeHead").innerHTML = data.wilpattuwa_animal.heading;
document.getElementById("seePara").innerHTML = data.wilpattuwa_animal.description;
document.getElementById("timeHead").innerHTML = data.wilpattu_time.heading;
document.getElementById("may").innerHTML = data.wilpattu_time.time_periods.May_to_September;
document.getElementById("july").innerHTML = data.wilpattu_time.time_periods.July_and_August;
document.getElementById("octo").innerHTML = data.wilpattu_time.time_periods.October;
document.getElementById("nov").innerHTML = data.wilpattu_time.time_periods.November_to_January;
document.getElementById("feb").innerHTML = data.wilpattu_time.time_periods.February_to_April;
document.getElementById("goodPara").innerHTML = data.wilpattu_time.note;
document.getElementById("openHours").innerHTML = data.wilpattu_open.heading;
document.getElementById("openPara").innerHTML = data.wilpattu_open.hours.description;
document.getElementById("morning").innerHTML = data.wilpattu_open.hours.Morning_Safari;
document.getElementById("evening").innerHTML = data.wilpattu_open.hours.Evening_Safari;

