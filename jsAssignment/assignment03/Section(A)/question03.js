// Question 03 — Even & Odd Number Generator 
// Write a program that prints all even and odd numbers separately between 1 and 50.
for( var i = 1; i <= 50; i++){

    if(i % 2 === 0){
        console.log( i + " is a Even number.")
    }

}

for( var j = 1; j <= 50; j++){

    if(j % 2 !== 0){
        console.log( j + " is an Odd number.")
    }

}