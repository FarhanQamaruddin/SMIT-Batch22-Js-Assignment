// Question 16 — Reverse Star Triangle
var starsNum = 5;
for (var i = starsNum; i >= 1; i--) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}