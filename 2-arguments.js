const args = process.argv.slice(2); // collect command-line arguments

if (args.length == 0) {
  console.log('No argument');
  console.log('Argument found');
  console.log('Arguments found');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}