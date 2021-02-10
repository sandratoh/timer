// CHALLENGE:
// An alarm clock/timer which will beep after a specific amount of time passed
// Can specify an unlimited number of alarms using command line arguments
// Beep at argument seconds
// system sound: process.stdout.write('\x07');

// EDGE CASE - ignore:
// 1. No numbers
// 2. Negative numbers
// 3. NaN

let args = (process.argv).slice(2);

for (let arg of args) {
  let numArg = parseInt(arg);
  if (arg > 0 && Number.isInteger(numArg)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}