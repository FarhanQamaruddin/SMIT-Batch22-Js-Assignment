// Question 10 — Sum & Average of Array 
var prices = [1200, 850, 230, 1345, 990];
var totalSum = 0;

for(var i = 0; i < prices.length; i++){
    totalSum += prices[i];
    var average = totalSum / prices.length;
}

console.log("Total sum: " ,totalSum);
console.log("Average: " , average);