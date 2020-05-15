const fibonacci = function(num) {
    let arr = [0, 1];
    for (let i = 2; i < num + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
    if (num <= 0) return 'OOPS';
   return arr[num]
}

module.exports = fibonacci
