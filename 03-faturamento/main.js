/**
 * Calculates the smallest daily revenue.
 * @param {number[]} revenue - Array containing daily revenue values.
 * @returns {number} The smallest daily revenue.
 */
function calculateSmallestRevenue(revenue) {
    return Math.min(...revenue.filter(value => value > 0));
}

/**
 * Calculates the largest daily revenue.
 * @param {number[]} revenue - Array containing daily revenue values.
 * @returns {number} The largest daily revenue.
 */

function calculateLargestRevenue(revenue) {
    return Math.max(...revenue.filter(value => value > 0));
}

/**
 * Calculates the annual average revenue, considering only days with revenue.
 * @param {number[]} revenue - Array containing daily revenue values.
 * @returns {number} The annual average revenue.
 */

function calculateAnnualAverage(revenue) {
    const daysWithRevenue = revenue.filter(value => value > 0);
    const totalRevenue = daysWithRevenue.reduce((sum, value) => sum + value, 0);
    return totalRevenue / daysWithRevenue.length;
}

/**
 * Calculates the number of days with revenue above the annual average.
 * @param {number[]} revenue - Array containing daily revenue values.
 * @param {number} annualAverage - The annual average revenue.
 * @returns {number} The number of days with revenue above the annual average.
 */

function countDaysAboveAverage(revenue, annualAverage) {
    return revenue.filter(value => value > annualAverage).length;
}

/**
 * Calculates revenue statistics for a year.
 * @param {number[]} revenue - Array containing daily revenue values.
 * @returns {Object} An object with the smallest value, largest value, and number of days above average.
 */

function calculateRevenueStatistics(revenue) {
    const smallestRevenue = calculateSmallestRevenue(revenue);
    const largestRevenue = calculateLargestRevenue(revenue);
    const annualAverage = calculateAnnualAverage(revenue);
    const daysAboveAverage = countDaysAboveAverage(revenue, annualAverage);
    return {
        smallestRevenue,
        largestRevenue,
        daysAboveAverage
    };
}

const dailyRevenue = [0, 0, 0, 300, 400, 500, 0, 0, 200, 100, 0, 0];
const statistics = calculateRevenueStatistics(dailyRevenue);
console.log(`Smallest revenue: ${statistics.smallestRevenue}`);
console.log(`Largest revenue: ${statistics.largestRevenue}`);
console.log(`Number of days above average: ${statistics.daysAboveAverage}`);
