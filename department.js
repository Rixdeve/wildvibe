fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        if (!localStorage.getItem("departmentData")){
        localStorage.setItem("departmentData", JSON.stringify(data));}
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));


document.getElementById("depHead").innerHTML = data.department_info.name;
document.getElementById("depPara").innerHTML = data.department_info.description;
document.getElementById("depHead").innerHTML = data.department_info.name;
document.getElementById("depMapHead").innerHTML = data.map_location.title;
document.getElementById("depMapPara").innerHTML = data.map_location.map_url;
