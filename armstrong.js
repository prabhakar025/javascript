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
while (n>0) {
    let last=n%10
    sum=sum +  (last**countDigits(n))//3,2,1
    n=parseInt(n/10)//1
}
return sum
}  
let n=121
let sum=digitSum(n)
if (n==sum) {
    console.log("Armstrong")
}
else{
    console.log("Not")
}