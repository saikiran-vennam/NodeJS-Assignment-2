const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Please enter your name : ', (name) => {
  rl.question('Please enter your age : ', (age) => {
      console.log("hello " + name + ". your are " + age + " years old.");
      rl.close()
  });
});