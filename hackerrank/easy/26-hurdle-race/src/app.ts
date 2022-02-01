/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 * 
 * Create new function that will validate inputs and constraints
 * Constraints:
 *  1 <= n, k <= 100
 *  1 <= height[i] <= 100
 * 
 * Find the maximum height of the hurdles
 * Compare player heights and hurdle
 *    - (less then hurdle) detract hurdle with magic potion and return that value
 *    - (equals OR more) return 0 potions
 * 
 */
function validateInputs(maxHeightPlayer: number, hurdleHeights: number[]): boolean {
  let validate = true;

  const hurdlesNumber = hurdleHeights.length;
  if (hurdlesNumber < 1 && hurdlesNumber > 100) {
    validate = false;
  }

  if (maxHeightPlayer < 1 && maxHeightPlayer > 100) {
    validate = false;
  }

  hurdleHeights.forEach(height => {
    if (height < 1 && height > 100) {
      validate = false
    }
  });

  return validate;
}


function hurdleRace(maxPlayerHeight: number, height: number[]): number {
  
  // Validate inputs
  if (!validateInputs(maxPlayerHeight, height)) {
    return 0;
  }

  const maxHurdleHeight = Math.max(...height);
  if (maxHurdleHeight <= maxPlayerHeight) {
    return 0;
  } else {
    return maxHurdleHeight - maxPlayerHeight;
  }  

}

const k = 4;
const hurdles = [1, 6, 3, 5, 2];
console.log(hurdleRace(k, hurdles));

