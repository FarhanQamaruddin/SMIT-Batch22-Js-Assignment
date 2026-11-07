// Question 06 — Display Array Elements  
// Create an array containing eight student names. 
// Display each name with its position number using a loop.

var students = ["Ali", "Ahmed", "Ayesha", "Fatima", "Hassan", "Hina", "Usman", "Zainab"];

for (var i =0; i < students.length; i++){
    console.log("Student" + " " + (i + 1) + ":" + " " + students[i]);
}