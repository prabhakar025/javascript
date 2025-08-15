function starPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

var readline = require("readline").createInterface(process.stdin);
readline.on("line", (line) => {
    starPattern(parseInt(line));
    readline.close();
});
