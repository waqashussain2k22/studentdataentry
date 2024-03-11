function addStudent() {
    var nameInput = document.getElementById("name").value;
    var rollnoInput = parseInt(document.getElementById("rollno").value, 10);
    var courseInput = document.getElementById("course").value;
    var instituteInput = document.getElementById("institute").value;

    var studentList = JSON.parse(localStorage.getItem("students")) || [];

    if (nameInput.trim() !== "" && !isNaN(rollnoInput) && courseInput.trim() !== "" && instituteInput.trim() !== "") {
        var newStudent = {
            name: nameInput,
            rollno: rollnoInput,
            course: courseInput,
            institute: instituteInput
        };

        studentList.push(newStudent);
        localStorage.setItem("students", JSON.stringify(studentList));

        document.getElementById("name").value = "";
        document.getElementById("rollno").value = "";
        document.getElementById("course").value = "";
        document.getElementById("institute").value = "";
    }
}

function showStudents() {
    var studentList = JSON.parse(localStorage.getItem("students")) || [];
    var studentListElement = document.getElementById("studentList");

    studentListElement.innerHTML = "";

    studentList.forEach(function (student) {
        var listItem = document.createElement("tr");
        listItem.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollno}</td>
            <td>${student.course}</td>
            <td>${student.institute}</td>
        `;
        studentListElement.appendChild(listItem);
    });
}

function clearStudents() {
    localStorage.removeItem("students");
    showStudents();
}