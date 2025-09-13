let arr=[10,20,30,40]

//find all subarrays

//[10],[10,20],[10,20,30],[10,20,30,40]
//[20],[20,30],[20,30,40]
//[30],[30,40]
//[40]


for(let i=0;i<=arr.length-1;i++){
    console.log("All subarray with",i,arr[i])
    //i=0
    for(let j=i;j<=arr.length-1;j++){
        console.log(arr.slice(i,j+1))
}
}

//find all subarray that are palindrom number

//find count of all subarrays whose sum is less than k
