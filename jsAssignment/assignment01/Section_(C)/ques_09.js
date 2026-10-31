// Question 9: Age Calculator 
// Ask the user for their birth year. 
// Calculate their approximate age using the current year.

var birthYear = Number(prompt("Enter your birth year:"));

var currentYear = 2026;

var age = currentYear - birthYear;

console.log("Your approximate age is " + age + " years.");