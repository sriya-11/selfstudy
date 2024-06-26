let heroes =["ironman","hulk","thor"];
console.log(heroes);
let marks=[90,80,98,87];
console.log(marks);
console.log(marks[0]);
console.log(marks.length);
marks[3]=45;
console.log(marks[3]);

//using for loop - iterable(strings,objects,arrays)
//print all elemts of an array
for(let i=0;i<3;i++)
    {
        console.log(heroes[i]);
    }

let cities=["delhi","bbsr","mumbai","pune"];
for(let city in cities){
    console.log(cities);
}    

//print avg marks
let marks1 =[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks1.length;i++){
    sum=sum+marks1[i];
}
console.log("print sum=",sum);
let avg=sum/marks1.length;
console.log(`avg marks of the class is=${avg}`);

//all items have an offer of 10% to them.change the array to store final price after applying offer
let prices=[250,654,300,900,50];
for(let i=0;i<5;i++){
    let off=prices[i]/10;
    prices[i]=prices[i]-off;
}
console.log(prices);