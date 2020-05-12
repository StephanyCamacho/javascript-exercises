const sumAll = function (...numbers) {
    let num = [...numbers];
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    const negativeNum = num[0] < 0 || num[1] < 0
    const notANumber = typeof num[0] !== 'number' || typeof num[1] !== 'number';

    if (negativeNum || notANumber) {
        return 'ERROR'
    }

    return (max - min + 1) * (min + max) / 2;
}

module.exports = sumAll
