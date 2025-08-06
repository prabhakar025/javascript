// a, b,c 

//  check if traibgle is valid or not 

//  if valid => eqilaternal, isosceles, scalene

// a = 41
// b = 39
// c = 10

// if( (a+b+c) == 180 && a>0 && b>0 && c>0){
//     console.log("Valid")
//     if(a==b && b == c){
//        console.log("Equliateral")
//     }
//     else if(a==b || b==c || a==c){
//       console.log("Isosceles")
//     }
//     else{
//         console.log("Scalene")
//     }
// }
// else{
//     console.log("Not Valid")
// }



a = 60 
b = 60 
c = 60


if( (a == b && a!=c) || (b==c && a!=c) || (a==c && a!=b)){
    console.log("Isoscles")
}
else{
    console.log("not")
}


if((a==b || a==c || b ==c) && ((a==b && a==c))==false){
  console.log("Isos")
}