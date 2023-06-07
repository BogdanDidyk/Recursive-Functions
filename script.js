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

console.log(getFactorial(6));
console.log(getFibonacci(6));
console.log(getDoubleFactorial(6));
console.log(getSumOfDigitsInIntegerNumber(5746));
console.log(getReversedString("h3110 w0r1d"));
console.log(getReversedIntegerNumber(-378));
console.log(getArraySum([10, 10, 25.78, 5]));