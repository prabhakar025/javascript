const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', num => {
  num = Number(num);

  if (num <= 1) {
    console.log("Not Prime");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
  }

  readline.close();
});
