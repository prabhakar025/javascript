function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([5, 1, 2, 9, 7, 9])); // 7
