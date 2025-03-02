// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const isDual = numbers.every(num => num % 2 === 0);
// const isDual = numbers.reduce((acc, num) => acc && num % 2 === 0, true);
console.log(isDual);
