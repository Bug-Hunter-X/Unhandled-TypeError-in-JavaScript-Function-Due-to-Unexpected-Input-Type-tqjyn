function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (typeof x === 'object' && x.length !== undefined) { //check if x is array-like
    return x.length; // Access length property only if safe
  } else {
    return 0; // Handle other unexpected input type
  }
}

console.log(foo([1, 2, 3])); // 3
console.log(foo("hello")); // 5
console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo(10)); // 0