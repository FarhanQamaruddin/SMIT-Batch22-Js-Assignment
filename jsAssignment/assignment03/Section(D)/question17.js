// Question 17 — Number Triangle

var num = 5;
for (var i = 1; i <= num; i++) {
    var numbers = "";
    for (var j = 1; j <= i; j++) {
        numbers += j;
    }
    console.log(numbers);
}