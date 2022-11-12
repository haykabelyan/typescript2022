// Типы функций

// function getMyAge(age: number, prefix: string = 'wp-'): string {
//     return prefix + age;
// }
//
// function consoleLog(str: string): void {
//     console.log(str);
// }
//
// consoleLog('Test string');

// console.log(getMyAge(40));



let mySum: (a: number, b: number) => number;

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

mySum = sum;

console.log(mySum(15, 10));
