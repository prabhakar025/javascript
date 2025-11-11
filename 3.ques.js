let n=2024 //  2000 2023 2024


let ans=(n%4==0 && n%100!=0) || (n%100==0 && n%400==0)

console.log(ans)
