let x=0
for(let line=1;line<=5;line++){
  str=""
  for(let col=1;col<=line;col++){
    x=x+1
    str=str + x +" "
  }
  console.log(str)
}