//push()-add to end
//pop()-delete from and return
//toString()-convert array to string

let foods=["potato","tomato","lichi","apple"];
foods.push("panir");
console.log(foods);
foods.pop(1);
console.log(foods);
console.log(foods.toString());

//concat()-join multiple arrays and returns result
//unshift()- add to start = do perform like push
//shift()-delete from start and return = do perform like pop

let names=["rahul","rita","sriya","priya","sahil"];
console.log(foods.concat(names));
console.log(names.unshift("hello"))
console.log(names);
console.log(names.shift());

//slice()- returns a piece of the array
//splice()- change the original array(add,remove,replace)

let marks=[90,87,94,67,68,97];
console.log(marks.slice(1,4));

let number=[1,2,4,3,9,6,0,7];
number.splice(2,2,909,808);  // replace
console.log(number);
number.splice(3,0,876);  //add
console.log(number);
number.splice(3,1); //delete
console.log(number);

