// Question 12: Salary Calculator  
// A company calculates employee salaries using the following structure: 
// • Basic Salary: Entered by the user 
// • House Allowance: 20% of basic salary 
// • Medical Allowance: 10% of basic salary 
// • Tax Deduction: 5% of basic salary Calculate: 
// 1. House allowance 
// 2. Medical allowance 
// 3. Tax deduction 
// 4. Gross salary 
// 5. Net salary after tax

var salary = +prompt("Enter your salary");

var houseAllowance= salary * 20 / 100;
var medicalAllowance= salary * 10 / 100;
var tax= salary * 5 / 100;
var grossSalary = salary + houseAllowance + medicalAllowance;
var netSalary = grossSalary - tax;


console.log("Basic Salary: Rs." + " " + salary);
console.log("House Allowance: Rs." + " " + houseAllowance);
console.log("Medical Allowance: Rs." + " " + medicalAllowance);
console.log("Gross Salary: Rs." + " " + grossSalary);
console.log("Net Salary: Rs." + " " + netSalary);

