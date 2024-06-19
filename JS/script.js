
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
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

   
    //AQ
    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

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