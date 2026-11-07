// Question 19 — Student Result Analyzer
var students = ["Ali" , "Sara" , "Ahmed" , "Ayesha" , "Hamza"];
var marks = [78 , 92 , 95 , 88 , 33];
var result = "";
var passedStudent = 0;
var failedStudent = 0;
var highestmarks = marks[0];
var topStudent = students[0];
var totalSum = 0;

for(var i = 0; i < students.length; i++){

    if(marks[i] > 50){
        result = "Pass";
        passedStudent++;
    }else{
        result = "Fail"
        failedStudent++;
    }

    if(marks[i] > highestmarks){
        highestmarks = marks[i];
        topStudent = students[i];
    }
    console.log(students[i] + "-" + marks[i] + "-" + result);
    
    totalSum += marks[i];
    var average = totalSum / marks.length;
    
}

console.log("Total Student:" , students.length);
console.log("Passed:" , passedStudent);
console.log("Failed:" , failedStudent);
console.log("Top Student:" , topStudent , highestmarks);
console.log("Average:" , average + "%")
