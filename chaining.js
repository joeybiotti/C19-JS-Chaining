var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var finishedProduct = integers.sort(function(a, b){
	return b-a})
.filter(function(sortedAndFiltered){
	return (sortedAndFiltered <= 19)})
.map(function(lessThan){
	return(lessThan * 1.5)-1})
.reduce(function(prev, curr){
	return prev + curr
});

console.log("The finished product is ", finishedProduct);

var output = document.getElementById("output");

output.innerHTML = finishedProduct;


console.log("finishedProduct", finishedProduct);
