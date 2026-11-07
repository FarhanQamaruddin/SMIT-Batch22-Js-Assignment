// Question 15 — Star Triangle 
var starsNum = 5;
for (var i = 1; i <= starsNum; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}