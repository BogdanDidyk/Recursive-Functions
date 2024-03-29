function getFactorial(n) {
    return (n == 0) ? 1 : n * getFactorial(n - 1);
}

function getFibonacci(n) {
    return (n == 1 || n == 2) ? 1 : getFibonacci(n - 1) + getFibonacci(n - 2);
}

function getDoubleFactorial(n) {
    return (n == 0 || n == 1) ? 1 : n * getDoubleFactorial(n - 2);
}

function getSumOfDigitsInIntegerNumber(n) {
    return (n < 10) ? n : n % 10 + getSumOfDigitsInIntegerNumber(Math.floor(n / 10));
}

function getReversedString(str) {
    return (str == "") ? "" : getReversedString(str.substring(1)) + str.charAt(0);
}

function getReversedIntegerNumber(n, result = 0) {
    return (n != 0) ? getReversedIntegerNumber(Math.trunc(n / 10), result * 10 + n % 10) : result;
}

function getArraySum(arr, startIndex = 0) {
    return (startIndex == arr.length) ? 0 : arr[startIndex] + getArraySum(arr, startIndex + 1);
}

function getArrayMax(arr, startIndex = 0) {
    return (startIndex == arr.length) ? 0 : Math.max(arr[startIndex], getArrayMax(arr, startIndex + 1));
}

function flatArray(arr) {
    const copy = [...arr];

    return (function flat(arr) {
        if (arr.length == 0) return [];
    
        const lastItem = arr.pop();
        const a = flat(arr);
        return Array.isArray(lastItem) ? a.concat(...flat(lastItem)) : a.concat(lastItem);
    })(copy);
}

console.log(getFactorial(6));
console.log(getFibonacci(6));
console.log(getDoubleFactorial(6));
console.log(getSumOfDigitsInIntegerNumber(5746));
console.log(getReversedString("h3110 w0r1d"));
console.log(getReversedIntegerNumber(-378));
console.log(getArraySum([10, 10, 25.78, 5]));
console.log(getArrayMax([10, 10, 25.78, 5]));
console.log(flatArray([1, [2, [3]], 4, [[[[5], 6]]]]));