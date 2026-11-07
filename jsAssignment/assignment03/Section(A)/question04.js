// Question 04 — Multiplication Table 
// Ask the user to enter a number and generate its multiplication table from 1 to 10.

var num = +prompt("Enter a number");
for (var i = 1; i <= 10; i++){
     console.log(num + " x " + i + "=" + num * i)
}