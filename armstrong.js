function countDigits(n){
    let count=0
    while (n>0) {
        count++
        n=parseInt(n/10)
    }
    return count
}

function digitSum(n){//123
let sum=0
// let digits = countDigits(n) 
let x = n
while (n>0) {
    let last=n%10
    sum=sum +  (last**countDigits(x))
    n=parseInt(n/10)
}
return sum
}  
let n=153
let sum=digitSum(n)
if (n==sum) {
    console.log("Armstrong")
}
else{
    console.log("Not")
}