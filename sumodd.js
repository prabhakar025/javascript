let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
}
console.log("Sum of odd numbers up to", n, "=", sum);
