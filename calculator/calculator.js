function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(num) {
	return num.reduce(function (a, b) {
		return a + b
	}, 0);
}

function multiply(num) {
	return num.reduce(function (a, b) {
		return a * b
	})
}

function power(num, pow) {
	return Math.pow(num, pow);
}

function factorial(number) {
	if (number === 0) {
		return 1;
	}
	else {
		return number * factorial(number - 1);
	}
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}