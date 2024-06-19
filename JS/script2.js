function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSKField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter Here")

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb);
}

function addNewACHField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("achField");
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter Here")

    let achOb = document.getElementById("ach");
    let achAddButtonOb = document.getElementById("achAddButton");

    achOb.insertBefore(newNode, achAddButtonOb);
}

function generateCV() {
    let nameFField = document.getElementById("nameFField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameFField;

    document.getElementById("nameT2").innerHTML = nameFField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("mailT").innerHTML = document.getElementById("gmField").value;

    document.getElementById("ghT").innerHTML = document.getElementById("ghField").value;

    document.getElementById("linkT").innerHTML = document.getElementById("linkField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    document.getElementById("aboutT").innerHTML = document.getElementById("aboutField").value;

    //WE
    let wes = document.getElementsByClassName("weField");
    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //AQ
    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    let sks = document.getElementsByClassName("skField");
    let str2 = "";

    for (let e of sks) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML = str2;

    let achs = document.getElementsByClassName("achField");
    let str3 = "";

    for (let e of achs) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("achT").innerHTML = str3;

    //code for Profile Picture
    let file = document.getElementById('imgField').files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    //image set at template
    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    };

    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';
}

function printCV() {
    window.print();
}