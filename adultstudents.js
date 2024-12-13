function students(st){
    // console.log('hey');
    for(let i=0;i<st.length;i++){
        console.log(st[i].age);
        if(st[i].age<=18){
            st.splice(i,1);
        i--;
    }
    
    
    
    // for(let i in st){
    //     if(st.age>18){
    //         return st;
    //     }
    //     else{
    //         delete st.age;
    //         delete st.name; 
    //     }
    // }}
    }
    return st;}
let obj=[{izina:'jo',age:22},{izina:'keke',age:16},{izina:'baba',age:18}];
console.log(students(obj));