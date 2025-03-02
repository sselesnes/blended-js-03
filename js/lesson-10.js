// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, num) => acc + num, 0);

// const total = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);

console.log(total);
