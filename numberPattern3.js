let x=1
for(let line=1;line<=5;line++){
  str=""
  for(let col=1;col<=line;col++){
 
    str=str + x +" "
    x=x+1
  }
  console.log(str)
}