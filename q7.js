// Take marks in five subjects,find the average and return the corresponding grade .
// Rules for grade:
// Average > = 90 - A
// Average > = 80 and less than 90 - B
// Average > = 70 and less than 80 - C
// Average > = 50 and less than 70 - D
// Other cases: E

// Constraints:
// 0 <= marks in each subject <= 100

// Input:
// Five integers, one in each line
// Output:
// Single line with string containing the grade based on the average calculated

// Example:
// Input:
// 100
// 90
// 80
// 70
// 60

// Output:
// B

let maths = 90 
let physics = 30 
let chemistry = 95 
let biology = 60
let history = 100

let avg = (maths+physics+chemistry+biology+history)/5
console.log(avg)

// if(avg >=80){
//     console.log("B")
// }

if(avg >=90){
    console.log("A")
}
else if(avg >=80){
    console.log("B")
}
else if(avg >=70){
    console.log("C")
}
else if(avg >=50 && avg<70){
    console.log("D")
}
else{
    console.log("E")
}