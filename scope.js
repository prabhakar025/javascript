//var c=30
let a=20
if(true){
let a=10
const b=20
//console.log("INNER:", a)

}
// for(let i=0;i<array.length;i++){
//     const element=array[i];
// }
//console.log(a);
//console.log(b);
//console.log(c);



function one() {
    const username="prabhakar"
    function two(){
        const website="you tube"
        console.log(username);
    }
   // console.log(website);
   two()
}
// one()

if(true){
    const username="prabhakar"
    if(username=="prabhakar"){
        const website="youtube"
        //console.log(username+ website);
    }
    // console.log(website);
}
//console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

console.log(addtwo(6))
const addtwo=function(num){
    return num+2
}
