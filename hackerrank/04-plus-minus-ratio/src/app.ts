function plusMinus(arr: number[]): void {
    let positive: number = 0;
    let negative: number = 0;
    let zero: number = 0;
    arr.forEach(x => {
        if (Math.sign(x) === 1) {
            positive += 1
        } else if (Math.sign(x) === -1) {
            negative += 1
        } else if (Math.sign(x) === 0) {
            zero += 1
        }
    })
    console.log(Number(positive/arr.length).toPrecision(6));
    console.log(Number(negative/arr.length).toPrecision(6));
    console.log(Number(zero/arr.length).toPrecision(6));    
}

let arrayTest = [ 0, 0, 1, 1, -1, -1 ]; 
let testArray = [ 1, 1, 1, 0, 0, -1 ]; 

plusMinus(testArray)