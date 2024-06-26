//it is a dynamic programing language.
//= - assignment operator.
//case sensitive,spaces are not allowed.
//$name,_name,name.
//camel case - fullName.
//key word - let ,var,const.
//var= redeclared and updated,let=can't be redeclared but updated,const=can't redeclared and can't updated.
//let a; = bydefault a is undefined,but const a=10(it must intialize).
//{block} = we can redeclared by using let keyword.
//premitive datatype-number(-ve | +ve),string,boolean,undefined,null,BigInt,symbol.
//non premitive - object - it is a collection of values. = key:value.
//const object can be updated key.
let name="sriya sargam nayak";
console.log(name);
let price=20;
console.log(price);
x=null;  //type - object.
console.log(x);
y=undefined  //type - undefined.
console.log(y);
isfollow=false;
console.log(isfollow);
{
    let a=5;
    console.log(a);
}
{
    let a=7;
    console.log(a);
}
const student =
{
    name:"sriya",
    age:20,
    cgpa:9.0,
    isPass:true,
};
student["age"]=student["age"]+1;
console.log(student["age"]);
console.log(student.cgpa);