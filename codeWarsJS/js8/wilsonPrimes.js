/*
Wilson primes satisfy the following condition. Let P represent a 
prime number. Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given 
number is a Wilson prime.
*/

function amIWilson(p) {
    p = BigInt(p);
    return ( (factorial(p-1n)) + 1n ) % (p * p) == 0n;
    function factorial(p2) {
      if (p2 <= 1n) {
        return 1n;
      }
        return p2 * factorial(p2 - 1n)
    }
  }

  const amIWilson = p => [5, 13, 563].indexOf(p) > -1
