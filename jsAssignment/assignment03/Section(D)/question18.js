// Question 18 — Multiplication Table Grid  
// Use nested loops to generate multiplication tables from 2 to 5. 
// Each table should contain multiplication from 1 to 10.

for(var i = 2; i <= 10; i++){
    console.log("Table of "+ i);
    for(var j = 1; j <= 10; j++){
        console.log(i + "x" + j + "=" + i*j);
    }
}