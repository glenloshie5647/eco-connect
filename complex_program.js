/* complex_program.js */

// This program demonstrates a complex algorithm to generate prime numbers within a specific range

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

// Function to generate prime numbers within a range
function generatePrimes(start, end) {
  const primes = [];
  
  // Check if start and end are positive integers
  if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
    throw new Error('Invalid range');
  }
  
  // Swap start and end if necessary
  if (start > end) [start, end] = [end, start];
  
  // Check if start and end are within the maximum safe integer range
  if (end > Number.MAX_SAFE_INTEGER) {
    throw new Error('Range exceeds maximum safe integer');
  }
  
  // Generate prime numbers within the range
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) primes.push(num);
  }
  
  return primes;
}

// Usage example
const startRange = 0;
const endRange = 1000;

console.log(`Generating prime numbers between ${startRange} and ${endRange}:`);
const primesInRange = generatePrimes(startRange, endRange);
console.log(primesInRange);