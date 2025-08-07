let hr = 0
let min = 56


// 10:32 => 10:32 AM 
// 20:40 => 8:40 PM 
// 12:56 => 12:56 PM 
// 0:45  => 12:45 AM

if(hr == 0){
   console.log(`${12}:${min} AM`)
}
else if(hr<12){
    console.log(`${hr}:${min} AM`)
}
else if(hr>12){
     console.log(`${hr-12}:${min} PM`)
}
else if(hr == 12){
    console.log(`${hr}:${min} PM`)
}