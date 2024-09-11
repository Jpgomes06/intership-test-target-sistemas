/**
 * Function to calculate the Fibonacci sequence up to a given number
 * @param {number} maxLimit - Maximum limit to calculate the Fibonacci sequence
 * @returns {number[]} - Fibonacci sequence up to the limit
 */
function generateFibonacciSequence(maxLimit) {
    const fibonacci = [0, 1];
    let nextNumber = fibonacci[0] + fibonacci[1];
    while (nextNumber <= maxLimit) {
        fibonacci.push(nextNumber);
        const lastFibNumber = fibonacci[fibonacci.length - 1];
        const penultimateFibNumber = fibonacci[fibonacci.length - 2];
        nextNumber = lastFibNumber + penultimateFibNumber;
    }
    return fibonacci;
}
/**
 * Function to check if a number belongs to the Fibonacci sequence
 * @param {number} number - Number to be checked
 * @returns {boolean} - Returns true if the number belongs to the sequence, otherwise false
 */
function isFibonacci(number) {
    const fibonacciSequence = generateFibonacciSequence(number);
    return fibonacciSequence.includes(number);
}
/**
 * Function to display the result to the user
 * @param {number} number - Number to be checked
 */
function displayFibonacciCheck(number) {
    const message = isFibonacci(number)
        ? `${number} belongs to the Fibonacci sequence.`
        : `${number} does not belong to the Fibonacci sequence.`;
    console.log(message);
}
const numberToCheck = 13;
displayFibonacciCheck(numberToCheck);
