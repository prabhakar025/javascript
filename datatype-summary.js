//data type
//1.primitive data type
// 7 type:=>String,Number,Boolean,Null,undefined,Symbol,BigInt
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)
const BigNumber=123242324

//2. Refrence(Non primitive data type)
// Array,object,function

const heroes=["salaman","sarukh","akshay","sunil"];
let myObj={
    name:"prabhakar",
    age:23,
}
const myFunction=function(){
    console.log("Helllo world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(myFunction)