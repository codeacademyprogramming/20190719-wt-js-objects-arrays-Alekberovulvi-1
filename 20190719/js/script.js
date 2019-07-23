"use strict";


let students = [];

// let inputName = document.getElementById("input-name");
// let inputSurname = document.getElementById("input-surname");
let inputs = document.getElementsByClassName("form-control");

function Student(Name, Surname, Email, Phone, Age) {
    this.Name = Name;
    this.Surname = Surname;
    this.Email = Email;
    this.Phone = Phone;
    this.Age = Age;
    this.info = function () {
        return this.Name + " " + this.Surname + " " + this.Email + " " + this.Phone + " - " + this.Age;
    }
}



function addstudent() {
    if (inputs[0].value != "" &&
        inputs[1].value != "" &&
        inputs[2].value != "" &&
        inputs[3].value != "" &&
        inputs[4].value != "") {
        let i = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
        students.push(i);
        reset();
        showStudents();
    } else {
        alert("Xanalari doldurda");
    }

}


function reset(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value= ""; 

    }
}

function showStudents(){
    let rows = "";

    for(let i = 0; i < students.length; i++){
        rows += `<tr>
        <th scope="row">${i+1}</th>
        <td>${students[i].Name}</td>
        <td>${students[i].Surname}</td>
        <td>${students[i].Email}</td>
        <td>${students[i].Phone}</td>
        <td>${students[i].Age}</td>
        </tr>`
    }

    document.getElementById("table-body").innerHTML = rows; 
}


