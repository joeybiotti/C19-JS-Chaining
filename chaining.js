var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var finishedProduct =
integers.sort(function(a, b){return b-a})
.filter(function(filtered){return (filtered <= 19)})
function mathPart(value){return (value * 1.5)-1);

console.log("finishedProduct", finishedProduct);
