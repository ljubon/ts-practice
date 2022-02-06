/*
 * Complete the 'utopianTree' function below.
 * 
 * Full cycles = spring + summer
 * Spring = height x 2
 * Summer height + 1
 * 
 * From given number count cycles 
 * Height = 1m, at start of the spring
 * 1 cycle = (height x2) + (heigh + 1)
 * return total height
 */

function validateConstraints(n: number): boolean {
  let result: boolean = true;
  if (n < 0 || n > 60) {
    result = false;
  }
  return result;
}

function utopianTree(n: number): number {
  let height = 1;
  if (!validateConstraints(n)) console.log("Wrong inputs");
  if (n === 0) return height;
  if (n === 1) return height * 2;
  
  // full cycle
  for (let start = 1; start <= n; start++){
    height = height * 2; // spring
    height = height + 1; // summer
  }
  return height;
}

const testCase = 4;
console.log(utopianTree(testCase));

