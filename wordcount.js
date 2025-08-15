function countWords(str) {
    return str.trim().split(/\s+/).length;
}

var readline = require("readline").createInterface(process.stdin);
readline.on("line", (line) => {
    console.log("Word Count:", countWords(line));
    readline.close();
});
