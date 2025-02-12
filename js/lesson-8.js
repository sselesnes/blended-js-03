// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

//
// example 1
//
// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return 'Not a number!';
//     }
//     return a > b ? b : a;
// }

//
// example 2
//
function min(a, b) {
    return typeof a !== "number" && typeof b !== "number" ? "Not a number!" : Math.min(a, b);
}
console.log(min(4, 3));

