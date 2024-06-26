//arithmetic operatior   + , - , / , * , % , ^
let a=5;
let b=2;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
console.log("a++=",a++);
console.log("a =",a);
console.log("++a=",++a);
//unary operator  ++ , --
//a++ = post increment and ++a pre increment
let c= 4;
let d= 3;
c=c+1;
d--;
console.log("c =",c);
console.log("d =",d)
//asignment operator =,+=,-=,*=,/=,%=,**=
let e=7;
let f=3;
e+=4;
f-=1;
console.log("e=",e);
console.log("f=",f);
//comparision operator ==,===,!=,!==,>,<,>=,<=
//===,!=== - it check the datatype (stricter version)
let g=1;  //number
let h=6;
console.log("1==6",g==h);  //false
console.log("1!=6",g!=h);  //true
let i="1"; //string --> number
console.log("1==1",g==i);  //true 
console.log("1===1",g===i);  //false
console.log("1<=6",g<=h);  //true
console.log("1>=6",g>=h);   //false && || !
//logical operator 
let j=6;
let k=3;
let cond1=j>k;  //true
let cond2=j==6;  //true
console.log("cond1 and cond2=",cond1 && cond2); // true
let cond3=j<k;  //false
console.log("cond2 or cond3=",cond2 || cond3);  //true
console.log("!(6<3)=",!(cond3));

