// function removeDupl(arr){
//     // let newArr=arr.filter((d)=>arr.findIndex(d));
//     let newArr=arr.findIndex((d,i,a)=>{
//         for (let n=0;n<arr.length;n++){
//         if(a[i]===a[i+1]){
//             arr.splice(arr[i],1);
//         }};
//     console.log(newArr);}
// )}
// removeDupl([23,4,5,67,4]);
// // for (let i=0;i<arr.length;i++){
// //     if(a)
// // }
let removeDupl=(arr)=>{
    return arr.filter((item,index)=>arr.indexOf(item)===index);
};
console.log(removeDupl([1,2,3,21,2,1,1,4]));