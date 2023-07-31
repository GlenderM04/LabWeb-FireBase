/*
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:3000/api/read/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
*/
document.addEventListener("DOMContentLoaded", readAllStudents);

function readAllStudents() {
    axios.get('http://localhost:3000/api/read/')
        .then(function (response) {
            // handle success
            console.log(response);
            let tabla = document.getElementById("studentList");
            for (let i = 0; i < 5; i++) {
                //const element = array[i];
                let newRow = tabla.insertRow();
                let idCell = newRow.insertCell();
                let nameCell = newRow.insertCell();
                let ageCell = newRow.insertCell();
                let gradeCell = newRow.insertCell();


                idCell.textContent = "1"
                nameCell.textContent = "EPN-FIS"
                ageCell.textContent = "123"
                gradeCell.textContent = "A"

            }
        })

}