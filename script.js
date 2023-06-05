function getFactorial(n) {
    return (n == 0) ? 1 : n * getFactorial(n - 1);
}

function getFibonacci(n) {
    return (n == 1 || n == 2) ? 1 : getFibonacci(n - 1) + getFibonacci(n - 2);
}

function getDoubleFactorial(n) {
    return (n == 0 || n == 1) ? 1 : n * getDoubleFactorial(n - 2);
}

console.log(getFactorial(6));
console.log(getFibonacci(6));
console.log(getDoubleFactorial(6));