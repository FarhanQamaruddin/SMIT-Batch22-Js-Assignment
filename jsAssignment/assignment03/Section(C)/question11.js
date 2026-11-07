// Question 11 — Student Name Search 

var studentsName = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];
var student = prompt("Enter a name");
var isActive = false;


for(var i = 0; i < studentsName.length; i++){
    if(studentsName[i] === student){
        isActive = true;
        console.log("Enter name: " + student + " Student Found!");
        break;
    }
}

if (isActive == false) {
    console.log("student Not Found!")
}