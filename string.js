const firstName="prabhakar"
const lastName="kumar"
//console.log(firstName + lastName);
console.log(`My name is ${firstName} and My title is ${lastName}`);
const gameName=new String("pkdhdkp")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('h'))
const newString=gameName.substring(0,3) 
console.log(newString)
const anotherString=gameName.slice(0,3)
console.log(anotherString)
const newStringOne="    prabhakar"
console.log(newStringOne)
console.log(newStringOne.trim())
const url="https://prabhakar.com/prabhakar%20singh"
console.log(url.replace('%20','-'))
console.log(url.includes('kumar'))
console.log(gameName.split('-'))