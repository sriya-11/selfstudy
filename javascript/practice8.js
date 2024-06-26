//find out of the marks of students that scored 90.
let  marks=[98,97,94,87,65,89];
let filmark=marks.filter((val)=>{
    return val>90;
});
console.log(filmark);

//take a number as input from user.create an array of numbers 1 to n.use the reduce method to calculate sum of all numbers in the array.use the reduce method to calculate product of all numbers in the array
let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);  
//print sum  
let sumarr=arr.reduce((res,curr)=>{
    return res+curr;
});
//print mul
console.log(sumarr);
let mularr=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(mularr);
