
// get the first command‑line argument
const arg = process.argv[2];

// argument missing or not an integer?
if (!arg || isNaN(parseInt(arg, 10))) {
  console.log('Missing number of occurrences');
} else {
  const count = parseInt(arg, 10);
  let output = '';

  // build the string inside a loop
  for (let i = 0; i < count; i++) {
    output += (i ? '\n' : '') + 'C is fun';
  }

  // print the result (empty string prints just a newline, which is fine)
  console.log(output);
}