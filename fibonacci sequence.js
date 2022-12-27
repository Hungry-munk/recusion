function fibs(n) {
    const array = [];
    let num1 = 0;
    let num2 = 1;
    let total;
    for (let i = 0; i < n; i++) {
        array.push(num1);
        total = num1 + num2;
        num1 = num2;
        num2 = total;
    }
    return array;
}

console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
    return n === 1
        ? [0]
        : n === 2
        ? [0, 1]
        : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibsRec(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
