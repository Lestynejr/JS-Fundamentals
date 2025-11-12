
// get the first command‑line argument
const arg = process.argv[2];

// if it isn’t a valid integer, show the required message
if (!arg || isNaN(parseInt(arg, 10))) {
  console.log('Missing size');
} else {
  const size = parseInt(arg, 10);
  // build the square as a string
  let square = '';

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      square += 'X';
    }
    if (row !== size - 1) square += '\n';
  }

  // print the whole square (empty string prints nothing if size ≤ 0)
  console.log(square);
}
