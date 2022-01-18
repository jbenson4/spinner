const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const spin = function(array) {
  let x = 100;
  for (let char of array) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `)
    }, x)
    x += 200;
  }
}
spin(spinnerArray);
spin(spinnerArray);