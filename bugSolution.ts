function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: add function expects numbers.');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: subtract function expects numbers.');
  }
  return a - b;
}

function multiply(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: multiply function expects numbers.');
  }
  return a * b;
}

function divide(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: divide function expects numbers.');
  }
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

let result: number;

try {
  result = add(5, 3); 
  result = subtract(10, 4); 
  result = multiply(7, 2); 
  result = divide(100, 10); 
  result = add('hello', 5); // This will cause an error
} catch (error: any) {
  console.error("Error:", error.message);
}

console.log(result);