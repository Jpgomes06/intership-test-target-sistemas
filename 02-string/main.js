/**
 * Counts the occurrence of the letter 'a' (both uppercase and lowercase) in a string.
 * @param {string} inputString - The string to check for the letter 'a'.
 * @returns {number} - The number of times the letter 'a' appears in the string.
 */
function countLetterA(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    const targetLetter = [`a`,'á', 'à', 'ã', 'â', 'ä', 'å', 'ā', 'ă', 'ą', 'ǎ'];
    let count = 0;
    for (const char of lowerCaseString) {
        if (targetLetter.includes(char)) {
            count++;
        }
    }
    return count;
}

/**
 * Displays the result of the letter 'a' check to the user.
 * @param {string} inputString - The string to check for the letter 'a'.
 */
function displayLetterACheck(inputString) {
    const occurrenceCount = countLetterA(inputString);
    if (occurrenceCount > 0) {
        console.log(`The letter 'a' appears ${occurrenceCount} time(s) in the string.`);
    } else {
        console.log("The letter 'a' was not found in the string.");
    }
}

const stringToCheck = "João Pedro will be the best developer of Target Sistemas.";
displayLetterACheck(stringToCheck);
