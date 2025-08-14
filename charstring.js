function charCount(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(charCount("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
