var arr=[10,39,894,32,11,54];
const obj={};
function arrayStats (tutu){

obj.max=Math.max(...tutu);
obj.min=Math.min(...tutu);
obj.sum = tutu.reduce((acc,num)=>acc+num,0);
obj.average=(obj.sum/tutu.length);
console.log("Max:",obj.max);
console.log("Min:",obj.min);
console.log("Sum:",obj.sum);
console.log("Average:",obj.average);
return obj;
}
var mamamia = arrayStats(arr);
console.log(mamamia);
