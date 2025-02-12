// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

//
// example 1
//
function isAdult() {   
    return prompt(`Enter your age`) >= 18 ? true : confirm(`Are you adult?`)
}

console.log(isAdult());
