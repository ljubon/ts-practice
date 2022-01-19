function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    let tallest = Math.max(...candles)
    return candles.filter(maxHeight => maxHeight === tallest).length
}


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



let test1 = [3, 5, 5, 7, 7]
let test2 = [1, 2, 3, 4, 5]
console.log(birthdayCakeCandles(test1));