//idex.html page
//fetch JSON data
fetch("yala.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        // document.getElementById("maini").innerHTML= data.main.Intro;
        localStorage.setItem("yalaData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("yalaData"));

//
document.getElementById("yalaMain").innerHTML = data.Yala_National_Park.Basic_Info.Name;
document.getElementById("yalaPara").innerHTML = data.Yala_National_Park.Basic_Info.Description;
document.getElementById("mystHead").innerHTML = data.Yala_National_Park.Mystery.Name;
document.getElementById("mystPara").innerHTML = data.Yala_National_Park.Mystery.Description;
document.getElementById("locHead").innerHTML = data.Yala_National_Park.Location.Name;
document.getElementById("locPara").innerHTML = data.Yala_National_Park.Location.Description;
document.getElementById("livHead").innerHTML = data.Yala_National_Park.Wildlife.Name;
document.getElementById("livPara").innerHTML = data.Yala_National_Park.Wildlife.Description;
document.getElementById("timeHead").innerHTML = data.Yala_National_Park.Best_Time.Name;
document.getElementById("may").innerHTML = data.Yala_National_Park.Best_Time.Months.May_and_June;
document.getElementById("july").innerHTML = data.Yala_National_Park.Best_Time.Months.July_and_August;
document.getElementById("octo").innerHTML = data.Yala_National_Park.Best_Time.Months.September_and_October;
document.getElementById("nov").innerHTML = data.Yala_National_Park.Best_Time.Months.November;
document.getElementById("dec").innerHTML = data.Yala_National_Park.Best_Time.Months.December_to_March;
document.getElementById("apr").innerHTML = data.Yala_National_Park.Best_Time.Months.April;
document.getElementById("good").innerHTML = data.Yala_National_Park.Best_Time.Months.November_to_February;
document.getElementById("openHead").innerHTML = data.Yala_National_Park.Opening_Hours.Name;
document.getElementById("openPara").innerHTML = data.Yala_National_Park.Opening_Hours.Hours.Morning;



