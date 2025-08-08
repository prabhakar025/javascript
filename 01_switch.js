//check if a number is even and odd

let n=20
if (n%2==0) {
    console.log("Even")
}
else{
    console.log("Odd")
}

let n=20

let signal="red" //yellow,green
let choice=signal//3


switch (choice) {
    case "red":
        console.log("Stop")        
        break;
    case"yellow":
    console.log("Ready")
    break;
    case "green":
        console.log("Go now")
        break;
    default:
        console.log("We are color blind can only see 3 colors")
        break;
}