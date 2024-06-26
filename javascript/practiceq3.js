let num=prompt("enter a number");
if(num%5===0){
    console.log("it is a multiple of 5");
}
else{
    console.log("it is not a multiple of 5");
}

let score=prompt("enter  marks");
if(score>=90 && score<=100){
    console.log("A grade");
}
else if(score>=70 && score<=89){
    console.log("B grade");
}
else if(score>=60 && score<=69){
    console.log("C grade");
}
else if(score>=50 && score<=59){
    console.log("D grade");
}
else if(score>0 && score<=49){
    console.log("F grade");
}