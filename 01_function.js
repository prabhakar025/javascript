function sayMyName() {
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("k");
    console.log("a");
    console.log("r");
}
//sayMyName()


function addTwonumbers(number1,number2){//parameters
   // console.log(number1+number2);
// 
return number1+number2
}
const result=addTwonumbers(3,4)//arguments
//console.log("Result",result);


function loginUserMessage(username){
    if (username) {
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("prabhakar"))
console.log(loginUserMessage())