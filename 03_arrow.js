const  user={
    username:"prabhakar",
    price:99,

    welcomeMesssage:function () {
        // console.log(`${this.username},welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMesssage()
// user.username="sam"
// user.welcomeMesssage()
// console.log(this);


// function one(){
//     let username="prabhakar"
//     console.log(this.username);
// }
// one()


//+++++++++++++++++++++++++++++++++++++++
//syntax--- ()=>{}
//  const addtwo=(num1,num2)=>{
// return num1+num2
//     }
//const addtwo=(num1,num2)=> num1+num2
  // const addtwo=(num1,num2)=> (num1+num2)
 const addtwo=(num1,num2)=> ({username:"prabhakar"})
    console.log(addtwo(3,4))

//     const myArray=[1,3,5,7,11]
// myArray.forEach()
