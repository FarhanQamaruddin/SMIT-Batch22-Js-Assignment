// Question 05 — Sum of Natural Numbers
// Ask the user to enter a positive integer
// N. Calculate the sum of all numbers from 1 to N using a loop.
const N = +prompt("Enter a positive integer N:");

let totalSum = 0;

for (let i = 1; i <= N; i++) {
    totalSum += i;
}

console.log("Sum = " + totalSum);