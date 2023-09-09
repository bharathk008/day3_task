const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumArray = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const result = sumArray(numbers);
console.log(result); // Output: 45
