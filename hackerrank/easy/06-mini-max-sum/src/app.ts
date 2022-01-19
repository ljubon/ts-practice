function miniMaxSum(arr: number[]): void {
    if (arr.length === 5) {
        let sum: number = arr.map(a => a).reduce(function (a, b) {
            return a + b
        });
        console.log(sum - Math.max(...arr), sum - Math.min(...arr));
    }
}


let test1 = [3, 5, 9, 7, 1]
let test2 = [1, 2, 3, 4, 5]
miniMaxSum(test1)