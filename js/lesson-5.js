// Знайдіть перше непарне число

const numbers = [2, 1, 6, 8, 9, 10, 12];
const firstNotDual = numbers.find(num => num % 2 !== 0);
console.log(firstNotDual);
