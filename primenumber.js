function filterPrimeNumbers(arr){
    return arr.filter(prime);
}
function prime(value){
    for(let i=2;i<value;i++){
        // console.log(d)
        if(value%i===0){
            return false;
        }
    }
    return true;
}
console.log(filterPrimeNumbers([4, 7, 12, 11, 15, 17, 20, 23]));