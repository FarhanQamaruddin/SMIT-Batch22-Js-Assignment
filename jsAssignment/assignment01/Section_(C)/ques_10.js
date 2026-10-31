// Question 10: Marks Percentage Calculator
// Ask the user to enter marks for five subjects. Each subject has a maximum of 100 marks. Calculate: 
// 1. Total obtained marks 
// 2. Total maximum marks 
// 3. Percentage

var english= 80;
var math= 93; 
var science= 78; 
var computer= 98; 
var urdu= 80;

var obtainedMarks = english + math + science + computer + urdu;
var totalMarks = 500;
var percentage = obtainedMarks * 100 / totalMarks;

console.log("Total Obtained Marks:" + " " + obtainedMarks);
console.log("Total Maximum Marks:" + " " + totalMarks);
console.log("Percentage:" + " " + percentage + "%");
