function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Error if x is not an array or string
}

console.log(foo([1, 2, 3])); // 3
console.log(foo("hello")); // 5
console.log(foo(null)); // 0
console.log(foo(undefined)); // Uncaught TypeError: Cannot read properties of undefined (reading 'length')