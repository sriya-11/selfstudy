let cities=["delhi","bbsr","mumbai","khordha","patna"];
cities.forEach(function printcity(val,idx){
    console.log(val.toUpperCase(),idx);
});

//for a given array of numbers,print the square of each value using the foreach loop
let arr=[1,2,3,4,5,6,7,8,9];
arr.forEach(function square(val)
{
    console.log(val*val);
});

//array methods - arr.map(callbackfnx(value,index,array))

let num=[1,5,7,3,9];
let newnum = num.map((val)=> {
    console.log(val*5);
});
console.log(num);

//filter function - filter out numbers

let arr2=[1,2,3,4,5,6];
let evenarr2= arr2.filter((val)=>{
    return val%2===0;
});
console.log(evenarr2);

let arr3=[1,2,3,4,5,6,7];
let newarray=arr3.filter((val)=>{
    return val%2!==0;
});
console.log(newarray);

//reduce method - return a single value

let arr4=[1,2,3,4,5,6,7,8,9];
let output=arr4.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);

let arr5=[1,2,3,4,5,6,7,8,9];
let output1=arr5.reduce((res,curr)=>{
    return res> curr?res:curr;
});
console.log(output1);