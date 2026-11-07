// Question 07 — Find Largest & Smallest 

var numbers = [12, 45, 2, 67, 34, 89, 23, 56];

var largestNumber = numbers[0];
var smallestNumber = numbers[0];

for ( let i = 0; i < numbers.length; i++){

    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
    if(numbers[i] < smallestNumber){
        smallestNumber = numbers[i];
    }
}

console.log("Largest Number: " + largestNumber);
console.log("Smallest Number: " + smallestNumber);