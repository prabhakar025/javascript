// let a=10
// for(let i=1;i<=1;i++){
//     //console.log("inner 1",a)    //error
//    let a=200
//     console.log("inner 1",a)
// }
// console.log("outer 1",a)



// var a=10
// for(let i=1;i<=1;i++){
//     console.log("inner 1",a)    //error
//    var a=200
//     console.log("inner 1",a)
// }
// console.log("outer 1",a)

var a=100
 function hello(){
    console.log("inner 1",a)
var a=500
console.log("inner 1",a)
 }
 hello()
 console.log("outer 1",1)