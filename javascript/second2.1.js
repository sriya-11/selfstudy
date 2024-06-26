//conditional statements
//if statements
let age=18;
if(age>=18)
    {
        console.log("you can vote")
    }
if(age<18)
    {
        console.log("you can't vote");
    }
let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}
else if(mode="light"){
    color="white";
}    
else{
    color="pink"
}   
console.log(color);
//if-else statements
let a=5;
let b=7;
if(a==b){
    console.log("a and b are equal");
}
else{
    console.log("they are not equal");
}
let num=10;
if(num%2==0){
    console.log("even number");
}
else{
    console.log("odd number");
}
//else-if statements
let age1=59;
if(age1<18){
    console.log("junior");
}
else if(age1>60){
    console.log("senior");
}
else{
    console.log("middle");
}
//single statement by using if
if( age==18){
    console.log(age)
}
//ternary operator
let age5=56;
let result=age5>18 ? "adult":"not adult";  //compact if-else
console.log(result);
 