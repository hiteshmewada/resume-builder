function addNewWEField() {
    console.log("Adding New Field");

    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Add your Work Experience here");

    let weob = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButt");

    weob.insertBefore(newNode, weAddButtonOb);
}

function addAQNewFiled() {
    // console.log("Adding New Field");

    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Add your Academic Qualification here");

    let weob = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButt");

    weob.insertBefore(newNode, weAddButtonOb);
}
// generating cv
function generateCV() {
    // console.log("Generating CV");
    let name = document.getElementById("namefield").value;
    let namT = document.getElementById("nameT");
    namT.innerHTML = name;
    // direct
    document.getElementById("nameT2").innerHTML = name;
    // contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    //  address
    document.getElementById("addT").innerHTML = document.getElementById("addfield").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
    document.getElementById("linkT").innerHTML = document.getElementById("linkfield").value;
    document.getElementById("ObjectiveT").innerHTML = document.getElementById("objective").value;
    // Work experience
    let wes=document.getElementsByClassName("wefield");
    let str="";
    for(let e of wes){
        str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;
    // academic qualification
    let aqs=document.getElementsByClassName("aqfield");
    let s="";
    for(let e of aqs){
        s= s + `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=s;
    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display="block"
}
function printResume(){
    window.print();
}