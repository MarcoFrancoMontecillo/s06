// Prompt the user to input a positive integer
let num;

while (true) {
  num = parseInt(prompt("Enter a positive integer greater than zero:"));
  if (num > 0) {
    break;
  }
  alert("Invalid input. Please enter a valid positive integer greater than zero.");
}

// Generate the Fibonacci sequence up to the input number
let a = 0, b = 1;
while (b < num) {
  let temp = a;
  a = b;
  b = temp + b;
}

// Check if the input number is a Fibonacci number
if (b == num) {
  console.log(num + " is a Fibonacci number.");
} else {
  console.log(num + " is not a Fibonacci number.");
}
