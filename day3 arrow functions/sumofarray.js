const numbers = [1, 2, 3, 4, 5];

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

const result = sum(numbers);
console.log(result); // Output will be 15
