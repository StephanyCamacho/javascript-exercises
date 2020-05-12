const repeatString = function (word, repeat) {
    let str = "";

    if (repeat < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < repeat; i++) {
        str += word;
    }
    return str;
}
module.exports = repeatString
