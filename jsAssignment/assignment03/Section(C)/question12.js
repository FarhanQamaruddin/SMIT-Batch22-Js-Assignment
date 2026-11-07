// Question 12 — Find a Number

var numbers = [10, 25, 40, 55, 70, 85, 100];
var user = +prompt("Enter a number");
var isNumber = false;

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] === user){
        isNumber = true;
        console.log("Enter name: " + user + " Number Found at index " + i);
        break;
    }
}

if (isNumber == false) {
    console.log("Number Not Found!")
}
