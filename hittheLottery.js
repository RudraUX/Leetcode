const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('', (num) => {
  readline.close();
});
