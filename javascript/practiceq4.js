//practice q 1

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("number=",i);
    }
}   

//practice q 2

let game_number=25;
let user_number=prompt("guess the game number");
while(user_number!=game_number){
    user_number=prompt("guess the game number,again");
}
console.log("the number is true");