//returns the number of vowel in the string
function countvowel(str){
    let count=0;
    for(const char of str){
        if(char =="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"||char=="E"||char=="I"||char=="O"||char=="U")
            {
                count++;
            }
    }
    console.log(count);
}
console.log(countvowel("sriya"));

const countvowel1=(str)=>{
    let c=0;
    for(const char of str){
        if(char =="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"||char=="E"||char=="I"||char=="O"||char=="U")
            {
                c++;
            }
    }
    console.log(c);
}
console.log(countvowel1("nehasriya"));