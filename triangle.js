// check valid triangle or not 
// if valid => Equlateral,Isosceles,Isosceles


let a=60
let b=40
let c=80
sum=a+b+c
if (sum==180 && a>0 && b>0 && c>0) {
    console.log("Triagle Valid")
    if (a==b && b==c) {
        console.log("Equlateral")
    }
    else if (a==b || b==c || c==a ) {
        console.log("Isosceles")
        }
        else{
            console.log("Scalene")
        }
}
else{
    console.log("Not valid")
}
