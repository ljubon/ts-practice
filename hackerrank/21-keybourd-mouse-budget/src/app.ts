function budgetMouseKeyboard(budget: number, keyboard: number[], mouse: number[]): number {
  let result: number = -1;

  if ((keyboard.length >= 1 && keyboard.length <= 1000) &&
    (mouse.length >= 1 && mouse.length <= 1000) &&
    budget >= 1 && budget <= Math.pow(10, 6)) {

    keyboard.sort().reverse()
    mouse.sort().reverse()

    keyboard.filter(k => k >= 1 && k <= Math.pow(10, 6)).forEach(k => {
      mouse.filter(m => m >= 1 && m <= Math.pow(10, 6)).forEach(m => {

        let sum = k + m;
        if (sum <= budget) {
          if (sum > result) {
            result = sum
          }
        }

      });
    });

/*    
    keyboard.filter(k => k >= 1 && k <= Math.pow(10,6)).forEach(k => {
      mouse.filter(m => m >= 1 && m <= Math.pow(10, 6)).forEach(m => {
        
        let sum = k + m
        if (sum <= budget && sum > result) {
          result = sum
        } else if (sum > budget && sum > result) {
          result = -1
        }

      });
    });
**/

  }
  return result;
}

/* function main() for HackerRank
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');
    const budget: number = parseInt(firstMultipleInput[0], 10);

    const keyboard: number[] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    
    const mouse: number[] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result: number = budgetMouseKeyboard(budget, keyboard, mouse);
    
    console.log(keyboard, mouse, budget)

    ws.write(result + '\n');

    ws.end();
**/

let b = 10;
let k = [3, 1];
let m = [5, 2, 8]
let resultG = budgetMouseKeyboard(b, k, m);
console.log(resultG + '\n'); // 9

let b2 = 5;
let k2 = [4];
let m2 = [5];
let resultA = budgetMouseKeyboard(b2, k2, m2);
console.log(resultA + '\n'); // -1
