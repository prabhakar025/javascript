const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', tempInCelsius => {
  //Write your code here and print the required output
const C = parseFloat(tempInCelsius);
  const F = (C * (9 / 5)) + 32;
  console.log(F);
  readline.close();
});