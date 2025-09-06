let arr=[10,21,30,43,50,65]
let evenArray=[]
let oddArray=[]
for(i=0;i<arr.length-1;i++){
    if (i%2==0) {
        console.log(evenArray.push(i))
    }else{
        console.log(oddArray.push(i))
    }
}
console.log(evenArray,oddArray)