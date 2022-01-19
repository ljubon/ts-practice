/**
 * Given a number of steps and a path, return the number of valleys.
 * 
 * Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude
 * 
 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 * 
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 * 
 * @param {number} steps - number of steps in the hike
 * @param {string} path - A string with the path taken by a skier.
 * @returns The number of valleys traversed.
 */
function countingValleys(steps: number, path: string): number {
  let altitude: number = 0;
  let countD: number = 0;
  let belowSeaLevel: boolean = false;

  if (steps >= 2 && steps <= Math.pow(10, 6)) {

    for (let i = 0; i < path.length; i++) {
      (path.charAt(i) === 'D') ? altitude -= 1 : altitude += 1;
      if (altitude < 0) belowSeaLevel = true;
      if (belowSeaLevel && altitude === 0) countD += 1, belowSeaLevel = false;
    }
  }
  return countD;
}
// _/\      _
//    \    /
//     \/\/
let k = 8;
let l = "UDDDUDUU";
let resultG = countingValleys(k, l);
console.log(resultG + '\n'); // 1

// _          /\_
//  \  /\    /
//   \/  \/\/
let a = 12;
let b = 'DDUUDDUDUUUD';
let resultA = countingValleys(a, b);
console.log(resultA + '\n'); // 2
