function countStatistics(arrayOfValues) {
    if (!Array.isArray(arrayOfValues)) return;
    return arrayOfValues.reduce((currentTotal, currentItem) => {
        return currentTotal + Number(currentItem)
    }, 0)
}

module.exports = countStatistics;