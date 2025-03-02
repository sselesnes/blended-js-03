// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const isAge20 = people.some(entity => entity.age < 20);
// const isAge20 = !people.every(entity => entity.age >= 20);
// const isAge20 = people.find(entity => entity.age < 20) !== undefined;

console.log(isAge20);
