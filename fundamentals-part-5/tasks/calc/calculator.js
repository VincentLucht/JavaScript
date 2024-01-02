const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result += numbers[i] + numbers[j];
    }
  }
  return result;
}

const multiply = function(n1, n2) {
  return n1 * n2;
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(num) {
  if (num === 0) {
      return 1;
  } else {
      return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};