print all number from 1-10

print all number  from 10-1

print all odd number from 1-10

count all odd number from 1-10

find sum of all odd number from 1-10

find product of all number fromn a to b.



for(i=1;i<=10;i++){
    console.log(i)
}


for(i=10;i>=1;i--){
    console.log(i)
}


for(let i=1;i<=10;i++){
    if(i%2!=0){
    console.log(i)
}
}



count = 0
for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        //console.log(i)
        count = count + 1
    }
}
console.log(count)


count=0
sum=0
for(let i=1;i<=10;i++){
    if (i%2!=0) {
        count=count+i
        sum=sum+i
    }
}
console.log(sum)


let a=1
let b=5
let prod=1
for(let i=a;i<=b;i++){
    prod=prod*i
}
console.log(prod)


