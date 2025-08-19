// Immediately Invoked Function Expreission (IIFE)


(function chai(){
    console.log(`DB connected`);
})();

( (name)=>{
    console.log(`DB connected two ${name}`);
}
)("prabhakar")