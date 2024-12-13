function posite(arr){
    if(arr.filter(d=>d>=0).length>0){
    return arr.filter(d=>d>=0);}
    else{
        return [0];
    }
}
console.log(posite([-2,-3,-5,-6]));