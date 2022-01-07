class Department {
    name: string
    original: number

    constructor(n: string, o: number) {
        this.name = n
        this.original = o
    }
} 

let accounting = new Department("Accounting", 33)
console.log(accounting);
console.log(accounting.name);
console.log(accounting.original);
