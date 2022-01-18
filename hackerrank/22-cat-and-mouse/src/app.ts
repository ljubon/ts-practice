function catAndMouse(catA: number, catB: number, mouse: number): string {
  let result: string = ''

  let distanceA = Math.abs(mouse - catA)
  let distanceB = Math.abs(mouse - catB)

  if (distanceA == distanceB) {
    result = 'Mouse C'
  } else if (distanceA < distanceB) {
    result = 'Cat A'
  } else {
    result = 'Cat B'
  }

  return result;
}
/* function main() for HackerRank
function main() {
    let result = ''
    let lines = parseInt(readLine());
    for (let i = 0; i < lines; i++){
      let l_temp = readLine().split(' ');
      let catA: number = parseInt(l_temp[0], 10);
      let catB: number = parseInt(l_temp[1], 10);
      let mouse: number = parseInt(l_temp[2], 10);

      let distanceA = Math.abs(mouse - catA)
      let distanceB = Math.abs(mouse - catB)
      if (distanceA == distanceB) {
        result = 'Mouse C'
      } else if (distanceA < distanceB) {
        result = 'Cat A'
      } else {
        result = 'Cat B'
      }
      console.log(result)
    }
}
**/

let b = 2;
let k = 5;
let m = 4;
let resultG = catAndMouse(b, k, m);
console.log(resultG + '\n'); // Cat B

let b2 = 1;
let k2 = 2;
let m2 = 3;
let resultA = catAndMouse(b2, k2, m2);
console.log(resultA + '\n'); // Cat B

let b3 = 1;
let k3 = 3;
let m3 = 2;
let resultB = catAndMouse(b3, k3, m3);
console.log(resultB + '\n'); // Mouse C