

function addNewWEField() {
  console.log("Adding New Field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Add your Work Experience here");

  let weob = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButt");

  weob.insertBefore(newNode, weAddButtonOb).focus();
}

function addNewPSField() {
  // console.log("Adding New Field");

  let newNode = document.createElement("input");
  newNode.setAttribute("type", "text");
  newNode.classList.add("form-control");
  newNode.classList.add("psfield");
  newNode.classList.add("mt-2");
  // newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Add your Professional Skill here");

  let weob = document.getElementById("ps");
  let weAddButtonOb = document.getElementById("psAddButt");

  weob.insertBefore(newNode, weAddButtonOb).focus();
}

function addAQNewFiled() {
  // console.log("Adding New Field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Add your Academic Qualification here");

  let weob = document.getElementById("aq");
  let weAddButtonOb = document.getElementById("aqAddButt");

  weob.insertBefore(newNode, weAddButtonOb).focus();
}
// generating cv
function generateCV() {
  // console.log("Generating CV");
  let name = document.getElementById("namefield").value;
  let namT = document.getElementById("nameT");
  namT.innerHTML = name;
  // direct
  document.getElementById("nameT2").innerHTML = name;
  //occupation
  document.getElementById("occT").innerHTML = document.getElementById("occfield").value;
  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactfield").value;
  //website
  let website = document.getElementById("webfield").value;
  let web = "Website";
  document.getElementById("webT").innerHTML =
    `<a href=" ` + website + ` " >` + `<b><u>` + web + `</u></b>` + `</a>`;

  //  address
  document.getElementById("addT").innerHTML =
    document.getElementById("addfield").value;
  // email
  let emailnam = document.getElementById("emailfield").value;
  var em = emailnam;
  document.getElementById("emailT").innerHTML =
    `<a href=mailto:" ` + em + ` " >` + `<b>` + emailnam + `</b>` + `</a>`;


  // code for setting Image

  let file = document.getElementById("imgfield").files[0];
  console.log(file);
  let read = new FileReader();
  read.readAsDataURL(file);

  //set image to template

  read.onloadend = function () {
    // console.log(read.result);
    document.getElementById("img").src = read.result;
  };

  // social links

  let fbnam = "FaceBook";
  var fb = document.getElementById("fbfield").value;
  document.getElementById("fbT").innerHTML =
    `<a href=" ` + fb + ` " >` + `<b>` + fbnam + `</b>` + `</a>`;

  let isnam = "Instagram";
  var insta = document.getElementById("instafield").value;
  document.getElementById("instaT").innerHTML =
    `<a href=" ` + insta + ` " >` + `<b>` + isnam + `</b>` + `</a>`;

  let linam = "LinkedIn";
  var li = document.getElementById("linkfield").value;
  document.getElementById("linkT").innerHTML =
    `<a href=" ` + li + ` " >` + `<b>` + linam + `</b>` + `</a>`;

  // document.getElementById("instaT").innerHTML =
  //   document.getElementById("instafield").value;
  // document.getElementById("linkT").innerHTML =
  //   document.getElementById("linkfield").value;
  // document.getElementById("ObjectiveT").innerHTML =
  //   document.getElementById("objective").value;

  // Work experience

  let wes = document.getElementsByClassName("wefield");
  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // skills

  let pss = document.getElementsByClassName("psfield");
  let str3 = "";

  for (let e of pss) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }
  document.getElementById("psT").innerHTML = str3;

  // academic qualification
  let aqs = document.getElementsByClassName("aqfield");
  let s = "";
  for (let e of aqs) {
    s = s + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = s;
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}
function printResume() {
  window.print();
}
