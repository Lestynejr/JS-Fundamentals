// recursive factorial function
function factorial(n) {
  // treat NaN or any value ≤ 1 as the base case
  if (isNaN(n) || n <= 1) return 1;
  // recursive step
  return n * factorial(n - 1);
}

// read the first command‑line argument and try to cast it to an integer
const num = parseInt(process.argv[2]);

// print the result (factorial of NaN will be 1)
console.log(factorial(num));