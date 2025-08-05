//singleton

//object literal

const mySym=Symbol("key1")
const jsUser={
    name:"prabhakar",
    "full name":"prabhakar kumar",
    [mySym]:"mykey1",
    age:23,
    location:"Noida",
    email:"prabhakar2638@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
jsUser.email="prabhakar803120@gmail.com"
//Object.freeze(jsUser)
jsUser.email="baabji236@gmail.com"
//console.log(jsUser)


jsUser.greeting=function(){
    console.log("hello js user")
}
console.log(jsUser.greeting)