// Get the first command‑line argument
const arg = process.argv[2];

// Check if it’s a valid integer
if (!arg || isNaN(parseInt(arg, 10))) {
  console.log('Missing number of occurrences');
  return;
}

const count = parseInt(arg, 10);
const lines = [];

for (let i = 0; i < count; i++) {
  lines.push('C is fun');
}

console.log(lines.join('\n'));