function staircase(n: number): void {
    if (n > 0 && n <= 100) {
        let result = Array.from(Array(n).keys()).map(x => x);
        for (let i in result) {
            console.log(" ".repeat(result.length - 1 - +i) + "#".repeat(+i + 1));
        }
    }
}

let arrayTest = 3
staircase(arrayTest)