// Question 14 — Remove Duplicate Numbers 
var numbers = [10, 20, 10, 30, 20, 40, 30, 50];
var uniqueNumbers = [];
for(var i = 0; i < numbers.length; i++){
    var currentNumber = numbers[i];
    var isNumber = false;

    for(var j = 0; j < uniqueNumbers.length; j++){
        if(uniqueNumbers[j] === currentNumber){
            isNumber = true;
            break;
        }
    }

    if(!isNumber){
        uniqueNumbers.push(currentNumber);
    }
}

console.log(" Unique Number:" ,uniqueNumbers);