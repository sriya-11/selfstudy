//function without parameter
function hello(){
    console.log("sriya sargam nayak");
    console.log("nehaaa");
}
hello();
//function with parameter
function hii(msg){
    console.log(msg);
}
hii("heloo guyss my name is sriya sargam nayak")

//function-2 numbers sum
function sum(a,b){ //local variables
    console.log(a+b);
}
sum(6,7);

//by using return keyword
function sum1(a,b){
    s=a+b;
    return s;
}
let val=sum1(6,5);
console.log(val);
//function parameters-like local variables of function -block scope

//ARROW FUNCTIONS

const sum2=(c,d)=>
    {
    console.log(c+d);
    };
sum(6,8);

const mul=(x,y)=>{
    console.log(x*y);
};
mul(3,5);

const printhello=()=>{
    console.log("hello");
}
printhello();