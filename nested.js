// let n = 100;

// if (n > 70) {
//   console.log("W");
// } else if (n > 80) {
//   if (n < 30) {
//     console.log("X");
//   } else {
//     console.log("Y");
//   }
// }


let n = 2100

if(n%4==0){

    if(n%100!=0){
        console.log("Leap year 1")
    }
    else if(n%100 ==0){
        if(n%400 == 0){
            console.log("Leap Year 2")
        }
        else{
            console.log("Not a Leap Year 3")
        }
    }


}
else{
    console.log("Not a Leap Year 4")
}