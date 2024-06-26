//strings are immutable in nature
//property=str.length,str[index]
let str="sriya";
console.log(str.length);
console.log(str[3]);

let obj={
    item:"pen",
    price:20,
};
let output=`the cost of ${obj.item} is ${obj.price}`;
console.log(output);

//template literal =`to generate expression`
//\n=move to next line , \t= to create space


//string functions = str.toUpperCase() , tstr.toLowerCase() , str.trim()=remove white spaces

let str1="hello guyss";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());

//str.slice(starting indext,ending index),
//str.concat(str1)=to merge two string ,also by using +
//str.replace(newval,oldval),str.charAt(index)
let str2="abcdef";
console.log(str2.slice(1,3));
console.log(str1.concat(str2));
console.log(str2.charAt(2)); // c
str2=str2.replace("a","z");
console.log(str2);
