let n=2100
if (n%4==0) {
    if (n%100!=0) {
       console.log("Leap year 1") 
    }
    else if (n%100==0) {
        if (n%400==0) {
            console.log("Leap year 2")
     }
    else{
        console.log("Not a leap year 3")
    }    
    }

}
else{
    console.log("Not leap year")
}