var arr=[23,4,5,67,85,2,11,65];
var result = oddSquares(arr);
console.log(result);
function oddSquares(arr){
    return arr.filter(num => num % 2 !== 0)
    .map(num => num * num)
}
