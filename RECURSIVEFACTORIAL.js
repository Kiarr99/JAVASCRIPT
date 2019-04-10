function recFactorial(input) {
  if (input === 0) {
    return 1;
  } else {
    return input*recFactorial(input-1);
  }
}

console.log(recFactorial(5))
