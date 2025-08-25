const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (val) =>{
//     console.log(val);
// } )

// 

// 


const myCoding=[

{
    languageName:"javascript",
    languageFileName:  "js"
},

{
    languageName:"java",
    languageFileName:  "java"
},

{
    languageName:"python",
    languageFileName:  "py"
}

]
myCoding.forEach((item) => {
    console.log(item.languageName);
})