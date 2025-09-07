let arr=[10,20,30,40,50,60]
let index=3
let n=35
let brr=[]
for(i=0;i<=arr.length-1;i++) {
    if (i==index) {
        brr.push(n)
    }
    brr.push(arr[i])
}
console.log(brr)
