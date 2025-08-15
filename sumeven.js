function sumEven(arr) {
    return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
}

var readline = require("readline").createInterface(process.stdin);
readline.on("line", (line) => {
    let arr = line.split(" ").map(Number);
    console.log("Sum of Even Numbers:", sumEven(arr));
    readline.close();
});
