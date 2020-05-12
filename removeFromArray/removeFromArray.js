const removeFromArray = function (arr) {
    let filterArr = [];

    for (let i = 1; i < arguments.length; i++) {
        filterArr.push(arguments[i]);
    }

    return arr.filter(function (num) {
        return !filterArr.includes(num)
    });
}

module.exports = removeFromArray
