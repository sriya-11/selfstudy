//for loop

for( let i=1;i<=5;i++){
    console.log("sriya sargam nayak")
}

let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);
let rev;
let temp;
for(let i=1;i<=5;i++){

}

//while loop

let i=1;
while(i<=5){
    console.log("priya");
    i++;
}

//do-while loop

let i1=1;
do{
    console.log("sriya");
    i++;
}while(i<=10);

//forof loop

let str="ssn";
for (const i of str) {
    console.log(i);
}

let size=0;
let str1="sriya sargam nayak";
for (const i of str1) {
    console.log(i);
    size++;
}
console.log("size =",size);

//forin loop = it print only key values

let student={
    name:"sriya",
    age:20,
    cgpa:9,
};
for (const key in student) {
    console.log("key is=",key ,"value is=",student[key]);
}