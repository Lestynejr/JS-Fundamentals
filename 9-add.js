
// define the add function with the required prototype
function add(a, b) {
  return a + b;
}

// get the first two command‑line arguments
const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

// check if both arguments are valid integers
if (isNaN(a) || isNaN(b)) {
  console.log(NaN);
} else {
  console.log(add(a, b));
}